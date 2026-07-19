import Footer from './Footer';
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  CreditCard,
  Lock,
  Moon,
  ShieldCheck,
  Signal,
  Star,
  UserPlus,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="nox-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="nox-store-mark">
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
      className="nox-store-button"
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
    <figure className={`nox-screen ${className}`}>
      <div className="nox-screen__meta">
        <span className="nox-screen__dot" aria-hidden="true" />
        <span>{label}</span>
        <span className="nox-screen__live">tela real</span>
      </div>
      <div className="nox-screen__frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

const instruments = [
  {
    code: 'INST-01',
    icon: <ShieldCheck size={22} aria-hidden="true" />,
    title: 'CRM Verificado',
    text: 'Verificamos com rigor se o CRM informado é válido junto aos órgãos responsáveis. Apenas médicos ativos podem participar.',
  },
  {
    code: 'INST-02',
    icon: <Lock size={22} aria-hidden="true" />,
    title: 'Dados Protegidos',
    text: 'Suas informações pessoais e de pagamento são protegidas com mecanismos de segurança de ponta a ponta.',
  },
  {
    code: 'INST-03',
    icon: <CreditCard size={22} aria-hidden="true" />,
    title: 'Pagamento Escrow',
    text: 'O valor do plantão é retido e repassado somente após a realização do plantão por ambas as partes.',
  },
  {
    code: 'INST-04',
    icon: <UserPlus size={22} aria-hidden="true" />,
    title: 'Reputação na Plataforma',
    text: 'O histórico de compromissos cumpridos é registrado. Médicos confiáveis se destacam, promovendo responsabilidade.',
  },
];

const payoutTerms = [
  { method: 'PIX', term: 'mesmo dia ou dia útil seguinte' },
  { method: 'Boleto', term: 'até 2 dias úteis' },
  { method: 'Cartão de crédito', term: 'até 14 dias úteis' },
];

const testimonials = [
  {
    text: 'Recebi o pagamento na minha conta logo após finalizar o plantão. Não preciso mais me preocupar com calotes, resolveu um maior problema de pegar plantão no dia a dia.',
    role: 'Emergencista',
    city: 'São Paulo, SP',
    status: 'Médico verificado',
  },
  {
    text: 'Finalmente uma plataforma séria para médicos. A verificação de CRM transmite muita segurança em relação ao médico para quem passei meu plantão.',
    role: 'Clínica Médica',
    city: 'São Paulo, SP',
    status: 'Médico verificado',
  },
];

const faqs = [
  {
    q: 'O pagamento é seguro?',
    a: 'Sim. O pagamento é realizado de forma segura, com dados protegidos por mecanismos de segurança e criptografia. O repasse ao profissional responsável ocorre somente após a realização do plantão, trazendo mais segurança para ambas as partes.',
  },
  {
    q: 'O pagamento é garantido após eu realizar o plantão?',
    a: 'Sim. Após a finalização do plantão, o pagamento é processado e repassado para a sua conta bancária pessoal, conforme os prazos informados. A plataforma assegura esse repasse.',
  },
  {
    q: 'Minhas informações pessoais estão seguras?',
    a: 'Sim. A privacidade dos seus dados é uma prioridade para nós. Suas informações são protegidas por mecanismos de segurança e criptografia, com foco na confidencialidade e na proteção dos dados. Você pode utilizar o aplicativo com tranquilidade.',
  },
  {
    q: 'O chat é seguro e privado?',
    a: 'Sim. O chat é privado entre você e o outro profissional médico. Nenhuma outra pessoa tem acesso à conversa, e os dados são protegidos pela plataforma.',
  },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="nox-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        .nox-page {
          --nox-bg: #0c1f24;
          --nox-panel: #11282e;
          --nox-text: #e8f0ec;
          --nox-muted: #8fa8a4;
          --nox-aqua: #68b5b9;
          --nox-deep-aqua: #0a6870;
          --nox-signal: #e7bb35;
          --nox-coral: #dc7553;
          --nox-line: rgba(232, 240, 236, 0.14);
          background: var(--nox-bg);
          color: var(--nox-text);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: clip;
        }

        .nox-page *, .nox-page *::before, .nox-page *::after { box-sizing: border-box; }
        .nox-page a { color: inherit; }
        .nox-page a:focus-visible, .nox-page summary:focus-visible {
          outline: 3px solid var(--nox-signal);
          outline-offset: 4px;
        }
        .nox-page ::selection { background: var(--nox-signal); color: #0c1f24; }
        .nox-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }

        .nox-header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(12, 31, 36, 0.88);
          border-bottom: 1px solid var(--nox-line);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
        }
        .nox-header__inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .nox-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 17px; font-weight: 800; letter-spacing: -0.05em; color: var(--nox-text); }
        .nox-brand img { height: 34px; width: auto; border-radius: 9px; }
        .nox-brand b { color: var(--nox-aqua); }
        .nox-nav { display: flex; align-items: center; gap: 25px; color: var(--nox-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.035em; }
        .nox-nav a { text-decoration: none; transition: color 160ms ease; }
        .nox-nav a:hover { color: var(--nox-aqua); }
        .nox-header-cta {
          display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
          padding: 10px 14px; background: var(--nox-signal); color: #0c1f24 !important;
          border: 1px solid var(--nox-signal); border-radius: 3px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.02em; transition: transform 180ms ease, background 180ms ease;
        }
        .nox-header-cta:hover { background: #f2cd5e; transform: translateY(-2px); }
        .nox-header-cta:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }

        /* ── Hero: night watch ── */
        .nox-hero { position: relative; isolation: isolate; padding: 86px 0 96px; border-bottom: 1px solid var(--nox-line); overflow: hidden; }
        .nox-hero::before {
          content: ''; position: absolute; inset: 0; z-index: -2;
          background-image: linear-gradient(rgba(104, 181, 185, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(104, 181, 185, 0.09) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.2));
        }
        .nox-hero::after {
          content: ''; position: absolute; z-index: -1; width: 46vw; height: 46vw; max-width: 700px; max-height: 700px;
          top: -18vw; right: -12vw; border-radius: 50%;
          background: radial-gradient(circle, rgba(104, 181, 185, 0.16) 0%, rgba(104, 181, 185, 0.05) 45%, transparent 70%);
        }
        .nox-hero__grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(330px, 0.68fr); gap: clamp(36px, 7vw, 100px); align-items: center; }
        .nox-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 25px; font-family: 'DM Mono', ui-monospace, monospace; color: var(--nox-aqua); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .nox-kicker::before { content: ''; width: 9px; height: 9px; background: var(--nox-signal); border-radius: 50%; box-shadow: 0 0 12px 3px rgba(231, 187, 53, 0.45); }
        .nox-title { max-width: 700px; margin: 0; color: #f4f7f3; font-family: 'Newsreader', Georgia, serif; font-size: clamp(3rem, 5.9vw, 5.5rem); font-weight: 600; line-height: 0.94; letter-spacing: -0.062em; }
        .nox-title em { color: var(--nox-aqua); font-style: italic; }
        .nox-hero-copy { max-width: 540px; margin: 26px 0 32px; color: var(--nox-muted); font-size: clamp(1rem, 1.35vw, 1.12rem); font-weight: 500; line-height: 1.7; }
        .nox-hero-copy strong { color: var(--nox-text); }
        .nox-hero-link { display: inline-flex; align-items: center; gap: 9px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: var(--nox-text); text-decoration: none; font-size: 13px; font-weight: 800; transition: color 160ms ease, gap 160ms ease; }
        .nox-hero-link:hover { color: var(--nox-aqua); gap: 14px; }

        .nox-hero-stage { position: relative; display: grid; justify-items: center; padding: 22px 16px 30px; }
        .nox-hero-stage::before {
          content: ''; position: absolute; inset: 2% 0% 0%;
          background: radial-gradient(ellipse at center, rgba(104, 181, 185, 0.2) 0%, transparent 68%);
        }
        .nox-hero-stage .nox-screen { position: relative; z-index: 1; width: min(100%, 336px); }
        .nox-hero-beacon {
          position: absolute; z-index: 3; left: -4px; top: 34px; display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 13px; background: var(--nox-panel); border: 1px solid var(--nox-aqua); color: var(--nox-text);
          font-size: 11px; font-weight: 800; line-height: 1.2; box-shadow: 0 0 22px rgba(104, 181, 185, 0.35); max-width: 190px;
        }
        .nox-hero-beacon svg { color: var(--nox-signal); flex: 0 0 auto; }

        .nox-screen { margin: 0; }
        .nox-screen__meta { display: flex; align-items: center; gap: 7px; min-height: 31px; color: var(--nox-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.055em; text-transform: uppercase; }
        .nox-screen__dot { width: 7px; height: 7px; background: var(--nox-signal); border-radius: 50%; box-shadow: 0 0 8px rgba(231, 187, 53, 0.7); }
        .nox-screen__live { margin-left: auto; color: var(--nox-aqua); }
        .nox-screen__frame { overflow: hidden; padding: 7px; background: #071418; border: 1px solid rgba(104, 181, 185, 0.4); border-radius: 22px; box-shadow: 0 0 34px rgba(104, 181, 185, 0.18), 13px 13px 0 rgba(0, 0, 0, 0.3); }
        .nox-screen__frame img { display: block; width: 100%; height: auto; border-radius: 16px; }

        /* ── Instrument panel ── */
        .nox-instruments { padding: 110px 0 104px; }
        .nox-section-head { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(260px, 0.5fr); gap: 48px; align-items: end; margin-bottom: 60px; }
        .nox-section-label { display: flex; align-items: center; gap: 9px; margin: 0 0 15px; color: var(--nox-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .nox-section-label::before { content: ''; width: 28px; height: 1px; background: currentColor; }
        .nox-section-title { max-width: 720px; margin: 0; color: #f4f7f3; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.4rem, 4.4vw, 4.3rem); font-weight: 600; line-height: 0.98; letter-spacing: -0.06em; }
        .nox-section-intro { max-width: 380px; margin: 0 0 4px; color: var(--nox-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }

        .nox-instrument-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .nox-instrument {
          position: relative; padding: 28px 28px 26px; background: var(--nox-panel);
          border: 1px solid var(--nox-line); overflow: hidden;
          transition: border-color 200ms ease, transform 220ms cubic-bezier(.2,.8,.2,1);
        }
        .nox-instrument::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 340px 130px at top left, rgba(104, 181, 185, 0.12), transparent 70%);
          opacity: 0; transition: opacity 220ms ease;
        }
        .nox-instrument:hover { border-color: rgba(104, 181, 185, 0.55); transform: translateY(-4px); }
        .nox-instrument:hover::after { opacity: 1; }
        .nox-instrument__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
        .nox-instrument__code { font-family: 'DM Mono', ui-monospace, monospace; color: var(--nox-signal); font-size: 10px; letter-spacing: 0.12em; }
        .nox-instrument__icon {
          display: grid; place-items: center; width: 46px; height: 46px;
          border: 1px solid rgba(104, 181, 185, 0.5); border-radius: 50%; color: var(--nox-aqua);
          box-shadow: inset 0 0 14px rgba(104, 181, 185, 0.18);
        }
        .nox-instrument h3 { margin: 0 0 10px; color: #f4f7f3; font-family: 'Newsreader', Georgia, serif; font-size: 25px; font-weight: 600; letter-spacing: -0.04em; }
        .nox-instrument p { margin: 0; color: var(--nox-muted); font-size: 13px; line-height: 1.62; }
        .nox-instrument__status { display: inline-flex; align-items: center; gap: 7px; margin-top: 18px; color: var(--nox-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; }
        .nox-instrument__status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #5ec98e; box-shadow: 0 0 8px rgba(94, 201, 142, 0.8); }

        /* ── Payout radar ── */
        .nox-payout { padding: 92px 0; background: var(--nox-panel); border-top: 1px solid var(--nox-line); border-bottom: 1px solid var(--nox-line); }
        .nox-payout__grid { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.6fr); gap: clamp(38px, 7vw, 100px); align-items: center; }
        .nox-payout h2 { max-width: 640px; margin: 0; color: #f4f7f3; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.2rem, 4vw, 3.7rem); font-weight: 600; line-height: 0.99; letter-spacing: -0.055em; }
        .nox-payout-copy { margin: 22px 0 0; max-width: 520px; color: var(--nox-muted); font-size: 14px; line-height: 1.66; }
        .nox-payout-copy strong { color: var(--nox-text); }
        .nox-payout-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid rgba(232, 240, 236, 0.3); }
        .nox-payout-list li { display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: baseline; padding: 16px 2px; border-bottom: 1px solid var(--nox-line); }
        .nox-payout-list .nox-method { color: var(--nox-signal); font-family: 'DM Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; min-width: 148px; }
        .nox-payout-list .nox-term { color: var(--nox-text); font-size: 14px; font-weight: 700; }

        /* ── Voices in the dark ── */
        .nox-voices { padding: 104px 0 100px; }
        .nox-voices-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(26px, 4vw, 44px); }
        .nox-voice { border-top: 1px solid var(--nox-aqua); padding-top: 20px; }
        .nox-voice__stars { display: inline-flex; gap: 3px; color: var(--nox-signal); margin-bottom: 15px; }
        .nox-voice blockquote { margin: 0 0 18px; color: #f4f7f3; font-family: 'Newsreader', Georgia, serif; font-size: clamp(1.3rem, 2vw, 1.6rem); font-weight: 500; letter-spacing: -0.035em; line-height: 1.3; }
        .nox-voice figcaption { display: flex; align-items: center; gap: 10px; color: var(--nox-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
        .nox-voice figcaption::before { content: ''; width: 22px; height: 1px; background: var(--nox-coral); }

        /* ── FAQ ── */
        .nox-faq { padding: 100px 0 106px; background: var(--nox-panel); border-top: 1px solid var(--nox-line); border-bottom: 1px solid var(--nox-line); }
        .nox-faq-grid { display: grid; grid-template-columns: minmax(270px, 0.7fr) minmax(0, 1.15fr); gap: clamp(46px, 10vw, 130px); align-items: start; }
        .nox-faq-sidecopy { margin: 23px 0 0; max-width: 310px; color: var(--nox-muted); font-size: 14px; font-weight: 500; line-height: 1.65; }
        .nox-faq-list { border-top: 1px solid rgba(232, 240, 236, 0.4); }
        .nox-faq-list details { border-bottom: 1px solid var(--nox-line); }
        .nox-faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 21px 0; cursor: pointer; color: var(--nox-text); font-size: 15px; font-weight: 800; list-style: none; }
        .nox-faq-list summary::-webkit-details-marker { display: none; }
        .nox-faq-list summary:hover { color: var(--nox-aqua); }
        .nox-faq-list summary svg { flex: 0 0 auto; color: var(--nox-aqua); transition: transform 180ms ease; }
        .nox-faq-list details[open] summary svg { transform: rotate(180deg); }
        .nox-faq-list p { max-width: 630px; margin: -4px 42px 22px 0; color: var(--nox-muted); font-size: 13px; font-weight: 500; line-height: 1.62; }

        /* ── Download: dawn breaks ── */
        .nox-download { position: relative; padding: 84px 0; overflow: hidden; }
        .nox-download::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 900px 480px at 50% 120%, rgba(104, 181, 185, 0.22), transparent 70%);
        }
        .nox-download-panel {
          position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 55px; align-items: center;
          padding: clamp(29px, 5vw, 61px); border: 1px solid rgba(104, 181, 185, 0.45); background: rgba(17, 40, 46, 0.75);
          box-shadow: 0 0 44px rgba(104, 181, 185, 0.14);
        }
        .nox-download h2 { max-width: 620px; margin: 0; color: #f4f7f3; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 4.6rem); font-weight: 600; line-height: 0.95; letter-spacing: -0.06em; }
        .nox-download p { max-width: 500px; margin: 21px 0 0; color: var(--nox-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .nox-download p strong { color: var(--nox-text); }
        .nox-store-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .nox-store-button { display: inline-flex; align-items: center; gap: 10px; min-width: 179px; padding: 9px 10px; border: 1px solid rgba(232, 240, 236, 0.55); border-radius: 2px; background: #f7f7f1; color: #0c1f24; text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
        .nox-store-button:hover { background: var(--nox-signal); transform: translateY(-3px); }
        .nox-store-button:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }
        .nox-store-button .nox-store-mark { width: 20px; height: 23px; flex: 0 0 auto; fill: currentColor; }
        .nox-store-button span { display: grid; line-height: 1.05; }
        .nox-store-button small { font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; }
        .nox-store-button strong { margin-top: 3px; font-size: 14px; letter-spacing: -0.03em; }
        .nox-store-button > svg:last-child { margin-left: auto; }
        .nox-download-screen { width: 196px; margin: -30px 8px -118px 0; transform: rotate(4deg); }
        .nox-download-screen .nox-screen__frame { border-radius: 16px; padding: 5px; }
        .nox-download-screen .nox-screen__frame img { border-radius: 11px; }

        @media (max-width: 900px) {
          .nox-nav { display: none; }
          .nox-hero { padding: 58px 0 76px; }
          .nox-hero__grid, .nox-section-head, .nox-payout__grid, .nox-faq-grid { grid-template-columns: 1fr; }
          .nox-hero-stage { max-width: 500px; margin: 6px auto 0; }
          .nox-section-head { gap: 22px; margin-bottom: 44px; }
          .nox-instrument-grid, .nox-voices-grid { grid-template-columns: 1fr; }
          .nox-payout__grid { gap: 44px; }
          .nox-faq-grid { gap: 47px; }
          .nox-download-panel { grid-template-columns: 1fr; }
          .nox-download-screen { display: none; }
        }

        @media (max-width: 620px) {
          .nox-shell { width: min(100% - 30px, 1180px); }
          .nox-header__inner { min-height: 65px; gap: 12px; }
          .nox-brand { font-size: 15px; gap: 7px; }
          .nox-brand img { height: 29px; }
          .nox-header-cta { padding: 9px 10px; font-size: 11px; }
          .nox-title { font-size: clamp(2.85rem, 14.6vw, 4.2rem); }
          .nox-hero-copy { margin: 22px 0 27px; font-size: 15px; }
          .nox-hero-stage .nox-screen { width: min(100%, 296px); }
          .nox-hero-beacon { left: 0; font-size: 10px; }
          .nox-instruments, .nox-voices { padding: 76px 0; }
          .nox-section-title { font-size: clamp(2.4rem, 12vw, 3.5rem); }
          .nox-payout { padding: 68px 0; }
          .nox-payout-list .nox-method { min-width: 0; }
          .nox-payout-list li { grid-template-columns: 1fr; gap: 4px; }
          .nox-faq { padding: 72px 0; }
          .nox-faq-list summary { padding: 18px 0; font-size: 14px; }
          .nox-faq-list p { margin-right: 0; }
          .nox-download { padding: 56px 0; }
          .nox-download-panel { gap: 0; padding: 30px 23px; }
          .nox-download h2 { font-size: clamp(2.6rem, 13vw, 3.7rem); }
          .nox-store-row { display: grid; }
          .nox-store-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .nox-page *, .nox-page *::before, .nox-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
          .nox-header-cta:hover, .nox-store-button:hover, .nox-instrument:hover { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .nox-header { background: var(--nox-bg); backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .nox-screen__frame, .nox-download-panel, .nox-header, .nox-instrument { border-width: 2px; }
        }
      `}</style>

      <header className="nox-header">
        <div className="nox-shell nox-header__inner">
          <a className="nox-brand" href="#top" aria-label="97plantões — início">
            <img src="./logo.svg" alt="" />
            <span><b>97</b>plantões</span>
          </a>
          <nav className="nox-nav" aria-label="Navegação principal">
            <a href="#painel">Painel de segurança</a>
            <a href="#repasse">Repasse</a>
            <a href="#perguntas">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="nox-header-cta" href="#baixar">
            Baixar o app <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="nox-hero" aria-labelledby="nox-hero-title">
          <div className="nox-shell nox-hero__grid">
            <div>
              <p className="nox-kicker">97plantões / turno noturno</p>
              <h1 className="nox-title" id="nox-hero-title">Segurança em primeiro lugar, <em>do anoitecer ao amanhecer</em>.</h1>
              <p className="nox-hero-copy">
                Plantões acontecem a qualquer hora. Por isso a plataforma vigia cada detalhe: <strong>CRM verificado, dados protegidos e pagamento retido</strong> até o plantão acontecer.
              </p>
              <a className="nox-hero-link" href="#painel">Ver o painel de segurança <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>

            <div className="nox-hero-stage">
              <span className="nox-hero-beacon"><Moon size={15} aria-hidden="true" /> Vigilância ativa em cada plantão</span>
              <AppScreen
                src="./unnamed (5).png"
                alt="Tela real de pagamento no 97plantões"
                label="Pagamento"
                eager
              />
            </div>
          </div>
        </section>

        <section className="nox-instruments" id="painel" aria-labelledby="nox-instruments-title">
          <div className="nox-shell">
            <div className="nox-section-head">
              <div>
                <p className="nox-section-label">Painel de instrumentos</p>
                <h2 className="nox-section-title" id="nox-instruments-title">Quatro instrumentos sempre acesos no escuro.</h2>
              </div>
              <p className="nox-section-intro">Cada medidor deste painel corresponde a uma camada real de proteção dentro do aplicativo.</p>
            </div>

            <div className="nox-instrument-grid">
              {instruments.map((instrument) => (
                <article className="nox-instrument" key={instrument.code}>
                  <div className="nox-instrument__head">
                    <span className="nox-instrument__code">{instrument.code}</span>
                    <span className="nox-instrument__icon">{instrument.icon}</span>
                  </div>
                  <h3>{instrument.title}</h3>
                  <p>{instrument.text}</p>
                  <span className="nox-instrument__status"><Signal size={11} aria-hidden="true" /> operacional</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nox-payout" id="repasse" aria-labelledby="nox-payout-title">
          <div className="nox-shell nox-payout__grid">
            <div>
              <p className="nox-section-label">Radar de repasse</p>
              <h2 id="nox-payout-title">O valor do plantão só muda de mãos depois que ele acontece.</h2>
              <p className="nox-payout-copy">
                Modalidades: <strong>cartão de crédito (em até 6x), PIX e boleto</strong>. Após realizar o plantão, o valor é repassado à sua conta bancária pessoal — a plataforma assegura esse repasse.
              </p>
            </div>

            <ul className="nox-payout-list">
              {payoutTerms.map((payout) => (
                <li key={payout.method}>
                  <span className="nox-method">{payout.method}</span>
                  <span className="nox-term">{payout.term}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="nox-voices" aria-labelledby="nox-voices-title">
          <div className="nox-shell">
            <div className="nox-section-head">
              <div>
                <p className="nox-section-label">Comunidade 97</p>
                <h2 className="nox-section-title" id="nox-voices-title">Vozes que atravessam a noite.</h2>
              </div>
              <p className="nox-section-intro">O que os médicos dizem sobre segurança e pagamento na plataforma.</p>
            </div>

            <div className="nox-voices-grid">
              {testimonials.map((voice) => (
                <figure className="nox-voice" key={voice.role}>
                  <span className="nox-voice__stars" aria-label="Avaliação: 5 de 5">
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                  </span>
                  <blockquote>“{voice.text}”</blockquote>
                  <figcaption>{voice.role} · {voice.city} · {voice.status}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="nox-faq" id="perguntas" aria-labelledby="nox-faq-title">
          <div className="nox-shell nox-faq-grid">
            <div>
              <p className="nox-section-label">Ronda de dúvidas</p>
              <h2 className="nox-section-title" id="nox-faq-title">Perguntas frequentes sobre segurança.</h2>
              <p className="nox-faq-sidecopy">Pagamento, dados e conversas: as respostas que mantêm o turno tranquilo.</p>
            </div>

            <div className="nox-faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q} <ChevronDown size={19} aria-hidden="true" /></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="nox-download" id="baixar" aria-labelledby="nox-download-title">
          <div className="nox-shell nox-download-panel">
            <div>
              <p className="nox-section-label">Conectando a Saúde do Brasil</p>
              <h2 id="nox-download-title">Durma tranquilo: o repasse está sob vigia.</h2>
              <p>Junte-se à <strong>97plantões</strong> e passe ou assuma plantões com CRM verificado, chat privado e pagamento garantido.</p>
              <div className="nox-store-row">
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
            <AppScreen
              src="./unnamed (4).png"
              alt="Tela real de detalhes de um plantão no 97plantões"
              label="Detalhes no app"
              className="nox-download-screen"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
