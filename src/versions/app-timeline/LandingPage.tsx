import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Download,
  MapPin,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import Footer from './Footer';

type Screen = {
  src: string;
  kicker: string;
  title: string;
  copy: string;
  color: string;
};

const screens: Screen[] = [
  {
    src: './unnamed.png',
    kicker: 'ENCONTRE',
    title: 'Uma oferta clara antes da decisão.',
    copy: 'Especialidade, hospital, período e valor aparecem juntos. É o suficiente para entender se aquele plantão tem lugar na sua semana.',
    color: '#f36a4f',
  },
  {
    src: './unnamed (2).png',
    kicker: 'ORGANIZE',
    title: 'A agenda não deixa o essencial escapar.',
    copy: 'Visualize compromissos e oportunidades no mesmo ritmo da sua rotina clínica, sem depender de vários canais.',
    color: '#00799b',
  },
  {
    src: './unnamed (3).png',
    kicker: 'ACOMPANHE',
    title: 'O painel mantém cada próxima ação à vista.',
    copy: 'Pendências, confirmações e ofertas têm um lugar próprio para você seguir em frente com contexto.',
    color: '#91bd18',
  },
  {
    src: './unnamed (4).png',
    kicker: 'CONFIRME',
    title: 'Detalhes que ajudam a assumir com tranquilidade.',
    copy: 'Local, horário, período e valor ficam registrados antes da candidatura — com menos suposição no caminho.',
    color: '#6857d8',
  },
];

const faqs = [
  {
    question: 'Onde encontro os plantões disponíveis?',
    answer: 'Você pode buscar ofertas na página inicial, no mapa e na agenda. Use os filtros para adaptar a busca à sua especialidade e disponibilidade.',
  },
  {
    question: 'Como acompanho minhas confirmações?',
    answer: 'O painel e a agenda reúnem suas candidaturas, confirmações e compromissos para que você saiba o que vem a seguir.',
  },
  {
    question: 'A plataforma é só para médicos?',
    answer: 'Sim. A 97plantões é exclusiva para médicos e valida o CRM informado para criar uma comunidade profissional mais segura.',
  },
];

function StoreButton({ type }: { type: 'apple' | 'google' }) {
  const apple = type === 'apple';
  const href = apple
    ? 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669'
    : 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

  return (
    <a className="week-store" href={href} target="_blank" rel="noopener noreferrer">
      {apple ? (
        <svg viewBox="0 0 384 512" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
      ) : (
        <svg viewBox="0 0 512 512" aria-hidden="true"><path fill="#4CAF50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" /><path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" /><path fill="#FFEB3B" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" /><path fill="#F44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499z" /></svg>
      )}
      <span><small>{apple ? 'Baixe na' : 'Disponível no'}</small><b>{apple ? 'App Store' : 'Google Play'}</b></span>
    </a>
  );
}

function Faq({ question, answer, open, onToggle }: { key?: React.Key; question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <article className="week-faq">
      <button className="week-faq-button" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span><i>{open ? <X size={17} /> : <ChevronDown size={18} />}</i>
      </button>
      {open && <p>{answer}</p>}
    </article>
  );
}

export default function LandingPageTemplate({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [selectedScreen, setSelectedScreen] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [menu, setMenu] = useState(false);
  const selected = screens[selectedScreen];

  return (
    <main className="week-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600;700;800&display=swap');
        .week-page { --ink: #12394a; --ocean: #00799b; --sky: #d9f5fb; --sun: #ffd667; --coral: #f36a4f; --paper: #fbfdfd; --line: #bfdae1; color: var(--ink); background: var(--paper); font-family: Outfit, ui-sans-serif, system-ui, sans-serif; overflow: hidden; }
        .week-page * { box-sizing: border-box; }
        .week-page a:focus-visible, .week-page button:focus-visible { outline: 3px solid var(--coral); outline-offset: 4px; }
        .week-nav { width: min(1190px, calc(100% - 32px)); height: 84px; display: flex; align-items: center; justify-content: space-between; margin: 0 auto; position: relative; z-index: 8; }
        .week-brand { display: inline-flex; align-items: center; gap: 10px; color: var(--ink); font-size: 1.25rem; font-weight: 800; letter-spacing: -.065em; text-decoration: none; }
        .week-brand img { width: 39px; height: 39px; padding: 3px; background: var(--ink); border-radius: 13px; }
        .week-brand em { color: var(--ocean); font-style: normal; }
        .week-links { display: flex; align-items: center; gap: 28px; }
        .week-links a { color: #4e7080; font-size: .82rem; font-weight: 700; text-decoration: none; }
        .week-links a:hover { color: var(--ocean); }
        .week-download { display: inline-flex; align-items: center; gap: 8px; padding: 11px 15px; color: #fff; background: var(--ink); border-radius: 999px; font-size: .78rem; font-weight: 700; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease; }
        .week-download:hover, .week-primary:hover, .week-store:hover { transform: translateY(-2px); box-shadow: 0 12px 22px rgba(18,57,74,.16); }
        .week-menu { display: none; border: 0; color: var(--ink); background: transparent; cursor: pointer; }
        .week-mobile-links { position: absolute; z-index: 9; top: 68px; left: 14px; right: 14px; display: grid; padding: 11px; background: #fff; border: 1px solid var(--line); box-shadow: 7px 7px 0 #c9eaf0; }
        .week-mobile-links a { padding: 10px; color: var(--ink); font-weight: 700; text-decoration: none; }
        .week-hero { padding: 49px 16px 96px; background: linear-gradient(111deg, var(--sky) 0%, var(--sky) 63%, #beeaf2 63%, #beeaf2 100%); position: relative; }
        .week-hero::before { content: ''; position: absolute; width: 340px; height: 340px; border: 1px solid rgba(0,121,155,.25); border-radius: 50%; left: -185px; bottom: -125px; box-shadow: 0 0 0 28px rgba(255,255,255,.22), 0 0 0 56px rgba(255,255,255,.13); }
        .week-hero::after { content: ''; position: absolute; right: 8%; top: 14%; width: 19px; height: 19px; border-radius: 50%; background: var(--coral); box-shadow: -65px 202px 0 var(--sun), -500px 84px 0 rgba(0,121,155,.3); }
        .week-hero-grid { width: min(1190px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, .92fr) minmax(390px, .88fr); gap: clamp(46px, 9vw, 125px); align-items: center; position: relative; z-index: 1; }
        .week-kicker { display: inline-flex; align-items: center; gap: 8px; color: var(--ocean); font-family: 'DM Mono', monospace; font-size: .67rem; font-weight: 500; letter-spacing: .08em; }
        .week-kicker i { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: var(--ocean); }
        .week-hero h1 { max-width: 620px; margin: 22px 0; font-size: clamp(3.15rem, 5.5vw, 5.55rem); line-height: .94; letter-spacing: -.09em; }
        .week-hero h1 b { color: var(--ocean); font-weight: inherit; }
        .week-hero-copy { max-width: 530px; margin: 0; color: #486c7d; font-size: clamp(1rem, 1.4vw, 1.15rem); line-height: 1.72; }
        .week-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .week-primary, .week-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 14px 18px; border-radius: 999px; font-weight: 700; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
        .week-primary { color: #fff; background: var(--ocean); box-shadow: 0 8px 17px rgba(0,121,155,.2); }
        .week-secondary { color: var(--ink); background: #fff; border: 1px solid #aad2dd; }
        .week-secondary:hover { background: #effcff; }
        .week-proof { display: flex; flex-wrap: wrap; gap: 15px 21px; margin-top: 34px; color: #4f7180; font-size: .72rem; font-weight: 700; }
        .week-proof span { display: inline-flex; align-items: center; gap: 7px; }
        .week-proof svg { color: #2d9865; }
        .week-phone-zone { min-height: 630px; position: relative; display: grid; place-items: center; }
        .week-phone { width: min(100%, 282px); padding: 9px; position: relative; z-index: 2; background: var(--ink); border-radius: 39px; box-shadow: 0 24px 42px rgba(18,57,74,.27), 12px 12px 0 rgba(255,255,255,.48); }
        .week-phone::before { content: ''; width: 92px; height: 19px; position: absolute; left: 50%; top: 9px; transform: translateX(-50%); z-index: 1; border-radius: 0 0 14px 14px; background: var(--ink); }
        .week-phone img { display: block; width: 100%; border-radius: 31px; }
        .week-swipe { position: absolute; z-index: 3; left: -71px; bottom: 62px; width: 175px; padding: 13px; color: var(--ink); background: #fff; border: 1px solid #bedbe1; box-shadow: 7px 7px 0 #ffd667; transform: rotate(-5deg); }
        .week-swipe small { color: #638393; font-family: 'DM Mono', monospace; font-size: .53rem; letter-spacing: .07em; }
        .week-swipe strong { display: block; margin: 6px 0 8px; font-size: .92rem; letter-spacing: -.04em; }
        .week-swipe span { display: flex; align-items: center; gap: 5px; color: #347c55; font-size: .65rem; font-weight: 700; }
        .week-side-screen { position: absolute; z-index: 1; right: -21px; top: 66px; width: 165px; padding: 6px; background: #fff; border: 1px solid #bbe1e7; box-shadow: 7px 7px 0 #a9dce5; transform: rotate(6deg); }
        .week-side-screen img { width: 100%; display: block; }
        .week-bands { border-top: 1px solid #badde4; border-bottom: 1px solid #badde4; background: #fff; overflow: hidden; }
        .week-bands-track { width: max-content; display: flex; animation: week-scroll 33s linear infinite; }
        .week-bands span { display: inline-flex; align-items: center; gap: 12px; padding: 15px 17px; color: #0d6c89; white-space: nowrap; font-family: 'DM Mono', monospace; font-size: .64rem; letter-spacing: .07em; }
        .week-bands svg { color: var(--coral); }
        @keyframes week-scroll { to { transform: translateX(-50%); } }
        .week-section { padding: clamp(76px, 10vw, 140px) 16px; }
        .week-container { width: min(1190px, 100%); margin: 0 auto; }
        .week-overline { margin: 0 0 14px; color: var(--ocean); font-family: 'DM Mono', monospace; font-size: .67rem; letter-spacing: .09em; }
        .week-heading { max-width: 760px; margin: 0; font-size: clamp(2.4rem, 4.5vw, 4.6rem); line-height: .98; letter-spacing: -.08em; }
        .week-heading b { color: var(--ocean); font-weight: inherit; }
        .week-intro { max-width: 505px; margin: 20px 0 0; color: #567483; line-height: 1.72; }
        .week-story { margin-top: 58px; display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(35px, 7vw, 105px); align-items: center; }
        .week-story-stage { min-height: 600px; position: relative; padding: 36px 31px; background: #f4fbfc; border: 1px solid #bedfe5; overflow: hidden; }
        .week-story-stage::before { content: ''; position: absolute; width: 430px; height: 430px; right: -210px; top: -217px; border: 1px solid #abd8e1; border-radius: 50%; box-shadow: 0 0 0 35px rgba(171,216,225,.21), 0 0 0 70px rgba(171,216,225,.1); }
        .week-screen-main { width: min(100%, 256px); margin: 0 auto; position: relative; z-index: 2; padding: 8px; background: #fff; border: 1px solid #bedfe5; box-shadow: 10px 10px 0 #a9dce5; }
        .week-screen-main img { display: block; width: 100%; }
        .week-screen-mini { width: 145px; position: absolute; z-index: 3; padding: 5px; background: #fff; border: 1px solid #ffd67a; box-shadow: 6px 6px 0 #ffd667; }
        .week-screen-mini img { display: block; width: 100%; }
        .week-screen-mini.one { left: 15px; bottom: 35px; transform: rotate(-7deg); }
        .week-screen-mini.two { right: 20px; top: 49px; transform: rotate(6deg); }
        .week-story-tag { position: absolute; z-index: 4; top: 23px; left: 23px; display: inline-flex; align-items: center; gap: 6px; padding: 8px 10px; color: var(--ink); background: var(--sun); font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .06em; }
        .week-story-copy { position: relative; }
        .week-story-copy h3 { margin: 0; max-width: 480px; font-size: clamp(2.1rem, 3.6vw, 3.55rem); line-height: 1; letter-spacing: -.07em; }
        .week-story-copy h3 b { color: var(--ocean); font-weight: inherit; }
        .week-story-copy > p { max-width: 500px; color: #587787; line-height: 1.72; }
        .week-points { margin-top: 28px; display: grid; gap: 14px; }
        .week-points div { display: grid; grid-template-columns: 31px 1fr; gap: 12px; align-items: start; }
        .week-points i { width: 31px; height: 31px; display: grid; place-items: center; color: var(--ocean); background: #e0f7fb; border-radius: 50%; }
        .week-points b { display: block; font-size: .91rem; letter-spacing: -.03em; }
        .week-points p { margin: 4px 0 0; color: #65808d; font-size: .8rem; line-height: 1.55; }
        .week-tour { background: var(--ink); color: #fff; position: relative; overflow: hidden; }
        .week-tour::after { content: '97'; position: absolute; right: -26px; top: -115px; color: rgba(255,255,255,.045); font-size: 29rem; font-weight: 800; letter-spacing: -.13em; }
        .week-tour .week-overline { color: #8ed8e6; }
        .week-tour .week-heading b { color: var(--sun); }
        .week-tour-intro { max-width: 530px; color: #bbd4dd; line-height: 1.7; margin: 20px 0 0; }
        .week-tabs { position: relative; z-index: 1; margin-top: 52px; display: grid; grid-template-columns: .68fr 1.32fr; gap: clamp(33px, 7vw, 100px); align-items: center; }
        .week-tab-list { display: grid; border-top: 1px solid rgba(174,221,229,.4); }
        .week-tab { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 17px 0; color: #bed3dc; background: transparent; border: 0; border-bottom: 1px solid rgba(174,221,229,.4); text-align: left; font: inherit; font-size: .93rem; font-weight: 700; cursor: pointer; }
        .week-tab i { color: #83b3bf; font-family: 'DM Mono', monospace; font-style: normal; font-size: .59rem; }
        .week-tab.active { color: #fff; }
        .week-tab.active i { color: var(--sun); }
        .week-tab.active span::after { content: ''; display: block; width: 32px; height: 3px; margin-top: 7px; background: var(--sun); }
        .week-detail { min-height: 515px; display: grid; grid-template-columns: 235px 1fr; align-items: center; gap: 40px; position: relative; z-index: 1; padding: 29px; background: rgba(255,255,255,.06); border: 1px solid rgba(174,221,229,.32); }
        .week-detail-phone { padding: 6px; background: #fff; box-shadow: 8px 8px 0 rgba(142,216,230,.28); }
        .week-detail-phone img { width: 100%; display: block; }
        .week-detail-copy p { margin: 0 0 11px; color: var(--sun); font-family: 'DM Mono', monospace; font-size: .62rem; letter-spacing: .07em; }
        .week-detail-copy h3 { margin: 0; font-size: clamp(1.75rem, 2.6vw, 2.7rem); line-height: 1.02; letter-spacing: -.065em; }
        .week-detail-copy span { display: block; margin-top: 18px; color: #bfd4dc; line-height: 1.63; font-size: .9rem; }
        .week-video-layout { display: grid; grid-template-columns: .84fr 1.16fr; gap: clamp(35px, 7vw, 100px); align-items: center; }
        .week-video-copy .week-primary { margin-top: 29px; }
        .week-video { position: relative; overflow: hidden; background: var(--ink); box-shadow: 10px 10px 0 #ffd667; }
        .week-video video { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
        .week-video-label { position: absolute; z-index: 1; top: 15px; left: 15px; display: inline-flex; align-items: center; gap: 7px; padding: 8px 10px; color: #fff; background: rgba(18,57,74,.79); font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .06em; }
        .week-video-label i { width: 7px; height: 7px; background: var(--coral); border-radius: 50%; }
        .week-faq-layout { display: grid; grid-template-columns: .82fr 1.18fr; gap: clamp(40px, 8vw, 126px); align-items: start; }
        .week-faq-list { border-top: 1px solid var(--line); }
        .week-faq { border-bottom: 1px solid var(--line); }
        .week-faq-button { width: 100%; padding: 21px 0; display: flex; align-items: center; justify-content: space-between; gap: 18px; color: var(--ink); background: transparent; border: 0; font: inherit; font-size: 1rem; font-weight: 700; text-align: left; cursor: pointer; }
        .week-faq-button i { flex: 0 0 33px; width: 33px; height: 33px; display: grid; place-items: center; color: var(--ocean); background: #e1f7fb; border-radius: 50%; }
        .week-faq p { margin: -3px 42px 20px 0; color: #5b7886; line-height: 1.68; font-size: .86rem; }
        .week-download-section { padding: clamp(78px, 10vw, 130px) 16px; color: var(--ink); background: var(--sun); position: relative; overflow: hidden; }
        .week-download-section::before { content: ''; position: absolute; width: 530px; height: 530px; right: -190px; bottom: -360px; border: 1px solid rgba(18,57,74,.28); border-radius: 50%; box-shadow: 0 0 0 42px rgba(255,255,255,.18), 0 0 0 84px rgba(255,255,255,.11); }
        .week-download-layout { width: min(1190px, 100%); margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 35px; align-items: center; position: relative; z-index: 1; }
        .week-download-section .week-overline { color: #4e6b78; }
        .week-download-section h2 { max-width: 730px; margin: 0; font-size: clamp(2.55rem, 5vw, 5rem); line-height: .96; letter-spacing: -.087em; }
        .week-download-section h2 b { color: var(--ocean); font-weight: inherit; }
        .week-download-section p { max-width: 560px; margin: 20px 0 0; color: #486673; line-height: 1.7; }
        .week-stores { display: grid; gap: 10px; min-width: 190px; }
        .week-store { display: flex; align-items: center; gap: 11px; padding: 10px 15px; color: #fff; background: #101c22; border: 1px solid rgba(255,255,255,.18); border-radius: 13px; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease; }
        .week-store svg { width: 27px; height: 27px; flex: 0 0 27px; fill: currentColor; }
        .week-store span { display: grid; gap: 1px; }
        .week-store small { font-size: .53rem; letter-spacing: .04em; }
        .week-store b { font-size: 1rem; letter-spacing: -.04em; }
        @media (max-width: 900px) {
          .week-hero-grid, .week-story, .week-tabs, .week-video-layout, .week-faq-layout { grid-template-columns: 1fr; }
          .week-phone-zone { min-height: 590px; width: min(100%, 500px); margin: 0 auto; }
          .week-tabs { gap: 35px; }
          .week-tab-list { grid-template-columns: repeat(2, 1fr); column-gap: 25px; }
          .week-detail { grid-template-columns: 230px 1fr; }
          .week-download-layout { display: flex; align-items: flex-start; flex-direction: column; }
          .week-stores { grid-template-columns: repeat(2, 1fr); min-width: 0; }
        }
        @media (max-width: 640px) {
          .week-nav { width: calc(100% - 28px); height: 70px; }
          .week-links, .week-download { display: none; }
          .week-menu { display: block; }
          .week-hero { padding: 28px 14px 70px; }
          .week-hero h1 { font-size: clamp(3.05rem, 14vw, 4.4rem); }
          .week-actions { display: grid; }
          .week-primary, .week-secondary { width: 100%; }
          .week-proof { display: grid; gap: 10px; }
          .week-phone-zone { min-height: 554px; }
          .week-phone { width: 253px; }
          .week-side-screen { width: 123px; right: -4px; top: 50px; }
          .week-swipe { left: -2px; bottom: 16px; width: 159px; }
          .week-section { padding-left: 18px; padding-right: 18px; }
          .week-heading { font-size: clamp(2.45rem, 12vw, 3.5rem); }
          .week-story-stage { min-height: 510px; padding: 23px 13px; }
          .week-screen-main { width: 220px; }
          .week-screen-mini { width: 114px; }
          .week-screen-mini.one { left: 4px; bottom: 25px; }
          .week-screen-mini.two { right: 5px; top: 39px; }
          .week-tab-list { grid-template-columns: 1fr; }
          .week-detail { min-height: 0; grid-template-columns: 1fr; padding: 20px; }
          .week-detail-phone { width: 205px; justify-self: center; }
          .week-download-section { padding-left: 18px; padding-right: 18px; }
          .week-stores { width: 100%; grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) { .week-page *, .week-page *::before, .week-page *::after { animation: none !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
      `}</style>

      <nav className="week-nav" aria-label="Navegação principal">
        <a href="#" className="week-brand" aria-label="97plantões, início"><img src="./logo.svg" alt="" /><span>97<em>plantões</em></span></a>
        <div className="week-links"><a href="#semana">Sua semana</a><a href="#telas">Telas reais</a><a href="#perguntas">Dúvidas</a><a href="?page=sobre-nos">Sobre nós</a></div>
        <a href="#baixar" className="week-download">Baixar o app <Download size={15} /></a>
        <button className="week-menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>{menu ? <X /> : <Menu />}</button>
        {menu && <div className="week-mobile-links"><a onClick={() => setMenu(false)} href="#semana">Sua semana</a><a onClick={() => setMenu(false)} href="#telas">Telas reais</a><a onClick={() => setMenu(false)} href="#perguntas">Dúvidas</a><a onClick={() => setMenu(false)} href="#baixar">Baixar o app</a></div>}
      </nav>

      <section className="week-hero" aria-labelledby="week-title">
        <div className="week-hero-grid">
          <div>
            <span className="week-kicker"><i><CalendarDays size={13} /></i> A SUA SEMANA, EM ORDEM</span>
            <h1 id="week-title">Plantões que respeitam o seu <b>tempo.</b></h1>
            <p className="week-hero-copy">Encontre oportunidades, veja cada detalhe e deixe sua agenda falar a mesma língua da sua rotina médica.</p>
            <div className="week-actions"><a className="week-primary" href="#baixar">Organizar meus plantões <ArrowRight size={18} /></a><a className="week-secondary" href="#semana">Ver a experiência <ArrowDown size={17} /></a></div>
            <div className="week-proof"><span><BadgeCheck size={16} /> Médicos com CRM verificado</span><span><ShieldCheck size={16} /> Informações protegidas</span><span><Clock3 size={16} /> Horários e valores à vista</span></div>
          </div>
          <div className="week-phone-zone" aria-label="Tela real da agenda no aplicativo">
            <div className="week-side-screen"><img src="./unnamed (3).png" alt="Painel de ofertas e confirmações no aplicativo" /></div>
            <div className="week-phone"><img src="./unnamed (2).png" alt="Agenda de plantões no aplicativo 97plantões" /></div>
            <div className="week-swipe"><small>HOJE NA SUA AGENDA</small><strong>Uma visão que cabe no seu dia.</strong><span><Check size={14} /> Próxima decisão, à vista</span></div>
          </div>
        </div>
      </section>

      <section className="week-bands" aria-label="Capacidades do aplicativo"><div className="week-bands-track">{[...Array(2)].flatMap(() => ['ENCONTRE PLANTÕES', 'VEJA O MAPA', 'ORGANIZE A AGENDA', 'CONFIRME COM CONTEXTO', 'CUIDE DO PRÓXIMO PASSO']).map((item, index) => <span key={index}>{item}<Sparkles size={14} /></span>)}</div></section>

      <section id="semana" className="week-section">
        <div className="week-container"><p className="week-overline">UMA ROTINA CLÍNICA TEM MUITAS VIRADAS</p><h2 className="week-heading">Não é só achar um plantão. É saber onde ele cabe na sua <b>semana.</b></h2><p className="week-intro">As telas reais do app mostram o que importa antes, durante e depois de uma escolha: oportunidade, tempo e próximo passo.</p>
          <div className="week-story">
            <div className="week-story-stage" aria-label="Colagem de telas reais de ofertas, agenda e detalhes"><span className="week-story-tag"><Play size={12} /> UMA SEMANA EM TELAS</span><div className="week-screen-main"><img src="./unnamed (2).png" alt="Tela de agenda de junho no aplicativo" /></div><div className="week-screen-mini one"><img src="./unnamed.png" alt="Tela de ofertas de plantão no aplicativo" /></div><div className="week-screen-mini two"><img src="./unnamed (4).png" alt="Tela de detalhes do plantão no aplicativo" /></div></div>
            <div className="week-story-copy"><h3>Da oferta ao compromisso, <b>sem trocar de contexto.</b></h3><p>Em vez de depender de conversa solta para decidir, você chega a cada momento com a informação certa e uma ação clara.</p><div className="week-points"><div><i><MapPin size={15} /></i><span><b>Escolha por proximidade</b><p>Veja oportunidades no mapa ou na lista, conforme o seu momento.</p></span></div><div><i><CalendarDays size={15} /></i><span><b>Guarde uma agenda viva</b><p>Plantões confirmados e oportunidades não precisam competir pela sua atenção.</p></span></div><div><i><Stethoscope size={15} /></i><span><b>Conheça o cenário antes de ir</b><p>Especialidade, hospital, período e valor estão sempre no mesmo lugar.</p></span></div></div></div>
          </div>
        </div>
      </section>

      <section id="telas" className="week-section week-tour">
        <div className="week-container"><p className="week-overline">UM PRODUTO QUE MOSTRA O CAMINHO</p><h2 className="week-heading">Cada tela responde a uma pergunta da sua <b>rotina.</b></h2><p className="week-tour-intro">Explore as telas reais da 97plantões. Elas foram organizadas para mover uma decisão adiante, não para criar mais um lugar para checar.</p>
          <div className="week-tabs">
            <div className="week-tab-list">{screens.map((screen, index) => <button key={screen.src} className={'week-tab ' + (selectedScreen === index ? 'active' : '')} onClick={() => setSelectedScreen(index)}><span>{screen.kicker}</span><i>{String(index + 1).padStart(2, '0')}</i></button>)}</div>
            <div className="week-detail">
              <div className="week-detail-phone" style={{ boxShadow: '8px 8px 0 ' + selected.color }}><img src={selected.src} alt={'Tela real: ' + selected.title} /></div>
              <div className="week-detail-copy"><p>{selected.kicker} NO APLICATIVO</p><h3>{selected.title}</h3><span>{selected.copy}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="week-section">
        <div className="week-container week-video-layout"><div className="week-video-copy"><p className="week-overline">VEJA O APLICATIVO EM MOVIMENTO</p><h2 className="week-heading">Quando tudo está visível, você tem mais espaço para <b>cuidar.</b></h2><p className="week-intro">Conheça a experiência de encontrar, acompanhar e organizar plantões pelo app.</p><a className="week-primary" href="#baixar">Baixar a 97plantões <Download size={18} /></a></div><div className="week-video"><span className="week-video-label"><i /> TOUR DO APP</span><video controls playsInline poster="./doctor_using_the_app.jpg"><source src="./NoveSeteVideo.mp4" type="video/mp4" />Seu navegador não suporta reprodução de vídeo.</video></div></div>
      </section>

      <section id="perguntas" className="week-section">
        <div className="week-container week-faq-layout"><div><p className="week-overline">COMECE COM CLAREZA</p><h2 className="week-heading">Dúvidas que merecem respostas <b>diretas.</b></h2><p className="week-intro">Tudo o que você precisa saber antes de organizar a próxima semana na plataforma.</p></div><div className="week-faq-list">{faqs.map((faq, index) => <Faq key={faq.question} question={faq.question} answer={faq.answer} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />)}</div></div>
      </section>

      <section id="baixar" className="week-download-section"><div className="week-download-layout"><div><p className="week-overline">A AGENDA É SUA. O RITMO TAMBÉM.</p><h2>Escolha o próximo plantão sem deixar o resto da sua vida <b>de lado.</b></h2><p>Baixe a 97plantões e mantenha oportunidades, conversas e compromissos na mesma rotina.</p></div><div className="week-stores"><StoreButton type="apple" /><StoreButton type="google" /></div></div></section>
      <Footer />
    </main>
  );
}
