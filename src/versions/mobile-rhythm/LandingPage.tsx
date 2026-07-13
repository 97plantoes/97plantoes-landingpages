import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Download,
  MapPin,
  MessageCircle,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import Footer from './Footer';

type Shift = {
  specialty: string;
  location: string;
  date: string;
  time: string;
  amount: string;
  tone: string;
};

const shifts: Shift[] = [
  {
    specialty: 'Emergência · Adulto',
    location: 'Hospital São Lucas',
    date: 'SEX · 05 JUN',
    time: '09:00 — 17:00',
    amount: 'R$ 1.300',
    tone: 'violet',
  },
  {
    specialty: 'CTI · Pediátrico',
    location: 'Hospital Lourenço Jorge',
    date: 'SÁB · 06 JUN',
    time: '07:00 — 19:00',
    amount: 'R$ 1.350',
    tone: 'lime',
  },
  {
    specialty: 'Ultrassonografia',
    location: 'Clínica da Família',
    date: 'DOM · 07 JUN',
    time: '08:00 — 14:00',
    amount: 'R$ 800',
    tone: 'coral',
  },
];

const faqs = [
  {
    question: 'Quem pode usar a 97plantões?',
    answer:
      'A plataforma é exclusiva para médicos. O CRM é verificado para manter as conexões entre profissionais em um ambiente confiável.',
  },
  {
    question: 'Como encontro um plantão que combine com minha rotina?',
    answer:
      'Use os filtros por especialidade, período e localização. Você também pode visualizar as oportunidades no mapa e organizar seus compromissos pela agenda.',
  },
  {
    question: 'Quando o pagamento é repassado?',
    answer:
      'Depois da realização do plantão, o valor é processado e repassado à conta bancária do médico responsável conforme a modalidade escolhida.',
  },
];

function StoreButton({ store }: { store: 'apple' | 'google' }) {
  const isApple = store === 'apple';
  const href = isApple
    ? 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669'
    : 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rhythm-store"
      aria-label={isApple ? 'Baixar na App Store' : 'Baixar no Google Play'}
    >
      {isApple ? (
        <svg viewBox="0 0 384 512" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      ) : (
        <svg viewBox="0 0 512 512" aria-hidden="true">
          <path fill="#4CAF50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
          <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
          <path fill="#FFEB3B" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
          <path fill="#F44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499z" />
        </svg>
      )}
      <span>
        <small>{isApple ? 'Baixe na' : 'Disponível no'}</small>
        <strong>{isApple ? 'App Store' : 'Google Play'}</strong>
      </span>
    </a>
  );
}

function Faq({ question, answer, open, onToggle }: { key?: React.Key; question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <article className="rhythm-faq">
      <button className="rhythm-faq-trigger" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span>
        <span className="rhythm-faq-mark" aria-hidden="true">{open ? <X size={18} /> : <ArrowDown size={18} />}</span>
      </button>
      {open && <p>{answer}</p>}
    </article>
  );
}

export default function LandingPageTemplate({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [activeShift, setActiveShift] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shift = shifts[activeShift];

  const changeShift = (direction: 1 | -1) => {
    setActiveShift((current) => (current + direction + shifts.length) % shifts.length);
  };

  return (
    <main className="rhythm-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .rhythm-page {
          --ink: #171729;
          --paper: #f7f7fb;
          --violet: #7047eb;
          --violet-deep: #4420a8;
          --lime: #d7ff54;
          --coral: #ff7b68;
          --mist: #e8e8f3;
          background: var(--paper);
          color: var(--ink);
          font-family: Manrope, ui-sans-serif, system-ui, sans-serif;
          overflow: hidden;
        }
        .rhythm-page * { box-sizing: border-box; }
        .rhythm-page a:focus-visible,
        .rhythm-page button:focus-visible {
          outline: 3px solid var(--lime);
          outline-offset: 4px;
        }
        .rhythm-nav {
          width: min(1180px, calc(100% - 32px));
          height: 76px;
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .rhythm-brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; font-weight: 800; letter-spacing: -.05em; font-size: 1.22rem; }
        .rhythm-brand img { width: 38px; height: 38px; border-radius: 12px; background: #fff; padding: 3px; }
        .rhythm-brand em { color: var(--lime); font-style: normal; }
        .rhythm-nav-links { display: flex; align-items: center; gap: 28px; }
        .rhythm-nav-links a { color: #d7d5e8; font-size: .82rem; text-decoration: none; font-weight: 700; }
        .rhythm-nav-links a:hover { color: #fff; }
        .rhythm-nav-cta, .rhythm-primary, .rhythm-secondary {
          border: 0; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-weight: 800; transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .rhythm-nav-cta { background: var(--lime); color: var(--ink); padding: 12px 18px; font-size: .78rem; }
        .rhythm-nav-cta:hover, .rhythm-primary:hover, .rhythm-secondary:hover, .rhythm-store:hover { transform: translateY(-2px); }
        .rhythm-nav-cta:active, .rhythm-primary:active, .rhythm-secondary:active, .rhythm-store:active { transform: scale(.97); }
        .rhythm-hero {
          min-height: 760px;
          padding: 164px 16px 80px;
          position: relative;
          color: #fff;
          background:
            radial-gradient(circle at 84% 20%, rgba(215,255,84,.2), transparent 18rem),
            radial-gradient(circle at 7% 92%, rgba(112,71,235,.8), transparent 32rem),
            linear-gradient(122deg, #111120 0%, #171529 56%, #261651 100%);
        }
        .rhythm-hero::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .32;
          background-image: linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px);
          background-size: 52px 52px; mask-image: linear-gradient(180deg, #000, transparent 92%);
        }
        .rhythm-hero-inner { width: min(1180px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, .98fr) minmax(390px, .83fr); gap: clamp(40px, 8vw, 112px); align-items: center; position: relative; z-index: 1; }
        .rhythm-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 11px 7px 8px; border-radius: 99px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); color: #e5e1ff; font-family: 'DM Mono', monospace; font-size: .68rem; letter-spacing: .04em; }
        .rhythm-eyebrow i { width: 20px; height: 20px; display: grid; place-items: center; border-radius: 50%; background: var(--lime); color: var(--ink); }
        .rhythm-hero h1 { max-width: 650px; margin: 22px 0; font-size: clamp(3rem, 5.4vw, 5.35rem); line-height: .98; letter-spacing: -.075em; font-weight: 800; }
        .rhythm-hero h1 b { color: var(--lime); font-weight: inherit; }
        .rhythm-hero-copy { max-width: 530px; margin: 0; color: #cfccdf; font-size: clamp(1rem, 1.5vw, 1.18rem); line-height: 1.72; }
        .rhythm-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
        .rhythm-primary { background: var(--lime); color: var(--ink); padding: 15px 21px; box-shadow: 0 10px 30px rgba(215,255,84,.15); }
        .rhythm-secondary { color: #fff; background: transparent; border: 1px solid rgba(255,255,255,.28); padding: 14px 20px; }
        .rhythm-secondary:hover { background: rgba(255,255,255,.09); }
        .rhythm-proof { display: flex; flex-wrap: wrap; gap: 15px 24px; margin-top: 42px; color: #d8d5eb; font-size: .76rem; font-weight: 700; }
        .rhythm-proof span { display: inline-flex; align-items: center; gap: 7px; }
        .rhythm-proof svg { color: var(--lime); }
        .rhythm-stage { width: min(100%, 430px); justify-self: end; position: relative; padding: 25px 13px 20px; border-radius: 40px; background: linear-gradient(155deg, rgba(255,255,255,.2), rgba(255,255,255,.03)); border: 1px solid rgba(255,255,255,.22); box-shadow: 0 28px 80px rgba(0,0,0,.32); backdrop-filter: blur(18px); }
        .rhythm-stage::before { content: ''; position: absolute; z-index: -1; width: 280px; height: 280px; border: 1px solid rgba(215,255,84,.45); border-radius: 50%; right: -85px; top: -86px; }
        .rhythm-stage-top { display: flex; align-items: center; justify-content: space-between; padding: 0 10px 15px; color: #fff; }
        .rhythm-stage-top span { display: inline-flex; align-items: center; gap: 7px; font-family: 'DM Mono', monospace; font-size: .66rem; letter-spacing: .07em; color: #e6e4ef; }
        .rhythm-stage-top i { width: 7px; height: 7px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 0 5px rgba(215,255,84,.15); }
        .rhythm-phone { min-height: 449px; overflow: hidden; border-radius: 29px; background: #f9f9fc; color: var(--ink); box-shadow: 0 13px 30px rgba(7,5,17,.38); }
        .rhythm-phone-head { display: flex; justify-content: space-between; align-items: center; padding: 21px 20px 15px; }
        .rhythm-phone-head p { margin: 0; color: #88849b; font-size: .68rem; font-weight: 800; letter-spacing: .08em; }
        .rhythm-phone-head h2 { margin: 5px 0 0; font-size: 1.15rem; letter-spacing: -.04em; }
        .rhythm-date { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 13px; background: #edeaff; color: var(--violet); }
        .rhythm-week { display: grid; grid-template-columns: repeat(7, 1fr); padding: 0 13px 16px; color: #9996a9; font-family: 'DM Mono', monospace; font-size: .6rem; text-align: center; }
        .rhythm-week b { color: var(--violet); }
        .rhythm-shift-card { margin: 0 13px; padding: 15px; border-radius: 20px; color: #fff; position: relative; overflow: hidden; transition: opacity .22s ease, transform .22s ease; }
        .rhythm-shift-card.violet { background: linear-gradient(135deg, #6e48e8, #4420a8); }
        .rhythm-shift-card.lime { background: linear-gradient(135deg, #a4d912, #5b9404); }
        .rhythm-shift-card.coral { background: linear-gradient(135deg, #ff927e, #db4e56); }
        .rhythm-shift-card::after { content: ''; width: 125px; height: 125px; position: absolute; border: 1px solid rgba(255,255,255,.28); border-radius: 50%; right: -47px; top: -58px; }
        .rhythm-shift-type { position: relative; z-index: 1; display: inline-block; font-family: 'DM Mono', monospace; font-weight: 500; font-size: .58rem; letter-spacing: .04em; opacity: .84; }
        .rhythm-shift-card h3 { position: relative; z-index: 1; margin: 10px 0 4px; font-size: 1.16rem; letter-spacing: -.045em; }
        .rhythm-shift-card p { position: relative; z-index: 1; margin: 0; font-size: .73rem; opacity: .84; }
        .rhythm-shift-meta { position: relative; z-index: 1; display: flex; justify-content: space-between; gap: 10px; border-top: 1px solid rgba(255,255,255,.25); margin-top: 18px; padding-top: 12px; font-family: 'DM Mono', monospace; font-size: .62rem; }
        .rhythm-shift-meta strong { font-size: .76rem; }
        .rhythm-card-controls { display: flex; align-items: center; justify-content: space-between; padding: 17px 16px 5px; }
        .rhythm-card-controls p { margin: 0; color: #918e9f; font-size: .66rem; font-weight: 800; }
        .rhythm-control-group { display: flex; gap: 7px; }
        .rhythm-control { width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid #e3e1eb; border-radius: 50%; background: #fff; color: var(--ink); cursor: pointer; }
        .rhythm-control:hover { color: var(--violet); border-color: var(--violet); }
        .rhythm-availability { position: absolute; left: -44px; bottom: 48px; padding: 11px 13px; display: flex; align-items: center; gap: 10px; border-radius: 15px; background: #fff; color: var(--ink); box-shadow: 0 14px 30px rgba(0,0,0,.2); font-size: .69rem; font-weight: 800; }
        .rhythm-availability i { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 9px; background: #e8ffad; color: #477600; }
        .rhythm-availability small { display: block; color: #8e899e; font-family: 'DM Mono', monospace; font-size: .54rem; letter-spacing: .04em; }
        .rhythm-marquee { padding: 14px 0; overflow: hidden; background: var(--lime); color: var(--ink); border-bottom: 1px solid #b5db3e; }
        .rhythm-marquee-track { display: flex; width: max-content; gap: 0; animation: rhythm-scroll 36s linear infinite; }
        .rhythm-marquee-item { display: inline-flex; align-items: center; gap: 20px; padding-right: 20px; white-space: nowrap; font-family: 'DM Mono', monospace; font-size: .72rem; font-weight: 500; letter-spacing: .025em; }
        .rhythm-marquee-item svg { width: 15px; }
        @keyframes rhythm-scroll { to { transform: translateX(-50%); } }
        .rhythm-section { padding: clamp(74px, 10vw, 140px) 16px; }
        .rhythm-container { width: min(1180px, 100%); margin: 0 auto; }
        .rhythm-overline { margin: 0 0 14px; color: var(--violet); font-family: 'DM Mono', monospace; font-size: .7rem; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; }
        .rhythm-heading { max-width: 720px; margin: 0; font-size: clamp(2.25rem, 4.4vw, 4.2rem); line-height: 1.01; letter-spacing: -.07em; }
        .rhythm-heading b { color: var(--violet); font-weight: inherit; }
        .rhythm-intro { max-width: 480px; margin: 20px 0 0; color: #696579; line-height: 1.7; font-size: 1rem; }
        .rhythm-lane { display: grid; grid-template-columns: .82fr 1.18fr; gap: clamp(36px, 7vw, 105px); align-items: center; }
        .rhythm-route { margin-top: 33px; display: grid; gap: 0; }
        .rhythm-route-item { display: grid; grid-template-columns: 36px 1fr; gap: 15px; padding: 0 0 25px; position: relative; }
        .rhythm-route-item:not(:last-child)::before { content: ''; position: absolute; left: 17px; top: 37px; height: calc(100% - 17px); border-left: 1px dashed #c9c6d6; }
        .rhythm-route-icon { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 13px; color: var(--violet); background: #eeeaff; }
        .rhythm-route-item h3 { margin: 5px 0 6px; font-size: .98rem; letter-spacing: -.03em; }
        .rhythm-route-item p { margin: 0; color: #716d80; line-height: 1.55; font-size: .83rem; }
        .rhythm-visual { min-height: 412px; position: relative; overflow: hidden; border-radius: 34px; padding: 25px; background: #1e1b34; color: #fff; box-shadow: 0 20px 45px rgba(34,25,68,.15); }
        .rhythm-visual::before { content: ''; position: absolute; inset: 0; opacity: .15; background-image: linear-gradient(30deg, transparent 49.3%, #d7ff54 49.5%, #d7ff54 50.5%, transparent 50.7%), linear-gradient(150deg, transparent 49.3%, #d7ff54 49.5%, #d7ff54 50.5%, transparent 50.7%); background-size: 96px 54px; }
        .rhythm-orbit { position: absolute; width: 360px; height: 360px; border: 1px solid rgba(215,255,84,.45); border-radius: 50%; left: 51%; top: 50%; transform: translate(-50%, -50%); }
        .rhythm-orbit::before, .rhythm-orbit::after { content: ''; position: absolute; border-radius: 50%; }
        .rhythm-orbit::before { width: 220px; height: 220px; left: 69px; top: 69px; border: 1px dashed rgba(255,255,255,.42); }
        .rhythm-orbit::after { width: 12px; height: 12px; left: 34px; top: 53px; background: var(--lime); box-shadow: 135px 255px 0 var(--coral), 251px 144px 0 #9781f6; }
        .rhythm-visual-card { position: relative; z-index: 1; width: min(100%, 320px); margin: 95px auto 0; padding: 20px; border-radius: 23px; background: rgba(255,255,255,.95); color: var(--ink); transform: rotate(-3deg); box-shadow: 0 24px 36px rgba(0,0,0,.28); }
        .rhythm-visual-card > span { color: #757186; font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .07em; }
        .rhythm-visual-card h3 { margin: 11px 0 17px; font-size: 1.18rem; letter-spacing: -.05em; }
        .rhythm-progress { height: 10px; display: flex; gap: 3px; }
        .rhythm-progress i { flex: 1; border-radius: 99px; background: #e7e5ed; }
        .rhythm-progress i:nth-child(1), .rhythm-progress i:nth-child(2) { background: var(--violet); }
        .rhythm-visual-card footer { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; font-size: .7rem; font-weight: 800; }
        .rhythm-visual-card footer b { color: #4a9829; }
        .rhythm-purpose { background: #ecebfa; position: relative; overflow: hidden; }
        .rhythm-purpose::after { content: '97'; position: absolute; right: -26px; bottom: -95px; color: rgba(112,71,235,.08); font-size: 30rem; line-height: .8; font-weight: 800; letter-spacing: -.12em; pointer-events: none; }
        .rhythm-purpose-head { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 50px; }
        .rhythm-purpose-head .rhythm-intro { margin-bottom: 4px; }
        .rhythm-tiles { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .rhythm-tile { min-height: 255px; padding: 24px; border-radius: 24px; background: #fff; border: 1px solid rgba(68,32,168,.1); display: flex; flex-direction: column; transition: transform .22s ease, box-shadow .22s ease; }
        .rhythm-tile:hover { transform: translateY(-5px); box-shadow: 0 17px 35px rgba(70,52,130,.13); }
        .rhythm-tile:nth-child(2) { background: var(--ink); color: #fff; }
        .rhythm-tile:nth-child(3) { background: var(--lime); }
        .rhythm-tile-icon { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 15px; background: #eeebff; color: var(--violet); }
        .rhythm-tile:nth-child(2) .rhythm-tile-icon { background: rgba(215,255,84,.15); color: var(--lime); }
        .rhythm-tile:nth-child(3) .rhythm-tile-icon { background: rgba(23,23,41,.1); color: var(--ink); }
        .rhythm-tile h3 { margin: auto 0 9px; font-size: 1.25rem; letter-spacing: -.05em; }
        .rhythm-tile p { margin: 0; color: #777388; line-height: 1.55; font-size: .82rem; }
        .rhythm-tile:nth-child(2) p { color: #c4c0d6; }
        .rhythm-tile:nth-child(3) p { color: #3d432d; }
        .rhythm-video-wrap { display: grid; grid-template-columns: .85fr 1.15fr; align-items: center; gap: clamp(35px, 7vw, 100px); }
        .rhythm-video-copy .rhythm-primary { margin-top: 31px; }
        .rhythm-video { position: relative; overflow: hidden; border-radius: 30px; background: #171729; box-shadow: 0 22px 48px rgba(23,23,41,.16); }
        .rhythm-video video { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
        .rhythm-video-tag { position: absolute; left: 18px; top: 18px; z-index: 1; display: inline-flex; align-items: center; gap: 7px; padding: 8px 10px; color: #fff; background: rgba(23,23,41,.72); backdrop-filter: blur(10px); border-radius: 999px; font-family: 'DM Mono', monospace; font-size: .61rem; }
        .rhythm-video-tag i { width: 8px; height: 8px; border-radius: 50%; background: var(--coral); }
        .rhythm-faq-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: clamp(35px, 8vw, 120px); align-items: start; }
        .rhythm-faq-list { border-top: 1px solid #d8d6e0; }
        .rhythm-faq { border-bottom: 1px solid #d8d6e0; }
        .rhythm-faq-trigger { width: 100%; padding: 22px 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; background: transparent; border: 0; color: var(--ink); text-align: left; cursor: pointer; font: inherit; font-size: .99rem; font-weight: 800; letter-spacing: -.03em; }
        .rhythm-faq-mark { flex: 0 0 33px; width: 33px; height: 33px; display: grid; place-items: center; border-radius: 50%; color: var(--violet); background: #eeebff; }
        .rhythm-faq p { max-width: 570px; margin: -3px 45px 21px 0; color: #716d80; line-height: 1.68; font-size: .86rem; }
        .rhythm-download { padding: clamp(70px, 10vw, 120px) 16px; color: #fff; background: linear-gradient(135deg, #4320a5, #21163f); position: relative; overflow: hidden; }
        .rhythm-download::before, .rhythm-download::after { content: ''; position: absolute; border-radius: 50%; pointer-events: none; }
        .rhythm-download::before { width: 700px; height: 700px; right: -320px; top: -420px; border: 1px solid rgba(215,255,84,.55); box-shadow: 0 0 0 70px rgba(215,255,84,.05), 0 0 0 140px rgba(215,255,84,.035); }
        .rhythm-download::after { width: 230px; height: 230px; left: -90px; bottom: -110px; background: rgba(255,123,104,.25); filter: blur(25px); }
        .rhythm-download-inner { width: min(1180px, 100%); margin: 0 auto; position: relative; z-index: 1; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 40px; }
        .rhythm-download h2 { max-width: 710px; margin: 0; color: #fff; font-size: clamp(2.45rem, 5vw, 5rem); line-height: .98; letter-spacing: -.075em; }
        .rhythm-download h2 b { color: var(--lime); font-weight: inherit; }
        .rhythm-download p { max-width: 550px; color: #d8d4e9; line-height: 1.7; margin: 19px 0 0; }
        .rhythm-store-stack { display: flex; flex-direction: column; gap: 10px; min-width: 185px; }
        .rhythm-store { min-width: 185px; display: flex; align-items: center; gap: 11px; padding: 10px 15px; color: #fff; background: #08080e; border: 1px solid rgba(255,255,255,.17); border-radius: 15px; text-decoration: none; transition: transform .18s ease; }
        .rhythm-store svg { width: 28px; height: 28px; flex: 0 0 28px; fill: currentColor; }
        .rhythm-store span { display: grid; gap: 1px; }
        .rhythm-store small { font-size: .54rem; line-height: 1; letter-spacing: .04em; }
        .rhythm-store strong { font-size: 1rem; letter-spacing: -.03em; }
        @media (max-width: 860px) {
          .rhythm-nav-links { display: none; }
          .rhythm-hero { min-height: auto; padding-top: 140px; }
          .rhythm-hero-inner, .rhythm-lane, .rhythm-video-wrap, .rhythm-faq-layout { grid-template-columns: 1fr; }
          .rhythm-stage { justify-self: center; width: min(100%, 430px); margin-top: 8px; }
          .rhythm-lane > *:first-child { max-width: 620px; }
          .rhythm-tiles { grid-template-columns: 1fr; }
          .rhythm-tile { min-height: 190px; }
          .rhythm-purpose-head, .rhythm-download-inner { display: flex; flex-direction: column; align-items: flex-start; }
          .rhythm-purpose-head { margin-bottom: 36px; }
          .rhythm-download-inner { gap: 32px; }
          .rhythm-store-stack { width: 100%; flex-direction: row; flex-wrap: wrap; }
        }
        @media (max-width: 520px) {
          .rhythm-nav { width: calc(100% - 28px); top: 10px; }
          .rhythm-nav-cta { padding: 10px 13px; }
          .rhythm-brand { font-size: 1.1rem; }
          .rhythm-brand img { width: 34px; height: 34px; }
          .rhythm-hero { padding: 124px 14px 62px; }
          .rhythm-hero h1 { font-size: clamp(2.8rem, 14vw, 4rem); }
          .rhythm-actions { display: grid; }
          .rhythm-primary, .rhythm-secondary { width: 100%; }
          .rhythm-proof { display: grid; gap: 11px; }
          .rhythm-stage { border-radius: 27px; padding: 10px 8px 13px; }
          .rhythm-phone { min-height: 420px; }
          .rhythm-availability { left: -2px; bottom: -15px; }
          .rhythm-stage-top { padding-bottom: 9px; }
          .rhythm-section { padding-left: 18px; padding-right: 18px; }
          .rhythm-heading { font-size: clamp(2.3rem, 12vw, 3.2rem); }
          .rhythm-visual { min-height: 350px; padding: 16px; }
          .rhythm-orbit { transform: translate(-50%, -50%) scale(.8); }
          .rhythm-visual-card { margin-top: 79px; }
          .rhythm-download { padding-left: 18px; padding-right: 18px; }
          .rhythm-store { min-width: 0; flex: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rhythm-page *, .rhythm-page *::before, .rhythm-page *::after { scroll-behavior: auto !important; animation: none !important; transition-duration: .01ms !important; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .rhythm-stage { background: #312267; backdrop-filter: none; }
          .rhythm-video-tag { background: #171729; backdrop-filter: none; }
        }
      `}</style>

      <section className="rhythm-hero" aria-labelledby="rhythm-title">
        <nav className="rhythm-nav" aria-label="Navegação principal">
          <a href="#" className="rhythm-brand" aria-label="97plantões, início">
            <img src="./logo.svg" alt="" />
            <span>97<em>plantões</em></span>
          </a>
          <div className="rhythm-nav-links">
            <a href="#fluxo">O fluxo</a>
            <a href="#recursos">Recursos</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </div>
          <a className="rhythm-nav-cta" href="#baixar">Baixar app <ArrowRight size={14} /></a>
        </nav>

        <div className="rhythm-hero-inner">
          <div>
            <span className="rhythm-eyebrow"><i><Sparkles size={12} /></i> SUA ROTINA, NO SEU RITMO</span>
            <h1 id="rhythm-title">Seu tempo tem valor.<br />Escolha cada <b>plantão</b> com clareza.</h1>
            <p className="rhythm-hero-copy">
              Uma experiência feita para médicos que querem decidir rápido, manter a agenda sob controle e entrar em cada plantão com tudo alinhado.
            </p>
            <div className="rhythm-actions">
              <a href="#baixar" className="rhythm-primary">Baixar a 97plantões <Download size={18} /></a>
              <a href="#fluxo" className="rhythm-secondary">Entenda o fluxo <ArrowDown size={17} /></a>
            </div>
            <div className="rhythm-proof" aria-label="Recursos principais">
              <span><BadgeCheck size={16} /> CRM verificado</span>
              <span><CalendarDays size={16} /> Agenda integrada</span>
              <span><ShieldCheck size={16} /> Pagamento protegido</span>
            </div>
          </div>

          <div className="rhythm-stage" aria-label="Prévia interativa de plantões no aplicativo">
            <div className="rhythm-stage-top">
              <span><i /> PLANTÕES AO SEU ALCANCE</span>
              <Smartphone size={17} />
            </div>
            <div className="rhythm-phone">
              <div className="rhythm-phone-head">
                <div><p>SUA SEMANA</p><h2>Agenda em ordem.</h2></div>
                <span className="rhythm-date"><CalendarDays size={18} /></span>
              </div>
              <div className="rhythm-week" aria-hidden="true">
                <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><b>SEX</b><span>SÁB</span><span>DOM</span>
              </div>
              <div className={`rhythm-shift-card ${shift.tone}`}>
                <span className="rhythm-shift-type">{shift.specialty}</span>
                <h3>{shift.location}</h3>
                <p><MapPin size={12} style={{ display: 'inline', verticalAlign: '-2px' }} /> Rio de Janeiro, RJ</p>
                <div className="rhythm-shift-meta"><span>{shift.date}<br />{shift.time}</span><strong>{shift.amount}</strong></div>
              </div>
              <div className="rhythm-card-controls">
                <p aria-live="polite">OFERTA {activeShift + 1} DE {shifts.length}</p>
                <div className="rhythm-control-group">
                  <button className="rhythm-control" onClick={() => changeShift(-1)} aria-label="Ver oferta anterior"><ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /></button>
                  <button className="rhythm-control" onClick={() => changeShift(1)} aria-label="Ver próxima oferta"><ArrowRight size={16} /></button>
                </div>
              </div>
            </div>
            <div className="rhythm-availability"><i><Check size={15} /></i><span><small>STATUS DA AGENDA</small> Você está disponível</span></div>
          </div>
        </div>
      </section>

      <section className="rhythm-marquee" aria-label="Capacidades do aplicativo">
        <div className="rhythm-marquee-track">
          {[...Array(2)].flatMap(() => ['ENCONTRE NO MAPA', 'CONVERSE COM SEGURANÇA', 'CONFIRME COM CLAREZA', 'RECEBA COM TRANQUILIDADE', 'ORGANIZE SUA AGENDA']).map((item, index) => (
            <span className="rhythm-marquee-item" key={index}>{item} <Sparkles /></span>
          ))}
        </div>
      </section>

      <section id="fluxo" className="rhythm-section">
        <div className="rhythm-container rhythm-lane">
          <div>
            <p className="rhythm-overline">UM FLUXO, SEM RUÍDO</p>
            <h2 className="rhythm-heading">Da oportunidade ao <b>repasse</b>, cada passo no lugar certo.</h2>
            <p className="rhythm-intro">Em vez de alternar entre mensagens, planilhas e lembretes, a 97plantões reúne a decisão e o acompanhamento em uma única rotina.</p>
            <div className="rhythm-route">
              <div className="rhythm-route-item"><span className="rhythm-route-icon"><MapPin size={18} /></span><div><h3>Encontre o contexto certo</h3><p>Veja plantões por especialidade, período e localização antes de se candidatar.</p></div></div>
              <div className="rhythm-route-item"><span className="rhythm-route-icon"><MessageCircle size={18} /></span><div><h3>Alinhe o que importa</h3><p>Converse pelo chat privado e confirme com segurança para os dois lados.</p></div></div>
              <div className="rhythm-route-item"><span className="rhythm-route-icon"><CircleDollarSign size={18} /></span><div><h3>Feche com previsibilidade</h3><p>O pagamento fica protegido e é processado após a realização do plantão.</p></div></div>
            </div>
          </div>
          <div className="rhythm-visual" aria-label="Representação visual do fluxo de plantões">
            <div className="rhythm-orbit" />
            <div className="rhythm-visual-card">
              <span>JUNHO · SUA SEMANA</span>
              <h3>Uma agenda que acompanha você.</h3>
              <div className="rhythm-progress" aria-label="Dois de quatro plantões confirmados"><i /><i /><i /><i /></div>
              <footer><span>2 PLANTÕES CONFIRMADOS</span><b>EM ORDEM</b></footer>
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="rhythm-section rhythm-purpose">
        <div className="rhythm-container">
          <div className="rhythm-purpose-head">
            <div><p className="rhythm-overline">O QUE PROTEGE A SUA ROTINA</p><h2 className="rhythm-heading">Menos atrito. <b>Mais presença</b> onde faz diferença.</h2></div>
            <p className="rhythm-intro">As escolhas de produto são simples por um motivo: a atenção do médico já é valiosa demais.</p>
          </div>
          <div className="rhythm-tiles">
            <article className="rhythm-tile"><span className="rhythm-tile-icon"><BadgeCheck size={21} /></span><h3>Comunidade verificada</h3><p>Profissionais passam por validação de CRM para que cada conexão comece com confiança.</p></article>
            <article className="rhythm-tile"><span className="rhythm-tile-icon"><Clock3 size={21} /></span><h3>Tempo à vista</h3><p>Datas, duração e valor aparecem antes da decisão. Sem procurar informação essencial.</p></article>
            <article className="rhythm-tile"><span className="rhythm-tile-icon"><Stethoscope size={21} /></span><h3>Feito para o plantão</h3><p>Mapa, agenda e painel falam a língua de uma rotina clínica que muda todos os dias.</p></article>
          </div>
        </div>
      </section>

      <section className="rhythm-section">
        <div className="rhythm-container rhythm-video-wrap">
          <div className="rhythm-video-copy">
            <p className="rhythm-overline">VEJA EM MOVIMENTO</p>
            <h2 className="rhythm-heading">A rotina fica mais leve quando ela <b>flui.</b></h2>
            <p className="rhythm-intro">Conheça as telas que ajudam você a encontrar, organizar e acompanhar oportunidades de plantão.</p>
            <a href="#baixar" className="rhythm-primary">Quero organizar meus plantões <ArrowRight size={18} /></a>
          </div>
          <div className="rhythm-video">
            <span className="rhythm-video-tag"><i /> DEMONSTRAÇÃO DO APP</span>
            <video controls playsInline poster="./doctor_using_the_app.jpg">
              <source src="./NoveSeteVideo.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>

      <section id="duvidas" className="rhythm-section">
        <div className="rhythm-container rhythm-faq-layout">
          <div><p className="rhythm-overline">SEM LETRA MIÚDA</p><h2 className="rhythm-heading">Perguntas de quem leva a rotina a sério.</h2><p className="rhythm-intro">Tudo o que você precisa saber para usar a plataforma com tranquilidade.</p></div>
          <div className="rhythm-faq-list">
            {faqs.map((faq, index) => <Faq key={faq.question} {...faq} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? null : index)} />)}
          </div>
        </div>
      </section>

      <section id="baixar" className="rhythm-download">
        <div className="rhythm-download-inner">
          <div>
            <p className="rhythm-overline" style={{ color: '#d7ff54' }}>PRONTO QUANDO VOCÊ ESTIVER</p>
            <h2>O próximo plantão pode caber melhor na sua <b>vida.</b></h2>
            <p>Baixe a 97plantões e tenha uma forma mais clara de encontrar oportunidades, organizar compromissos e se conectar com médicos verificados.</p>
          </div>
          <div className="rhythm-store-stack"><StoreButton store="apple" /><StoreButton store="google" /></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
