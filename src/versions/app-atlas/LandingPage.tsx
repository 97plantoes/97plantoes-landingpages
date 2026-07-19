import Footer from './Footer';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Compass,
  Map,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="exp-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="exp-store-mark">
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
      className="exp-store-button"
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
    <figure className={`exp-screen ${className}`}>
      <div className="exp-screen__meta">
        <span className="exp-screen__dot" aria-hidden="true" />
        <span>{label}</span>
        <span className="exp-screen__live">tela real</span>
      </div>
      <div className="exp-screen__frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

const chapters = [
  {
    no: 'CAP. 01',
    icon: <Search size={15} aria-hidden="true" />,
    title: 'Início',
    text: 'Os plantões aparecem na Página Inicial em formato de rolagem com priorização inteligente.',
    src: './unnamed.png',
    alt: 'Tela real de início do 97plantões com oportunidades em hospitais, especialidades, horários e valores',
  },
  {
    no: 'CAP. 02',
    icon: <Map size={15} aria-hidden="true" />,
    title: 'Mapa',
    text: 'O Mapa interativo mostra os plantões por proximidade, em Hospitais e Unidades de Saúde da sua região.',
    src: './unnamed (1).png',
    alt: 'Tela real do mapa do 97plantões com unidades de saúde distribuídas pela região',
  },
  {
    no: 'CAP. 03',
    icon: <CalendarDays size={15} aria-hidden="true" />,
    title: 'Agenda',
    text: 'A Agenda organiza os plantões por data para você planejar a semana com antecedência.',
    src: './unnamed (2).png',
    alt: 'Tela real de agenda do 97plantões com calendário e plantão disponível',
  },
];

const regions = [
  { name: 'Norte', coord: '03° 06′ S · 60° 01′ W' },
  { name: 'Nordeste', coord: '08° 02′ S · 34° 52′ W' },
  { name: 'Centro-Oeste', coord: '15° 47′ S · 47° 52′ W' },
  { name: 'Sudeste', coord: '23° 33′ S · 46° 38′ W' },
  { name: 'Sul', coord: '25° 25′ S · 49° 16′ W' },
];

const faqs = [
  {
    q: 'Como encontro plantões disponíveis?',
    a: 'Os plantões aparecem na Página Inicial em formato de rolagem com priorização inteligente, no Mapa interativo por proximidade, e na Agenda por data. Você pode aplicar filtros de período (6h, 12h ou 24h), especialidade e tipo de plantão.',
  },
  {
    q: 'Posso assumir qualquer plantão publicado?',
    a: 'Sim, desde que o plantão esteja localizado em um Estado onde o seu CRM seja válido. É importante verificar se o plantão pertence à unidade federativa em que você possui autorização para atuar profissionalmente.',
  },
  {
    q: 'Quem pode se cadastrar?',
    a: 'O aplicativo é destinado exclusivamente a médicos. Podem se cadastrar profissionais de todas as especialidades e níveis de experiência, com o CRM verificado junto aos respectivos órgãos.',
  },
  {
    q: 'Onde acompanho minhas candidaturas?',
    a: 'Na tela de Painel, na aba Pendências. Lá você visualiza cada candidatura, pode acessar o mapa da localidade e cancelar sua candidatura a qualquer momento. Quando sua candidatura for aceita, você será notificado.',
  },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="exp-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        .exp-page {
          --exp-ink: #183338;
          --exp-muted: #5f7375;
          --exp-paper: #f4f3ed;
          --exp-panel: #e9eeea;
          --exp-aqua: #68b5b9;
          --exp-deep-aqua: #0a6870;
          --exp-signal: #e7bb35;
          --exp-coral: #dc7553;
          --exp-line: rgba(24, 51, 56, 0.16);
          background: var(--exp-paper);
          color: var(--exp-ink);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: clip;
        }

        .exp-page *, .exp-page *::before, .exp-page *::after { box-sizing: border-box; }
        .exp-page a { color: inherit; }
        .exp-page a:focus-visible, .exp-page summary:focus-visible {
          outline: 3px solid var(--exp-signal);
          outline-offset: 4px;
        }
        .exp-page ::selection { background: var(--exp-signal); color: var(--exp-ink); }
        .exp-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }

        .exp-header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(244, 243, 237, 0.91);
          border-bottom: 1px solid var(--exp-line);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
        }
        .exp-header__inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .exp-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 17px; font-weight: 800; letter-spacing: -0.05em; }
        .exp-brand img { height: 34px; width: auto; border-radius: 9px; }
        .exp-brand b { color: var(--exp-deep-aqua); }
        .exp-nav { display: flex; align-items: center; gap: 25px; color: var(--exp-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.035em; }
        .exp-nav a { text-decoration: none; transition: color 160ms ease; }
        .exp-nav a:hover { color: var(--exp-deep-aqua); }
        .exp-header-cta {
          display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
          padding: 10px 14px; background: var(--exp-ink); color: #fff !important;
          border: 1px solid var(--exp-ink); border-radius: 3px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.02em; transition: transform 180ms ease, background 180ms ease;
        }
        .exp-header-cta:hover { background: var(--exp-deep-aqua); transform: translateY(-2px); }
        .exp-header-cta:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }

        /* ── Hero: the country as the thesis ── */
        .exp-hero { position: relative; isolation: isolate; padding: 84px 0 0; border-bottom: 1px solid var(--exp-line); }
        .exp-hero::before {
          content: ''; position: absolute; inset: 0; z-index: -2;
          background-image: linear-gradient(rgba(24, 51, 56, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 51, 56, 0.06) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.15));
        }
        .exp-hero__top { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.72fr); gap: clamp(36px, 7vw, 104px); align-items: center; }
        .exp-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 25px; font-family: 'DM Mono', ui-monospace, monospace; color: var(--exp-deep-aqua); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .exp-kicker::before { content: ''; width: 9px; height: 9px; background: var(--exp-coral); border-radius: 50%; box-shadow: 0 0 0 5px rgba(220, 117, 83, 0.14); }
        .exp-title { max-width: 720px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(3rem, 5.9vw, 5.5rem); font-weight: 600; line-height: 0.94; letter-spacing: -0.062em; }
        .exp-title em { color: var(--exp-deep-aqua); font-style: italic; }
        .exp-hero-copy { max-width: 560px; margin: 26px 0 32px; color: var(--exp-muted); font-size: clamp(1rem, 1.35vw, 1.12rem); font-weight: 500; line-height: 1.7; }
        .exp-hero-copy strong { color: var(--exp-ink); }
        .exp-hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; }
        .exp-hero-link { display: inline-flex; align-items: center; gap: 9px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: var(--exp-ink); text-decoration: none; font-size: 13px; font-weight: 800; transition: color 160ms ease, gap 160ms ease; }
        .exp-hero-link:hover { color: var(--exp-deep-aqua); gap: 14px; }

        .exp-hero-stage { position: relative; display: grid; justify-items: center; padding: 22px 18px 30px; }
        .exp-hero-stage::before { content: ''; position: absolute; inset: 6% 4% 6%; background: var(--exp-aqua); opacity: 0.22; transform: rotate(-3.5deg); border: 1px solid var(--exp-deep-aqua); }
        .exp-hero-stage .exp-screen { position: relative; z-index: 1; width: min(100%, 348px); }
        .exp-hero-badge {
          position: absolute; z-index: 3; right: -6px; top: 34px; display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 13px; background: var(--exp-ink); color: #f4f3ed; font-size: 11px; font-weight: 800; line-height: 1.2;
          box-shadow: 5px 5px 0 var(--exp-coral);
        }
        .exp-hero-badge svg { color: var(--exp-signal); flex: 0 0 auto; }

        /* Coverage index: the country in five mono rows */
        .exp-coverage { margin-top: 72px; border-top: 1px solid var(--exp-ink); }
        .exp-coverage__row {
          display: grid; grid-template-columns: auto 1fr auto auto; align-items: baseline; gap: 18px;
          padding: 14px 4px; border-bottom: 1px solid var(--exp-line);
          font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase;
          transition: background 160ms ease, padding-left 160ms ease;
        }
        .exp-coverage__row:hover { background: rgba(104, 181, 185, 0.12); padding-left: 14px; }
        .exp-coverage__no { color: var(--exp-coral); }
        .exp-coverage__name { color: var(--exp-ink); font-weight: 500; }
        .exp-coverage__coord { color: var(--exp-muted); }
        .exp-coverage__tag { color: var(--exp-deep-aqua); }

        .exp-screen { margin: 0; }
        .exp-screen__meta { display: flex; align-items: center; gap: 7px; min-height: 31px; color: var(--exp-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.055em; text-transform: uppercase; }
        .exp-screen__dot { width: 7px; height: 7px; background: var(--exp-coral); border-radius: 50%; }
        .exp-screen__live { margin-left: auto; color: var(--exp-deep-aqua); }
        .exp-screen__frame { overflow: hidden; padding: 7px; background: #183338; border: 1px solid #183338; border-radius: 22px; box-shadow: 13px 13px 0 rgba(24, 51, 56, 0.14); }
        .exp-screen__frame img { display: block; width: 100%; height: auto; border-radius: 16px; }

        /* ── Chapters ── */
        .exp-chapters { padding: 112px 0 108px; }
        .exp-section-head { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(260px, 0.5fr); gap: 48px; align-items: end; margin-bottom: 64px; }
        .exp-section-label { display: flex; align-items: center; gap: 9px; margin: 0 0 15px; color: var(--exp-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .exp-section-label::before { content: ''; width: 28px; height: 1px; background: currentColor; }
        .exp-section-title { max-width: 720px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.4rem, 4.4vw, 4.3rem); font-weight: 600; line-height: 0.98; letter-spacing: -0.06em; }
        .exp-section-intro { max-width: 380px; margin: 0 0 4px; color: var(--exp-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .exp-chapter-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(26px, 4vw, 46px); }
        .exp-chapter { position: relative; border-top: 1px solid var(--exp-ink); padding-top: 18px; }
        .exp-chapter__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
        .exp-chapter__no { font-family: 'DM Mono', ui-monospace, monospace; color: var(--exp-coral); font-size: 11px; letter-spacing: 0.1em; }
        .exp-chapter__icon { display: inline-flex; align-items: center; gap: 8px; color: var(--exp-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
        .exp-chapter h3 { margin: 0 0 9px; font-family: 'Newsreader', Georgia, serif; font-size: 27px; font-weight: 600; letter-spacing: -0.045em; }
        .exp-chapter p { margin: 0 0 20px; color: var(--exp-muted); font-size: 13px; font-weight: 500; line-height: 1.62; }
        .exp-chapter .exp-screen { transition: transform 240ms cubic-bezier(.2,.8,.2,1); }
        .exp-chapter:hover .exp-screen { transform: translateY(-6px) rotate(-1deg); }

        /* ── Principle band ── */
        .exp-principle { padding: 20px 0; background: var(--exp-ink); color: #e8f0ec; }
        .exp-principle__inner { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 25px; }
        .exp-principle__number { color: var(--exp-signal); font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.13em; }
        .exp-principle p { max-width: 780px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(1.25rem, 2.2vw, 1.7rem); font-weight: 500; letter-spacing: -0.03em; line-height: 1.12; }
        .exp-principle svg { color: var(--exp-aqua); }

        /* ── Territory checklist ── */
        .exp-territory { position: relative; padding: 108px 0 118px; background: #cce6e5; border-top: 1px solid rgba(24, 51, 56, 0.23); border-bottom: 1px solid rgba(24, 51, 56, 0.23); overflow: hidden; }
        .exp-territory::before { content: 'BRASIL · BRASIL'; position: absolute; top: 30px; left: -22px; color: rgba(10, 104, 112, 0.11); font-family: 'Newsreader', Georgia, serif; font-size: clamp(6rem, 16vw, 15rem); font-weight: 600; letter-spacing: -0.08em; line-height: 0.7; white-space: nowrap; }
        .exp-territory__grid { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(330px, 0.72fr); gap: clamp(38px, 8vw, 115px); align-items: center; }
        .exp-territory .exp-section-label { color: var(--exp-ink); }
        .exp-checklist { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 26px; margin: 31px 0 0; padding: 0; list-style: none; }
        .exp-checklist li { display: flex; align-items: flex-start; gap: 9px; padding-top: 12px; border-top: 1px solid rgba(24, 51, 56, 0.25); color: var(--exp-ink); font-size: 13px; font-weight: 700; line-height: 1.45; }
        .exp-checklist svg { flex: 0 0 auto; margin-top: 1px; color: var(--exp-deep-aqua); }
        .exp-territory-note { margin-top: 35px; padding: 19px 21px; background: var(--exp-paper); border-left: 4px solid var(--exp-coral); color: var(--exp-ink); font-size: 14px; font-weight: 700; line-height: 1.55; }
        .exp-map-card { position: relative; width: min(100%, 352px); margin: 0 auto; }
        .exp-map-card .exp-screen__frame { box-shadow: 15px 15px 0 rgba(10, 104, 112, 0.24); }
        .exp-map-card__needle { position: absolute; z-index: 2; right: -20px; top: 50%; display: grid; place-items: center; width: 62px; height: 62px; background: var(--exp-signal); border: 1px solid var(--exp-ink); border-radius: 50%; color: var(--exp-ink); box-shadow: 4px 4px 0 var(--exp-ink); }

        /* ── FAQ ── */
        .exp-faq { padding: 104px 0 108px; }
        .exp-faq-grid { display: grid; grid-template-columns: minmax(270px, 0.7fr) minmax(0, 1.15fr); gap: clamp(46px, 10vw, 130px); align-items: start; }
        .exp-faq-sidecopy { margin: 23px 0 0; max-width: 310px; color: var(--exp-muted); font-size: 14px; font-weight: 500; line-height: 1.65; }
        .exp-faq-list { border-top: 1px solid var(--exp-ink); }
        .exp-faq-list details { border-bottom: 1px solid var(--exp-line); }
        .exp-faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 21px 0; cursor: pointer; color: var(--exp-ink); font-size: 15px; font-weight: 800; list-style: none; }
        .exp-faq-list summary::-webkit-details-marker { display: none; }
        .exp-faq-list summary svg { flex: 0 0 auto; color: var(--exp-deep-aqua); transition: transform 180ms ease; }
        .exp-faq-list details[open] summary svg { transform: rotate(180deg); }
        .exp-faq-list p { max-width: 630px; margin: -4px 42px 22px 0; color: var(--exp-muted); font-size: 13px; font-weight: 500; line-height: 1.62; }

        /* ── Download ── */
        .exp-download { position: relative; padding: 78px 0; background: var(--exp-ink); overflow: hidden; }
        .exp-download::after { content: ''; position: absolute; width: 700px; height: 700px; top: -370px; right: -205px; border: 1px solid rgba(232, 240, 236, 0.22); border-radius: 49% 51% 63% 37% / 49% 36% 64% 51%; box-shadow: 0 0 0 60px rgba(104, 181, 185, 0.11), 0 0 0 120px rgba(104, 181, 185, 0.07); }
        .exp-download-panel { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 55px; align-items: center; padding: clamp(29px, 5vw, 61px); border: 1px solid rgba(232, 240, 236, 0.3); background: rgba(244, 243, 237, 0.055); }
        .exp-download .exp-section-label { color: var(--exp-aqua); }
        .exp-download h2 { max-width: 640px; margin: 0; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 4.6rem); font-weight: 600; line-height: 0.95; letter-spacing: -0.06em; }
        .exp-download p { max-width: 500px; margin: 21px 0 0; color: rgba(232, 240, 236, 0.75); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .exp-download p strong { color: #f7f7f1; }
        .exp-store-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .exp-store-button { display: inline-flex; align-items: center; gap: 10px; min-width: 179px; padding: 9px 10px; border: 1px solid rgba(232, 240, 236, 0.55); border-radius: 2px; background: #f7f7f1; color: var(--exp-ink); text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
        .exp-store-button:hover { background: var(--exp-signal); transform: translateY(-3px); }
        .exp-store-button:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }
        .exp-store-button .exp-store-mark { width: 20px; height: 23px; flex: 0 0 auto; fill: currentColor; }
        .exp-store-button span { display: grid; line-height: 1.05; }
        .exp-store-button small { font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; }
        .exp-store-button strong { margin-top: 3px; font-size: 14px; letter-spacing: -0.03em; }
        .exp-store-button > svg:last-child { margin-left: auto; }
        .exp-download-screen { width: 196px; margin: -30px 8px -114px 0; transform: rotate(4deg); }
        .exp-download-screen .exp-screen__meta { color: rgba(232, 240, 236, 0.7); }
        .exp-download-screen .exp-screen__live { color: var(--exp-signal); }
        .exp-download-screen .exp-screen__frame { border-radius: 16px; padding: 5px; box-shadow: 9px 11px 0 rgba(0, 0, 0, 0.28); }
        .exp-download-screen .exp-screen__frame img { border-radius: 11px; }

        @media (max-width: 900px) {
          .exp-nav { display: none; }
          .exp-hero { padding: 58px 0 0; }
          .exp-hero__top, .exp-territory__grid, .exp-faq-grid, .exp-section-head { grid-template-columns: 1fr; }
          .exp-hero-stage { max-width: 500px; margin: 6px auto 0; }
          .exp-chapter-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
          .exp-section-head { gap: 22px; margin-bottom: 44px; }
          .exp-territory__grid { gap: 51px; }
          .exp-map-card { margin-left: min(12vw, 90px); }
          .exp-faq-grid { gap: 47px; }
          .exp-download-panel { grid-template-columns: 1fr; }
          .exp-download-screen { display: none; }
        }

        @media (max-width: 620px) {
          .exp-shell { width: min(100% - 30px, 1180px); }
          .exp-header__inner { min-height: 65px; gap: 12px; }
          .exp-brand { font-size: 15px; gap: 7px; }
          .exp-brand img { height: 29px; }
          .exp-header-cta { padding: 9px 10px; font-size: 11px; }
          .exp-title { font-size: clamp(2.85rem, 14.6vw, 4.2rem); }
          .exp-hero-copy { margin: 22px 0 27px; font-size: 15px; }
          .exp-hero-stage { padding-left: 12px; padding-right: 12px; }
          .exp-hero-stage .exp-screen { width: min(100%, 300px); }
          .exp-hero-badge { right: -2px; font-size: 10px; }
          .exp-coverage { margin-top: 54px; }
          .exp-coverage__row { grid-template-columns: auto 1fr auto; font-size: 10px; gap: 12px; }
          .exp-coverage__coord { display: none; }
          .exp-chapters, .exp-faq { padding: 76px 0; }
          .exp-section-title { font-size: clamp(2.4rem, 12vw, 3.5rem); }
          .exp-territory { padding: 76px 0 80px; }
          .exp-checklist { grid-template-columns: 1fr; gap: 4px; }
          .exp-map-card { width: min(100%, 288px); margin: 0 auto; }
          .exp-map-card__needle { width: 51px; height: 51px; right: -12px; }
          .exp-faq-list summary { padding: 18px 0; font-size: 14px; }
          .exp-faq-list p { margin-right: 0; }
          .exp-download { padding: 52px 0; }
          .exp-download-panel { gap: 0; padding: 30px 23px; }
          .exp-download h2 { font-size: clamp(2.6rem, 13vw, 3.7rem); }
          .exp-store-row { display: grid; }
          .exp-store-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-page *, .exp-page *::before, .exp-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
          .exp-header-cta:hover, .exp-store-button:hover, .exp-chapter:hover .exp-screen { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .exp-header { background: var(--exp-paper); backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .exp-screen__frame, .exp-download-panel, .exp-header { border-width: 2px; }
        }
      `}</style>

      <header className="exp-header">
        <div className="exp-shell exp-header__inner">
          <a className="exp-brand" href="#top" aria-label="97plantões — início">
            <img src="./logo.svg" alt="" />
            <span><b>97</b>plantões</span>
          </a>
          <nav className="exp-nav" aria-label="Navegação principal">
            <a href="#territorio">O território</a>
            <a href="#capitulos">Capítulos</a>
            <a href="#perguntas">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="exp-header-cta" href="#baixar">
            Baixar o app <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="exp-hero" id="territorio" aria-labelledby="exp-hero-title">
          <div className="exp-shell">
            <div className="exp-hero__top">
              <div>
                <p className="exp-kicker">97plantões / atlas nacional</p>
                <h1 className="exp-title" id="exp-hero-title">O app que conecta médicos a plantões por <em>todo o Brasil</em>.</h1>
                <p className="exp-hero-copy">
                  Encontre plantões próximos a você ou passe seu plantão para <strong>médicos verificados</strong> com segurança, praticidade e eficiência — em qualquer região do país.
                </p>
                <div className="exp-hero-actions">
                  <a className="exp-hero-link" href="#capitulos">Folhear o atlas <ArrowDownRight size={17} aria-hidden="true" /></a>
                </div>
              </div>

              <div className="exp-hero-stage">
                <AppScreen
                  src="./unnamed (1).png"
                  alt="Tela real do mapa do 97plantões com unidades de saúde distribuídas pela região"
                  label="Mapa de plantões"
                  eager
                />
                <span className="exp-hero-badge"><ShieldCheck size={16} aria-hidden="true" /> CRM verificado em todos os estados</span>
              </div>
            </div>

            <div className="exp-coverage" aria-label="Cobertura do 97plantões pelas regiões do Brasil">
              {regions.map((region, index) => (
                <div className="exp-coverage__row" key={region.name}>
                  <span className="exp-coverage__no">0{index + 1}</span>
                  <span className="exp-coverage__name">{region.name}</span>
                  <span className="exp-coverage__coord">{region.coord}</span>
                  <span className="exp-coverage__tag">coberto</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="exp-principle" aria-label="Princípio do 97plantões">
          <div className="exp-shell exp-principle__inner">
            <span className="exp-principle__number">PRINCÍPIO 01</span>
            <p>De médico para médico: uma comunidade verificada em cada ponto do mapa.</p>
            <Compass size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </aside>

        <section className="exp-chapters" id="capitulos" aria-labelledby="exp-chapters-title">
          <div className="exp-shell">
            <div className="exp-section-head">
              <div>
                <p className="exp-section-label">Três capítulos de uma mesma busca</p>
                <h2 className="exp-section-title" id="exp-chapters-title">Início, Mapa e Agenda: o território inteiro em três gestos.</h2>
              </div>
              <p className="exp-section-intro">Você pode aplicar filtros de período (6h, 12h ou 24h), especialidade e tipo de plantão em cada um deles.</p>
            </div>

            <div className="exp-chapter-grid">
              {chapters.map((chapter) => (
                <article className="exp-chapter" key={chapter.no}>
                  <div className="exp-chapter__head">
                    <span className="exp-chapter__no">{chapter.no}</span>
                    <span className="exp-chapter__icon">{chapter.icon} {chapter.title}</span>
                  </div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                  <AppScreen src={chapter.src} alt={chapter.alt} label={chapter.title} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="exp-territory" aria-labelledby="exp-territory-title">
          <div className="exp-shell exp-territory__grid">
            <div>
              <p className="exp-section-label">Decisão por proximidade</p>
              <h2 className="exp-section-title" id="exp-territory-title">Encontre plantões no mapa, da capital ao interior.</h2>
              <ul className="exp-checklist">
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Plantões de todas as especialidades.</li>
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Hospitais e Unidades de Saúde no mapa.</li>
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Veja os plantões próximos a você.</li>
                <li><Check size={16} strokeWidth={2.7} aria-hidden="true" /> Escolha aqueles de seu interesse.</li>
              </ul>
              <p className="exp-territory-note">Antes de se candidatar, verifique se o plantão pertence à unidade federativa em que o seu CRM é válido.</p>
            </div>

            <div className="exp-map-card">
              <AppScreen
                src="./unnamed (1).png"
                alt="Tela real do mapa de plantões com marcadores de unidades de saúde"
                label="Mapa em uso"
              />
              <span className="exp-map-card__needle"><Navigation size={27} strokeWidth={2.2} aria-hidden="true" /></span>
            </div>
          </div>
        </section>

        <section className="exp-faq" id="perguntas" aria-labelledby="exp-faq-title">
          <div className="exp-shell exp-faq-grid">
            <div>
              <p className="exp-section-label">Antes de baixar</p>
              <h2 className="exp-section-title" id="exp-faq-title">O que você precisa saber.</h2>
              <p className="exp-faq-sidecopy">Informação clara faz parte da rota. Estas são as dúvidas mais comuns de quem busca plantões pelo app.</p>
              <p className="exp-faq-sidecopy"><MapPin size={15} aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: 6, color: 'var(--exp-coral)' }} />Todo o Brasil, todas as especialidades.</p>
            </div>

            <div className="exp-faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q} <ChevronDown size={19} aria-hidden="true" /></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="exp-download" id="baixar" aria-labelledby="exp-download-title">
          <div className="exp-shell exp-download-panel">
            <div>
              <p className="exp-section-label">Conectando a Saúde do Brasil</p>
              <h2 id="exp-download-title">O país inteiro cabe no seu próximo plantão.</h2>
              <p>Junte-se à <strong>97plantões</strong> e conecte-se a médicos de todo o Brasil para encontrar ou passar plantões com segurança e eficiência.</p>
              <div className="exp-store-row">
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
            <AppScreen
              src="./unnamed (2).png"
              alt="Tela real da agenda do 97plantões"
              label="Agenda no app"
              className="exp-download-screen"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
