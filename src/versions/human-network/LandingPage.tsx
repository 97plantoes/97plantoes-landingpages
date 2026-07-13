import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Download,
  MapPinned,
  Menu,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  X,
} from 'lucide-react';
import Footer from './Footer';

const storeLinks = {
  apple: 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669',
  google: 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes',
};

const handoffSteps = [
  {
    number: '01',
    icon: <CalendarClock size={22} />,
    title: 'Publique com contexto',
    copy: 'Especialidade, unidade, horário e valor ficam claros antes de qualquer candidatura.',
  },
  {
    number: '02',
    icon: <UsersRound size={22} />,
    title: 'Escolha com confiança',
    copy: 'Conecte-se a médicos com CRM verificado e alinhe os detalhes pelo chat privado.',
  },
  {
    number: '03',
    icon: <CircleDollarSign size={22} />,
    title: 'Feche com segurança',
    copy: 'O valor fica protegido e o repasse acontece após a realização do plantão.',
  },
];

const faqs = [
  {
    question: 'Preciso pagar para publicar um plantão?',
    answer: 'Não. Publicar um plantão no aplicativo é gratuito. Você informa os detalhes e a oferta fica disponível para médicos cadastrados.',
  },
  {
    question: 'Como sei quem está assumindo o plantão?',
    answer: 'A plataforma é exclusiva para médicos e verifica o CRM informado. Você também pode consultar o perfil e conversar pelo chat antes da confirmação.',
  },
  {
    question: 'O que acontece com o valor do plantão?',
    answer: 'O pagamento fica protegido durante o processo e é repassado ao médico responsável após a conclusão do plantão, conforme a modalidade escolhida.',
  },
];

function StoreLink({ store }: { store: 'apple' | 'google' }) {
  const apple = store === 'apple';
  return (
    <a className="handoff-store" href={apple ? storeLinks.apple : storeLinks.google} target="_blank" rel="noopener noreferrer">
      {apple ? (
        <svg viewBox="0 0 384 512" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
      ) : (
        <svg viewBox="0 0 512 512" aria-hidden="true">
          <path fill="#4caf50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" /><path fill="#2196f3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" /><path fill="#ffeb3b" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" /><path fill="#f44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499z" />
        </svg>
      )}
      <span><small>{apple ? 'Baixe na' : 'Disponível no'}</small><b>{apple ? 'App Store' : 'Google Play'}</b></span>
    </a>
  );
}

function FaqItem({ question, answer, open, onToggle }: { key?: React.Key; question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <article className="handoff-faq-item">
      <button onClick={onToggle} aria-expanded={open} className="handoff-faq-button">
        <span>{question}</span>
        <i>{open ? <X size={17} /> : <ChevronDown size={19} />}</i>
      </button>
      {open && <p>{answer}</p>}
    </article>
  );
}

export default function LandingPageTemplate({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [faqOpen, setFaqOpen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="handoff-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .handoff-page { --ink: #123152; --blue: #1d588f; --sky: #94d7e4; --mint: #e7f8ee; --green: #3a9a62; --paper: #f8fafb; --coral: #ef725f; color: var(--ink); background: var(--paper); font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; overflow: hidden; }
        .handoff-page * { box-sizing: border-box; }
        .handoff-page a:focus-visible, .handoff-page button:focus-visible { outline: 3px solid #ef725f; outline-offset: 4px; }
        .handoff-nav { width: min(1200px, calc(100% - 32px)); height: 83px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 5; }
        .handoff-logo { display: inline-flex; align-items: center; gap: 10px; color: var(--ink); text-decoration: none; font-weight: 700; letter-spacing: -.06em; font-size: 1.25rem; }
        .handoff-logo img { width: 38px; height: 38px; padding: 3px; object-fit: contain; border-radius: 11px; background: var(--ink); }
        .handoff-logo em { color: var(--blue); font-style: normal; }
        .handoff-nav-links { display: flex; align-items: center; gap: 27px; }
        .handoff-nav-links a { color: #4f647b; font-size: .82rem; font-weight: 700; text-decoration: none; }
        .handoff-nav-links a:hover { color: var(--blue); }
        .handoff-nav-cta, .handoff-primary, .handoff-outline { display: inline-flex; align-items: center; justify-content: center; gap: 9px; text-decoration: none; font-weight: 700; border-radius: 8px; transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
        .handoff-nav-cta { padding: 11px 16px; color: #fff; background: var(--ink); font-size: .78rem; }
        .handoff-nav-cta:hover, .handoff-primary:hover, .handoff-store:hover { transform: translateY(-2px); box-shadow: 0 12px 20px rgba(18,49,82,.15); }
        .handoff-nav-cta:active, .handoff-primary:active, .handoff-store:active { transform: scale(.98); }
        .handoff-menu { display: none; border: 0; color: var(--ink); background: transparent; cursor: pointer; }
        .handoff-hero { padding: 44px 16px 89px; position: relative; }
        .handoff-hero::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 540px; z-index: 0; background: linear-gradient(124deg, #e9f8fa 0%, #e9f8fa 54%, #d5eff2 54%, #d5eff2 100%); clip-path: polygon(0 0, 100% 0, 100% 82%, 65% 100%, 0 92%); }
        .handoff-hero-inner { width: min(1200px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, .94fr) minmax(430px, 1.06fr); align-items: center; gap: 64px; position: relative; z-index: 1; }
        .handoff-label { display: inline-flex; gap: 8px; align-items: center; color: var(--blue); font-family: 'DM Mono', monospace; font-size: .68rem; font-weight: 500; letter-spacing: .08em; }
        .handoff-label i { width: 21px; height: 21px; display: grid; place-items: center; color: #fff; background: var(--blue); border-radius: 50%; }
        .handoff-hero h1 { max-width: 620px; margin: 21px 0; color: var(--ink); font-size: clamp(3.2rem, 5.6vw, 5.6rem); line-height: .94; letter-spacing: -.09em; }
        .handoff-hero h1 b { color: var(--blue); font-weight: inherit; }
        .handoff-hero-copy { max-width: 540px; margin: 0; color: #4d657d; font-size: clamp(1rem, 1.4vw, 1.13rem); line-height: 1.7; }
        .handoff-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .handoff-primary { padding: 15px 19px; color: #fff; background: var(--blue); box-shadow: 0 9px 17px rgba(29,88,143,.19); }
        .handoff-outline { padding: 14px 18px; color: var(--ink); background: #fff; border: 1px solid #bfdde3; }
        .handoff-outline:hover { background: #eef8f9; }
        .handoff-hero-note { display: flex; gap: 18px; flex-wrap: wrap; margin-top: 34px; color: #52718a; font-size: .72rem; font-weight: 700; }
        .handoff-hero-note span { display: inline-flex; align-items: center; gap: 7px; }
        .handoff-hero-note svg { color: var(--green); }
        .handoff-board { min-height: 490px; position: relative; padding: 20px; background: #fff; border: 1px solid #c8e2e7; box-shadow: 14px 14px 0 #b7e1e5; }
        .handoff-board::after { content: ''; position: absolute; width: 58%; height: 44%; right: -1px; top: -1px; border-left: 1px solid #c8e2e7; border-bottom: 1px solid #c8e2e7; pointer-events: none; }
        .handoff-board-heading { display: flex; align-items: center; justify-content: space-between; padding: 2px 2px 18px; position: relative; z-index: 1; }
        .handoff-board-heading p { margin: 0; color: #587890; font-family: 'DM Mono', monospace; font-size: .61rem; letter-spacing: .08em; }
        .handoff-board-heading span { display: inline-flex; align-items: center; gap: 5px; color: var(--green); font-size: .64rem; font-weight: 700; }
        .handoff-board-heading i { width: 7px; height: 7px; border-radius: 50%; background: var(--green); }
        .handoff-profile { width: 54%; min-height: 205px; position: relative; z-index: 1; padding: 20px; display: flex; flex-direction: column; justify-content: flex-end; color: #fff; background: var(--ink); overflow: hidden; }
        .handoff-profile::before { content: ''; position: absolute; inset: 0; opacity: .37; background: linear-gradient(180deg, transparent, #123152), url('./doctor_using_the_app.jpg') center/cover; }
        .handoff-profile span, .handoff-profile h2, .handoff-profile p { position: relative; z-index: 1; }
        .handoff-profile span { font-family: 'DM Mono', monospace; font-size: .59rem; letter-spacing: .07em; color: #c9eef1; }
        .handoff-profile h2 { margin: 8px 0 3px; font-size: 1.24rem; letter-spacing: -.05em; }
        .handoff-profile p { margin: 0; font-size: .75rem; color: #c6d7e5; }
        .handoff-verified { position: absolute; z-index: 2; left: 20px; top: 19px; display: inline-flex; gap: 5px; align-items: center; padding: 6px 8px; color: #1c6c42; background: #e5f8dd; font-size: .57rem; font-family: 'DM Mono', monospace; font-weight: 500; letter-spacing: .04em; }
        .handoff-shift { position: absolute; z-index: 2; right: 20px; top: 75px; width: 47%; padding: 17px; color: var(--ink); background: #fff3d8; border: 1px solid #f1d7a5; box-shadow: 7px 7px 0 #f1d7a5; transform: rotate(2.2deg); }
        .handoff-shift > span { color: #9c6a15; font-family: 'DM Mono', monospace; font-size: .56rem; letter-spacing: .065em; }
        .handoff-shift h3 { margin: 11px 0 13px; font-size: 1.1rem; line-height: 1; letter-spacing: -.045em; }
        .handoff-shift-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding-top: 11px; border-top: 1px solid #e2c898; }
        .handoff-shift-grid small { display: block; color: #936d30; font-family: 'DM Mono', monospace; font-size: .51rem; letter-spacing: .04em; }
        .handoff-shift-grid b { display: block; margin-top: 3px; font-size: .73rem; }
        .handoff-confirm { position: absolute; z-index: 3; right: 40px; bottom: 51px; display: flex; align-items: center; gap: 9px; padding: 12px; background: #e8f8eb; border: 1px solid #b7dfc2; color: #245b39; box-shadow: 5px 5px 0 #b7dfc2; font-size: .68rem; font-weight: 700; }
        .handoff-confirm i { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: var(--green); }
        .handoff-board-footer { position: absolute; left: 20px; right: 20px; bottom: 18px; display: flex; justify-content: space-between; padding-top: 13px; border-top: 1px solid #d7e7ec; color: #587890; font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .07em; }
        .handoff-strip { border-top: 1px solid #c7e3e7; border-bottom: 1px solid #c7e3e7; background: #fff; overflow: hidden; }
        .handoff-strip-track { width: max-content; display: flex; animation: handoff-scroll 34s linear infinite; }
        .handoff-strip span { display: inline-flex; align-items: center; gap: 13px; padding: 15px 18px; color: var(--blue); white-space: nowrap; font-family: 'DM Mono', monospace; font-size: .67rem; font-weight: 500; letter-spacing: .055em; }
        .handoff-strip svg { color: var(--coral); }
        @keyframes handoff-scroll { to { transform: translateX(-50%); } }
        .handoff-section { padding: clamp(76px, 10vw, 136px) 16px; }
        .handoff-container { width: min(1200px, 100%); margin: 0 auto; }
        .handoff-overline { margin: 0 0 14px; color: var(--blue); font-family: 'DM Mono', monospace; font-size: .68rem; letter-spacing: .09em; }
        .handoff-heading { max-width: 760px; margin: 0; font-size: clamp(2.4rem, 4.6vw, 4.55rem); line-height: .98; letter-spacing: -.08em; }
        .handoff-heading b { color: var(--blue); font-weight: inherit; }
        .handoff-intro { max-width: 500px; margin: 20px 0 0; color: #536b83; line-height: 1.7; }
        .handoff-steps { margin-top: 57px; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #b7d8df; border-bottom: 1px solid #b7d8df; }
        .handoff-step { min-height: 305px; padding: 27px 28px; position: relative; border-right: 1px solid #b7d8df; display: flex; flex-direction: column; }
        .handoff-step:last-child { border-right: 0; }
        .handoff-step-number { color: #83a6b5; font-family: 'DM Mono', monospace; font-size: .67rem; }
        .handoff-step-icon { width: 43px; height: 43px; display: grid; place-items: center; margin: 38px 0 auto; color: #fff; background: var(--blue); }
        .handoff-step:nth-child(2) .handoff-step-icon { background: var(--coral); }
        .handoff-step:nth-child(3) .handoff-step-icon { background: var(--green); }
        .handoff-step h3 { margin: 23px 0 8px; font-size: 1.27rem; letter-spacing: -.05em; }
        .handoff-step p { max-width: 290px; margin: 0; color: #60758b; font-size: .86rem; line-height: 1.57; }
        .handoff-map-section { color: #fff; background: var(--ink); }
        .handoff-map-layout { display: grid; grid-template-columns: .75fr 1.25fr; align-items: center; gap: clamp(42px, 9vw, 130px); }
        .handoff-map-section .handoff-overline { color: var(--sky); }
        .handoff-map-section .handoff-heading b { color: var(--sky); }
        .handoff-map-section .handoff-intro { color: #b6ccd9; }
        .handoff-map-points { display: grid; gap: 13px; margin-top: 35px; }
        .handoff-map-points span { display: flex; align-items: center; gap: 10px; color: #d3e4ed; font-size: .82rem; font-weight: 600; }
        .handoff-map-points i { width: 26px; height: 26px; display: grid; place-items: center; color: var(--ink); background: var(--sky); border-radius: 50%; }
        .handoff-map { min-height: 440px; position: relative; overflow: hidden; background: #163b60; border: 1px solid rgba(148,215,228,.34); }
        .handoff-map::before { content: ''; position: absolute; inset: -35px; opacity: .33; background: repeating-linear-gradient(26deg, transparent 0 42px, #94d7e4 43px 44px, transparent 45px 88px), repeating-linear-gradient(122deg, transparent 0 54px, #94d7e4 55px 56px, transparent 57px 110px); }
        .handoff-map::after { content: ''; position: absolute; width: 500px; height: 310px; top: 88px; left: 18%; border: 1px solid #94d7e4; border-radius: 51% 49% 53% 47%; transform: rotate(-21deg); opacity: .47; }
        .handoff-map-line { position: absolute; z-index: 1; width: 340px; height: 190px; right: 21%; top: 28%; border: 2px dashed var(--sky); border-left: 0; border-bottom: 0; border-radius: 0 130px 0 0; transform: rotate(14deg); }
        .handoff-pin { position: absolute; z-index: 2; width: 50px; height: 50px; display: grid; place-items: center; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); color: var(--ink); background: #fff; box-shadow: 0 7px 0 rgba(0,0,0,.16); }
        .handoff-pin svg { transform: rotate(45deg); }
        .handoff-pin.one { left: 18%; top: 58%; } .handoff-pin.two { right: 24%; top: 24%; background: var(--sky); } .handoff-pin.three { right: 14%; bottom: 16%; background: #d8f3df; }
        .handoff-map-card { position: absolute; z-index: 3; left: 11%; bottom: 10%; padding: 15px; color: var(--ink); background: #fff; box-shadow: 7px 7px 0 rgba(148,215,228,.48); }
        .handoff-map-card small { color: #638097; font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .07em; }
        .handoff-map-card b { display: block; margin-top: 6px; font-size: .91rem; letter-spacing: -.03em; }
        .handoff-video-layout { display: grid; grid-template-columns: 1.14fr .86fr; align-items: center; gap: clamp(38px, 8vw, 110px); }
        .handoff-video { position: relative; overflow: hidden; background: var(--ink); box-shadow: 13px 13px 0 #b7e1e5; }
        .handoff-video video { display: block; width: 100%; aspect-ratio: 16 / 9.5; object-fit: cover; }
        .handoff-video-label { position: absolute; left: 15px; bottom: 15px; display: inline-flex; gap: 7px; align-items: center; padding: 8px 10px; color: #fff; background: rgba(18,49,82,.83); font-family: 'DM Mono', monospace; font-size: .58rem; letter-spacing: .06em; }
        .handoff-video-label i { width: 7px; height: 7px; background: var(--coral); border-radius: 50%; }
        .handoff-video-copy .handoff-primary { margin-top: 28px; }
        .handoff-faq-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: clamp(40px, 8vw, 125px); align-items: start; }
        .handoff-faq-list { border-top: 1px solid #bed8df; }
        .handoff-faq-item { border-bottom: 1px solid #bed8df; }
        .handoff-faq-button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 21px 0; color: var(--ink); background: transparent; border: 0; text-align: left; cursor: pointer; font: inherit; font-size: 1rem; font-weight: 700; letter-spacing: -.035em; }
        .handoff-faq-button i { flex: 0 0 33px; width: 33px; height: 33px; display: grid; place-items: center; color: var(--blue); background: #e7f6f8; border-radius: 50%; }
        .handoff-faq-item p { max-width: 570px; margin: -3px 42px 20px 0; color: #5e748a; line-height: 1.65; font-size: .86rem; }
        .handoff-download { padding: clamp(78px, 10vw, 127px) 16px; color: #fff; background: #1d588f; position: relative; overflow: hidden; }
        .handoff-download::before { content: ''; position: absolute; z-index: 0; width: 590px; height: 590px; right: -220px; top: -370px; border: 1px solid rgba(255,255,255,.47); border-radius: 50%; box-shadow: 0 0 0 45px rgba(255,255,255,.07), 0 0 0 90px rgba(255,255,255,.04); }
        .handoff-download-inner { width: min(1200px, 100%); margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 35px; align-items: center; position: relative; z-index: 1; }
        .handoff-download .handoff-overline { color: #d6f4f5; }
        .handoff-download h2 { max-width: 710px; margin: 0; font-size: clamp(2.55rem, 5vw, 5rem); line-height: .97; letter-spacing: -.085em; }
        .handoff-download h2 b { color: #d9f5df; font-weight: inherit; }
        .handoff-download p { max-width: 570px; margin: 19px 0 0; color: #d7ebef; line-height: 1.7; }
        .handoff-stores { display: grid; gap: 10px; min-width: 190px; }
        .handoff-store { display: flex; align-items: center; gap: 11px; padding: 10px 15px; color: #fff; background: #101820; border: 1px solid rgba(255,255,255,.18); text-decoration: none; transition: transform .18s ease, box-shadow .18s ease; }
        .handoff-store svg { width: 28px; height: 28px; flex: 0 0 28px; fill: currentColor; }
        .handoff-store span { display: grid; gap: 1px; }
        .handoff-store small { font-size: .54rem; letter-spacing: .04em; }
        .handoff-store b { font-size: 1rem; letter-spacing: -.04em; }
        @media (max-width: 880px) {
          .handoff-hero-inner, .handoff-map-layout, .handoff-video-layout, .handoff-faq-layout { grid-template-columns: 1fr; }
          .handoff-hero-inner { gap: 49px; }
          .handoff-board { width: min(100%, 620px); justify-self: center; }
          .handoff-steps { grid-template-columns: 1fr; }
          .handoff-step { min-height: 210px; border-right: 0; border-bottom: 1px solid #b7d8df; }
          .handoff-step:last-child { border-bottom: 0; }
          .handoff-step-icon { margin: 23px 0 auto; }
          .handoff-download-inner { display: flex; flex-direction: column; align-items: flex-start; }
          .handoff-stores { grid-template-columns: repeat(2, 1fr); min-width: 0; }
        }
        @media (max-width: 640px) {
          .handoff-nav { width: calc(100% - 28px); height: 69px; }
          .handoff-nav-links, .handoff-nav-cta { display: none; }
          .handoff-menu { display: block; }
          .handoff-mobile-menu { position: absolute; left: 14px; right: 14px; top: 62px; z-index: 9; display: grid; padding: 12px; background: #fff; border: 1px solid #bcdce2; box-shadow: 7px 7px 0 #b7e1e5; }
          .handoff-mobile-menu a { padding: 11px; color: var(--ink); font-weight: 700; text-decoration: none; }
          .handoff-hero { padding: 29px 14px 68px; }
          .handoff-hero::before { height: 680px; clip-path: polygon(0 0,100% 0,100% 94%,55% 100%,0 94%); }
          .handoff-hero h1 { font-size: clamp(3rem, 14vw, 4.4rem); }
          .handoff-actions { display: grid; }
          .handoff-primary, .handoff-outline { width: 100%; }
          .handoff-hero-note { display: grid; gap: 10px; }
          .handoff-board { min-height: 443px; padding: 13px; box-shadow: 8px 8px 0 #b7e1e5; }
          .handoff-profile { width: 62%; min-height: 188px; padding: 15px; }
          .handoff-shift { right: 13px; top: 67px; width: 48%; padding: 13px; }
          .handoff-confirm { right: 26px; bottom: 45px; font-size: .61rem; }
          .handoff-board-footer { left: 13px; right: 13px; }
          .handoff-section { padding-left: 18px; padding-right: 18px; }
          .handoff-heading { font-size: clamp(2.42rem, 12vw, 3.4rem); }
          .handoff-map { min-height: 355px; }
          .handoff-map-card { left: 14px; bottom: 15px; }
          .handoff-map-line { transform: scale(.72) rotate(14deg); transform-origin: top right; }
          .handoff-download { padding-left: 18px; padding-right: 18px; }
          .handoff-stores { width: 100%; grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) { .handoff-page *, .handoff-page *::before, .handoff-page *::after { animation: none !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
      `}</style>

      <nav className="handoff-nav" aria-label="Navegação principal">
        <a className="handoff-logo" href="#" aria-label="97plantões, início"><img src="./logo.svg" alt="" /><span>97<em>plantões</em></span></a>
        <div className="handoff-nav-links"><a href="#como-funciona">Como funciona</a><a href="#mapa">Mapa</a><a href="#perguntas">Dúvidas</a><a href="?page=sobre-nos">Sobre nós</a></div>
        <a className="handoff-nav-cta" href="#baixar">Baixar o app <ArrowUpRight size={15} /></a>
        <button className="handoff-menu" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="handoff-mobile-menu"><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#mapa" onClick={() => setMenuOpen(false)}>Mapa</a><a href="#perguntas" onClick={() => setMenuOpen(false)}>Dúvidas</a><a href="#baixar" onClick={() => setMenuOpen(false)}>Baixar o app</a></div>}
      </nav>

      <section className="handoff-hero" aria-labelledby="handoff-title">
        <div className="handoff-hero-inner">
          <div>
            <span className="handoff-label"><i><UsersRound size={12} /></i> DE MÉDICO PARA MÉDICO</span>
            <h1 id="handoff-title">Seu plantão continua em <b>boas mãos.</b></h1>
            <p className="handoff-hero-copy">Uma forma direta de encontrar oportunidades ou passar um plantão, com contexto, profissionais verificados e segurança até o repasse.</p>
            <div className="handoff-actions"><a className="handoff-primary" href="#baixar">Entrar na 97plantões <ArrowRight size={18} /></a><a className="handoff-outline" href="#como-funciona">Ver como funciona</a></div>
            <div className="handoff-hero-note"><span><BadgeCheck size={16} /> CRM verificado</span><span><ShieldCheck size={16} /> Dados protegidos</span><span><MessageCircle size={16} /> Chat privado</span></div>
          </div>
          <div className="handoff-board" aria-label="Prévia de uma passagem de plantão confirmada">
            <div className="handoff-board-heading"><p>REGISTRO DE PASSAGEM · 05/06</p><span><i /> EM ANDAMENTO</span></div>
            <div className="handoff-profile"><span>MÉDICO RESPONSÁVEL</span><h2>Luís Otávio</h2><p>Clínica médica · CRM/RJ</p></div>
            <span className="handoff-verified"><BadgeCheck size={12} /> CRM VERIFICADO</span>
            <div className="handoff-shift"><span>PLANTÃO A SER PASSADO</span><h3>Hospital São Lucas</h3><div className="handoff-shift-grid"><div><small>INÍCIO</small><b>09:00</b></div><div><small>PERÍODO</small><b>8 horas</b></div><div><small>ÁREA</small><b>Emergência</b></div><div><small>VALOR</small><b>R$ 1.300</b></div></div></div>
            <div className="handoff-confirm"><i><Check size={15} /></i><span>Conversa iniciada<br /><b>Detalhes alinhados</b></span></div>
            <div className="handoff-board-footer"><span>97PLANTÕES · CONEXÃO SEGURA</span><span>ETAPA 02/03</span></div>
          </div>
        </div>
      </section>

      <section className="handoff-strip" aria-label="Benefícios da plataforma"><div className="handoff-strip-track">{[...Array(2)].flatMap(() => ['OFERTAS COM CONTEXTO', 'CRM VERIFICADO', 'CHAT PRIVADO', 'PAGAMENTO PROTEGIDO', 'AGENDA INTEGRADA']).map((item, index) => <span key={index}>{item}<Stethoscope size={15} /></span>)}</div></section>

      <section id="como-funciona" className="handoff-section">
        <div className="handoff-container"><p className="handoff-overline">A PASSAGEM QUE A ROTINA PEDE</p><h2 className="handoff-heading">Quando o plantão muda de mãos, a confiança precisa <b>acompanhar.</b></h2><p className="handoff-intro">A 97plantões organiza o essencial para que ambos os médicos saibam exatamente onde estão e o que acontece depois.</p>
          <div className="handoff-steps">{handoffSteps.map((step) => <article className="handoff-step" key={step.number}><span className="handoff-step-number">{step.number}</span><span className="handoff-step-icon">{step.icon}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
        </div>
      </section>

      <section id="mapa" className="handoff-section handoff-map-section">
        <div className="handoff-container handoff-map-layout">
          <div><p className="handoff-overline">PROCURE PERTO OU PLANEJE LONGE</p><h2 className="handoff-heading">O mapa transforma distância em <b>contexto.</b></h2><p className="handoff-intro">Encontre plantões pela localização, especialidade e período. A oportunidade certa aparece com as informações que importam para decidir.</p><div className="handoff-map-points"><span><i><MapPinned size={14} /></i> Visualize oportunidades por proximidade</span><span><i><CalendarClock size={14} /></i> Compare horário, duração e data</span><span><i><Stethoscope size={14} /></i> Filtre pela sua especialidade</span></div></div>
          <div className="handoff-map" aria-label="Mapa estilizado de oportunidades"><i className="handoff-map-line" /><span className="handoff-pin one"><Stethoscope size={19} /></span><span className="handoff-pin two"><Stethoscope size={19} /></span><span className="handoff-pin three"><Stethoscope size={19} /></span><div className="handoff-map-card"><small>PRÓXIMA OPORTUNIDADE</small><b>Emergência · 3,4 km</b></div></div>
        </div>
      </section>

      <section className="handoff-section">
        <div className="handoff-container handoff-video-layout">
          <div className="handoff-video"><span className="handoff-video-label"><i /> TOUR PELO APLICATIVO</span><video controls playsInline poster="./doctor_using_the_app.jpg"><source src="./NoveSeteVideo.mp4" type="video/mp4" />Seu navegador não suporta reprodução de vídeo.</video></div>
          <div className="handoff-video-copy"><p className="handoff-overline">TUDO NO LUGAR CERTO</p><h2 className="handoff-heading">O app acompanha a conversa, a decisão e o <b>compromisso.</b></h2><p className="handoff-intro">Do mapa à agenda, veja como a 97plantões oferece uma visão clara da sua rotina — sem depender de múltiplos canais.</p><a className="handoff-primary" href="#baixar">Conhecer o aplicativo <ArrowRight size={18} /></a></div>
        </div>
      </section>

      <section id="perguntas" className="handoff-section">
        <div className="handoff-container handoff-faq-layout"><div><p className="handoff-overline">O QUE VOCÊ QUER SABER</p><h2 className="handoff-heading">Respostas claras antes de você <b>começar.</b></h2><p className="handoff-intro">A plataforma foi desenhada para uma comunidade médica segura e uma experiência transparente.</p></div><div className="handoff-faq-list">{faqs.map((faq, index) => <FaqItem key={faq.question} question={faq.question} answer={faq.answer} open={faqOpen === index} onToggle={() => setFaqOpen(faqOpen === index ? -1 : index)} />)}</div></div>
      </section>

      <section id="baixar" className="handoff-download"><div className="handoff-download-inner"><div><p className="handoff-overline">CONEXÕES QUE RESPEITAM A SUA ROTINA</p><h2>Você não precisa encaixar mais um sistema na sua <b>vida.</b></h2><p>Baixe a 97plantões para encontrar, ofertar e acompanhar plantões em um só lugar — com o cuidado que a rotina médica pede.</p></div><div className="handoff-stores"><StoreLink store="apple" /><StoreLink store="google" /></div></div></section>
      <Footer />
    </main>
  );
}
