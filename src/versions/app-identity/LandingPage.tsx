import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Download,
  MapPinned,
  Menu,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  X,
} from 'lucide-react';
import Footer from './Footer';

const gallery = [
  { src: './unnamed.png', label: 'OFERTAS', title: 'Oportunidades que chegam com contexto', accent: '#ee5d51' },
  { src: './unnamed (1).png', label: 'MAPA', title: 'Localização para escolher melhor', accent: '#36bdd4' },
  { src: './unnamed (2).png', label: 'AGENDA', title: 'Uma semana que conversa com sua vida', accent: '#0d8caf' },
  { src: './unnamed (3).png', label: 'PAINEL', title: 'Cada conversa e pendência no lugar certo', accent: '#a3d900' },
  { src: './unnamed (4).png', label: 'DETALHES', title: 'A informação certa antes de confirmar', accent: '#f3b515' },
  { src: './unnamed (5).png', label: 'PAGAMENTO', title: 'A passagem de plantão segue protegida', accent: '#f2b515' },
];

const faqs = [
  {
    question: 'Por que completar meu perfil?',
    answer: 'Um perfil completo deixa suas informações profissionais mais claras para a comunidade e facilita uma conexão de confiança antes de um plantão.',
  },
  {
    question: 'Posso atualizar especialidades e dados depois?',
    answer: 'Sim. Seus dados de perfil podem ser atualizados no app sempre que necessário. Manter o cadastro em dia ajuda a apresentar sua atuação com clareza.',
  },
  {
    question: 'Como a 97plantões protege a comunidade?',
    answer: 'A plataforma é exclusiva para médicos e verifica o CRM informado. Também oferece comunicação privada e um fluxo de pagamento protegido.',
  },
];

function StoreButton({ store }: { store: 'apple' | 'google' }) {
  const apple = store === 'apple';
  const href = apple
    ? 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669'
    : 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';
  return (
    <a className="profile-store" href={href} target="_blank" rel="noopener noreferrer">
      {apple ? (
        <svg viewBox="0 0 384 512" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
      ) : (
        <svg viewBox="0 0 512 512" aria-hidden="true"><path fill="#4caf50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" /><path fill="#2196f3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" /><path fill="#ffeb3b" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" /><path fill="#f44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499z" /></svg>
      )}
      <span><small>{apple ? 'Baixe na' : 'Disponível no'}</small><b>{apple ? 'App Store' : 'Google Play'}</b></span>
    </a>
  );
}

function Faq({ question, answer, open, onToggle }: { key?: React.Key; question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <article className="profile-faq">
      <button className="profile-faq-button" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span><i>{open ? <X size={17} /> : <ChevronDown size={18} />}</i>
      </button>
      {open && <p>{answer}</p>}
    </article>
  );
}

export default function LandingPageTemplate({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [activeGallery, setActiveGallery] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);
  const [menu, setMenu] = useState(false);
  const active = gallery[activeGallery];

  return (
    <main className="profile-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Onest:wght@400;500;600;700;800&display=swap');
        .profile-page { --ink: #2d1353; --violet: #6419b0; --lilac: #efe5ff; --mist: #faf8fe; --lime: #aae000; --rose: #ed6359; --line: #dac8f5; color: var(--ink); background: var(--mist); font-family: Onest, ui-sans-serif, system-ui, sans-serif; overflow: hidden; }
        .profile-page * { box-sizing: border-box; }
        .profile-page a:focus-visible, .profile-page button:focus-visible { outline: 3px solid var(--lime); outline-offset: 4px; }
        .profile-nav { width: min(1190px, calc(100% - 32px)); height: 84px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 9; }
        .profile-brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; font-size: 1.24rem; font-weight: 800; letter-spacing: -.065em; text-decoration: none; }
        .profile-brand img { width: 39px; height: 39px; padding: 3px; background: #fff; border-radius: 13px; }
        .profile-brand em { color: var(--lime); font-style: normal; }
        .profile-links { display: flex; align-items: center; gap: 27px; }
        .profile-links a { color: #eee7fa; font-size: .82rem; font-weight: 700; text-decoration: none; }
        .profile-links a:hover { color: #fff; }
        .profile-nav-cta { display: inline-flex; align-items: center; gap: 8px; padding: 11px 16px; color: var(--ink); background: var(--lime); border-radius: 999px; font-size: .78rem; font-weight: 800; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease; }
        .profile-nav-cta:hover, .profile-primary:hover, .profile-store:hover { transform: translateY(-2px); box-shadow: 0 12px 22px rgba(25,4,61,.24); }
        .profile-menu { display: none; border: 0; color: #fff; background: transparent; cursor: pointer; }
        .profile-mobile-menu { position: absolute; top: 68px; left: 14px; right: 14px; z-index: 10; display: grid; padding: 11px; color: var(--ink); background: #fff; border: 1px solid #d5c0f8; box-shadow: 7px 7px 0 #b99bed; }
        .profile-mobile-menu a { padding: 10px; color: var(--ink); font-weight: 700; text-decoration: none; }
        .profile-hero { margin-top: -84px; padding: 151px 16px 100px; color: #fff; position: relative; background: radial-gradient(circle at 76% 26%, rgba(170,224,0,.23), transparent 20rem), radial-gradient(circle at 4% 90%, rgba(191,125,255,.45), transparent 30rem), linear-gradient(132deg, #32105f 0%, #4a148f 57%, #7614a9 100%); }
        .profile-hero::before { content: ''; position: absolute; inset: 0; opacity: .28; background-image: linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px); background-size: 47px 47px; mask-image: linear-gradient(180deg, #000, transparent 87%); }
        .profile-hero-grid { width: min(1190px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, .95fr) minmax(390px, .85fr); gap: clamp(46px, 9vw, 124px); align-items: center; position: relative; z-index: 1; }
        .profile-kicker { display: inline-flex; align-items: center; gap: 8px; padding: 6px 10px 6px 7px; color: #efebf7; background: rgba(255,255,255,.09); border: 1px solid rgba(255,255,255,.16); border-radius: 999px; font-family: 'DM Mono', monospace; font-size: .66rem; letter-spacing: .06em; }
        .profile-kicker i { width: 20px; height: 20px; display: grid; place-items: center; color: var(--ink); background: var(--lime); border-radius: 50%; }
        .profile-hero h1 { max-width: 640px; margin: 22px 0; font-size: clamp(3.15rem, 5.6vw, 5.55rem); line-height: .94; letter-spacing: -.095em; }
        .profile-hero h1 b { color: var(--lime); font-weight: inherit; }
        .profile-copy { max-width: 540px; margin: 0; color: #ded4ee; font-size: clamp(1rem, 1.4vw, 1.15rem); line-height: 1.72; }
        .profile-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 33px; }
        .profile-primary, .profile-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 14px 18px; border-radius: 999px; font-weight: 800; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
        .profile-primary { color: var(--ink); background: var(--lime); box-shadow: 0 8px 18px rgba(170,224,0,.18); }
        .profile-secondary { color: #fff; background: transparent; border: 1px solid rgba(255,255,255,.32); }
        .profile-secondary:hover { background: rgba(255,255,255,.1); }
        .profile-proof { display: flex; flex-wrap: wrap; gap: 15px 22px; margin-top: 35px; color: #e1d9ed; font-size: .72rem; font-weight: 700; }
        .profile-proof span { display: inline-flex; align-items: center; gap: 7px; }
        .profile-proof svg { color: var(--lime); }
        .profile-phone-stage { min-height: 615px; position: relative; display: grid; place-items: center; }
        .profile-phone-stage::before { content: ''; position: absolute; z-index: -1; width: 390px; height: 390px; border: 1px solid rgba(170,224,0,.65); border-radius: 50%; box-shadow: 0 0 0 34px rgba(170,224,0,.08), 0 0 0 68px rgba(170,224,0,.04); }
        .profile-phone { width: min(100%, 278px); padding: 9px; position: relative; z-index: 2; background: #18052f; border: 1px solid rgba(255,255,255,.32); border-radius: 41px; box-shadow: 0 28px 50px rgba(10,0,27,.37); }
        .profile-phone::before { content: ''; position: absolute; z-index: 3; top: 9px; left: 50%; transform: translateX(-50%); width: 94px; height: 19px; background: #18052f; border-radius: 0 0 14px 14px; }
        .profile-phone img { width: 100%; display: block; border-radius: 32px; }
        .profile-pass { width: 177px; position: absolute; z-index: 4; left: -62px; bottom: 62px; padding: 13px; color: var(--ink); background: #fff; border: 1px solid #d9c5f6; box-shadow: 7px 7px 0 var(--lime); transform: rotate(-5deg); }
        .profile-pass small { color: #78589a; font-family: 'DM Mono', monospace; font-size: .53rem; letter-spacing: .06em; }
        .profile-pass b { display: block; margin: 6px 0; font-size: .91rem; letter-spacing: -.04em; }
        .profile-pass span { display: flex; gap: 6px; align-items: center; color: #377819; font-size: .65rem; font-weight: 700; }
        .profile-peek { width: 144px; position: absolute; z-index: 1; right: -14px; top: 48px; padding: 5px; background: #fff; border: 1px solid #d2bcf5; box-shadow: 7px 7px 0 #c9a7f1; transform: rotate(7deg); }
        .profile-peek img { width: 100%; display: block; }
        .profile-marquee { overflow: hidden; background: var(--lime); color: var(--ink); }
        .profile-marquee-track { display: flex; width: max-content; animation: profile-scroll 34s linear infinite; }
        .profile-marquee span { display: inline-flex; align-items: center; gap: 13px; padding: 15px 18px; white-space: nowrap; font-family: 'DM Mono', monospace; font-size: .64rem; letter-spacing: .07em; }
        .profile-marquee svg { color: var(--violet); }
        @keyframes profile-scroll { to { transform: translateX(-50%); } }
        .profile-section { padding: clamp(76px, 10vw, 140px) 16px; }
        .profile-container { width: min(1190px, 100%); margin: 0 auto; }
        .profile-overline { margin: 0 0 14px; color: var(--violet); font-family: 'DM Mono', monospace; font-size: .67rem; letter-spacing: .09em; }
        .profile-heading { max-width: 760px; margin: 0; font-size: clamp(2.4rem, 4.6vw, 4.6rem); line-height: .98; letter-spacing: -.084em; }
        .profile-heading b { color: var(--violet); font-weight: inherit; }
        .profile-intro { max-width: 510px; margin: 20px 0 0; color: #675b79; line-height: 1.72; }
        .profile-credibility { display: grid; grid-template-columns: .92fr 1.08fr; gap: clamp(38px, 7vw, 104px); align-items: center; margin-top: 58px; }
        .profile-cred-board { min-height: 538px; position: relative; padding: 29px; overflow: hidden; background: #f0e7ff; border: 1px solid #d8c4f6; }
        .profile-cred-board::before { content: ''; position: absolute; right: -75px; top: -120px; width: 310px; height: 310px; border: 1px solid #b78de8; border-radius: 50%; box-shadow: 0 0 0 31px rgba(183,141,232,.16); }
        .profile-main-shot { width: min(100%, 236px); margin: 6px auto; position: relative; z-index: 2; padding: 7px; background: #fff; border: 1px solid #d4bdf5; box-shadow: 9px 9px 0 #c5a4ef; }
        .profile-main-shot img { display: block; width: 100%; }
        .profile-card-shot { width: 136px; position: absolute; z-index: 3; padding: 5px; background: #fff; }
        .profile-card-shot img { display: block; width: 100%; }
        .profile-card-shot.offer { left: 15px; bottom: 31px; border: 1px solid #f5b1a9; box-shadow: 6px 6px 0 #f4c0b9; transform: rotate(-8deg); }
        .profile-card-shot.panel { right: 21px; top: 41px; border: 1px solid #c6e67a; box-shadow: 6px 6px 0 #d2ed92; transform: rotate(7deg); }
        .profile-board-note { position: absolute; z-index: 4; top: 21px; left: 21px; display: inline-flex; align-items: center; gap: 6px; padding: 8px 9px; color: var(--ink); background: var(--lime); font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .06em; }
        .profile-cred-copy h3 { max-width: 470px; margin: 0; font-size: clamp(2.1rem, 3.6vw, 3.55rem); line-height: 1; letter-spacing: -.07em; }
        .profile-cred-copy h3 b { color: var(--violet); font-weight: inherit; }
        .profile-cred-copy > p { max-width: 500px; color: #695f78; line-height: 1.7; }
        .profile-points { margin-top: 28px; display: grid; gap: 15px; }
        .profile-point { display: grid; grid-template-columns: 32px 1fr; gap: 12px; align-items: start; }
        .profile-point i { width: 32px; height: 32px; display: grid; place-items: center; color: var(--violet); background: var(--lilac); border-radius: 50%; }
        .profile-point b { display: block; font-size: .92rem; letter-spacing: -.035em; }
        .profile-point p { margin: 4px 0 0; color: #786d87; font-size: .81rem; line-height: 1.55; }
        .profile-gallery-section { color: #fff; background: var(--ink); position: relative; overflow: hidden; }
        .profile-gallery-section::after { content: ''; position: absolute; z-index: 0; right: -205px; bottom: -260px; width: 680px; height: 680px; border: 1px solid rgba(170,224,0,.4); border-radius: 50%; box-shadow: 0 0 0 60px rgba(170,224,0,.05), 0 0 0 120px rgba(170,224,0,.03); }
        .profile-gallery-section .profile-overline { color: #c9f35b; }
        .profile-gallery-section .profile-heading b { color: var(--lime); }
        .profile-gallery-intro { max-width: 540px; margin: 20px 0 0; color: #d6cae3; line-height: 1.72; }
        .profile-gallery-grid { position: relative; z-index: 1; margin-top: 52px; display: grid; grid-template-columns: .77fr 1.23fr; gap: clamp(35px, 7vw, 96px); align-items: center; }
        .profile-gallery-list { display: grid; border-top: 1px solid rgba(225,206,246,.3); }
        .profile-gallery-item { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 16px 0; color: #cabcd8; background: transparent; border: 0; border-bottom: 1px solid rgba(225,206,246,.3); text-align: left; cursor: pointer; font: inherit; font-size: .9rem; font-weight: 700; }
        .profile-gallery-item small { font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .06em; color: #8d7ba2; }
        .profile-gallery-item.active { color: #fff; }
        .profile-gallery-item.active small { color: var(--lime); }
        .profile-gallery-item.active span::after { content: ''; display: block; width: 31px; height: 3px; margin-top: 7px; background: var(--lime); }
        .profile-gallery-display { min-height: 515px; display: grid; grid-template-columns: 230px 1fr; gap: 39px; align-items: center; position: relative; z-index: 1; padding: 30px; background: rgba(255,255,255,.06); border: 1px solid rgba(225,206,246,.3); }
        .profile-gallery-phone { padding: 6px; background: #fff; box-shadow: 8px 8px 0 var(--lime); }
        .profile-gallery-phone img { width: 100%; display: block; }
        .profile-gallery-copy p { margin: 0 0 11px; color: var(--lime); font-family: 'DM Mono', monospace; font-size: .62rem; letter-spacing: .07em; }
        .profile-gallery-copy h3 { margin: 0; font-size: clamp(1.8rem, 2.8vw, 2.8rem); line-height: 1.02; letter-spacing: -.065em; }
        .profile-gallery-copy span { display: block; margin-top: 18px; color: #d0c3db; line-height: 1.65; font-size: .9rem; }
        .profile-bridge { display: grid; grid-template-columns: 1.18fr .82fr; gap: clamp(38px, 8vw, 105px); align-items: center; }
        .profile-video { position: relative; overflow: hidden; background: var(--ink); box-shadow: 10px 10px 0 #c6a3ef; }
        .profile-video video { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
        .profile-video-label { position: absolute; z-index: 1; left: 15px; top: 15px; display: inline-flex; align-items: center; gap: 7px; padding: 8px 10px; color: #fff; background: rgba(45,19,83,.8); font-family: 'DM Mono', monospace; font-size: .56rem; letter-spacing: .07em; }
        .profile-video-label i { width: 7px; height: 7px; border-radius: 50%; background: var(--rose); }
        .profile-bridge-copy .profile-primary { margin-top: 29px; }
        .profile-faq-layout { display: grid; grid-template-columns: .81fr 1.19fr; gap: clamp(40px, 8vw, 126px); align-items: start; }
        .profile-faq-list { border-top: 1px solid var(--line); }
        .profile-faq { border-bottom: 1px solid var(--line); }
        .profile-faq-button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 17px; padding: 21px 0; color: var(--ink); background: transparent; border: 0; cursor: pointer; font: inherit; font-size: 1rem; font-weight: 700; text-align: left; }
        .profile-faq-button i { flex: 0 0 33px; width: 33px; height: 33px; display: grid; place-items: center; color: var(--violet); background: var(--lilac); border-radius: 50%; }
        .profile-faq p { margin: -3px 43px 20px 0; color: #6c617b; line-height: 1.67; font-size: .86rem; }
        .profile-download-section { padding: clamp(78px, 10vw, 130px) 16px; color: #fff; background: linear-gradient(132deg, #6c17ab, #3b0a73); position: relative; overflow: hidden; }
        .profile-download-section::before { content: ''; position: absolute; width: 520px; height: 520px; left: -250px; top: -335px; border: 1px solid rgba(170,224,0,.55); border-radius: 50%; box-shadow: 0 0 0 38px rgba(170,224,0,.07), 0 0 0 76px rgba(170,224,0,.04); }
        .profile-download-grid { width: min(1190px, 100%); margin: 0 auto; position: relative; z-index: 1; display: grid; grid-template-columns: 1fr auto; gap: 35px; align-items: center; }
        .profile-download-section .profile-overline { color: var(--lime); }
        .profile-download-section h2 { max-width: 710px; margin: 0; font-size: clamp(2.55rem, 5vw, 5rem); line-height: .96; letter-spacing: -.087em; }
        .profile-download-section h2 b { color: var(--lime); font-weight: inherit; }
        .profile-download-section p { max-width: 565px; margin: 20px 0 0; color: #ddceed; line-height: 1.7; }
        .profile-stores { display: grid; gap: 10px; min-width: 190px; }
        .profile-store { display: flex; align-items: center; gap: 11px; padding: 10px 15px; color: #fff; background: #0f071c; border: 1px solid rgba(255,255,255,.18); border-radius: 13px; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease; }
        .profile-store svg { width: 28px; height: 28px; flex: 0 0 28px; fill: currentColor; }
        .profile-store span { display: grid; gap: 1px; }
        .profile-store small { font-size: .53rem; letter-spacing: .04em; }
        .profile-store b { font-size: 1rem; letter-spacing: -.04em; }
        @media (max-width: 900px) {
          .profile-hero-grid, .profile-credibility, .profile-gallery-grid, .profile-bridge, .profile-faq-layout { grid-template-columns: 1fr; }
          .profile-phone-stage { min-height: 575px; width: min(100%, 490px); margin: 0 auto; }
          .profile-gallery-grid { gap: 35px; }
          .profile-gallery-list { grid-template-columns: repeat(2, 1fr); column-gap: 23px; }
          .profile-gallery-display { grid-template-columns: 228px 1fr; }
          .profile-download-grid { display: flex; flex-direction: column; align-items: flex-start; }
          .profile-stores { grid-template-columns: repeat(2, 1fr); min-width: 0; }
        }
        @media (max-width: 640px) {
          .profile-nav { width: calc(100% - 28px); height: 70px; }
          .profile-links, .profile-nav-cta { display: none; }
          .profile-menu { display: block; }
          .profile-hero { margin-top: -70px; padding: 126px 14px 70px; }
          .profile-hero h1 { font-size: clamp(3rem, 14vw, 4.3rem); }
          .profile-actions { display: grid; }
          .profile-primary, .profile-secondary { width: 100%; }
          .profile-proof { display: grid; gap: 10px; }
          .profile-phone-stage { min-height: 545px; }
          .profile-phone { width: 248px; }
          .profile-peek { width: 119px; right: -6px; top: 42px; }
          .profile-pass { width: 157px; left: -2px; bottom: 18px; }
          .profile-section { padding-left: 18px; padding-right: 18px; }
          .profile-heading { font-size: clamp(2.42rem, 12vw, 3.45rem); }
          .profile-cred-board { min-height: 490px; padding: 21px 12px; }
          .profile-main-shot { width: 214px; }
          .profile-card-shot { width: 112px; }
          .profile-card-shot.offer { left: 4px; bottom: 24px; }
          .profile-card-shot.panel { right: 5px; top: 34px; }
          .profile-gallery-list { grid-template-columns: 1fr; }
          .profile-gallery-display { min-height: 0; grid-template-columns: 1fr; padding: 20px; }
          .profile-gallery-phone { width: 205px; justify-self: center; }
          .profile-download-section { padding-left: 18px; padding-right: 18px; }
          .profile-stores { width: 100%; grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) { .profile-page *, .profile-page *::before, .profile-page *::after { animation: none !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
      `}</style>

      <nav className="profile-nav" aria-label="Navegação principal">
        <a className="profile-brand" href="#" aria-label="97plantões, início"><img src="./logo.svg" alt="" /><span>97<em>plantões</em></span></a>
        <div className="profile-links"><a href="#perfil">Seu perfil</a><a href="#produto">Produto real</a><a href="#duvidas">Dúvidas</a><a href="?page=sobre-nos">Sobre nós</a></div>
        <a className="profile-nav-cta" href="#baixar">Baixar o app <ArrowUpRight size={15} /></a>
        <button className="profile-menu" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        {menu && <div className="profile-mobile-menu"><a href="#perfil" onClick={() => setMenu(false)}>Seu perfil</a><a href="#produto" onClick={() => setMenu(false)}>Produto real</a><a href="#duvidas" onClick={() => setMenu(false)}>Dúvidas</a><a href="#baixar" onClick={() => setMenu(false)}>Baixar o app</a></div>}
      </nav>

      <section className="profile-hero" aria-labelledby="profile-title">
        <div className="profile-hero-grid">
          <div>
            <span className="profile-kicker"><i><UserRoundCheck size={12} /></i> UMA PRESENÇA PROFISSIONAL, NO SEU RITMO</span>
            <h1 id="profile-title">Seu perfil não é só cadastro. É o começo de uma <b>boa conexão.</b></h1>
            <p className="profile-copy">Mostre sua atuação, mantenha sua rotina organizada e entre em cada plantão com um contexto que inspira confiança nos dois lados.</p>
            <div className="profile-actions"><a href="#baixar" className="profile-primary">Construir meu perfil <ArrowRight size={18} /></a><a href="#perfil" className="profile-secondary">Conhecer a experiência</a></div>
            <div className="profile-proof"><span><BadgeCheck size={16} /> CRM verificado</span><span><MessageSquare size={16} /> Conversas privadas</span><span><ShieldCheck size={16} /> Dados protegidos</span></div>
          </div>
          <div className="profile-phone-stage" aria-label="Tela real de perfil do aplicativo">
            <div className="profile-peek"><img src="./unnamed (3).png" alt="Tela de painel do aplicativo" /></div>
            <div className="profile-phone"><img src="./unnamed (6).png" alt="Tela de perfil do médico no aplicativo 97plantões" /></div>
            <div className="profile-pass"><small>PERFIL PROFISSIONAL</small><b>Informações que chegam antes da conversa.</b><span><Check size={14} /> Mais clareza a cada conexão</span></div>
          </div>
        </div>
      </section>

      <section className="profile-marquee" aria-label="Recursos do aplicativo"><div className="profile-marquee-track">{[...Array(2)].flatMap(() => ['PERFIL COMPLETO', 'CRM VERIFICADO', 'OFERTAS COM CONTEXTO', 'AGENDA INTEGRADA', 'PAGAMENTO PROTEGIDO']).map((item, index) => <span key={index}>{item}<Sparkles size={14} /></span>)}</div></section>

      <section id="perfil" className="profile-section">
        <div className="profile-container"><p className="profile-overline">A CONEXÃO COMEÇA ANTES DO PLANTÃO</p><h2 className="profile-heading">Uma boa decisão fica mais simples quando todo mundo chega com o <b>contexto certo.</b></h2><p className="profile-intro">O perfil, as ofertas e o painel formam uma presença contínua no app — para que você não precise recomeçar do zero a cada oportunidade.</p>
          <div className="profile-credibility">
            <div className="profile-cred-board" aria-label="Colagem de telas reais de perfil, ofertas e painel"><span className="profile-board-note"><UserRoundCheck size={12} /> A SUA PRESENÇA NO APP</span><div className="profile-main-shot"><img src="./unnamed (6).png" alt="Tela real de perfil" /></div><div className="profile-card-shot offer"><img src="./unnamed.png" alt="Tela real de ofertas" /></div><div className="profile-card-shot panel"><img src="./unnamed (3).png" alt="Tela real de painel" /></div></div>
            <div className="profile-cred-copy"><h3>O profissional vem primeiro. O app organiza o <b>resto.</b></h3><p>Quando o básico está claro, cada candidatura, conversa e confirmação tem menos atrito — e uma rotina mais fácil de acompanhar.</p><div className="profile-points"><div className="profile-point"><i><BadgeCheck size={16} /></i><span><b>Uma comunidade reconhecível</b><p>O CRM é verificado para preservar uma rede exclusivamente médica.</p></span></div><div className="profile-point"><i><CalendarDays size={16} /></i><span><b>Uma rotina que permanece à vista</b><p>Agenda, ofertas e painel mantêm os próximos passos próximos de você.</p></span></div><div className="profile-point"><i><CircleDollarSign size={16} /></i><span><b>Uma confirmação com consequência clara</b><p>O fluxo de pagamento protege a passagem de plantão até o repasse.</p></span></div></div></div>
          </div>
        </div>
      </section>

      <section id="produto" className="profile-section profile-gallery-section">
        <div className="profile-container"><p className="profile-overline">PRODUTO REAL, EM CADA ETAPA</p><h2 className="profile-heading">Seu perfil é uma porta de entrada para uma rotina <b>completa.</b></h2><p className="profile-gallery-intro">Explore as telas reais da 97plantões: cada uma transforma uma parte importante do plantão em uma próxima ação mais clara.</p>
          <div className="profile-gallery-grid">
            <div className="profile-gallery-list">{gallery.map((screen, index) => <button key={screen.src} className={'profile-gallery-item ' + (activeGallery === index ? 'active' : '')} onClick={() => setActiveGallery(index)}><span>{screen.label}</span><small>{String(index + 1).padStart(2, '0')}</small></button>)}</div>
            <div className="profile-gallery-display"><div className="profile-gallery-phone" style={{ boxShadow: '8px 8px 0 ' + active.accent }}><img src={active.src} alt={'Tela real: ' + active.title} /></div><div className="profile-gallery-copy"><p>{active.label} NO APLICATIVO</p><h3>{active.title}</h3><span>Uma tela real da 97plantões, desenhada para ajudar você a decidir com informação prática — não apenas navegar por funções.</span></div></div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-container profile-bridge"><div className="profile-video"><span className="profile-video-label"><i /> TOUR PELO APP</span><video controls playsInline poster="./doctor_using_the_app.jpg"><source src="./NoveSeteVideo.mp4" type="video/mp4" />Seu navegador não suporta reprodução de vídeo.</video></div><div className="profile-bridge-copy"><p className="profile-overline">O APP ACOMPANHA A SUA PRESENÇA</p><h2 className="profile-heading">Mais contexto para você. Mais confiança para a <b>comunidade.</b></h2><p className="profile-intro">Veja como a 97plantões aproxima o momento de encontrar uma oportunidade da rotina de realmente assumir e realizar um plantão.</p><a className="profile-primary" href="#baixar">Baixar a 97plantões <Download size={18} /></a></div></div>
      </section>

      <section id="duvidas" className="profile-section">
        <div className="profile-container profile-faq-layout"><div><p className="profile-overline">O SEU PERFIL, COM TRANQUILIDADE</p><h2 className="profile-heading">Perguntas para começar com <b>clareza.</b></h2><p className="profile-intro">O essencial sobre a comunidade, seu perfil e a experiência de usar a plataforma.</p></div><div className="profile-faq-list">{faqs.map((faq, index) => <Faq key={faq.question} question={faq.question} answer={faq.answer} open={faqOpen === index} onToggle={() => setFaqOpen(faqOpen === index ? -1 : index)} />)}</div></div>
      </section>

      <section id="baixar" className="profile-download-section"><div className="profile-download-grid"><div><p className="profile-overline">A SUA PRÓXIMA CONEXÃO COMEÇA AQUI</p><h2>Deixe sua presença profissional trabalhar a favor da sua <b>rotina.</b></h2><p>Baixe a 97plantões para encontrar, ofertar e acompanhar plantões em uma experiência criada de médico para médico.</p></div><div className="profile-stores"><StoreButton store="apple" /><StoreButton store="google" /></div></div></section>
      <Footer />
    </main>
  );
}
