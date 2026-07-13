import Footer from './Footer';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Compass,
  Crosshair,
  Map,
  MapPin,
  Navigation,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="atlas-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="atlas-store-mark">
      <path fill="#4CAF50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1Z" />
      <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0Z" />
      <path fill="#FFEB3B" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8Z" />
      <path fill="#F44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499Z" />
    </svg>
  );
}

function StoreButton({ store }: { store: 'apple' | 'google' }) {
  const isApple = store === 'apple';
  return (
    <a
      className="atlas-store-button"
      href={isApple ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Baixar na ${isApple ? 'App Store' : 'Google Play'} (abre em nova aba)`}
    >
      {isApple ? <AppleMark /> : <GooglePlayMark />}
      <span>
        <small>{isApple ? 'Baixe na' : 'Disponível no'}</small>
        <strong>{isApple ? 'App Store' : 'Google Play'}</strong>
      </span>
      <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
}

function AppScreen({
  src,
  alt,
  label,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`atlas-screen ${className}`}>
      <div className="atlas-screen__meta">
        <span className="atlas-screen__dot" aria-hidden="true" />
        <span>{label}</span>
        <span className="atlas-screen__live">tela real</span>
      </div>
      <div className="atlas-screen__frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="atlas-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        .atlas-page {
          --atlas-ink: #183338;
          --atlas-muted: #5f7375;
          --atlas-paper: #f4f3ed;
          --atlas-panel: #e9eeea;
          --atlas-aqua: #68b5b9;
          --atlas-deep-aqua: #0a6870;
          --atlas-signal: #e7bb35;
          --atlas-coral: #dc7553;
          --atlas-line: rgba(24, 51, 56, 0.16);
          background: var(--atlas-paper);
          color: var(--atlas-ink);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: clip;
        }

        .atlas-page *, .atlas-page *::before, .atlas-page *::after { box-sizing: border-box; }
        .atlas-page a { color: inherit; }
        .atlas-page a:focus-visible, .atlas-page summary:focus-visible {
          outline: 3px solid var(--atlas-signal);
          outline-offset: 4px;
        }
        .atlas-page ::selection { background: var(--atlas-signal); color: var(--atlas-ink); }
        .atlas-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
        .atlas-sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }

        .atlas-header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(244, 243, 237, 0.91);
          border-bottom: 1px solid var(--atlas-line);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
        }
        .atlas-header__inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .atlas-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 17px; font-weight: 800; letter-spacing: -0.05em; }
        .atlas-brand img { height: 34px; width: auto; border-radius: 9px; }
        .atlas-brand b { color: var(--atlas-deep-aqua); }
        .atlas-brand span { color: var(--atlas-ink); }
        .atlas-nav { display: flex; align-items: center; gap: 25px; color: var(--atlas-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.035em; }
        .atlas-nav a { text-decoration: none; transition: color 160ms ease; }
        .atlas-nav a:hover { color: var(--atlas-deep-aqua); }
        .atlas-header-cta {
          display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
          padding: 10px 14px; background: var(--atlas-ink); color: #fff !important;
          border: 1px solid var(--atlas-ink); border-radius: 3px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.02em; transition: transform 180ms ease, background 180ms ease;
        }
        .atlas-header-cta:hover { background: var(--atlas-deep-aqua); transform: translateY(-2px); }

        .atlas-hero { position: relative; isolation: isolate; padding: 80px 0 89px; border-bottom: 1px solid var(--atlas-line); }
        .atlas-hero::before {
          content: ''; position: absolute; inset: 0; z-index: -2;
          background-image: linear-gradient(rgba(24, 51, 56, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 51, 56, 0.065) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to right, rgba(0,0,0,0.92), rgba(0,0,0,0.25));
        }
        .atlas-hero::after {
          content: ''; position: absolute; z-index: -1; width: 49vw; height: 49vw; max-width: 750px; max-height: 750px;
          top: -17vw; right: -13vw; border: 1px solid rgba(10, 104, 112, 0.18); border-radius: 43% 57% 57% 43% / 53% 38% 62% 47%;
          box-shadow: 0 0 0 55px rgba(104, 181, 185, 0.10), 0 0 0 110px rgba(104, 181, 185, 0.07), 0 0 0 165px rgba(104, 181, 185, 0.04);
        }
        .atlas-hero__grid { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(355px, 0.8fr); gap: clamp(34px, 8vw, 118px); align-items: center; }
        .atlas-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 25px; font-family: 'DM Mono', ui-monospace, monospace; color: var(--atlas-deep-aqua); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .atlas-kicker::before { content: ''; width: 9px; height: 9px; background: var(--atlas-coral); border-radius: 50%; box-shadow: 0 0 0 5px rgba(220, 117, 83, 0.14); }
        .atlas-title { max-width: 680px; margin: 0; color: var(--atlas-ink); font-family: 'Newsreader', Georgia, serif; font-size: clamp(3.25rem, 6.2vw, 5.8rem); font-weight: 600; line-height: 0.91; letter-spacing: -0.065em; }
        .atlas-title em { color: var(--atlas-deep-aqua); font-style: italic; }
        .atlas-hero-copy { max-width: 550px; margin: 27px 0 31px; color: var(--atlas-muted); font-size: clamp(1rem, 1.4vw, 1.13rem); font-weight: 500; line-height: 1.7; }
        .atlas-hero-copy strong { color: var(--atlas-ink); }
        .atlas-preflight { width: min(100%, 555px); border-top: 1px solid var(--atlas-ink); border-bottom: 1px solid var(--atlas-line); }
        .atlas-preflight__item { display: grid; grid-template-columns: 37px minmax(112px, 0.47fr) 1fr; align-items: center; column-gap: 13px; padding: 15px 0; border-bottom: 1px solid var(--atlas-line); }
        .atlas-preflight__item:last-child { border-bottom: 0; }
        .atlas-preflight__icon { display: grid; place-items: center; width: 29px; height: 29px; color: var(--atlas-deep-aqua); border: 1px solid rgba(10, 104, 112, 0.38); border-radius: 50%; }
        .atlas-preflight dt { font-family: 'DM Mono', ui-monospace, monospace; color: var(--atlas-ink); font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
        .atlas-preflight dd { margin: 0; color: var(--atlas-muted); font-size: 12px; line-height: 1.42; }
        .atlas-hero-link { display: inline-flex; align-items: center; gap: 9px; margin-top: 31px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: var(--atlas-ink); text-decoration: none; font-size: 13px; font-weight: 800; transition: color 160ms ease, gap 160ms ease; }
        .atlas-hero-link:hover { color: var(--atlas-deep-aqua); gap: 14px; }

        .atlas-map-stage { position: relative; display: grid; justify-items: center; padding: 28px 25px 32px; }
        .atlas-map-stage::before { content: ''; position: absolute; inset: 8% 7% 7%; background: var(--atlas-aqua); opacity: 0.24; transform: rotate(4deg); border: 1px solid var(--atlas-deep-aqua); }
        .atlas-coordinate { position: absolute; z-index: 2; color: var(--atlas-ink); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.08em; }
        .atlas-coordinate--top { top: 12px; left: 0; }
        .atlas-coordinate--bottom { bottom: 4px; right: 0; color: var(--atlas-deep-aqua); }
        .atlas-map-stage .atlas-screen { position: relative; z-index: 1; width: min(100%, 365px); margin: 0; }
        .atlas-screen { margin: 0; }
        .atlas-screen__meta { display: flex; align-items: center; gap: 7px; min-height: 31px; color: var(--atlas-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.055em; text-transform: uppercase; }
        .atlas-screen__dot { width: 7px; height: 7px; background: var(--atlas-coral); border-radius: 50%; }
        .atlas-screen__live { margin-left: auto; color: var(--atlas-deep-aqua); }
        .atlas-screen__frame { overflow: hidden; padding: 7px; background: #183338; border: 1px solid #183338; border-radius: 22px; box-shadow: 13px 13px 0 rgba(24, 51, 56, 0.14); }
        .atlas-screen__frame img { display: block; width: 100%; height: auto; border-radius: 16px; }
        .atlas-map-caption { position: absolute; z-index: 3; left: -14px; bottom: 72px; display: inline-flex; align-items: center; gap: 9px; max-width: 200px; padding: 10px 12px; background: var(--atlas-paper); border: 1px solid var(--atlas-ink); color: var(--atlas-ink); font-size: 11px; font-weight: 800; line-height: 1.25; box-shadow: 5px 5px 0 var(--atlas-signal); }
        .atlas-map-caption svg { flex: 0 0 auto; color: var(--atlas-coral); }

        .atlas-principle { padding: 20px 0; background: var(--atlas-ink); color: #e8f0ec; }
        .atlas-principle__inner { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 25px; }
        .atlas-principle__number { color: var(--atlas-signal); font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.13em; }
        .atlas-principle p { max-width: 760px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(1.25rem, 2.2vw, 1.7rem); font-weight: 500; letter-spacing: -0.03em; line-height: 1.12; }
        .atlas-principle svg { color: var(--atlas-aqua); }

        .atlas-process { padding: 116px 0; }
        .atlas-section-head { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(260px, 0.55fr); gap: 48px; align-items: end; margin-bottom: 63px; }
        .atlas-section-label { display: flex; align-items: center; gap: 9px; margin: 0 0 15px; color: var(--atlas-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .atlas-section-label::before { content: ''; width: 28px; height: 1px; background: currentColor; }
        .atlas-section-title { max-width: 710px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.4rem, 4.4vw, 4.45rem); font-weight: 600; line-height: 0.98; letter-spacing: -0.06em; }
        .atlas-section-intro { max-width: 385px; margin: 0 0 4px; color: var(--atlas-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .atlas-route-grid { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(390px, 1.1fr); gap: clamp(44px, 8vw, 110px); align-items: center; }
        .atlas-route-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--atlas-ink); }
        .atlas-route-list li { display: grid; grid-template-columns: 39px 1fr; column-gap: 15px; padding: 25px 0; border-bottom: 1px solid var(--atlas-line); }
        .atlas-route-no { padding-top: 5px; color: var(--atlas-coral); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.06em; }
        .atlas-route-list h3 { margin: 0 0 8px; font-size: 18px; font-weight: 800; letter-spacing: -0.04em; }
        .atlas-route-list p { max-width: 420px; margin: 0; color: var(--atlas-muted); font-size: 13px; font-weight: 500; line-height: 1.6; }
        .atlas-route-tag { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; color: var(--atlas-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.05em; text-transform: uppercase; }
        .atlas-screen-pair { position: relative; display: flex; align-items: flex-end; justify-content: center; min-height: 560px; padding: 40px 16px 0; }
        .atlas-screen-pair::before { content: ''; position: absolute; inset: 0 8% 13% 4%; background: var(--atlas-panel); border: 1px solid var(--atlas-line); border-radius: 52% 48% 43% 57% / 45% 45% 55% 55%; }
        .atlas-screen-pair .atlas-screen { position: relative; z-index: 1; width: min(47%, 244px); transition: transform 220ms cubic-bezier(.2,.8,.2,1); }
        .atlas-screen-pair .atlas-screen:first-child { align-self: flex-start; transform: rotate(-4deg) translateX(20px); }
        .atlas-screen-pair .atlas-screen:last-child { margin-left: -9px; transform: rotate(4deg) translateY(35px); }
        .atlas-screen-pair:hover .atlas-screen:first-child { transform: rotate(-6deg) translate(-2px, -9px); }
        .atlas-screen-pair:hover .atlas-screen:last-child { transform: rotate(6deg) translate(8px, 27px); }
        .atlas-screen-pair .atlas-screen__frame { border-radius: 17px; padding: 5px; box-shadow: 8px 9px 0 rgba(24, 51, 56, 0.14); }
        .atlas-screen-pair .atlas-screen__frame img { border-radius: 12px; }

        .atlas-compare { position: relative; padding: 108px 0 121px; background: #cce6e5; border-top: 1px solid rgba(24, 51, 56, 0.23); border-bottom: 1px solid rgba(24, 51, 56, 0.23); overflow: hidden; }
        .atlas-compare::before { content: 'MAPA · MAPA · MAPA · MAPA'; position: absolute; top: 34px; left: -25px; color: rgba(10, 104, 112, 0.11); font-family: 'Newsreader', Georgia, serif; font-size: clamp(6rem, 15vw, 15rem); font-weight: 600; letter-spacing: -0.08em; line-height: 0.7; white-space: nowrap; }
        .atlas-compare__grid { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(330px, 0.74fr); gap: clamp(38px, 8vw, 115px); align-items: center; }
        .atlas-compare .atlas-section-label { color: var(--atlas-ink); }
        .atlas-checklist { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 26px; margin: 31px 0 0; padding: 0; list-style: none; }
        .atlas-checklist li { display: flex; align-items: flex-start; gap: 9px; padding-top: 12px; border-top: 1px solid rgba(24, 51, 56, 0.25); color: var(--atlas-ink); font-size: 13px; font-weight: 700; line-height: 1.45; }
        .atlas-checklist svg { flex: 0 0 auto; margin-top: 1px; color: var(--atlas-deep-aqua); }
        .atlas-compare-note { margin-top: 35px; padding: 19px 21px; background: var(--atlas-paper); border-left: 4px solid var(--atlas-coral); color: var(--atlas-ink); font-size: 14px; font-weight: 700; line-height: 1.55; }
        .atlas-map-card { position: relative; width: min(100%, 358px); margin: 0 auto; }
        .atlas-map-card .atlas-screen__frame { border-radius: 23px; padding: 7px; box-shadow: 15px 15px 0 rgba(10, 104, 112, 0.24); }
        .atlas-map-card .atlas-screen__frame img { border-radius: 17px; }
        .atlas-map-card__needle { position: absolute; z-index: 2; right: -20px; top: 50%; display: grid; place-items: center; width: 62px; height: 62px; background: var(--atlas-signal); border: 1px solid var(--atlas-ink); border-radius: 50%; color: var(--atlas-ink); box-shadow: 4px 4px 0 var(--atlas-ink); }

        .atlas-faq { padding: 105px 0 109px; }
        .atlas-faq-grid { display: grid; grid-template-columns: minmax(270px, 0.7fr) minmax(0, 1.15fr); gap: clamp(46px, 10vw, 130px); align-items: start; }
        .atlas-faq .atlas-section-title { font-size: clamp(2.4rem, 4.1vw, 4rem); }
        .atlas-faq-sidecopy { margin: 23px 0 0; max-width: 310px; color: var(--atlas-muted); font-size: 14px; font-weight: 500; line-height: 1.65; }
        .atlas-faq-list { border-top: 1px solid var(--atlas-ink); }
        .atlas-faq-list details { border-bottom: 1px solid var(--atlas-line); }
        .atlas-faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 21px 0; cursor: pointer; color: var(--atlas-ink); font-size: 15px; font-weight: 800; list-style: none; }
        .atlas-faq-list summary::-webkit-details-marker { display: none; }
        .atlas-faq-list summary svg { flex: 0 0 auto; color: var(--atlas-deep-aqua); transition: transform 180ms ease; }
        .atlas-faq-list details[open] summary svg { transform: rotate(180deg); }
        .atlas-faq-list p { max-width: 630px; margin: -4px 42px 22px 0; color: var(--atlas-muted); font-size: 13px; font-weight: 500; line-height: 1.62; }

        .atlas-download { position: relative; padding: 78px 0; background: var(--atlas-ink); overflow: hidden; }
        .atlas-download::after { content: ''; position: absolute; width: 700px; height: 700px; top: -370px; right: -205px; border: 1px solid rgba(232, 240, 236, 0.22); border-radius: 49% 51% 63% 37% / 49% 36% 64% 51%; box-shadow: 0 0 0 60px rgba(104, 181, 185, 0.11), 0 0 0 120px rgba(104, 181, 185, 0.07); }
        .atlas-download-panel { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 55px; align-items: center; padding: clamp(29px, 5vw, 61px); border: 1px solid rgba(232, 240, 236, 0.3); background: rgba(244, 243, 237, 0.055); }
        .atlas-download .atlas-section-label { color: var(--atlas-aqua); }
        .atlas-download h2 { max-width: 640px; margin: 0; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 4.8rem); font-weight: 600; line-height: 0.95; letter-spacing: -0.06em; }
        .atlas-download p { max-width: 490px; margin: 21px 0 0; color: rgba(232, 240, 236, 0.75); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .atlas-store-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .atlas-store-button { display: inline-flex; align-items: center; gap: 10px; min-width: 179px; padding: 9px 10px; border: 1px solid rgba(232, 240, 236, 0.55); border-radius: 2px; background: #f7f7f1; color: var(--atlas-ink); text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
        .atlas-store-button:hover { background: var(--atlas-signal); transform: translateY(-3px); }
        .atlas-store-button .atlas-store-mark { width: 20px; height: 23px; flex: 0 0 auto; fill: currentColor; }
        .atlas-store-button span { display: grid; line-height: 1.05; }
        .atlas-store-button small { font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; }
        .atlas-store-button strong { margin-top: 3px; font-size: 14px; letter-spacing: -0.03em; }
        .atlas-store-button > svg:last-child { margin-left: auto; }
        .atlas-download-screen { width: 196px; margin: -30px 8px -114px 0; transform: rotate(4deg); }
        .atlas-download-screen .atlas-screen__meta { color: rgba(232, 240, 236, 0.7); }
        .atlas-download-screen .atlas-screen__live { color: var(--atlas-signal); }
        .atlas-download-screen .atlas-screen__frame { border-radius: 16px; padding: 5px; box-shadow: 9px 11px 0 rgba(0, 0, 0, 0.28); }
        .atlas-download-screen .atlas-screen__frame img { border-radius: 11px; }

        @media (max-width: 900px) {
          .atlas-nav { display: none; }
          .atlas-hero { padding: 58px 0 70px; }
          .atlas-hero__grid, .atlas-route-grid, .atlas-compare__grid, .atlas-faq-grid { grid-template-columns: 1fr; }
          .atlas-hero__copy { max-width: 650px; }
          .atlas-map-stage { max-width: 500px; margin: 6px auto 0; }
          .atlas-route-grid { gap: 45px; }
          .atlas-screen-pair { max-width: 550px; width: 100%; margin: 0 auto; }
          .atlas-compare__grid { gap: 51px; }
          .atlas-map-card { margin-left: min(12vw, 90px); }
          .atlas-faq-grid { gap: 47px; }
          .atlas-download-panel { grid-template-columns: 1fr; }
          .atlas-download-screen { display: none; }
        }

        @media (max-width: 620px) {
          .atlas-shell { width: min(100% - 30px, 1180px); }
          .atlas-header__inner { min-height: 65px; gap: 12px; }
          .atlas-brand { font-size: 15px; gap: 7px; }
          .atlas-brand img { height: 29px; }
          .atlas-header-cta { padding: 9px 10px; font-size: 11px; }
          .atlas-title { font-size: clamp(3.1rem, 15.4vw, 4.4rem); }
          .atlas-hero-copy { margin: 22px 0 27px; font-size: 15px; }
          .atlas-preflight__item { grid-template-columns: 33px minmax(91px, .43fr) 1fr; column-gap: 8px; padding: 13px 0; }
          .atlas-preflight dd { font-size: 11px; }
          .atlas-map-stage { padding-left: 14px; padding-right: 14px; }
          .atlas-map-stage .atlas-screen { width: min(100%, 306px); }
          .atlas-map-caption { left: -3px; bottom: 62px; max-width: 167px; font-size: 10px; }
          .atlas-principle { padding: 17px 0; }
          .atlas-principle__inner { grid-template-columns: 1fr auto; gap: 11px; }
          .atlas-principle__number { grid-column: 1 / -1; }
          .atlas-principle p { font-size: 20px; }
          .atlas-process, .atlas-faq { padding: 77px 0; }
          .atlas-section-head { grid-template-columns: 1fr; gap: 22px; margin-bottom: 41px; }
          .atlas-section-title { font-size: clamp(2.45rem, 12vw, 3.55rem); }
          .atlas-section-intro { font-size: 14px; }
          .atlas-route-list li { padding: 20px 0; }
          .atlas-screen-pair { min-height: 460px; padding: 27px 3px 0; }
          .atlas-screen-pair .atlas-screen { width: 51%; }
          .atlas-screen-pair .atlas-screen:first-child { transform: rotate(-4deg) translateX(7px); }
          .atlas-screen-pair .atlas-screen:last-child { transform: rotate(4deg) translateY(25px); }
          .atlas-compare { padding: 76px 0 80px; }
          .atlas-checklist { grid-template-columns: 1fr; gap: 4px; }
          .atlas-map-card { width: min(100%, 288px); margin: 0 auto; }
          .atlas-map-card__needle { width: 51px; height: 51px; right: -12px; }
          .atlas-faq-list summary { padding: 18px 0; font-size: 14px; }
          .atlas-faq-list p { margin-right: 0; }
          .atlas-download { padding: 52px 0; }
          .atlas-download-panel { gap: 0; padding: 30px 23px; }
          .atlas-download h2 { font-size: clamp(2.65rem, 13vw, 3.8rem); }
          .atlas-store-row { display: grid; }
          .atlas-store-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .atlas-page *, .atlas-page *::before, .atlas-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
          .atlas-screen-pair .atlas-screen:first-child, .atlas-screen-pair .atlas-screen:last-child { transform: none; }
          .atlas-header-cta:hover, .atlas-store-button:hover { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .atlas-header { background: var(--atlas-paper); backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .atlas-screen__frame, .atlas-download-panel, .atlas-header { border-width: 2px; }
        }
      `}</style>

      <header className="atlas-header">
        <div className="atlas-shell atlas-header__inner">
          <a className="atlas-brand" href="#top" aria-label="97plantões — início">
            <img src="./logo.svg" alt="" />
            <span><b>97</b>plantões</span>
          </a>
          <nav className="atlas-nav" aria-label="Navegação principal">
            <a href="#mapa">O mapa</a>
            <a href="#rotas">Como decidir</a>
            <a href="#perguntas">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="atlas-header-cta" href="#baixar">
            Baixar o app <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="atlas-hero" id="mapa" aria-labelledby="atlas-hero-title">
          <div className="atlas-shell atlas-hero__grid">
            <div className="atlas-hero__copy">
              <p className="atlas-kicker">97plantões / mapa de oportunidades</p>
              <h1 className="atlas-title" id="atlas-hero-title">Descubra seu próximo <em>plantão</em> pelo que está perto de você.</h1>
              <p className="atlas-hero-copy">
                Antes de se candidatar, enxergue <strong>onde</strong> a oportunidade está, qual é a especialidade e como ela cabe na sua agenda. O mapa organiza a conversa para você decidir com contexto.
              </p>

              <dl className="atlas-preflight" aria-label="O que você avalia no app antes de se candidatar">
                <div className="atlas-preflight__item">
                  <div className="atlas-preflight__icon"><MapPin size={16} aria-hidden="true" /></div>
                  <dt>Localização</dt>
                  <dd>Veja as unidades no mapa antes de abrir uma oportunidade.</dd>
                </div>
                <div className="atlas-preflight__item">
                  <div className="atlas-preflight__icon"><SlidersHorizontal size={16} aria-hidden="true" /></div>
                  <dt>Especialidade</dt>
                  <dd>Filtre a busca para olhar apenas o que faz sentido para você.</dd>
                </div>
                <div className="atlas-preflight__item">
                  <div className="atlas-preflight__icon"><CalendarDays size={16} aria-hidden="true" /></div>
                  <dt>Agenda</dt>
                  <dd>Confira a data e o período antes de assumir uma nova rota.</dd>
                </div>
              </dl>

              <a className="atlas-hero-link" href="#rotas">Veja a decisão em três passos <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>

            <div className="atlas-map-stage">
              <span className="atlas-coordinate atlas-coordinate--top">22° 54′ S / 43° 12′ W</span>
              <AppScreen
                src="./unnamed (1).png"
                alt="Tela real do mapa do 97plantões com unidades de saúde distribuídas pela região do Rio de Janeiro"
                label="Mapa de plantões"
                className="atlas-hero-screen"
                eager
              />
              <span className="atlas-map-caption"><Crosshair size={17} aria-hidden="true" /> A proximidade deixa a escolha mais clara.</span>
              <span className="atlas-coordinate atlas-coordinate--bottom">ESCALA / CONTEXTO / ROTA</span>
            </div>
          </div>
        </section>

        <aside className="atlas-principle" aria-label="Princípio do 97plantões">
          <div className="atlas-shell atlas-principle__inner">
            <span className="atlas-principle__number">PRINCÍPIO 01</span>
            <p>Uma oportunidade fica melhor quando você entende o trajeto antes de aceitar o destino.</p>
            <Compass size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </aside>

        <section className="atlas-process" id="rotas" aria-labelledby="atlas-process-title">
          <div className="atlas-shell">
            <div className="atlas-section-head">
              <div>
                <p className="atlas-section-label">Uma escolha que começa pelo contexto</p>
                <h2 className="atlas-section-title" id="atlas-process-title">Três perguntas. Um plantão que combina com o seu dia.</h2>
              </div>
              <p className="atlas-section-intro">As telas reais do app organizam as informações na ordem em que uma decisão responsável costuma acontecer.</p>
            </div>

            <div className="atlas-route-grid">
              <ol className="atlas-route-list">
                <li>
                  <span className="atlas-route-no">01</span>
                  <div>
                    <h3>O que está disponível?</h3>
                    <p>Comece por uma lista clara de oportunidades, com unidade, período e valor visíveis antes de entrar nos detalhes.</p>
                    <span className="atlas-route-tag"><Search size={13} aria-hidden="true" /> Início</span>
                  </div>
                </li>
                <li>
                  <span className="atlas-route-no">02</span>
                  <div>
                    <h3>Onde isso acontece?</h3>
                    <p>Abra o mapa para posicionar cada possibilidade e comparar as unidades na região que interessa a você.</p>
                    <span className="atlas-route-tag"><Map size={13} aria-hidden="true" /> Mapas</span>
                  </div>
                </li>
                <li>
                  <span className="atlas-route-no">03</span>
                  <div>
                    <h3>Como entra na sua rotina?</h3>
                    <p>Use a agenda para observar o calendário e encontrar o intervalo que faz sentido antes de se candidatar.</p>
                    <span className="atlas-route-tag"><CalendarDays size={13} aria-hidden="true" /> Agenda</span>
                  </div>
                </li>
              </ol>

              <div className="atlas-screen-pair" aria-label="Telas reais de oportunidades e agenda do aplicativo">
                <AppScreen
                  src="./unnamed.png"
                  alt="Tela real de início do 97plantões com oportunidades em hospitais, especialidades, horários e valores"
                  label="Oportunidades"
                />
                <AppScreen
                  src="./unnamed (2).png"
                  alt="Tela real de agenda do 97plantões com calendário e plantão disponível"
                  label="Agenda"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="atlas-compare" aria-labelledby="atlas-compare-title">
          <div className="atlas-shell atlas-compare__grid">
            <div>
              <p className="atlas-section-label">Decisão por proximidade</p>
              <h2 className="atlas-section-title" id="atlas-compare-title">Não é só uma lista. É a região inteira em perspectiva.</h2>
              <ul className="atlas-checklist">
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Visualize as unidades de saúde no território.</li>
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Filtre o mapa por especialidade.</li>
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Compare possibilidades antes de abrir cada uma.</li>
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Chegue aos detalhes com uma decisão mais informada.</li>
              </ul>
              <p className="atlas-compare-note">A tela é o ponto de partida: localize a oportunidade, confira as condições e só então avance para a candidatura.</p>
            </div>

            <div className="atlas-map-card">
              <AppScreen
                src="./unnamed (1).png"
                alt="Tela real do mapa de plantões com marcadores de unidades de saúde"
                label="Mapa em uso"
              />
              <span className="atlas-map-card__needle"><Navigation size={27} strokeWidth={2.2} aria-hidden="true" /></span>
            </div>
          </div>
        </section>

        <section className="atlas-faq" id="perguntas" aria-labelledby="atlas-faq-title">
          <div className="atlas-shell atlas-faq-grid">
            <div>
              <p className="atlas-section-label">Antes de baixar</p>
              <h2 className="atlas-section-title" id="atlas-faq-title">O que você precisa saber.</h2>
              <p className="atlas-faq-sidecopy">Informação clara é parte da rota. Estas são algumas das dúvidas mais comuns sobre encontrar oportunidades pelo app.</p>
            </div>

            <div className="atlas-faq-list">
              <details>
                <summary>Como encontro plantões disponíveis? <ChevronDown size={19} aria-hidden="true" /></summary>
                <p>Você pode explorar as oportunidades na tela inicial, no mapa por proximidade e na agenda por data. Os filtros ajudam a olhar o que é mais relevante para a sua busca.</p>
              </details>
              <details>
                <summary>Posso filtrar por especialidade? <ChevronDown size={19} aria-hidden="true" /></summary>
                <p>Sim. A busca pode ser filtrada por especialidade, período e tipo de plantão para facilitar a visualização de oportunidades compatíveis com a sua atuação.</p>
              </details>
              <details>
                <summary>Como sei se posso assumir uma oportunidade? <ChevronDown size={19} aria-hidden="true" /></summary>
                <p>Confira as informações do plantão e verifique se ele está localizado em um estado onde o seu CRM é válido antes de se candidatar.</p>
              </details>
              <details>
                <summary>O que acontece depois da candidatura? <ChevronDown size={19} aria-hidden="true" /></summary>
                <p>Você acompanha suas candidaturas no Painel. Quando uma candidatura é aceita, o aplicativo envia uma notificação para você acompanhar os próximos passos.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="atlas-download" id="baixar" aria-labelledby="atlas-download-title">
          <div className="atlas-shell atlas-download-panel">
            <div>
              <p className="atlas-section-label">Seu mapa, no bolso</p>
              <h2 id="atlas-download-title">Quando a rota fizer sentido, leve o app com você.</h2>
              <p>Baixe o 97plantões para explorar oportunidades, mapear unidades e organizar os próximos plantões pelo seu próprio contexto.</p>
              <div className="atlas-store-row">
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
            <AppScreen
              src="./unnamed (2).png"
              alt="Tela real da agenda do 97plantões"
              label="Agenda no app"
              className="atlas-download-screen"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
