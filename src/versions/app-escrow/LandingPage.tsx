import { useState } from 'react';
import Footer from './Footer';
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  CreditCard,
  LockKeyhole,
  MessageCircleMore,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

const faqs = [
  {
    question: 'Quem pode usar o 97plantões?',
    answer: 'A comunidade é exclusiva para médicos. O CRM informado é verificado para criar um ambiente mais confiável para quem oferta e para quem assume plantões.',
  },
  {
    question: 'Quando o médico que assumiu recebe?',
    answer: 'Após a realização do plantão, o pagamento é processado para a conta bancária cadastrada. Os prazos variam conforme o método de pagamento escolhido.',
  },
  {
    question: 'Posso alinhar os detalhes antes de confirmar?',
    answer: 'Sim. O aplicativo oferece uma conversa privada para que os dois médicos alinhem informações importantes antes da confirmação.',
  },
];

function StoreBadge({ store }: { store: 'apple' | 'google' }) {
  const isApple = store === 'apple';

  return (
    <a
      href={isApple ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="escrow-store-badge"
    >
      {isApple ? (
        <svg viewBox="0 0 384 512" aria-hidden="true" className="h-6 w-5 fill-current">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      ) : (
        <svg viewBox="0 0 512 512" aria-hidden="true" className="h-6 w-6">
          <path fill="#4CAF50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
          <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
          <path fill="#FFEB3B" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
          <path fill="#F44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499z" />
        </svg>
      )}
      <span>
        <small>{isApple ? 'Disponível na' : 'Disponível no'}</small>
        <strong>{isApple ? 'App Store' : 'Google Play'}</strong>
      </span>
    </a>
  );
}

function PhoneEvidence({ src, alt, label, className = '' }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <figure className={`escrow-phone ${className}`}>
      <div className="escrow-phone__topline">
        <span />
        <span />
        <span />
      </div>
      <img src={src} alt={alt} />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="escrow-faq-item">
      <button
        type="button"
        aria-expanded={isOpen}
        className="escrow-faq-button"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{question}</span>
        <ChevronDown aria-hidden="true" size={20} className={isOpen ? 'escrow-chevron escrow-chevron--open' : 'escrow-chevron'} />
      </button>
      {isOpen && <p className="escrow-faq-answer">{answer}</p>}
    </div>
  );
}

export default function LandingPage({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  return (
    <div className="escrow-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .escrow-page {
          --ink: #102834;
          --ink-soft: #29414b;
          --paper: #f5f4ef;
          --paper-deep: #e9e8e0;
          --line: rgba(16, 40, 52, .16);
          --lime: #d4ed63;
          --lime-deep: #b7d341;
          --sun: #ffe05c;
          --mist: #dfeff1;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', system-ui, sans-serif;
          overflow-x: clip;
        }
        .escrow-page *, .escrow-page *::before, .escrow-page *::after { box-sizing: border-box; }
        .escrow-page a { color: inherit; }
        .escrow-page :focus-visible { outline: 3px solid var(--sun); outline-offset: 4px; }
        .escrow-shell { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
        .escrow-nav {
          min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 24px;
          border-bottom: 1px solid rgba(245,244,239,.22); position: relative; z-index: 5;
        }
        .escrow-brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; font-weight: 700; text-decoration: none; letter-spacing: -.035em; font-size: 1.15rem; }
        .escrow-brand img { width: 34px; height: 34px; border-radius: 9px; }
        .escrow-brand span span { color: var(--lime); }
        .escrow-nav__links { display: flex; align-items: center; gap: 27px; color: rgba(255,255,255,.74); font-size: .875rem; }
        .escrow-nav__links a { text-decoration: none; transition: color .18s ease; }
        .escrow-nav__links a:hover { color: #fff; }
        .escrow-nav__cta { padding: 10px 16px; border-radius: 2px; text-decoration: none; color: var(--ink); background: var(--lime); font-size: .8rem; font-weight: 700; transition: transform .18s ease, background .18s ease; }
        .escrow-nav__cta:hover { transform: translateY(-2px); background: #e2f784; }
        .escrow-hero { background: var(--ink); color: #fff; position: relative; overflow: hidden; }
        .escrow-hero::before { content: ''; position: absolute; inset: 78px 0 0; pointer-events: none; opacity: .7; background-image: linear-gradient(90deg, transparent 49.9%, rgba(255,255,255,.06) 50%, transparent 50.1%), linear-gradient(0deg, transparent 49.9%, rgba(255,255,255,.05) 50%, transparent 50.1%); background-size: 90px 90px; mask-image: linear-gradient(to bottom, black, transparent 86%); }
        .escrow-hero__content { min-height: 702px; padding: 73px 0 0; display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(370px, .98fr); gap: 44px; position: relative; }
        .escrow-hero__copy { padding: 38px 0 52px; position: relative; z-index: 1; }
        .escrow-kicker, .escrow-eyebrow { display: inline-flex; align-items: center; gap: 8px; color: var(--lime); font: 500 .69rem/1 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .12em; }
        .escrow-kicker::before { content: ''; display: inline-block; width: 7px; height: 7px; background: var(--lime); border-radius: 50%; box-shadow: 0 0 0 5px rgba(212,237,99,.12); }
        .escrow-title { max-width: 670px; margin: 24px 0 23px; font-size: clamp(3.05rem, 5.85vw, 5.8rem); font-weight: 600; line-height: .95; letter-spacing: -.075em; }
        .escrow-title em { color: var(--lime); font-style: normal; }
        .escrow-hero__lead { max-width: 540px; font-size: clamp(1.03rem, 1.6vw, 1.22rem); line-height: 1.52; color: rgba(255,255,255,.72); }
        .escrow-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 13px; margin-top: 31px; }
        .escrow-button { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 10px; padding: 0 20px; border: 1px solid transparent; text-decoration: none; font-weight: 700; font-size: .9rem; border-radius: 2px; transition: transform .18s ease, background .18s ease, color .18s ease; }
        .escrow-button:hover { transform: translateY(-2px); }
        .escrow-button--lime { background: var(--lime); color: var(--ink); }
        .escrow-button--lime:hover { background: #e2f784; }
        .escrow-button--quiet { color: #fff; border-color: rgba(255,255,255,.34); }
        .escrow-button--quiet:hover { background: rgba(255,255,255,.09); }
        .escrow-hero__notes { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); margin-top: 55px; max-width: 605px; border-top: 1px solid rgba(255,255,255,.19); }
        .escrow-hero__note { padding: 16px 16px 0 0; font-size: .78rem; line-height: 1.4; color: rgba(255,255,255,.68); }
        .escrow-hero__note + .escrow-hero__note { padding-left: 16px; border-left: 1px solid rgba(255,255,255,.19); }
        .escrow-hero__note strong { color: #fff; font: 500 .64rem/1.2 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .09em; display: block; margin-bottom: 7px; }
        .escrow-hero__visual { position: relative; min-width: 0; display: flex; align-items: flex-start; justify-content: center; }
        .escrow-proof-label { position: absolute; z-index: 2; top: 47px; left: -21px; padding: 11px 12px; background: var(--sun); color: var(--ink); box-shadow: 5px 5px 0 rgba(0,0,0,.17); font: 500 .67rem/1.15 'DM Mono', monospace; letter-spacing: .04em; }
        .escrow-proof-label span { display: block; margin-top: 3px; font-family: 'DM Sans', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: 0; }
        .escrow-hero__stamp { position: absolute; z-index: 2; right: -7px; top: 532px; width: 167px; padding: 13px; color: var(--ink); background: var(--lime); transform: rotate(-4deg); box-shadow: 6px 6px 0 rgba(0,0,0,.18); }
        .escrow-hero__stamp b { display: block; font-size: .78rem; letter-spacing: -.02em; }
        .escrow-hero__stamp span { display: block; margin-top: 5px; font: 500 .6rem/1.25 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .04em; }
        .escrow-phone { position: relative; width: min(100%, 335px); margin: 0; padding: 13px 8px 18px; background: #0c171d; border: 1px solid rgba(255,255,255,.31); border-radius: 28px 28px 9px 9px; box-shadow: 0 28px 75px rgba(0,0,0,.42); }
        .escrow-phone::after { content: ''; position: absolute; width: 48%; height: 2px; bottom: 7px; left: 26%; border-radius: 999px; background: rgba(255,255,255,.32); }
        .escrow-phone__topline { display: flex; justify-content: center; align-items: center; gap: 4px; height: 10px; margin-bottom: 7px; }
        .escrow-phone__topline span:first-child { width: 34px; height: 3px; border-radius: 999px; background: #3f5058; }
        .escrow-phone__topline span:not(:first-child) { width: 3px; height: 3px; border-radius: 50%; background: #3f5058; }
        .escrow-phone img { width: 100%; height: auto; display: block; border-radius: 17px 17px 3px 3px; }
        .escrow-phone figcaption { display: none; }
        .escrow-phone--hero { width: min(100%, 345px); margin-top: 2px; transform: rotate(2.2deg); }
        .escrow-flow { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--paper); }
        .escrow-flow__inner { display: grid; grid-template-columns: 1.05fr repeat(5, 1fr); align-items: stretch; }
        .escrow-flow__intro { padding: 23px 30px 23px 0; font-size: .88rem; line-height: 1.35; font-weight: 600; }
        .escrow-flow__item { min-height: 93px; padding: 19px 13px; border-left: 1px solid var(--line); position: relative; }
        .escrow-flow__item small { display: block; color: #587077; font: .56rem/1 'DM Mono', monospace; letter-spacing: .09em; text-transform: uppercase; }
        .escrow-flow__item strong { display: block; margin-top: 8px; font-size: .78rem; line-height: 1.2; }
        .escrow-flow__item svg { position: absolute; right: -10px; top: 37px; z-index: 1; color: #668087; background: var(--paper); }
        .escrow-flow__item:last-child svg { display: none; }
        .escrow-section { padding: clamp(76px, 10vw, 132px) 0; }
        .escrow-section__heading { max-width: 715px; }
        .escrow-eyebrow { color: #46646d; }
        .escrow-section__heading h2 { margin: 16px 0 0; font-size: clamp(2.4rem, 4.8vw, 4.8rem); line-height: .98; letter-spacing: -.065em; font-weight: 600; }
        .escrow-section__heading p { margin: 20px 0 0; max-width: 570px; color: #53676e; font-size: 1.04rem; line-height: 1.55; }
        .escrow-proof { background: #dfeff1; position: relative; }
        .escrow-proof::before { content: 'DETALHE / CRM / CONDIÇÕES'; font: 500 .62rem/1 'DM Mono', monospace; letter-spacing: .13em; color: rgba(16,40,52,.44); position: absolute; right: max(20px, calc((100vw - 1180px)/2)); top: 30px; }
        .escrow-proof__grid { display: grid; grid-template-columns: minmax(270px,.8fr) minmax(0,1.2fr); gap: clamp(44px,8vw,130px); align-items: center; }
        .escrow-phone--details { margin-inline: auto; width: min(100%, 300px); transform: rotate(-2.4deg); box-shadow: 14px 18px 0 var(--sun), 0 22px 55px rgba(16,40,52,.25); }
        .escrow-proof__copy { max-width: 570px; }
        .escrow-proof__copy h2 { font-size: clamp(2.55rem, 4.4vw, 4.45rem); line-height: .98; letter-spacing: -.065em; font-weight: 600; margin: 17px 0 22px; }
        .escrow-proof__copy > p { color: #465e67; font-size: 1.07rem; line-height: 1.58; margin: 0; }
        .escrow-checklist { list-style: none; margin: 33px 0 0; padding: 0; display: grid; gap: 14px; }
        .escrow-checklist li { display: flex; gap: 12px; align-items: flex-start; padding-bottom: 14px; border-bottom: 1px solid rgba(16,40,52,.16); color: var(--ink-soft); font-size: .94rem; line-height: 1.4; }
        .escrow-checklist svg { flex: none; margin-top: 1px; color: #477e56; }
        .escrow-checklist b { color: var(--ink); }
        .escrow-sequence { background: var(--paper); }
        .escrow-sequence__head { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 58px; }
        .escrow-sequence__head p { max-width: 330px; color: #596b70; line-height: 1.5; margin: 0; }
        .escrow-route { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,.95fr); gap: 26px; }
        .escrow-route__step { position: relative; border-top: 1px solid var(--ink); padding-top: 15px; min-height: 246px; }
        .escrow-route__step:nth-child(2) { margin-top: 108px; }
        .escrow-route__step:nth-child(3) { margin-top: -12px; }
        .escrow-route__step:nth-child(4) { margin-top: 96px; }
        .escrow-route__step:nth-child(5) { grid-column: 1 / -1; width: 53%; margin-left: auto; min-height: 164px; }
        .escrow-route__number { font: 500 .67rem/1 'DM Mono', monospace; letter-spacing: .1em; color: #5e7378; }
        .escrow-route__step h3 { margin: 26px 0 11px; font-size: clamp(1.55rem, 2.55vw, 2.4rem); letter-spacing: -.052em; line-height: .98; font-weight: 600; }
        .escrow-route__step p { max-width: 420px; margin: 0; color: #52666d; font-size: .95rem; line-height: 1.52; }
        .escrow-route__icon { position: absolute; right: 2px; top: 15px; color: #59727a; }
        .escrow-route__step--money { background: var(--ink); border-top: 0; padding: 22px 24px 24px; color: #fff; box-shadow: 12px 12px 0 var(--sun); }
        .escrow-route__step--money .escrow-route__number, .escrow-route__step--money .escrow-route__icon { color: var(--lime); }
        .escrow-route__step--money h3 { margin-top: 38px; }
        .escrow-route__step--money p { color: rgba(255,255,255,.73); }
        .escrow-conversation { margin-top: 58px; border: 1px solid var(--line); display: grid; grid-template-columns: 1.1fr .9fr; min-height: 270px; background: #fffefa; }
        .escrow-conversation__copy { padding: 33px; }
        .escrow-conversation__copy h3 { margin: 14px 0 11px; font-size: 1.8rem; letter-spacing: -.05em; line-height: 1; }
        .escrow-conversation__copy p { max-width: 450px; color: #53686d; line-height: 1.5; }
        .escrow-message { max-width: 355px; margin-top: 24px; padding: 12px 15px; background: var(--mist); border-radius: 1px 13px 13px 13px; color: #28424b; font-size: .84rem; line-height: 1.38; }
        .escrow-message small { display: block; margin-top: 7px; color: #59737a; font: .58rem/1 'DM Mono', monospace; }
        .escrow-conversation__status { display: flex; align-items: center; padding: 24px; background: var(--lime); }
        .escrow-status-card { width: 100%; padding: 18px; background: rgba(255,255,255,.54); border: 1px solid rgba(16,40,52,.18); }
        .escrow-status-card span { font: 500 .62rem/1 'DM Mono', monospace; letter-spacing: .09em; text-transform: uppercase; }
        .escrow-status-card b { display: block; margin: 17px 0 11px; font-size: 1.45rem; letter-spacing: -.045em; line-height: 1; }
        .escrow-status-card div { display: flex; align-items: center; gap: 8px; color: #395e3e; font-size: .79rem; font-weight: 700; }
        .escrow-payment { background: var(--ink); color: #fff; overflow: hidden; position: relative; }
        .escrow-payment::after { content: ''; position: absolute; width: 660px; height: 660px; border-radius: 50%; background: var(--lime); opacity: .12; filter: blur(1px); right: -330px; bottom: -410px; }
        .escrow-payment__grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(300px,.8fr); gap: clamp(44px, 9vw, 138px); align-items: center; position: relative; z-index: 1; }
        .escrow-payment__copy h2 { margin: 17px 0 22px; max-width: 600px; font-size: clamp(2.5rem, 4.75vw, 4.7rem); line-height: .98; letter-spacing: -.067em; font-weight: 600; }
        .escrow-payment__copy > p { max-width: 535px; color: rgba(255,255,255,.7); font-size: 1.05rem; line-height: 1.58; }
        .escrow-ledger { list-style: none; margin: 32px 0 0; padding: 0; max-width: 540px; border-top: 1px solid rgba(255,255,255,.2); }
        .escrow-ledger li { display: grid; grid-template-columns: 28px 1fr auto; gap: 12px; align-items: center; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.2); font-size: .9rem; }
        .escrow-ledger svg { color: var(--lime); }
        .escrow-ledger small { color: rgba(255,255,255,.55); font: 500 .58rem/1 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .07em; }
        .escrow-phone--payment { width: min(100%, 320px); margin: 0 auto; transform: rotate(2deg); box-shadow: -15px 16px 0 var(--sun), 0 28px 75px rgba(0,0,0,.45); }
        .escrow-payment__caption { position: absolute; right: -2px; bottom: 22px; z-index: 2; padding: 10px 12px; color: var(--ink); background: #fff; font: 500 .61rem/1.3 'DM Mono', monospace; box-shadow: 5px 5px 0 rgba(0,0,0,.25); }
        .escrow-proof-grid { display: grid; grid-template-columns: 1.1fr .9fr; border: 1px solid var(--line); }
        .escrow-offers { padding: clamp(32px, 5vw, 64px); display: grid; grid-template-columns: minmax(180px,.8fr) minmax(0,1.1fr); align-items: center; gap: clamp(28px,5vw,72px); background: #fffefa; }
        .escrow-phone--offers { width: min(100%, 220px); margin-inline: auto; transform: rotate(-3deg); box-shadow: 10px 12px 0 var(--mist), 0 18px 45px rgba(16,40,52,.2); }
        .escrow-offers__copy h3 { margin: 14px 0 10px; font-size: clamp(1.7rem,3vw,2.7rem); line-height: .98; letter-spacing: -.055em; }
        .escrow-offers__copy p { color: #526870; line-height: 1.5; }
        .escrow-document { padding: clamp(32px,5vw,64px); background: var(--mist); }
        .escrow-document__line { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 13px 0; border-bottom: 1px solid rgba(16,40,52,.16); font-size: .88rem; }
        .escrow-document__line span { color: #587077; }
        .escrow-document__line b { font-weight: 700; }
        .escrow-document__seal { width: 70px; height: 70px; margin: 22px 0 0 auto; border: 1px solid #577b5b; color: #3e7045; border-radius: 50%; display: grid; place-items: center; text-align: center; font: 500 .51rem/1.2 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .07em; transform: rotate(-12deg); }
        .escrow-faq { background: var(--paper-deep); }
        .escrow-faq__grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(42px,9vw,135px); align-items: start; }
        .escrow-faq__aside h2 { margin: 16px 0; font-size: clamp(2.5rem,4.4vw,4.35rem); line-height: .97; letter-spacing: -.065em; font-weight: 600; }
        .escrow-faq__aside p { color: #536970; line-height: 1.55; max-width: 350px; }
        .escrow-faq-list { border-top: 1px solid var(--ink); }
        .escrow-faq-item { border-bottom: 1px solid rgba(16,40,52,.24); }
        .escrow-faq-button { width: 100%; min-height: 76px; padding: 15px 0; border: 0; background: transparent; color: var(--ink); display: flex; align-items: center; justify-content: space-between; gap: 20px; text-align: left; font: 600 1rem/1.3 'DM Sans', sans-serif; cursor: pointer; }
        .escrow-chevron { flex: none; transition: transform .22s ease; }
        .escrow-chevron--open { transform: rotate(180deg); }
        .escrow-faq-answer { margin: -4px 36px 23px 0; color: #51676d; font-size: .94rem; line-height: 1.55; }
        .escrow-download { background: var(--sun); padding: clamp(70px,10vw,120px) 0; }
        .escrow-download__grid { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 42px; align-items: end; }
        .escrow-download h2 { max-width: 785px; margin: 17px 0 0; font-size: clamp(2.75rem,5.4vw,5.25rem); line-height: .94; letter-spacing: -.072em; font-weight: 600; }
        .escrow-download p { max-width: 530px; margin: 20px 0 0; color: #40555c; font-size: 1.04rem; line-height: 1.55; }
        .escrow-stores { display: flex; flex-wrap: wrap; gap: 10px; }
        .escrow-store-badge { min-width: 154px; display: inline-flex; align-items: center; gap: 10px; padding: 9px 13px; color: #fff; background: #111; border: 1px solid #111; text-decoration: none; border-radius: 3px; transition: transform .18s ease, background .18s ease; }
        .escrow-store-badge:hover { transform: translateY(-2px); background: #28353a; }
        .escrow-store-badge span { display: grid; line-height: 1.08; }
        .escrow-store-badge small { font-size: .55rem; letter-spacing: .02em; }
        .escrow-store-badge strong { margin-top: 2px; font-size: .96rem; letter-spacing: -.02em; }
        @media (max-width: 860px) {
          .escrow-nav__links { display: none; }
          .escrow-hero__content { min-height: unset; padding-top: 36px; grid-template-columns: 1fr; gap: 0; }
          .escrow-hero__copy { padding-top: 26px; }
          .escrow-hero__visual { min-height: 480px; order: 2; justify-content: flex-end; }
          .escrow-phone--hero { width: 294px; margin-right: 12%; }
          .escrow-proof-label { top: 29px; left: 7%; }
          .escrow-hero__stamp { top: 403px; right: 6%; }
          .escrow-flow__inner { grid-template-columns: repeat(3, 1fr); }
          .escrow-flow__intro { grid-column: 1 / -1; padding: 18px 0; }
          .escrow-flow__item:nth-child(2) { border-left: 0; }
          .escrow-proof__grid, .escrow-payment__grid, .escrow-faq__grid { grid-template-columns: 1fr; }
          .escrow-proof__grid { gap: 60px; }
          .escrow-phone--details { order: 2; }
          .escrow-payment__grid { gap: 62px; }
          .escrow-phone--payment { order: 2; }
          .escrow-proof-grid { grid-template-columns: 1fr; }
          .escrow-download__grid { grid-template-columns: 1fr; align-items: start; }
        }
        @media (max-width: 620px) {
          .escrow-shell { width: min(100% - 28px, 1180px); }
          .escrow-nav { min-height: 68px; }
          .escrow-brand { font-size: 1.02rem; }
          .escrow-brand img { width: 30px; height: 30px; }
          .escrow-nav__cta { padding: 9px 11px; font-size: .72rem; }
          .escrow-hero__copy { padding-bottom: 32px; }
          .escrow-title { margin-top: 20px; font-size: clamp(2.82rem, 13vw, 4rem); }
          .escrow-hero__lead { font-size: 1rem; }
          .escrow-actions { display: grid; grid-template-columns: 1fr; }
          .escrow-button { width: 100%; }
          .escrow-hero__notes { display: none; }
          .escrow-hero__note { padding: 13px 0; }
          .escrow-hero__note + .escrow-hero__note { padding-left: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,.19); }
          .escrow-hero__visual { min-height: 415px; }
          .escrow-phone--hero { width: 247px; margin-right: 1%; }
          .escrow-proof-label { left: 0; top: 18px; font-size: .57rem; }
          .escrow-hero__stamp { width: 143px; right: 0; top: 340px; }
          .escrow-flow__inner { grid-template-columns: repeat(2, 1fr); }
          .escrow-flow__item:nth-child(2n) { border-left: 0; }
          .escrow-flow__item { min-height: 88px; }
          .escrow-flow__item svg { display: none; }
          .escrow-proof::before { display: none; }
          .escrow-phone--details { width: 248px; }
          .escrow-sequence__head { display: block; margin-bottom: 37px; }
          .escrow-sequence__head p { margin-top: 19px; }
          .escrow-route { grid-template-columns: 1fr; gap: 40px; }
          .escrow-route__step, .escrow-route__step:nth-child(2), .escrow-route__step:nth-child(3), .escrow-route__step:nth-child(4), .escrow-route__step:nth-child(5) { grid-column: auto; width: auto; margin: 0; min-height: 205px; }
          .escrow-route__step--money { min-height: 220px !important; }
          .escrow-conversation { grid-template-columns: 1fr; margin-top: 40px; }
          .escrow-conversation__copy { padding: 27px 21px; }
          .escrow-conversation__status { padding: 21px; }
          .escrow-phone--payment { width: 262px; }
          .escrow-payment__caption { right: -4px; bottom: 9px; }
          .escrow-offers { grid-template-columns: 1fr; padding: 34px 24px; }
          .escrow-phone--offers { width: 195px; }
          .escrow-document { padding: 31px 24px; }
          .escrow-stores { display: grid; grid-template-columns: 1fr; }
          .escrow-store-badge { min-width: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .escrow-page *, .escrow-page *::before, .escrow-page *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
          .escrow-nav__cta:hover, .escrow-button:hover, .escrow-store-badge:hover { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) { .escrow-page { --paper: #f7f6f1; } }
      `}</style>

      <section className="escrow-hero">
        <div className="escrow-shell">
          <nav className="escrow-nav" aria-label="Navegação principal">
            <a href="?" className="escrow-brand" aria-label="97plantões, página inicial">
              <img src="./logo.svg" alt="" />
              <span>97<span>plantões</span></span>
            </a>
            <div className="escrow-nav__links">
              <a href="#como-funciona">Como protege</a>
              <a href="#prova">Ver o app</a>
              <a href="#duvidas">Dúvidas</a>
            </div>
            <a href="#baixar" className="escrow-nav__cta">Baixar o app</a>
          </nav>

          <div className="escrow-hero__content">
            <div className="escrow-hero__copy">
              <span className="escrow-kicker">Plantão confirmado, valor protegido</span>
              <h1 className="escrow-title">O acordo acontece <em>antes</em> do plantão. O repasse, depois.</h1>
              <p className="escrow-hero__lead">No 97plantões, você combina com outro médico, confirma pelo app e deixa o pagamento protegido até a realização do plantão.</p>
              <div className="escrow-actions">
                <a href="#baixar" className="escrow-button escrow-button--lime">Baixar 97plantões <ArrowDown size={17} aria-hidden="true" /></a>
                <a href="#como-funciona" className="escrow-button escrow-button--quiet">Entender o fluxo <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
              <div className="escrow-hero__notes" aria-label="Pontos de confiança">
                <div className="escrow-hero__note"><strong>01 · CRM</strong>Comunidade voltada a médicos com CRM verificado.</div>
                <div className="escrow-hero__note"><strong>02 · Acordo</strong>Detalhes do plantão e conversa em um só lugar.</div>
                <div className="escrow-hero__note"><strong>03 · Repasse</strong>Valor processado depois que o plantão acontece.</div>
              </div>
            </div>

            <div className="escrow-hero__visual" aria-label="Tela real de pagamento protegido no aplicativo">
              <div className="escrow-proof-label">COMPROVAÇÃO NO APP<span>Pagamento no fluxo de confirmação</span></div>
              <PhoneEvidence className="escrow-phone--hero" src="./unnamed (5).png" alt="Tela real de método de pagamento do 97plantões" label="Método de pagamento" />
              <div className="escrow-hero__stamp"><b>Valor protegido</b><span>até a realização do plantão</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="escrow-flow" aria-label="Fluxo da confirmação">
        <div className="escrow-shell escrow-flow__inner">
          <div className="escrow-flow__intro">O fluxo que transforma um plantão combinado em uma confirmação clara.</div>
          {[
            ['01', 'CRM verificado'],
            ['02', 'Detalhes claros'],
            ['03', 'Conversa privada'],
            ['04', 'Pagamento protegido'],
            ['05', 'Repasse'],
          ].map(([number, label]) => (
            <div className="escrow-flow__item" key={number}>
              <small>{number}</small>
              <strong>{label}</strong>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section id="prova" className="escrow-proof escrow-section">
        <div className="escrow-shell escrow-proof__grid">
          <PhoneEvidence className="escrow-phone--details" src="./unnamed (4).png" alt="Tela real com detalhes de um plantão no 97plantões" label="Detalhes do plantão" />
          <div className="escrow-proof__copy">
            <span className="escrow-eyebrow">Antes de confirmar</span>
            <h2>Você vê o plantão como ele é.</h2>
            <p>Unidade, especialidade, data, horário, valor e quem está oferecendo aparecem no fluxo. Informação suficiente para decidir com segurança — sem depender de conversas soltas.</p>
            <ul className="escrow-checklist">
              <li><BadgeCheck size={19} aria-hidden="true" /><span><b>Quem oferece:</b> identificação e CRM do médico responsável.</span></li>
              <li><Building2 size={19} aria-hidden="true" /><span><b>Onde e quando:</b> unidade, data, início, saída e período.</span></li>
              <li><CircleDollarSign size={19} aria-hidden="true" /><span><b>Quanto:</b> valor do plantão apresentado antes do pagamento.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="escrow-sequence escrow-section">
        <div className="escrow-shell">
          <div className="escrow-sequence__head">
            <div className="escrow-section__heading">
              <span className="escrow-eyebrow">Cinco confirmações</span>
              <h2>Um plantão não deveria depender só de mensagem.</h2>
            </div>
            <p>O 97plantões organiza o que os dois médicos precisam checar, combinar e registrar para seguir tranquilos.</p>
          </div>

          <div className="escrow-route">
            <article className="escrow-route__step">
              <span className="escrow-route__number">01 / COMUNIDADE</span>
              <BadgeCheck className="escrow-route__icon" size={22} aria-hidden="true" />
              <h3>CRM entra antes do combinado.</h3>
              <p>O cadastro é destinado a médicos e considera a validade do CRM informado para criar uma rede profissional mais confiável.</p>
            </article>
            <article className="escrow-route__step">
              <span className="escrow-route__number">02 / PLANTÃO</span>
              <ClipboardCheck className="escrow-route__icon" size={22} aria-hidden="true" />
              <h3>Condições no mesmo lugar.</h3>
              <p>Quem vai assumir pode consultar detalhes da oferta antes de avançar — da unidade ao valor e à jornada.</p>
            </article>
            <article className="escrow-route__step">
              <span className="escrow-route__number">03 / ALINHAMENTO</span>
              <MessageCircleMore className="escrow-route__icon" size={22} aria-hidden="true" />
              <h3>Conversem antes da confirmação.</h3>
              <p>Use a conversa privada para ajustar o que faz diferença na passagem do plantão.</p>
            </article>
            <article className="escrow-route__step escrow-route__step--money">
              <span className="escrow-route__number">04 / CUSTÓDIA</span>
              <LockKeyhole className="escrow-route__icon" size={22} aria-hidden="true" />
              <h3>O valor fica protegido.</h3>
              <p>Cartão, PIX ou boleto entram no fluxo de confirmação. O valor é processado após a realização do plantão.</p>
            </article>
            <article className="escrow-route__step">
              <span className="escrow-route__number">05 / REPASSE</span>
              <WalletCards className="escrow-route__icon" size={22} aria-hidden="true" />
              <h3>Plantão feito, repasse processado.</h3>
              <p>Depois da realização, o pagamento é encaminhado à conta bancária pessoal do médico que assumiu.</p>
            </article>
          </div>

          <div className="escrow-conversation">
            <div className="escrow-conversation__copy">
              <span className="escrow-eyebrow">Conversa privada</span>
              <h3>O detalhe que evita ruído.</h3>
              <p>Confirmação não é adivinhação. A conversa entre os médicos ajuda a alinhar informações importantes antes do plantão.</p>
              <div className="escrow-message">Olá, Dra. Ana. Confirmando: entrada às 7h e passagem com a equipe às 6h45.<small>Conversa entre médicos · privada</small></div>
            </div>
            <div className="escrow-conversation__status">
              <div className="escrow-status-card">
                <span>Checklist de confirmação</span>
                <b>Alinhamento registrado.</b>
                <div><Check size={17} aria-hidden="true" /> pronto para seguir ao pagamento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="escrow-payment escrow-section">
        <div className="escrow-shell escrow-payment__grid">
          <div className="escrow-payment__copy">
            <span className="escrow-kicker">Confirmação que protege</span>
            <h2>O pagamento não é uma promessa. É uma etapa visível do acordo.</h2>
            <p>Escolha o método dentro do app e confirme o plantão com um fluxo claro. O valor é protegido até a realização do plantão, trazendo mais segurança aos dois lados.</p>
            <ul className="escrow-ledger">
              <li><CreditCard size={19} aria-hidden="true" /><span>Cartão, boleto ou PIX</span><small>método</small></li>
              <li><ShieldCheck size={19} aria-hidden="true" /><span>Valor protegido até a realização</span><small>proteção</small></li>
              <li><CalendarClock size={19} aria-hidden="true" /><span>Repasse após o plantão</span><small>conclusão</small></li>
            </ul>
          </div>
          <div className="relative">
            <PhoneEvidence className="escrow-phone--payment" src="./unnamed (5).png" alt="Tela real com opções de pagamento cartão, boleto e PIX no 97plantões" label="Pagamento protegido" />
            <div className="escrow-payment__caption">TELA REAL · CARTÃO / BOLETO / PIX</div>
          </div>
        </div>
      </section>

      <section className="escrow-section">
        <div className="escrow-shell escrow-proof-grid">
          <div className="escrow-offers">
            <PhoneEvidence className="escrow-phone--offers" src="./unnamed (3).png" alt="Tela real com ofertas de plantões no 97plantões" label="Ofertas disponíveis" />
            <div className="escrow-offers__copy">
              <span className="escrow-eyebrow">Tudo começa na oferta</span>
              <h3>Mais contexto para quem vai assumir.</h3>
              <p>Explore plantões e compare informações importantes antes de abrir os detalhes. A decisão começa com uma oferta organizada.</p>
            </div>
          </div>
          <div className="escrow-document">
            <span className="escrow-eyebrow">Registro de confirmação</span>
            <div className="escrow-document__line"><span>Médico responsável</span><b>CRM verificado</b></div>
            <div className="escrow-document__line"><span>Detalhes do plantão</span><b>Revisados</b></div>
            <div className="escrow-document__line"><span>Pagamento</span><b>Protegido</b></div>
            <div className="escrow-document__line"><span>Repasse</span><b>Após realização</b></div>
            <div className="escrow-document__seal">acordo<br />mais claro</div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="escrow-faq escrow-section">
        <div className="escrow-shell escrow-faq__grid">
          <div className="escrow-faq__aside">
            <span className="escrow-eyebrow">Dúvidas frequentes</span>
            <h2>Confiança pede respostas claras.</h2>
            <p>Veja como funciona a comunidade, a conversa entre médicos e o pagamento.</p>
          </div>
          <div className="escrow-faq-list">
            {faqs.map((faq) => <div key={faq.question}><Faq {...faq} /></div>)}
          </div>
        </div>
      </section>

      <section id="baixar" className="escrow-download">
        <div className="escrow-shell escrow-download__grid">
          <div>
            <span className="escrow-eyebrow">97plantões no seu bolso</span>
            <h2>Confirme com mais clareza. Trabalhe com mais tranquilidade.</h2>
            <p>Encontre ou passe plantões em uma comunidade feita para médicos, com confirmação e pagamento organizados no app.</p>
          </div>
          <div className="escrow-stores" aria-label="Baixe o aplicativo nas lojas">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
