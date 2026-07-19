import Footer from './Footer';
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  CreditCard,
  Lock,
  PenLine,
  ShieldCheck,
  Star,
  UserPlus,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="fld-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="fld-store-mark">
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
      className="fld-store-button"
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
    <figure className={`fld-screen ${className}`}>
      <div className="fld-screen__meta">
        <span className="fld-screen__dot" aria-hidden="true" />
        <span>{label}</span>
        <span className="fld-screen__live">tela real</span>
      </div>
      <div className="fld-screen__frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

const fieldNotes = [
  {
    note: 'NOTA 01',
    text: 'Finalmente uma plataforma séria para médicos. A verificação de CRM transmite muita segurança em relação ao médico para quem passei meu plantão.',
    role: 'Clínica Médica',
    city: 'São Paulo, SP',
    status: 'Médico verificado',
  },
  {
    note: 'NOTA 02',
    text: 'Encontrar plantões na minha especialidade ficou muito mais fácil. O Mapa interativo é incrível para encontrar plantões em Hospitais próximos a mim.',
    role: 'Pediatra',
    city: 'Rio de Janeiro, RJ',
    status: 'Médica verificada',
  },
  {
    note: 'NOTA 03',
    text: 'Recebi o pagamento na minha conta logo após finalizar o plantão. Não preciso mais me preocupar com calotes, resolveu um maior problema de pegar plantão no dia a dia.',
    role: 'Emergencista',
    city: 'São Paulo, SP',
    status: 'Médico verificado',
  },
  {
    note: 'NOTA 04',
    text: 'O chat com o médico que vai assumir o plantão é uma ferramenta incrível para alinhar os detalhes com tranquilidade. Simples e privado.',
    role: 'Intensivista',
    city: 'Rio de Janeiro, RJ',
    status: 'Médica verificada',
  },
];

const protocol = [
  {
    icon: <ShieldCheck size={22} aria-hidden="true" />,
    item: 'PROTOCOLO A',
    title: 'CRM Verificado',
    text: 'Verificamos com rigor se o CRM informado é válido junto aos órgãos responsáveis. Apenas médicos ativos podem participar.',
  },
  {
    icon: <Lock size={22} aria-hidden="true" />,
    item: 'PROTOCOLO B',
    title: 'Dados Protegidos',
    text: 'Suas informações pessoais e de pagamento são protegidas com mecanismos de segurança de ponta a ponta.',
  },
  {
    icon: <CreditCard size={22} aria-hidden="true" />,
    item: 'PROTOCOLO C',
    title: 'Pagamento Escrow',
    text: 'O valor do plantão é retido e repassado somente após a realização do plantão por ambas as partes.',
  },
  {
    icon: <UserPlus size={22} aria-hidden="true" />,
    item: 'PROTOCOLO D',
    title: 'Reputação na Plataforma',
    text: 'O histórico de compromissos cumpridos é registrado. Médicos confiáveis se destacam, promovendo responsabilidade.',
  },
];

const faqs = [
  {
    q: 'Quem pode se cadastrar?',
    a: 'O aplicativo é destinado exclusivamente a médicos. Podem se cadastrar profissionais de todas as especialidades e níveis de experiência. Para manter a comunidade segura e confiável, verificamos com rigor se o CRM informado é válido junto aos respectivos órgãos, garantindo um ambiente seguro para todos.',
  },
  {
    q: 'Minhas informações pessoais estão seguras?',
    a: 'Sim. A privacidade dos seus dados é uma prioridade para nós. Suas informações são protegidas por mecanismos de segurança e criptografia, com foco na confidencialidade e na proteção dos dados. Você pode utilizar o aplicativo com tranquilidade.',
  },
  {
    q: 'Posso atualizar meu perfil depois?',
    a: 'Sim. Você pode editar suas informações de perfil a qualquer momento pelo aplicativo. É possível atualizar sua foto, seus dados de contato e adicionar especialidades. Manter o perfil completo e atualizado aumenta a confiança na plataforma e facilita a conexão com outros médicos.',
  },
  {
    q: 'Consigo conversar em chat com o médico do plantão?',
    a: 'Sim. O chat é liberado após a confirmação do plantão. A conversa fica disponível na aba Conversas, na tela de Perfil. Você também pode enviar mensagens antes de confirmar para alinhar detalhes.',
  },
  {
    q: 'E se eu tiver um imprevisto e não conseguir comparecer ao plantão?',
    a: 'Acesse a aba Minhas Confirmações na tela de Perfil e selecione Tive um imprevisto. Você será direcionado ao suporte, que irá auxiliar da melhor forma possível. Atenção: deixar de comparecer pode impactar sua reputação na plataforma.',
  },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="fld-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        .fld-page {
          --fld-ink: #183338;
          --fld-pencil: #55504a;
          --fld-paper: #f6f1e5;
          --fld-sheet: #fdfbf4;
          --fld-aqua: #68b5b9;
          --fld-deep-aqua: #0a6870;
          --fld-signal: #e7bb35;
          --fld-coral: #dc7553;
          --fld-line: rgba(24, 51, 56, 0.16);
          background: var(--fld-paper);
          color: var(--fld-ink);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: clip;
        }

        .fld-page *, .fld-page *::before, .fld-page *::after { box-sizing: border-box; }
        .fld-page a { color: inherit; }
        .fld-page a:focus-visible, .fld-page summary:focus-visible {
          outline: 3px solid var(--fld-signal);
          outline-offset: 4px;
        }
        .fld-page ::selection { background: var(--fld-signal); color: var(--fld-ink); }
        .fld-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }

        .fld-header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(246, 241, 229, 0.92);
          border-bottom: 1px solid var(--fld-line);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
        }
        .fld-header__inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .fld-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 17px; font-weight: 800; letter-spacing: -0.05em; }
        .fld-brand img { height: 34px; width: auto; border-radius: 9px; }
        .fld-brand b { color: var(--fld-deep-aqua); }
        .fld-nav { display: flex; align-items: center; gap: 25px; color: var(--fld-pencil); font-size: 12px; font-weight: 700; letter-spacing: 0.035em; }
        .fld-nav a { text-decoration: none; transition: color 160ms ease; }
        .fld-nav a:hover { color: var(--fld-deep-aqua); }
        .fld-header-cta {
          display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
          padding: 10px 14px; background: var(--fld-ink); color: #fff !important;
          border: 1px solid var(--fld-ink); border-radius: 3px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.02em; transition: transform 180ms ease, background 180ms ease;
        }
        .fld-header-cta:hover { background: var(--fld-deep-aqua); transform: translateY(-2px); }
        .fld-header-cta:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }

        /* ── Hero: the notebook opens ── */
        .fld-hero { position: relative; isolation: isolate; padding: 84px 0 96px; border-bottom: 1px solid var(--fld-line); }
        .fld-hero::before {
          content: ''; position: absolute; inset: 0; z-index: -2;
          background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 35px, rgba(10, 104, 112, 0.10) 35px, rgba(10, 104, 112, 0.10) 36px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25));
        }
        .fld-hero__grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(330px, 0.7fr); gap: clamp(36px, 7vw, 104px); align-items: center; }
        .fld-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 25px; font-family: 'DM Mono', ui-monospace, monospace; color: var(--fld-deep-aqua); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .fld-kicker::before { content: ''; width: 9px; height: 9px; background: var(--fld-coral); border-radius: 50%; box-shadow: 0 0 0 5px rgba(220, 117, 83, 0.14); }
        .fld-title { max-width: 700px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(3rem, 5.9vw, 5.5rem); font-weight: 600; line-height: 0.94; letter-spacing: -0.062em; }
        .fld-title em { color: var(--fld-deep-aqua); font-style: italic; }
        .fld-hero-copy { max-width: 540px; margin: 26px 0 32px; color: var(--fld-pencil); font-size: clamp(1rem, 1.35vw, 1.12rem); font-weight: 500; line-height: 1.7; }
        .fld-hero-copy strong { color: var(--fld-ink); }
        .fld-hero-link { display: inline-flex; align-items: center; gap: 9px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: var(--fld-ink); text-decoration: none; font-size: 13px; font-weight: 800; transition: color 160ms ease, gap 160ms ease; }
        .fld-hero-link:hover { color: var(--fld-deep-aqua); gap: 14px; }

        .fld-hero-stage { position: relative; display: grid; justify-items: center; padding: 26px 16px 30px; }
        .fld-hero-stage .fld-screen { position: relative; z-index: 1; width: min(100%, 336px); transform: rotate(2deg); }
        .fld-tape {
          position: absolute; z-index: 3; width: 118px; height: 32px;
          background: rgba(231, 187, 53, 0.55); border-left: 1px dashed rgba(24,51,56,0.25); border-right: 1px dashed rgba(24,51,56,0.25);
          box-shadow: 0 2px 4px rgba(24, 51, 56, 0.12);
        }
        .fld-tape--hero { top: 8px; left: 50%; transform: translateX(-50%) rotate(-3deg); }
        .fld-margin-note {
          position: absolute; z-index: 3; right: -4px; bottom: 44px; max-width: 168px;
          color: var(--fld-pencil); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.04em; line-height: 1.5;
          transform: rotate(3deg);
        }
        .fld-margin-note::before { content: '↳ '; color: var(--fld-coral); }

        .fld-screen { margin: 0; }
        .fld-screen__meta { display: flex; align-items: center; gap: 7px; min-height: 31px; color: var(--fld-pencil); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.055em; text-transform: uppercase; }
        .fld-screen__dot { width: 7px; height: 7px; background: var(--fld-coral); border-radius: 50%; }
        .fld-screen__live { margin-left: auto; color: var(--fld-deep-aqua); }
        .fld-screen__frame { overflow: hidden; padding: 7px; background: #183338; border: 1px solid #183338; border-radius: 22px; box-shadow: 13px 13px 0 rgba(24, 51, 56, 0.14); }
        .fld-screen__frame img { display: block; width: 100%; height: auto; border-radius: 16px; }

        /* ── Field notes: testimonials taped to the page ── */
        .fld-notes { padding: 112px 0 104px; }
        .fld-section-head { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(260px, 0.5fr); gap: 48px; align-items: end; margin-bottom: 66px; }
        .fld-section-label { display: flex; align-items: center; gap: 9px; margin: 0 0 15px; color: var(--fld-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .fld-section-label::before { content: ''; width: 28px; height: 1px; background: currentColor; }
        .fld-section-title { max-width: 720px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.4rem, 4.4vw, 4.3rem); font-weight: 600; line-height: 0.98; letter-spacing: -0.06em; }
        .fld-section-intro { max-width: 380px; margin: 0 0 4px; color: var(--fld-pencil); font-size: 15px; font-weight: 500; line-height: 1.65; }

        .fld-notes-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(28px, 4vw, 48px); }
        .fld-note {
          position: relative; padding: 30px 30px 26px; background: var(--fld-sheet);
          border: 1px solid rgba(24, 51, 56, 0.14); box-shadow: 7px 8px 0 rgba(24, 51, 56, 0.07);
          transition: transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms ease;
        }
        .fld-note:nth-child(odd) { transform: rotate(-0.9deg); }
        .fld-note:nth-child(even) { transform: rotate(0.9deg); }
        .fld-note:hover { transform: rotate(0deg) translateY(-5px); box-shadow: 9px 12px 0 rgba(24, 51, 56, 0.1); }
        .fld-note .fld-tape { top: -14px; left: 34px; width: 96px; height: 26px; transform: rotate(-4deg); }
        .fld-note__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
        .fld-note__no { font-family: 'DM Mono', ui-monospace, monospace; color: var(--fld-coral); font-size: 10px; letter-spacing: 0.12em; }
        .fld-note__stars { display: inline-flex; gap: 3px; color: var(--fld-signal); }
        .fld-note blockquote { margin: 0 0 20px; font-family: 'Newsreader', Georgia, serif; font-size: clamp(1.22rem, 1.9vw, 1.5rem); font-weight: 500; letter-spacing: -0.03em; line-height: 1.34; }
        .fld-note figcaption { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; color: var(--fld-pencil); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.07em; text-transform: uppercase; }
        .fld-note figcaption svg { color: var(--fld-deep-aqua); }

        /* ── Protocol: the verification entries ── */
        .fld-protocol { padding: 104px 0 108px; background: var(--fld-ink); color: #e8f0ec; }
        .fld-protocol .fld-section-label { color: var(--fld-aqua); }
        .fld-protocol .fld-section-title { color: #f7f7f1; }
        .fld-protocol .fld-section-intro { color: rgba(232, 240, 236, 0.72); }
        .fld-protocol-stamp {
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 10px 18px;
          border: 2px dashed var(--fld-signal); color: var(--fld-signal);
          font-family: 'DM Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;
          transform: rotate(-1.6deg);
        }
        .fld-protocol-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: rgba(232, 240, 236, 0.22); border: 1px solid rgba(232, 240, 236, 0.22); }
        .fld-protocol-cell { padding: 30px 30px 28px; background: var(--fld-ink); }
        .fld-protocol-cell__item { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 17px; color: var(--fld-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; }
        .fld-protocol-cell__item svg { color: var(--fld-signal); }
        .fld-protocol-cell h3 { margin: 0 0 10px; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.04em; }
        .fld-protocol-cell p { margin: 0; color: rgba(232, 240, 236, 0.72); font-size: 13px; line-height: 1.62; }

        /* ── FAQ ── */
        .fld-faq { padding: 104px 0 108px; }
        .fld-faq-grid { display: grid; grid-template-columns: minmax(270px, 0.7fr) minmax(0, 1.15fr); gap: clamp(46px, 10vw, 130px); align-items: start; }
        .fld-faq-sidecopy { margin: 23px 0 0; max-width: 310px; color: var(--fld-pencil); font-size: 14px; font-weight: 500; line-height: 1.65; }
        .fld-faq-list { border-top: 1px solid var(--fld-ink); }
        .fld-faq-list details { border-bottom: 1px solid var(--fld-line); }
        .fld-faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 21px 0; cursor: pointer; color: var(--fld-ink); font-size: 15px; font-weight: 800; list-style: none; }
        .fld-faq-list summary::-webkit-details-marker { display: none; }
        .fld-faq-list summary svg { flex: 0 0 auto; color: var(--fld-deep-aqua); transition: transform 180ms ease; }
        .fld-faq-list details[open] summary svg { transform: rotate(180deg); }
        .fld-faq-list p { max-width: 630px; margin: -4px 42px 22px 0; color: var(--fld-pencil); font-size: 13px; font-weight: 500; line-height: 1.62; }

        /* ── Download ── */
        .fld-download { position: relative; padding: 78px 0; background: var(--fld-ink); overflow: hidden; }
        .fld-download::after { content: ''; position: absolute; width: 700px; height: 700px; top: -370px; right: -205px; border: 1px solid rgba(232, 240, 236, 0.22); border-radius: 49% 51% 63% 37% / 49% 36% 64% 51%; box-shadow: 0 0 0 60px rgba(104, 181, 185, 0.11), 0 0 0 120px rgba(104, 181, 185, 0.07); }
        .fld-download-panel { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 55px; align-items: center; padding: clamp(29px, 5vw, 61px); border: 1px solid rgba(232, 240, 236, 0.3); background: rgba(246, 241, 229, 0.055); }
        .fld-download .fld-section-label { color: var(--fld-aqua); }
        .fld-download h2 { max-width: 640px; margin: 0; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 4.6rem); font-weight: 600; line-height: 0.95; letter-spacing: -0.06em; }
        .fld-download p { max-width: 500px; margin: 21px 0 0; color: rgba(232, 240, 236, 0.75); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .fld-download p strong { color: #f7f7f1; }
        .fld-store-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .fld-store-button { display: inline-flex; align-items: center; gap: 10px; min-width: 179px; padding: 9px 10px; border: 1px solid rgba(232, 240, 236, 0.55); border-radius: 2px; background: #f7f7f1; color: var(--fld-ink); text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
        .fld-store-button:hover { background: var(--fld-signal); transform: translateY(-3px); }
        .fld-store-button:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }
        .fld-store-button .fld-store-mark { width: 20px; height: 23px; flex: 0 0 auto; fill: currentColor; }
        .fld-store-button span { display: grid; line-height: 1.05; }
        .fld-store-button small { font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; }
        .fld-store-button strong { margin-top: 3px; font-size: 14px; letter-spacing: -0.03em; }
        .fld-store-button > svg:last-child { margin-left: auto; }
        .fld-download-screen { width: 196px; margin: -30px 8px -114px 0; transform: rotate(4deg); }
        .fld-download-screen .fld-screen__meta { color: rgba(232, 240, 236, 0.7); }
        .fld-download-screen .fld-screen__live { color: var(--fld-signal); }
        .fld-download-screen .fld-screen__frame { border-radius: 16px; padding: 5px; box-shadow: 9px 11px 0 rgba(0, 0, 0, 0.28); }
        .fld-download-screen .fld-screen__frame img { border-radius: 11px; }

        @media (max-width: 900px) {
          .fld-nav { display: none; }
          .fld-hero { padding: 58px 0 76px; }
          .fld-hero__grid, .fld-section-head, .fld-faq-grid { grid-template-columns: 1fr; }
          .fld-hero-stage { max-width: 500px; margin: 6px auto 0; }
          .fld-section-head { gap: 22px; margin-bottom: 46px; }
          .fld-notes-grid, .fld-protocol-grid { grid-template-columns: 1fr; }
          .fld-margin-note { position: static; transform: none; margin: 18px auto 0; max-width: 260px; text-align: center; }
          .fld-faq-grid { gap: 47px; }
          .fld-download-panel { grid-template-columns: 1fr; }
          .fld-download-screen { display: none; }
        }

        @media (max-width: 620px) {
          .fld-shell { width: min(100% - 30px, 1180px); }
          .fld-header__inner { min-height: 65px; gap: 12px; }
          .fld-brand { font-size: 15px; gap: 7px; }
          .fld-brand img { height: 29px; }
          .fld-header-cta { padding: 9px 10px; font-size: 11px; }
          .fld-title { font-size: clamp(2.85rem, 14.6vw, 4.2rem); }
          .fld-hero-copy { margin: 22px 0 27px; font-size: 15px; }
          .fld-hero-stage .fld-screen { width: min(100%, 296px); }
          .fld-notes, .fld-faq { padding: 76px 0; }
          .fld-section-title { font-size: clamp(2.4rem, 12vw, 3.5rem); }
          .fld-note { padding: 26px 22px 22px; }
          .fld-protocol { padding: 76px 0; }
          .fld-protocol-cell { padding: 24px 22px; }
          .fld-faq-list summary { padding: 18px 0; font-size: 14px; }
          .fld-faq-list p { margin-right: 0; }
          .fld-download { padding: 52px 0; }
          .fld-download-panel { gap: 0; padding: 30px 23px; }
          .fld-download h2 { font-size: clamp(2.6rem, 13vw, 3.7rem); }
          .fld-store-row { display: grid; }
          .fld-store-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .fld-page *, .fld-page *::before, .fld-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
          .fld-header-cta:hover, .fld-store-button:hover, .fld-note:hover { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .fld-header { background: var(--fld-paper); backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .fld-screen__frame, .fld-download-panel, .fld-header, .fld-note { border-width: 2px; }
        }
      `}</style>

      <header className="fld-header">
        <div className="fld-shell fld-header__inner">
          <a className="fld-brand" href="#top" aria-label="97plantões — início">
            <img src="./logo.svg" alt="" />
            <span><b>97</b>plantões</span>
          </a>
          <nav className="fld-nav" aria-label="Navegação principal">
            <a href="#notas">Notas de campo</a>
            <a href="#protocolo">Protocolo</a>
            <a href="#perguntas">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="fld-header-cta" href="#baixar">
            Baixar o app <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="fld-hero" aria-labelledby="fld-hero-title">
          <div className="fld-shell fld-hero__grid">
            <div>
              <p className="fld-kicker">97plantões / caderno de campo</p>
              <h1 className="fld-title" id="fld-hero-title">Anotações de quem <em>vive o plantão</em> todos os dias.</h1>
              <p className="fld-hero-copy">
                De médico para médico: registramos neste caderno o que a comunidade verificada diz sobre <strong>passar e assumir plantões</strong> com segurança, praticidade e eficiência.
              </p>
              <a className="fld-hero-link" href="#notas">Ler as notas de campo <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>

            <div className="fld-hero-stage">
              <span className="fld-tape fld-tape--hero" aria-hidden="true" />
              <AppScreen
                src="./unnamed (6).png"
                alt="Tela real de perfil profissional no 97plantões"
                label="Perfil médico"
                eager
              />
              <span className="fld-margin-note">perfil completo aumenta a confiança na plataforma</span>
            </div>
          </div>
        </section>

        <section className="fld-notes" id="notas" aria-labelledby="fld-notes-title">
          <div className="fld-shell">
            <div className="fld-section-head">
              <div>
                <p className="fld-section-label">Comunidade 97 · O que os médicos dizem</p>
                <h2 className="fld-section-title" id="fld-notes-title">Quatro notas coladas neste caderno.</h2>
              </div>
              <p className="fld-section-intro">Relatos reais de médicos verificados, registrados como quem anota entre um plantão e outro.</p>
            </div>

            <div className="fld-notes-grid">
              {fieldNotes.map((note) => (
                <figure className="fld-note" key={note.note}>
                  <span className="fld-tape" aria-hidden="true" />
                  <div className="fld-note__head">
                    <span className="fld-note__no">{note.note}</span>
                    <span className="fld-note__stars" aria-label="Avaliação: 5 de 5">
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                    </span>
                  </div>
                  <blockquote>“{note.text}”</blockquote>
                  <figcaption>
                    <BadgeCheck size={14} aria-hidden="true" />
                    {note.role} · {note.city} · {note.status}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="fld-protocol" id="protocolo" aria-labelledby="fld-protocol-title">
          <div className="fld-shell">
            <span className="fld-protocol-stamp"><PenLine size={15} aria-hidden="true" /> Registrado e verificado</span>
            <div className="fld-section-head">
              <div>
                <p className="fld-section-label">Segurança em primeiro lugar</p>
                <h2 className="fld-section-title" id="fld-protocol-title">O protocolo que sustenta cada nota deste caderno.</h2>
              </div>
              <p className="fld-section-intro">Quatro regras de campo, seguidas à risca em todos os plantões que passam pela plataforma.</p>
            </div>

            <div className="fld-protocol-grid">
              {protocol.map((entry) => (
                <article className="fld-protocol-cell" key={entry.item}>
                  <div className="fld-protocol-cell__item">
                    <span>{entry.item}</span>
                    {entry.icon}
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fld-faq" id="perguntas" aria-labelledby="fld-faq-title">
          <div className="fld-shell fld-faq-grid">
            <div>
              <p className="fld-section-label">Margem do caderno</p>
              <h2 className="fld-section-title" id="fld-faq-title">Dúvidas anotadas à lápis.</h2>
              <p className="fld-faq-sidecopy">Cadastro, perfil e conversas: as perguntas que mais aparecem nas margens, respondidas sem rodeio.</p>
            </div>

            <div className="fld-faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q} <ChevronDown size={19} aria-hidden="true" /></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="fld-download" id="baixar" aria-labelledby="fld-download-title">
          <div className="fld-shell fld-download-panel">
            <div>
              <p className="fld-section-label">Conectando a Saúde do Brasil</p>
              <h2 id="fld-download-title">A próxima página deste caderno é sua.</h2>
              <p>Junte-se à <strong>97plantões</strong> e faça parte de uma comunidade verificada de médicos em todo o Brasil.</p>
              <div className="fld-store-row">
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
            <AppScreen
              src="./unnamed (3).png"
              alt="Tela real do painel do 97plantões com conversas e pendências"
              label="Painel no app"
              className="fld-download-screen"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
