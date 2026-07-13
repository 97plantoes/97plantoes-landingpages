import React, { useState } from 'react';
import Footer from './Footer';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  Download,
  MapPin,
  MessageCircle,
  Navigation,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  WalletCards,
  Zap,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

const shifts = [
  {
    distance: '2,4 km',
    time: '18 min',
    hospital: 'Hospital Santa Clara',
    specialty: 'Clínica médica',
    schedule: 'Hoje · 19h — 07h',
    value: 'R$ 1.450',
    tone: 'near',
  },
  {
    distance: '5,8 km',
    time: '31 min',
    hospital: 'Pronto Atendimento Vila Nova',
    specialty: 'Pediatria',
    schedule: 'Amanhã · 07h — 19h',
    value: 'R$ 1.680',
    tone: 'mid',
  },
  {
    distance: '8,1 km',
    time: '42 min',
    hospital: 'Maternidade Central',
    specialty: 'Ginecologia e obstetrícia',
    schedule: 'Sáb · 07h — 19h',
    value: 'R$ 1.920',
    tone: 'far',
  },
];

const faqs = [
  {
    question: 'Quem pode usar o 97plantões?',
    answer: 'A plataforma é destinada a médicos. O CRM informado passa por verificação para manter uma comunidade profissional e confiável.',
  },
  {
    question: 'Como encontro plantões perto de mim?',
    answer: 'No aplicativo, o mapa organiza oportunidades por proximidade. Você também pode filtrar por período, especialidade e tipo de plantão.',
  },
  {
    question: 'Posso passar um plantão para outro médico?',
    answer: 'Sim. Você publica um plantão avulso ou contrato fixo, recebe candidaturas e pode alinhar os detalhes pelo chat da plataforma.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'O pagamento pode ser feito por cartão de crédito, PIX ou boleto. O valor é processado com segurança e o repasse acontece após a realização do plantão.',
  },
];

function Wordmark() {
  return (
    <a href="#inicio" className="radar-wordmark" aria-label="97plantões — início">
      <img src="./logo.svg" alt="" className="h-9 w-9 rounded-[10px]" />
      <span>
        97<span>plantões</span>
      </span>
    </a>
  );
}

function AppStoreBadge({ store }: { store: 'apple' | 'google' }) {
  const apple = store === 'apple';
  const href = apple ? APP_STORE_URL : PLAY_STORE_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="store-badge"
      aria-label={apple ? 'Baixar 97plantões na App Store' : 'Baixar 97plantões no Google Play'}
    >
      {apple ? (
        <svg viewBox="0 0 384 512" aria-hidden="true" className="store-icon fill-current">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      ) : (
        <svg viewBox="0 0 512 512" aria-hidden="true" className="store-icon">
          <path fill="#4CAF50" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
          <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
          <path fill="#FFEB3B" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
          <path fill="#F44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </svg>
      )}
      <span>
        <small>{apple ? 'Baixe na' : 'Disponível no'}</small>
        <strong>{apple ? 'App Store' : 'Google Play'}</strong>
      </span>
    </a>
  );
}

function MiniMapShift({ shift, className }: { shift: typeof shifts[number]; className: string }) {
  return (
    <article className={`map-shift-card ${className}`}>
      <div className="map-shift-head">
        <span className={`distance-pill distance-pill--${shift.tone}`}>{shift.distance}</span>
        <span className="map-shift-price">{shift.value}</span>
      </div>
      <strong>{shift.hospital}</strong>
      <span>{shift.specialty}</span>
      <span className="map-shift-time"><Clock3 size={12} aria-hidden="true" /> {shift.schedule}</span>
    </article>
  );
}

function RadarMap() {
  return (
    <div
      className="radar-map"
      role="img"
      aria-label="Mapa demonstrativo com plantões próximos, rotas e marcadores de localização"
    >
      <div className="map-topbar" aria-hidden="true">
        <span><span className="map-live-dot" />Radar de plantões</span>
        <span>São Paulo, SP</span>
      </div>

      <svg className="city-lines" viewBox="0 0 720 530" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="routeFade" x1="120" y1="480" x2="580" y2="75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2DC4A9" stopOpacity="0" />
            <stop offset="0.18" stopColor="#2DC4A9" />
            <stop offset="0.76" stopColor="#2DC4A9" />
            <stop offset="1" stopColor="#2DC4A9" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <path d="M-12 404C87 371 129 392 215 336C294 284 291 252 381 228C458 207 479 159 550 138C610 120 668 119 740 68" stroke="#C9D7DB" strokeWidth="17" />
        <path d="M-12 404C87 371 129 392 215 336C294 284 291 252 381 228C458 207 479 159 550 138C610 120 668 119 740 68" stroke="#F5FAF9" strokeWidth="11" />
        <path d="M82 541C131 441 161 453 241 401C334 341 355 344 425 276C491 212 527 161 626 103" stroke="#C9D7DB" strokeWidth="11" />
        <path d="M82 541C131 441 161 453 241 401C334 341 355 344 425 276C491 212 527 161 626 103" stroke="#F9FCFB" strokeWidth="7" />
        <path d="M49 175C152 188 199 153 284 185C351 210 401 196 450 150C502 102 571 92 720 138" stroke="#D8E2E2" strokeWidth="7" />
        <path d="M152 -10C173 89 214 118 277 146C331 170 350 195 380 228C403 253 454 280 546 286C621 291 656 338 735 369" stroke="#D8E2E2" strokeWidth="7" />
        <path d="M188 476C244 411 290 386 365 344C443 300 500 247 566 180" stroke="url(#routeFade)" strokeWidth="6" strokeLinecap="round" strokeDasharray="5 12" />
        <path d="M188 476C244 411 290 386 365 344C443 300 500 247 566 180" stroke="#2DC4A9" strokeWidth="16" strokeLinecap="round" opacity=".18" filter="url(#softGlow)" />
        <path d="M80 88L160 118M97 264L188 231M551 405L684 442M448 452L491 503M611 315L678 277M287 53L331 87" stroke="#E0E9E8" strokeWidth="3" />
        <rect x="19" y="230" width="74" height="43" rx="8" fill="#DDEFE9" opacity=".8" />
        <rect x="588" y="378" width="91" height="55" rx="11" fill="#DDEFE9" opacity=".8" />
        <rect x="420" y="45" width="64" height="30" rx="7" fill="#E5EFEE" opacity=".8" />
      </svg>

      <div className="map-area map-area--one" aria-hidden="true" />
      <div className="map-area map-area--two" aria-hidden="true" />
      <div className="radar-ring radar-ring--outer" aria-hidden="true" />
      <div className="radar-ring radar-ring--middle" aria-hidden="true" />
      <div className="radar-ring radar-ring--inner" aria-hidden="true" />
      <div className="radar-sweep" aria-hidden="true" />

      <span className="map-pin map-pin--one" aria-hidden="true"><MapPin size={23} fill="currentColor" /></span>
      <span className="map-pin map-pin--two" aria-hidden="true"><MapPin size={23} fill="currentColor" /></span>
      <span className="map-pin map-pin--three" aria-hidden="true"><MapPin size={23} fill="currentColor" /></span>
      <span className="map-hospital map-hospital--one" aria-hidden="true">+</span>
      <span className="map-hospital map-hospital--two" aria-hidden="true">+</span>

      <div className="map-you" aria-hidden="true">
        <span className="map-you-pulse" />
        <Navigation size={18} fill="currentColor" />
      </div>
      <span className="map-you-label" aria-hidden="true">você está aqui</span>

      <MiniMapShift shift={shifts[0]} className="map-shift-card--one" />
      <MiniMapShift shift={shifts[1]} className="map-shift-card--two" />
      <MiniMapShift shift={shifts[2]} className="map-shift-card--three" />

      <div className="map-legend" aria-hidden="true">
        <span><i className="legend-route" /> rota estimada</span>
        <span><i className="legend-shift" /> plantão</span>
      </div>
      <div className="map-demo-note">Visual demonstrativo</div>
    </div>
  );
}

const ShiftListCard: React.FC<{ shift: typeof shifts[number]; index: number }> = ({ shift, index }) => {
  return (
    <article className="shift-list-card">
      <div className="shift-list-index">0{index + 1}</div>
      <div className="shift-list-main">
        <div className="shift-list-title">
          <h3>{shift.hospital}</h3>
          <span>{shift.value}</span>
        </div>
        <p>{shift.specialty} <span>•</span> {shift.schedule}</p>
        <div className="shift-list-meta">
          <span><Route size={15} aria-hidden="true" /> {shift.distance} de você</span>
          <span><Navigation size={15} aria-hidden="true" /> aprox. {shift.time}</span>
        </div>
      </div>
      <a href="#baixar" className="shift-arrow" aria-label={`Conhecer o app para ver plantões em ${shift.hospital}`}>
        <ArrowUpRight size={20} aria-hidden="true" />
      </a>
    </article>
  );
};

const FaqItem: React.FC<{ item: typeof faqs[number]; isOpen: boolean; onToggle: () => void; index: number }> = ({ item, isOpen, onToggle, index }) => {
  const contentId = `faq-answer-${index}`;
  return (
    <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <h3>
        <button onClick={onToggle} aria-expanded={isOpen} aria-controls={contentId}>
          <span>{item.question}</span>
          <ChevronDown size={20} aria-hidden="true" />
        </button>
      </h3>
      <div id={contentId} className="faq-answer" hidden={!isOpen}>
        <p>{item.answer}</p>
      </div>
    </article>
  );
};

export default function LandingPageTemplate({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="radar-page" id="inicio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .radar-page {
          --ink: #08243a;
          --ink-soft: #345266;
          --canvas: #f5f8f7;
          --paper: #ffffff;
          --line: #d7e2e1;
          --route: #18a98d;
          --route-deep: #087d73;
          --signal: #f2654d;
          --sun: #f7c75e;
          background: var(--canvas);
          color: var(--ink);
          font-family: 'Manrope', Inter, ui-sans-serif, system-ui, sans-serif;
          overflow-x: hidden;
          min-width: 320px;
        }
        .radar-page *, .radar-page *::before, .radar-page *::after { box-sizing: border-box; }
        .radar-page a:focus-visible, .radar-page button:focus-visible {
          outline: 3px solid var(--signal);
          outline-offset: 4px;
        }
        .radar-page button { font: inherit; }
        .radar-nav {
          backdrop-filter: blur(16px);
          background: rgba(245, 248, 247, .9);
          border-bottom: 1px solid rgba(8, 36, 58, .09);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
        }
        .radar-nav__inner {
          align-items: center;
          display: flex;
          height: 76px;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1240px;
          padding: 0 30px;
        }
        .radar-wordmark { align-items: center; color: var(--ink); display: inline-flex; font-size: 20px; font-weight: 800; gap: 10px; letter-spacing: -.06em; text-decoration: none; }
        .radar-wordmark span span { color: var(--route); }
        .radar-nav__links { align-items: center; display: flex; gap: 29px; }
        .radar-nav__links a { color: #315067; font-size: 13px; font-weight: 700; text-decoration: none; transition: color .2s ease; }
        .radar-nav__links a:hover { color: var(--route-deep); }
        .nav-download { align-items: center; background: var(--ink); border-radius: 999px; color: white; display: inline-flex; font-size: 13px; font-weight: 800; gap: 8px; padding: 12px 17px; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .nav-download:hover { background: var(--route-deep); transform: translateY(-1px); }
        .radar-hero { background: linear-gradient(180deg, #f5f8f7 0%, #eef6f3 100%); padding: 151px 30px 88px; position: relative; }
        .radar-hero::before { background-image: radial-gradient(rgba(8,36,58,.11) 1px, transparent 1px); background-size: 23px 23px; content: ''; height: 330px; left: -80px; mask-image: linear-gradient(to bottom, black, transparent); opacity: .52; position: absolute; top: 95px; width: 360px; }
        .hero-grid { align-items: center; display: grid; gap: 56px; grid-template-columns: minmax(0, .88fr) minmax(510px, 1.12fr); margin: 0 auto; max-width: 1240px; position: relative; }
        .eyebrow { align-items: center; color: var(--route-deep); display: inline-flex; font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; font-weight: 500; gap: 9px; letter-spacing: .11em; text-transform: uppercase; }
        .eyebrow::before { background: var(--route); border-radius: 99px; content: ''; height: 7px; width: 7px; }
        .hero-copy h1 { color: var(--ink); font-size: clamp(44px, 5.1vw, 76px); font-weight: 800; letter-spacing: -.072em; line-height: .98; margin: 22px 0 24px; max-width: 650px; }
        .hero-copy h1 em { color: var(--route-deep); font-style: normal; position: relative; white-space: nowrap; }
        .hero-copy h1 em::after { border-bottom: 3px solid var(--signal); bottom: -7px; content: ''; left: 2px; opacity: .86; position: absolute; transform: rotate(-1.5deg); width: 96%; }
        .hero-description { color: var(--ink-soft); font-size: 17px; font-weight: 500; line-height: 1.7; margin: 0; max-width: 510px; }
        .hero-proof { align-items: center; display: flex; flex-wrap: wrap; gap: 12px 21px; margin: 30px 0; }
        .hero-proof span { align-items: center; color: #24465a; display: inline-flex; font-size: 12px; font-weight: 700; gap: 7px; }
        .hero-proof svg { color: var(--route-deep); }
        .hero-actions { align-items: center; display: flex; flex-wrap: wrap; gap: 13px; }
        .action-primary { align-items: center; background: var(--signal); border-radius: 10px; box-shadow: 0 10px 21px rgba(242,101,77,.18); color: #fff; display: inline-flex; font-size: 14px; font-weight: 800; gap: 9px; padding: 15px 19px; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
        .action-primary:hover { background: #df533e; box-shadow: 0 13px 25px rgba(242,101,77,.24); transform: translateY(-2px); }
        .action-secondary { align-items: center; color: var(--ink); display: inline-flex; font-size: 14px; font-weight: 800; gap: 7px; padding: 13px 5px; text-decoration: none; }
        .action-secondary:hover { color: var(--route-deep); }
        .hero-caption { border-left: 1px solid #bfd3d1; color: #5b7582; font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: .04em; line-height: 1.6; margin-top: 34px; padding-left: 12px; }
        .hero-caption span { color: var(--signal); }

        .radar-map { background: #e7f0ee; border: 1px solid #ccdcda; border-radius: 28px; box-shadow: 0 25px 50px rgba(11, 46, 57, .15), 0 2px 0 rgba(255,255,255,.8) inset; min-height: 548px; overflow: hidden; position: relative; }
        .radar-map::before { background: linear-gradient(114deg, transparent 0 48%, rgba(255,255,255,.58) 48.2% 50%, transparent 50.3% 100%); content: ''; inset: 0; opacity: .7; pointer-events: none; position: absolute; }
        .map-topbar { align-items: center; background: rgba(255,255,255,.82); border-bottom: 1px solid #d5e2df; color: #254a5a; display: flex; font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; justify-content: space-between; left: 0; letter-spacing: .04em; padding: 13px 17px; position: absolute; right: 0; top: 0; z-index: 8; }
        .map-topbar span { align-items: center; display: flex; gap: 6px; }
        .map-live-dot { background: var(--signal); border-radius: 50%; box-shadow: 0 0 0 4px rgba(242,101,77,.12); height: 7px; width: 7px; }
        .city-lines { bottom: 0; height: calc(100% - 38px); left: 0; position: absolute; width: 100%; }
        .map-area { background: #d7ebe5; border: 1px solid #c6ded7; position: absolute; transform: rotate(-18deg); }
        .map-area--one { border-radius: 42% 58% 50% 50%; height: 132px; left: 14%; opacity: .75; top: 26%; width: 176px; }
        .map-area--two { border-radius: 61% 39% 44% 56%; bottom: 3%; height: 112px; opacity: .64; right: 6%; width: 155px; }
        .radar-ring { border: 1px solid rgba(8,125,115,.3); border-radius: 50%; left: 47%; position: absolute; top: 53%; transform: translate(-50%, -50%); z-index: 1; }
        .radar-ring--outer { height: 390px; width: 390px; }
        .radar-ring--middle { height: 260px; width: 260px; }
        .radar-ring--inner { height: 130px; width: 130px; }
        .radar-sweep { background: conic-gradient(from 220deg at 50% 50%, transparent 0 66%, rgba(24,169,141,.18) 75%, transparent 84%); border-radius: 50%; height: 392px; left: calc(47% - 196px); mix-blend-mode: multiply; position: absolute; top: calc(53% - 196px); transform-origin: center; width: 392px; z-index: 1; animation: radar-spin 9s linear infinite; }
        .map-pin { color: var(--signal); filter: drop-shadow(0 5px 3px rgba(158,57,41,.23)); position: absolute; z-index: 4; }
        .map-pin--one { left: 27%; top: 36%; }
        .map-pin--two { color: #f5a44e; left: 60%; top: 20%; }
        .map-pin--three { color: #d35c92; right: 16%; top: 63%; }
        .map-hospital { align-items: center; background: #fff; border: 2px solid var(--route); border-radius: 8px; box-shadow: 0 3px 8px rgba(8,66,62,.16); color: var(--route-deep); display: flex; font-family: Arial, sans-serif; font-size: 20px; font-weight: 700; height: 24px; justify-content: center; position: absolute; width: 24px; z-index: 3; }
        .map-hospital--one { left: 41%; top: 61%; }
        .map-hospital--two { right: 24%; top: 27%; }
        .map-you { align-items: center; background: var(--ink); border: 4px solid #fff; border-radius: 50%; box-shadow: 0 4px 12px rgba(8,36,58,.25); color: #eafff9; display: flex; height: 40px; justify-content: center; left: calc(47% - 20px); position: absolute; top: calc(53% - 20px); width: 40px; z-index: 5; }
        .map-you svg { transform: rotate(4deg); }
        .map-you-pulse { border: 1px solid var(--route); border-radius: 50%; height: 68px; left: -18px; position: absolute; top: -18px; width: 68px; animation: map-pulse 2.8s ease-out infinite; }
        .map-you-label { background: var(--ink); border-radius: 5px; color: #fff; font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; left: calc(47% + 21px); letter-spacing: .02em; padding: 5px 7px; position: absolute; top: calc(53% + 18px); white-space: nowrap; z-index: 6; }
        .map-shift-card { background: rgba(255,255,255,.96); border: 1px solid rgba(7,40,54,.13); border-radius: 13px; box-shadow: 0 11px 22px rgba(19,56,64,.16); display: flex; flex-direction: column; gap: 3px; padding: 11px 12px; position: absolute; width: 180px; z-index: 7; }
        .map-shift-card strong { color: var(--ink); font-size: 11px; letter-spacing: -.02em; line-height: 1.25; }
        .map-shift-card > span { color: #52707c; font-size: 10px; line-height: 1.25; }
        .map-shift-head { align-items: center; display: flex; justify-content: space-between; margin-bottom: 3px; }
        .distance-pill { border-radius: 99px; font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; padding: 3px 5px; }
        .distance-pill--near { background: #e0f5ef; color: #087d73; }
        .distance-pill--mid { background: #fff2d8; color: #9e6a12; }
        .distance-pill--far { background: #fbe5f0; color: #aa3f75; }
        .map-shift-price { color: var(--route-deep); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; font-weight: 500; }
        .map-shift-time { align-items: center; display: flex; gap: 3px; margin-top: 3px; }
        .map-shift-card--one { left: 6%; top: 15%; }
        .map-shift-card--two { right: 6%; top: 36%; }
        .map-shift-card--three { bottom: 11%; left: 11%; }
        .map-legend { align-items: center; background: rgba(255,255,255,.88); border: 1px solid #d5e2df; border-radius: 8px; bottom: 14px; color: #516c75; display: flex; font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; gap: 10px; left: 14px; padding: 7px 9px; position: absolute; z-index: 8; }
        .map-legend span { align-items: center; display: flex; gap: 5px; }
        .map-legend i { display: inline-block; }
        .legend-route { border-top: 2px dashed var(--route); width: 13px; }
        .legend-shift { background: var(--signal); border-radius: 50%; height: 7px; width: 7px; }
        .map-demo-note { bottom: 16px; color: #65808a; font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; letter-spacing: .03em; position: absolute; right: 14px; z-index: 8; }

        .signal-bar { background: var(--ink); color: #f5fbfa; }
        .signal-bar__inner { display: grid; grid-template-columns: 1fr 1fr 1fr; margin: 0 auto; max-width: 1240px; }
        .signal-bar__item { align-items: center; border-left: 1px solid rgba(215,226,225,.16); display: flex; gap: 14px; min-height: 96px; padding: 17px 30px; }
        .signal-bar__item:last-child { border-right: 1px solid rgba(215,226,225,.16); }
        .signal-bar__item svg { color: #65d5c2; flex: none; }
        .signal-bar__item strong { display: block; font-size: 13px; letter-spacing: -.02em; }
        .signal-bar__item p { color: #aec7cf; font-size: 11px; line-height: 1.45; margin: 3px 0 0; }

        .section-shell { margin: 0 auto; max-width: 1240px; padding: 110px 30px; }
        .section-kicker { color: var(--route-deep); font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: .1em; margin: 0 0 13px; text-transform: uppercase; }
        .section-heading { color: var(--ink); font-size: clamp(34px, 4vw, 55px); font-weight: 800; letter-spacing: -.065em; line-height: 1.02; margin: 0; max-width: 670px; }
        .section-heading span { color: var(--route-deep); }
        .section-intro { color: #52707d; font-size: 15px; line-height: 1.65; margin: 18px 0 0; max-width: 575px; }
        .section-heading-row { align-items: end; display: flex; gap: 35px; justify-content: space-between; margin-bottom: 47px; }
        .section-heading-row .section-intro { max-width: 360px; }

        .shifts-section { background: #fff; }
        .shift-list { border-top: 1px solid var(--line); }
        .shift-list-card { align-items: center; border-bottom: 1px solid var(--line); display: grid; gap: 25px; grid-template-columns: 55px 1fr 43px; padding: 24px 4px; transition: background .2s ease, padding .2s ease; }
        .shift-list-card:hover { background: #f1f8f5; padding-left: 14px; padding-right: 14px; }
        .shift-list-index { color: #92a7ac; font-family: 'DM Mono', ui-monospace, monospace; font-size: 12px; }
        .shift-list-title { align-items: baseline; display: flex; gap: 18px; justify-content: space-between; }
        .shift-list-title h3 { color: var(--ink); font-size: 17px; letter-spacing: -.04em; margin: 0; }
        .shift-list-title > span { color: var(--route-deep); font-family: 'DM Mono', ui-monospace, monospace; font-size: 13px; font-weight: 500; white-space: nowrap; }
        .shift-list-main > p { color: #5e7781; font-size: 12px; margin: 5px 0 10px; }
        .shift-list-main > p span { color: var(--signal); margin: 0 3px; }
        .shift-list-meta { color: #386070; display: flex; flex-wrap: wrap; font-size: 11px; font-weight: 700; gap: 15px; }
        .shift-list-meta span { align-items: center; display: inline-flex; gap: 5px; }
        .shift-list-meta svg { color: var(--route); }
        .shift-arrow { align-items: center; background: #eef5f3; border-radius: 50%; color: var(--ink); display: flex; height: 39px; justify-content: center; transition: background .2s ease, color .2s ease, transform .2s ease; width: 39px; }
        .shift-arrow:hover { background: var(--signal); color: #fff; transform: rotate(9deg); }
        .shifts-footnote { align-items: center; color: #718991; display: flex; font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; gap: 8px; margin-top: 21px; }
        .shifts-footnote svg { color: var(--route-deep); }

        .trust-section { background: #eaf3f1; overflow: hidden; position: relative; }
        .trust-section::after { border: 1px solid rgba(8,125,115,.2); border-radius: 50%; content: ''; height: 540px; position: absolute; right: -240px; top: -175px; width: 540px; }
        .trust-grid { align-items: end; display: grid; gap: 70px; grid-template-columns: .83fr 1.17fr; position: relative; z-index: 1; }
        .proof-card { background: var(--ink); border-radius: 22px; box-shadow: 0 18px 33px rgba(8,36,58,.14); color: #fff; padding: 29px; transform: rotate(-1.5deg); }
        .proof-card__label { color: #69d4c2; font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: .11em; text-transform: uppercase; }
        .proof-card blockquote { font-size: 19px; font-weight: 700; letter-spacing: -.035em; line-height: 1.45; margin: 19px 0 26px; }
        .proof-card footer { align-items: center; border-top: 1px solid rgba(255,255,255,.15); color: #b7d0d6; display: flex; font-size: 11px; gap: 9px; padding-top: 17px; }
        .quote-person { align-items: center; background: var(--signal); border-radius: 50%; color: #fff; display: inline-flex; font-size: 11px; font-weight: 800; height: 28px; justify-content: center; width: 28px; }
        .trust-points { display: grid; gap: 15px; grid-template-columns: 1fr 1fr; margin-top: 29px; }
        .trust-point { border-top: 1px solid #c8d9d6; padding-top: 17px; }
        .trust-point svg { color: var(--route-deep); }
        .trust-point h3 { font-size: 14px; letter-spacing: -.03em; margin: 12px 0 7px; }
        .trust-point p { color: #56717a; font-size: 12px; line-height: 1.6; margin: 0; }

        .process-section { background: #f7faf9; }
        .process-grid { border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 53px; }
        .process-card { border-right: 1px solid var(--line); padding: 27px 28px 28px 0; }
        .process-card + .process-card { padding-left: 28px; }
        .process-card:last-child { border-right: 0; }
        .process-number { color: var(--signal); font-family: 'DM Mono', ui-monospace, monospace; font-size: 12px; }
        .process-icon { align-items: center; background: #e4f3ef; border-radius: 10px; color: var(--route-deep); display: flex; height: 43px; justify-content: center; margin: 25px 0 18px; width: 43px; }
        .process-card h3 { font-size: 18px; letter-spacing: -.045em; margin: 0 0 10px; }
        .process-card p { color: #5f7781; font-size: 13px; line-height: 1.65; margin: 0; max-width: 280px; }
        .process-link { align-items: center; color: var(--route-deep); display: inline-flex; font-size: 12px; font-weight: 800; gap: 5px; margin-top: 20px; text-decoration: none; }
        .process-link:hover { color: var(--signal); }

        .download-section { background: var(--ink); overflow: hidden; position: relative; }
        .download-section::before { background: repeating-radial-gradient(circle at 103% 20%, transparent 0 31px, rgba(100,213,194,.16) 32px 33px); content: ''; height: 650px; position: absolute; right: -210px; top: -200px; width: 650px; }
        .download-shell { align-items: center; display: grid; gap: 50px; grid-template-columns: 1fr auto; margin: 0 auto; max-width: 1240px; padding: 95px 30px; position: relative; }
        .download-copy .section-kicker { color: #67d5c1; }
        .download-copy .section-heading { color: #fff; max-width: 640px; }
        .download-copy .section-heading span { color: #73dcca; }
        .download-copy p { color: #b3cbd2; font-size: 15px; line-height: 1.65; margin: 19px 0 0; max-width: 555px; }
        .download-badges { display: flex; flex-direction: column; gap: 11px; min-width: 204px; }
        .store-badge { align-items: center; background: #fff; border: 1px solid rgba(255,255,255,.2); border-radius: 11px; color: var(--ink); display: flex; gap: 11px; padding: 10px 16px; text-decoration: none; transition: transform .2s ease, background .2s ease; }
        .store-badge:hover { background: #dff6f0; transform: translateY(-2px); }
        .store-icon { flex: none; height: 27px; width: 23px; }
        .store-badge span { display: flex; flex-direction: column; line-height: 1.13; }
        .store-badge small { font-size: 9px; font-weight: 700; letter-spacing: .03em; }
        .store-badge strong { font-size: 16px; letter-spacing: -.04em; }
        .download-note { align-items: center; color: #a9c5cd; display: flex; font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; gap: 6px; margin-top: 19px; }
        .download-note svg { color: #65d5c2; }

        .faq-section { background: #fff; }
        .faq-layout { display: grid; gap: 70px; grid-template-columns: .76fr 1.24fr; }
        .faq-sidebar p { color: #5c7680; font-size: 14px; line-height: 1.65; margin: 18px 0 0; max-width: 320px; }
        .faq-support { align-items: center; color: var(--route-deep); display: inline-flex; font-size: 12px; font-weight: 800; gap: 7px; margin-top: 23px; text-decoration: none; }
        .faq-list { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-item h3 { margin: 0; }
        .faq-item button { align-items: center; background: none; border: 0; color: var(--ink); cursor: pointer; display: flex; font-size: 15px; font-weight: 800; gap: 20px; justify-content: space-between; padding: 20px 0; text-align: left; width: 100%; }
        .faq-item button svg { color: var(--route-deep); flex: none; transition: transform .2s ease; }
        .faq-item--open button svg { transform: rotate(180deg); }
        .faq-answer p { color: #5b747d; font-size: 13px; line-height: 1.7; margin: -2px 38px 22px 0; }

        @keyframes radar-spin { to { transform: rotate(360deg); } }
        @keyframes map-pulse { 0% { opacity: .75; transform: scale(.52); } 75%, 100% { opacity: 0; transform: scale(1.15); } }
        @media (max-width: 1000px) {
          .hero-grid { gap: 40px; grid-template-columns: minmax(0, .9fr) minmax(430px, 1.1fr); }
          .hero-copy h1 { font-size: clamp(42px, 5.8vw, 60px); }
          .radar-map { min-height: 510px; }
          .map-shift-card--one { left: 3%; }
          .map-shift-card--two { right: 3%; }
          .map-shift-card--three { left: 7%; }
          .section-shell { padding-bottom: 90px; padding-top: 90px; }
        }
        @media (max-width: 800px) {
          .radar-nav__links { display: none; }
          .radar-nav__inner { height: 68px; padding: 0 20px; }
          .radar-hero { padding: 120px 20px 60px; }
          .hero-grid { display: flex; flex-direction: column; gap: 38px; }
          .hero-copy { width: 100%; }
          .hero-copy h1 { font-size: clamp(43px, 11.7vw, 64px); max-width: 650px; }
          .radar-map { min-height: 530px; width: 100%; }
          .signal-bar__inner { grid-template-columns: 1fr; }
          .signal-bar__item, .signal-bar__item:last-child { border-bottom: 1px solid rgba(215,226,225,.16); border-left: 0; border-right: 0; min-height: 78px; padding: 14px 20px; }
          .signal-bar__item:last-child { border-bottom: 0; }
          .section-shell { padding: 76px 20px; }
          .section-heading-row { align-items: start; flex-direction: column; gap: 0; margin-bottom: 37px; }
          .section-heading-row .section-intro { max-width: 575px; }
          .trust-grid, .faq-layout { gap: 39px; grid-template-columns: 1fr; }
          .proof-card { max-width: 450px; transform: rotate(-.7deg); }
          .download-shell { gap: 35px; grid-template-columns: 1fr; padding: 75px 20px; }
          .download-badges { flex-direction: row; flex-wrap: wrap; }
          .store-badge { min-width: 200px; }
        }
        @media (max-width: 540px) {
          .radar-wordmark { font-size: 18px; gap: 8px; }
          .nav-download { font-size: 12px; padding: 10px 13px; }
          .nav-download svg { display: none; }
          .hero-description { font-size: 15px; }
          .hero-proof { align-items: flex-start; flex-direction: column; gap: 9px; }
          .hero-actions { align-items: flex-start; flex-direction: column; }
          .radar-map { border-radius: 19px; min-height: 470px; }
          .radar-ring--outer { height: 315px; width: 315px; }
          .radar-ring--middle { height: 208px; width: 208px; }
          .radar-ring--inner { height: 102px; width: 102px; }
          .radar-sweep { height: 317px; left: calc(47% - 158px); top: calc(53% - 158px); width: 317px; }
          .map-shift-card { padding: 9px 10px; width: 154px; }
          .map-shift-card strong { font-size: 10px; }
          .map-shift-card > span { font-size: 9px; }
          .map-shift-card--one { left: 4%; top: 12%; }
          .map-shift-card--two { right: 4%; top: 54%; }
          .map-shift-card--three { display: none; }
          .map-pin--one { left: 23%; top: 46%; }
          .map-pin--two { left: 65%; top: 27%; }
          .map-pin--three { display: none; }
          .map-hospital--one { left: 41%; top: 62%; }
          .map-hospital--two { display: none; }
          .map-legend { bottom: 11px; font-size: 8px; left: 10px; }
          .map-demo-note { bottom: 13px; font-size: 7px; right: 10px; }
          .shift-list-card { align-items: start; gap: 10px; grid-template-columns: 28px 1fr 34px; padding: 19px 0; }
          .shift-list-card:hover { padding-left: 7px; padding-right: 7px; }
          .shift-list-title { align-items: start; flex-direction: column; gap: 4px; }
          .shift-list-title h3 { font-size: 15px; }
          .shift-list-meta { gap: 8px 12px; }
          .shift-arrow { height: 32px; width: 32px; }
          .trust-points { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
          .process-card, .process-card + .process-card { border-bottom: 1px solid var(--line); border-right: 0; padding: 24px 0; }
          .process-card:last-child { border-bottom: 0; }
          .download-badges { flex-direction: column; }
          .store-badge { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .radar-page *, .radar-page *::before, .radar-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <nav className="radar-nav" aria-label="Navegação principal">
        <div className="radar-nav__inner">
          <Wordmark />
          <div className="radar-nav__links">
            <a href="#radar">No mapa</a>
            <a href="#seguranca">Segurança</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <a href="#baixar" className="nav-download"><Download size={15} aria-hidden="true" /> Baixar o app</a>
        </div>
      </nav>

      <main>
        <section className="radar-hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">97plantões · radar de proximidade</p>
              <h1 id="hero-title">Seu próximo plantão começa <em>perto.</em></h1>
              <p className="hero-description">
                Veja oportunidades por distância, especialidade e horário antes de decidir. O 97plantões transforma a busca por plantões em uma rota clara — feita para a rotina médica.
              </p>
              <div className="hero-proof" aria-label="Pontos de confiança da plataforma">
                <span><ShieldCheck size={17} aria-hidden="true" /> Comunidade com CRM verificado</span>
                <span><WalletCards size={17} aria-hidden="true" /> Pagamento processado com segurança</span>
              </div>
              <div className="hero-actions">
                <a href="#radar" className="action-primary"><Search size={17} aria-hidden="true" /> Ver o radar em ação</a>
                <a href="#como-funciona" className="action-secondary">Entender o fluxo <ChevronRight size={17} aria-hidden="true" /></a>
              </div>
              <p className="hero-caption"><span>●</span> Proximidade não é só um filtro. É mais contexto para a decisão certa.</p>
            </div>
            <RadarMap />
          </div>
        </section>

        <section className="signal-bar" aria-label="Garantias da 97plantões">
          <div className="signal-bar__inner">
            <div className="signal-bar__item">
              <ShieldCheck size={23} aria-hidden="true" />
              <div><strong>Perfil que inspira confiança</strong><p>CRM validado para uma comunidade exclusiva de médicos.</p></div>
            </div>
            <div className="signal-bar__item">
              <MessageCircle size={23} aria-hidden="true" />
              <div><strong>Detalhes no mesmo lugar</strong><p>Converse pelo chat antes e após a confirmação.</p></div>
            </div>
            <div className="signal-bar__item">
              <WalletCards size={23} aria-hidden="true" />
              <div><strong>Pagamento com previsibilidade</strong><p>Cartão, PIX ou boleto para organizar o repasse.</p></div>
            </div>
          </div>
        </section>

        <section id="radar" className="shifts-section">
          <div className="section-shell">
            <div className="section-heading-row">
              <div>
                <p className="section-kicker">Da localização à escala</p>
                <h2 className="section-heading">Compare o que importa <span>antes</span> de sair de casa.</h2>
              </div>
              <p className="section-intro">No mapa, a distância deixa de ser uma estimativa vaga. Ela vira parte da escolha ao lado de especialidade, data e valor.</p>
            </div>
            <div className="shift-list" aria-label="Exemplos de plantões organizados por proximidade">
              {shifts.map((shift, index) => <ShiftListCard key={shift.hospital} shift={shift} index={index} />)}
            </div>
            <p className="shifts-footnote"><CircleCheck size={14} aria-hidden="true" /> Exemplos de visualização. As oportunidades disponíveis aparecem no aplicativo.</p>
          </div>
        </section>

        <section id="seguranca" className="trust-section">
          <div className="section-shell trust-grid">
            <div className="proof-card">
              <span className="proof-card__label">De médico para médico</span>
              <blockquote>“O mapa ajuda a escolher plantões que realmente cabem na minha rotina. A decisão fica muito mais objetiva.”</blockquote>
              <footer><span className="quote-person">A</span> Pediatra · Rio de Janeiro, RJ · Médica verificada</footer>
            </div>
            <div>
              <p className="section-kicker">Decisão rápida, relação responsável</p>
              <h2 className="section-heading">A rota é só o começo. <span>A confiança sustenta</span> o plantão.</h2>
              <p className="section-intro">Informação de contexto reduz a incerteza antes de candidatar-se ou passar um plantão. O aplicativo organiza cada etapa sem tirar a autonomia do médico.</p>
              <div className="trust-points">
                <article className="trust-point"><ShieldCheck size={22} aria-hidden="true" /><h3>CRM verificado</h3><p>Participam da plataforma médicos com registro validado junto aos órgãos responsáveis.</p></article>
                <article className="trust-point"><MessageCircle size={22} aria-hidden="true" /><h3>Chat privado</h3><p>Alinhe detalhes do plantão em uma conversa privada entre os profissionais.</p></article>
                <article className="trust-point"><WalletCards size={22} aria-hidden="true" /><h3>Valor processado com segurança</h3><p>O pagamento é organizado no fluxo do plantão e repassado após sua realização.</p></article>
                <article className="trust-point"><CalendarDays size={22} aria-hidden="true" /><h3>Agenda sob controle</h3><p>Plantões confirmados ficam visíveis para você planejar melhor a semana.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="process-section">
          <div className="section-shell">
            <p className="section-kicker">O caminho é direto</p>
            <h2 className="section-heading">Menos ruído entre você e <span>um plantão compatível.</span></h2>
            <div className="process-grid">
              <article className="process-card">
                <span className="process-number">01 / LOCALIZE</span>
                <div className="process-icon"><Navigation size={21} aria-hidden="true" /></div>
                <h3>Abra o mapa e ajuste seu raio</h3>
                <p>Explore plantões conforme a distância, o horário e a especialidade que fazem sentido para você.</p>
              </article>
              <article className="process-card">
                <span className="process-number">02 / CONECTE</span>
                <div className="process-icon"><Stethoscope size={21} aria-hidden="true" /></div>
                <h3>Candidate-se ou publique</h3>
                <p>Encontre uma oportunidade ou publique o plantão que precisa passar para a comunidade médica.</p>
              </article>
              <article className="process-card">
                <span className="process-number">03 / CONFIRME</span>
                <div className="process-icon"><Zap size={21} aria-hidden="true" /></div>
                <h3>Alinhe e siga para a escala</h3>
                <p>Use o chat, acompanhe as confirmações e mantenha o pagamento no fluxo seguro da plataforma.</p>
                <a href="#baixar" className="process-link">Encontrar meu próximo plantão <ArrowDown size={15} aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <section id="baixar" className="download-section" aria-labelledby="download-title">
          <div className="download-shell">
            <div className="download-copy">
              <p className="section-kicker">Quando a oportunidade estiver no seu raio</p>
              <h2 id="download-title" className="section-heading">Leve o radar de plantões <span>no bolso.</span></h2>
              <p>Baixe o 97plantões para ver as oportunidades disponíveis, candidatar-se e organizar a sua escala com mais contexto.</p>
              <span className="download-note"><Smartphone size={13} aria-hidden="true" /> Disponível para iOS e Android</span>
            </div>
            <div className="download-badges">
              <AppStoreBadge store="apple" />
              <AppStoreBadge store="google" />
            </div>
          </div>
        </section>

        <section id="duvidas" className="faq-section">
          <div className="section-shell faq-layout">
            <aside className="faq-sidebar">
              <p className="section-kicker">Dúvidas frequentes</p>
              <h2 className="section-heading">Tudo claro para entrar na <span>rota certa.</span></h2>
              <p>Se precisar de ajuda com sua conta ou com um plantão, nosso suporte está disponível.</p>
              <a href="?page=suporte" className="faq-support">Falar com o suporte <ArrowUpRight size={15} aria-hidden="true" /></a>
            </aside>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
