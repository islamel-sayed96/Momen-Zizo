import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

/* ---------- Theme ---------- */
const themeBtn = $<HTMLButtonElement>('[data-theme-toggle]');
function syncThemeLabel() {
  if (!themeBtn) return;
  const light = root.dataset.theme === 'light';
  themeBtn.setAttribute('aria-label', light ? themeBtn.dataset.labelDark! : themeBtn.dataset.labelLight!);
  $('meta[name="theme-color"]')?.setAttribute('content', light ? '#f1efea' : '#121110');
}
themeBtn?.addEventListener('click', () => {
  const light = root.dataset.theme !== 'light';
  if (light) root.dataset.theme = 'light'; else delete root.dataset.theme;
  try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch {}
  syncThemeLabel();
});
syncThemeLabel();

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>('[data-menu]');
const nav = $('#nav');
menuBtn?.addEventListener('click', () => {
  const open = !nav!.classList.contains('open');
  nav!.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.addEventListener('click', (e) => {
  if ((e.target as Element).closest('a')) { nav.classList.remove('open'); menuBtn?.setAttribute('aria-expanded', 'false'); }
});

/* ---------- Drive images: fall back to the thumbnail endpoint, then a quiet placeholder ---------- */
function watchImage(img: HTMLImageElement) {
  const done = () => img.classList.add('loaded');
  const fail = () => {
    const id = img.dataset.drive || img.dataset.driveVideo;
    if (id && !img.dataset.retried) {
      img.dataset.retried = '1';
      img.removeAttribute('srcset');
      img.src = `https://drive.google.com/thumbnail?id=${id}&sz=w${img.dataset.driveVideo ? 1280 : 1200}`;
    } else {
      img.classList.add('loaded');
      img.style.visibility = 'hidden';
    }
  };
  img.addEventListener('load', done);
  img.addEventListener('error', fail);
  if (img.complete) (img.naturalWidth ? done() : fail());
}
$$<HTMLImageElement>('img[data-drive], img[data-drive-video]').forEach(watchImage);

/* ---------- Timecode ---------- */
const tcEls = $$('[data-tc]');
const hudEl = $('[data-tc-hud]');
const t0 = performance.now();
const pad = (n: number) => String(n).padStart(2, '0');
function tick(now: number) {
  const f = Math.max(0, Math.floor(((now - t0) / 1000) * 25));
  const tc = `${pad(Math.floor(f / 90000) % 24)}:${pad(Math.floor(f / 1500) % 60)}:${pad(Math.floor(f / 25) % 60)}:${pad(f % 25)}`;
  tcEls.forEach((el) => (el.textContent = tc));
  if (hudEl) hudEl.textContent = `TC ${tc}`;
  if (!reduce) requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

/* ---------- Dialog helpers ---------- */
$$('dialog [data-close]').forEach((b) => b.addEventListener('click', () => b.closest('dialog')!.close()));
$$<HTMLDialogElement>('dialog').forEach((d) =>
  d.addEventListener('click', (e) => {
    const el = e.target as Element;
    if (el.classList.contains('lb') || el.classList.contains('lb-stage')) d.close();
  }),
);

/* ---------- Lightbox ---------- */
const lb = $<HTMLDialogElement>('#lightbox')!;
const lbStage = $('[data-lb-stage]', lb)!;
let lbItems: HTMLElement[] = [];
let lbIndex = 0;
function showLb() {
  const btn = lbItems[lbIndex];
  const id = btn.dataset.lightbox!;
  const im = new Image();
  im.alt = btn.getAttribute('aria-label') ?? '';
  im.dataset.drive = id;
  im.src = `https://lh3.googleusercontent.com/d/${id}=w2200`;
  watchImage(im);
  lbStage.replaceChildren(im);
  $('[data-lb-cap]', lb)!.textContent = btn.dataset.caption ?? '';
  $('[data-lb-count]', lb)!.textContent = `${lbIndex + 1} / ${lbItems.length}`;
  // Warm the next photo so arrowing feels instant.
  const next = lbItems[(lbIndex + 1) % lbItems.length];
  if (next) new Image().src = `https://lh3.googleusercontent.com/d/${next.dataset.lightbox}=w2200`;
}
function stepLb(d: number) { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; showLb(); }
document.addEventListener('click', (e) => {
  const btn = (e.target as Element).closest<HTMLElement>('[data-lightbox]');
  if (!btn) return;
  const sheet = btn.closest('[data-sheet]')!;
  lbItems = $$<HTMLElement>('[data-lightbox]', sheet).filter((b) => !b.closest('.still')?.hasAttribute('hidden'));
  lbIndex = lbItems.indexOf(btn);
  showLb();
  lb.showModal();
});
const rtl = root.dir === 'rtl';
$('[data-lb-prev]', lb)?.addEventListener('click', () => stepLb(rtl ? 1 : -1));
$('[data-lb-next]', lb)?.addEventListener('click', () => stepLb(rtl ? -1 : 1));
lb.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') stepLb(rtl ? -1 : 1);
  if (e.key === 'ArrowLeft') stepLb(rtl ? 1 : -1);
});
let touchX = 0;
lb.addEventListener('touchstart', (e) => (touchX = e.touches[0].clientX), { passive: true });
lb.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) stepLb((dx < 0) !== rtl ? 1 : -1);
});

/* ---------- Filters ---------- */
const filters = $('[data-filters]');
filters?.addEventListener('click', (e) => {
  const chip = (e.target as Element).closest<HTMLElement>('[data-cat]');
  if (!chip) return;
  const cat = chip.dataset.cat;
  $$('[data-cat]', filters).forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
  $$('.still').forEach((f) => f.toggleAttribute('hidden', !(cat === 'all' || f.dataset.cat === cat)));
  if (!reduce) ScrollTrigger.refresh();
});

/* ---------- Hero showreel ---------- */
function playInline(a: HTMLElement) {
  if (a.classList.contains('playing')) return;
  const fr = document.createElement('iframe');
  fr.src = `https://drive.google.com/file/d/${a.dataset.video}/preview?autoplay=1`;
  fr.allow = 'autoplay; fullscreen; picture-in-picture';
  fr.allowFullscreen = true;
  fr.title = a.dataset.title ?? 'Showreel';
  a.classList.add('playing');
  a.removeAttribute('data-cursor');
  $('.cursor')?.classList.remove('on');
  a.append(fr);
}
// Load the Drive player straight away so the intro is ready the moment the page opens.
const autoReel = $('[data-autoplay]');
if (autoReel) playInline(autoReel);

// Self-hosted reel: muted autoplay, holds on the logo frame at the end mark.
const nativeReel = $('[data-reel-native]');
if (nativeReel) {
  const v = $<HTMLVideoElement>('video', nativeReel)!;
  const end = Number(nativeReel.dataset.end || 0);
  if (end) v.addEventListener('timeupdate', () => { if (v.currentTime >= end) { v.pause(); v.currentTime = end; } });
  v.play().catch(() => {});
  const snd = $<HTMLButtonElement>('[data-reel-sound]', nativeReel);
  snd?.addEventListener('click', () => { v.muted = !v.muted; snd.textContent = v.muted ? '🔇' : '🔊'; if (v.paused && v.currentTime < end) v.play(); });
}

/* ---------- Video player ---------- */
const vp = $<HTMLDialogElement>('#player')!;
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('[data-video]');
  if (!a || e.metaKey || e.ctrlKey) return;
  e.preventDefault();
  const id = a.dataset.video!;
  // The hero reel plays in place instead of opening the full-screen player.
  if (a.hasAttribute('data-inline')) {
    playInline(a);
    return;
  }
  $('[data-vp-title]', vp)!.textContent = a.dataset.title ?? '';
  $<HTMLAnchorElement>('[data-vp-link]', vp)!.href = a.href;
  const fr = document.createElement('iframe');
  fr.src = `https://drive.google.com/file/d/${id}/preview`;
  fr.allow = 'autoplay; fullscreen; picture-in-picture';
  fr.allowFullscreen = true;
  fr.title = a.dataset.title ?? 'Video';
  $('[data-vp-stage]', vp)!.replaceChildren(fr);
  vp.showModal();
});
vp.addEventListener('close', () => $('[data-vp-stage]', vp)!.replaceChildren());

/* ---------- Copy buttons ---------- */
$$<HTMLButtonElement>('[data-copy]').forEach((b) => {
  const label = b.textContent;
  b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy!); b.textContent = b.dataset.done!; }
    catch { b.textContent = b.dataset.copy!; }
    setTimeout(() => (b.textContent = label), 1600);
  });
});

/* ---------- Cursor label over playable media (mouse only) ---------- */
const cursor = $('.cursor');
if (cursor && matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); });
  $$('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => { cursor.textContent = el.dataset.cursor!; cursor.classList.add('on'); });
    el.addEventListener('pointerleave', () => cursor.classList.remove('on'));
  });
}

/* ---------- Motion ---------- */
if (!reduce) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero: the name rises out of its line masks, then the reel frame opens like a shutter.
  const nameLines = $$('[data-hero-name] .line > span, [data-hero-name] .line > em > span');
  if (nameLines.length) {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.from(nameLines, { yPercent: 110, duration: 1.2, stagger: 0.12 })
      .from('[data-hero-reel]', { clipPath: 'inset(50% 0 50% 0)', duration: 1.2, ease: 'expo.inOut' }, 0.15)
      .from('[data-hero-fade]', { y: 18, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.5);
  }

  // Sections: content drifts up as it enters the frame.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (els) => gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.07, clearProps: 'transform,opacity' }),
  });

  // Big section titles slide in a little as you scroll past them.
  $$('.sec-head h2, .big-cta').forEach((h) => {
    gsap.from(h, { xPercent: rtl ? 6 : -6, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: h, start: 'top 95%', end: 'top 55%', scrub: true } });
  });

  // Stat numbers count up once.
  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const suffix = el.textContent!.replace(/[0-9]/g, '');
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.4, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = Math.round(obj.v) + suffix),
    });
  });

  // Hero reel drifts slower than the page for a little depth.
  gsap.to('.reel img', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.reel', start: 'top top', end: 'bottom top', scrub: true } });
}
