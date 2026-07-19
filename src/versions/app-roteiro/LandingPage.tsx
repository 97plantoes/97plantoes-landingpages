import Footer from './Footer';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  CreditCard,
  MessageCircle,
  Search,
  Star,
  UserPlus,
  Wallet,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="itn-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="itn-store-mark">
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
      className="itn-store-button"
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
    <figure className={`itn-screen ${className}`}>
      <div className="itn-screen__meta">
        <span className="itn-screen__dot" aria-hidden="true" />
        <span>{label}</span>
        <span className="itn-screen__live">tela real</span>
      </div>
      <div className="itn-screen__frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

const stops = [
  {
    no: 'PARADA 01',
    icon: <UserPlus size={19} aria-hidden="true" />,
    title: 'Cadastre-se como Médico',
    text: 'O aplicativo é destinado exclusivamente a médicos, de todas as especialidades e níveis de experiência. O CRM informado é verificado com rigor junto aos respectivos órgãos.',
    src: './unnamed (6).png',
    alt: 'Tela real de perfil profissional no 97plantões',
    label: 'Perfil médico',
  },
  {
    no: 'PARADA 02',
    icon: <Search size={19} aria-hidden="true" />,
    title: 'Oferte ou Candidate-se',
    text: 'Ofertar um plantão é totalmente gratuito: escolha entre Plantão Avulso ou Contrato Fixo, preencha as informações e publique. Para se candidatar, explore as oportunidades com priorização inteligente.',
    src: './unnamed.png',
    alt: 'Tela real de início do 97plantões com oportunidades em hospitais, especialidades, horários e valores',
    label: 'Oportunidades',
  },
  {
    no: 'PARADA 03',
    icon: <MessageCircle size={19} aria-hidden="true" />,
    title: 'Converse pelo chat',
    text: 'O chat é privado entre você e o outro profissional médico. Alinhe os detalhes antes de confirmar e mantenha a conversa disponível na aba Conversas depois da confirmação.',
    src: './unnamed (3).png',
    alt: 'Tela real do painel do 97plantões com conversas e pendências',
    label: 'Painel e conversas',
  },
  {
    no: 'PARADA 04',
    icon: <CreditCard size={19} aria-hidden="true" />,
    title: 'Pagamento garantido',
    text: 'O valor fica retido com segurança e é repassado ao médico que assumiu o plantão apenas após a sua conclusão. A plataforma assegura o repasse.',
    src: './unnamed (5).png',
    alt: 'Tela real de pagamento no 97plantões',
    label: 'Pagamento',
  },
];

const payouts = [
  { method: 'PIX', term: 'Mesmo dia ou dia útil seguinte' },
  { method: 'Boleto', term: 'Até 2 dias úteis' },
  { method: 'Cartão de crédito', term: 'Até 14 dias úteis' },
];

const testimonials = [
  {
    text: 'Recebi o pagamento na minha conta logo após finalizar o plantão. Não preciso mais me preocupar com calotes, resolveu um maior problema de pegar plantão no dia a dia.',
    role: 'Emergencista',
    city: 'São Paulo, SP',
  },
  {
    text: 'O chat com o médico que vai assumir o plantão é uma ferramenta incrível para alinhar os detalhes com tranquilidade. Simples e privado.',
    role: 'Intensivista',
    city: 'Rio de Janeiro, RJ',
  },
];

const faqs = [
  {
    q: 'Preciso pagar para ofertar um plantão?',
    a: 'Não. Ofertar um plantão no aplicativo é totalmente gratuito. A plataforma foi criada para profissionalizar a oferta de plantões em todo o Brasil, conectando médicos de forma organizada e segura em um ambiente único.',
  },
  {
    q: 'Posso escolher quem vai assumir meu plantão?',
    a: 'Sim. É possível direcionar a oferta para um médico específico cadastrado na plataforma, usando a opção Atribuir. Você também pode receber candidaturas abertas e escolher o profissional mais adequado após revisar o perfil e entrar em contato pelo chat.',
  },
  {
    q: 'Quais são as modalidades de pagamento?',
    a: 'Cartão de crédito (parcelamento em até 6x), PIX e Boleto.',
  },
  {
    q: 'O pagamento é garantido após eu realizar o plantão?',
    a: 'Sim. Após a finalização do plantão, o pagamento é processado e repassado para a sua conta bancária pessoal, conforme os prazos informados. A plataforma assegura esse repasse.',
  },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="itn-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        .itn-page {
          --itn-ink: #183338;
          --itn-muted: #5f7375;
          --itn-paper: #f4f3ed;
          --itn-panel: #e9eeea;
          --itn-aqua: #68b5b9;
          --itn-deep-aqua: #0a6870;
          --itn-signal: #e7bb35;
          --itn-coral: #dc7553;
          --itn-line: rgba(24, 51, 56, 0.16);
          background: var(--itn-paper);
          color: var(--itn-ink);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: clip;
        }

        .itn-page *, .itn-page *::before, .itn-page *::after { box-sizing: border-box; }
        .itn-page a { color: inherit; }
        .itn-page a:focus-visible, .itn-page summary:focus-visible {
          outline: 3px solid var(--itn-signal);
          outline-offset: 4px;
        }
        .itn-page ::selection { background: var(--itn-signal); color: var(--itn-ink); }
        .itn-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }

        .itn-header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(244, 243, 237, 0.91);
          border-bottom: 1px solid var(--itn-line);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
        }
        .itn-header__inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .itn-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 17px; font-weight: 800; letter-spacing: -0.05em; }
        .itn-brand img { height: 34px; width: auto; border-radius: 9px; }
        .itn-brand b { color: var(--itn-deep-aqua); }
        .itn-nav { display: flex; align-items: center; gap: 25px; color: var(--itn-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.035em; }
        .itn-nav a { text-decoration: none; transition: color 160ms ease; }
        .itn-nav a:hover { color: var(--itn-deep-aqua); }
        .itn-header-cta {
          display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
          padding: 10px 14px; background: var(--itn-ink); color: #fff !important;
          border: 1px solid var(--itn-ink); border-radius: 3px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.02em; transition: transform 180ms ease, background 180ms ease;
        }
        .itn-header-cta:hover { background: var(--itn-deep-aqua); transform: translateY(-2px); }
        .itn-header-cta:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }

        /* ── Hero: departure board ── */
        .itn-hero { position: relative; isolation: isolate; padding: 82px 0 92px; border-bottom: 1px solid var(--itn-line); overflow: hidden; }
        .itn-hero::before {
          content: ''; position: absolute; inset: 0; z-index: -2;
          background-image: linear-gradient(rgba(24, 51, 56, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 51, 56, 0.06) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.12));
        }
        .itn-hero__grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(330px, 0.68fr); gap: clamp(36px, 7vw, 100px); align-items: center; }
        .itn-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 25px; font-family: 'DM Mono', ui-monospace, monospace; color: var(--itn-deep-aqua); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .itn-kicker::before { content: ''; width: 9px; height: 9px; background: var(--itn-coral); border-radius: 50%; box-shadow: 0 0 0 5px rgba(220, 117, 83, 0.14); }
        .itn-title { max-width: 700px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(3rem, 5.9vw, 5.5rem); font-weight: 600; line-height: 0.94; letter-spacing: -0.062em; }
        .itn-title em { color: var(--itn-deep-aqua); font-style: italic; }
        .itn-hero-copy { max-width: 540px; margin: 26px 0 32px; color: var(--itn-muted); font-size: clamp(1rem, 1.35vw, 1.12rem); font-weight: 500; line-height: 1.7; }
        .itn-hero-copy strong { color: var(--itn-ink); }
        .itn-hero-link { display: inline-flex; align-items: center; gap: 9px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: var(--itn-ink); text-decoration: none; font-size: 13px; font-weight: 800; transition: color 160ms ease, gap 160ms ease; }
        .itn-hero-link:hover { color: var(--itn-deep-aqua); gap: 14px; }

        .itn-hero-stage { position: relative; display: grid; justify-items: center; padding: 20px 16px 28px; }
        .itn-hero-stage::before { content: ''; position: absolute; inset: 5% 3% 5%; background: var(--itn-aqua); opacity: 0.22; transform: rotate(3deg); border: 1px solid var(--itn-deep-aqua); }
        .itn-hero-stage .itn-screen { position: relative; z-index: 1; width: min(100%, 336px); }
        .itn-stamp {
          position: absolute; z-index: 3; left: -8px; top: 30px; padding: 8px 13px;
          background: var(--itn-coral); color: #fff; border: 1.5px dashed rgba(255,255,255,0.85); outline: 1px solid var(--itn-coral);
          font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
          transform: rotate(-5deg); box-shadow: 4px 4px 0 rgba(24, 51, 56, 0.2);
        }

        .itn-screen { margin: 0; }
        .itn-screen__meta { display: flex; align-items: center; gap: 7px; min-height: 31px; color: var(--itn-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.055em; text-transform: uppercase; }
        .itn-screen__dot { width: 7px; height: 7px; background: var(--itn-coral); border-radius: 50%; }
        .itn-screen__live { margin-left: auto; color: var(--itn-deep-aqua); }
        .itn-screen__frame { overflow: hidden; padding: 7px; background: #183338; border: 1px solid #183338; border-radius: 22px; box-shadow: 13px 13px 0 rgba(24, 51, 56, 0.14); }
        .itn-screen__frame img { display: block; width: 100%; height: auto; border-radius: 16px; }

        /* ── Itinerary: the route with four stamped stops ── */
        .itn-route { padding: 112px 0 104px; }
        .itn-section-head { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(260px, 0.5fr); gap: 48px; align-items: end; margin-bottom: 70px; }
        .itn-section-label { display: flex; align-items: center; gap: 9px; margin: 0 0 15px; color: var(--itn-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .itn-section-label::before { content: ''; width: 28px; height: 1px; background: currentColor; }
        .itn-section-title { max-width: 720px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.4rem, 4.4vw, 4.3rem); font-weight: 600; line-height: 0.98; letter-spacing: -0.06em; }
        .itn-section-intro { max-width: 380px; margin: 0 0 4px; color: var(--itn-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }

        .itn-stops { position: relative; }
        .itn-stops::before {
          content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 0;
          border-left: 2px dashed rgba(10, 104, 112, 0.4);
        }
        .itn-stop {
          position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(40px, 7vw, 96px); align-items: center; padding: 44px 0;
        }
        .itn-stop__pin {
          position: absolute; left: 50%; top: 50%; z-index: 2; transform: translate(-50%, -50%);
          display: grid; place-items: center; width: 58px; height: 58px;
          background: var(--itn-paper); border: 2px solid var(--itn-deep-aqua); border-radius: 50%;
          color: var(--itn-deep-aqua); box-shadow: 0 0 0 7px var(--itn-paper);
        }
        .itn-stop__body { max-width: 480px; }
        .itn-stop:nth-child(even) .itn-stop__body { grid-column: 2; grid-row: 1; justify-self: end; text-align: left; }
        .itn-stop:nth-child(even) .itn-stop__screen { grid-column: 1; grid-row: 1; }
        .itn-stop__no { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 13px; color: var(--itn-coral); font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; }
        .itn-stop h3 { margin: 0 0 11px; font-family: 'Newsreader', Georgia, serif; font-size: clamp(1.8rem, 2.8vw, 2.5rem); font-weight: 600; letter-spacing: -0.05em; line-height: 1.02; }
        .itn-stop p { margin: 0; color: var(--itn-muted); font-size: 14px; font-weight: 500; line-height: 1.66; }
        .itn-stop__screen { width: min(100%, 272px); }
        .itn-stop:nth-child(odd) .itn-stop__screen { justify-self: end; transform: rotate(2.5deg); }
        .itn-stop:nth-child(even) .itn-stop__screen { transform: rotate(-2.5deg); }
        .itn-stop__screen .itn-screen__frame { border-radius: 18px; padding: 6px; box-shadow: 10px 11px 0 rgba(24, 51, 56, 0.13); }
        .itn-stop__screen .itn-screen__frame img { border-radius: 13px; }
        .itn-stop__screen { transition: transform 240ms cubic-bezier(.2,.8,.2,1); }
        .itn-stop:hover .itn-stop__screen { transform: rotate(0deg) translateY(-5px); }

        /* ── Payout band ── */
        .itn-payout { padding: 84px 0; background: var(--itn-ink); color: #e8f0ec; }
        .itn-payout__head { display: flex; flex-wrap: wrap; align-items: end; justify-content: space-between; gap: 22px; margin-bottom: 44px; }
        .itn-payout .itn-section-label { color: var(--itn-aqua); }
        .itn-payout h2 { max-width: 620px; margin: 0; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.2rem, 3.9vw, 3.6rem); font-weight: 600; line-height: 1; letter-spacing: -0.055em; }
        .itn-payout__note { display: inline-flex; align-items: center; gap: 9px; color: var(--itn-signal); font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.09em; text-transform: uppercase; }
        .itn-payout-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid rgba(232, 240, 236, 0.3); }
        .itn-payout-cell { padding: 26px 26px 6px 0; }
        .itn-payout-cell + .itn-payout-cell { border-left: 1px solid rgba(232, 240, 236, 0.18); padding-left: 26px; }
        .itn-payout-cell h3 { display: flex; align-items: center; gap: 9px; margin: 0 0 10px; color: #f7f7f1; font-size: 16px; font-weight: 800; letter-spacing: -0.02em; }
        .itn-payout-cell h3 svg { color: var(--itn-aqua); }
        .itn-payout-cell p { margin: 0; color: rgba(232, 240, 236, 0.72); font-size: 13px; line-height: 1.6; }
        .itn-payout-cell strong { color: var(--itn-signal); font-weight: 800; }
        .itn-payout-foot { margin: 34px 0 0; color: rgba(232, 240, 236, 0.62); font-size: 13px; line-height: 1.6; max-width: 760px; }

        /* ── Testimonials ── */
        .itn-voices { padding: 104px 0 100px; }
        .itn-voices-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(26px, 4vw, 44px); }
        .itn-voice { border-top: 1px solid var(--itn-ink); padding-top: 20px; }
        .itn-voice__stars { display: inline-flex; gap: 3px; color: var(--itn-signal); margin-bottom: 15px; }
        .itn-voice blockquote { margin: 0 0 18px; font-family: 'Newsreader', Georgia, serif; font-size: clamp(1.3rem, 2vw, 1.65rem); font-weight: 500; letter-spacing: -0.035em; line-height: 1.28; }
        .itn-voice figcaption { display: flex; align-items: center; gap: 10px; color: var(--itn-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
        .itn-voice figcaption::before { content: ''; width: 22px; height: 1px; background: var(--itn-coral); }

        /* ── FAQ ── */
        .itn-faq { padding: 100px 0 106px; background: var(--itn-panel); border-top: 1px solid var(--itn-line); border-bottom: 1px solid var(--itn-line); }
        .itn-faq-grid { display: grid; grid-template-columns: minmax(270px, 0.7fr) minmax(0, 1.15fr); gap: clamp(46px, 10vw, 130px); align-items: start; }
        .itn-faq-sidecopy { margin: 23px 0 0; max-width: 310px; color: var(--itn-muted); font-size: 14px; font-weight: 500; line-height: 1.65; }
        .itn-faq-list { border-top: 1px solid var(--itn-ink); }
        .itn-faq-list details { border-bottom: 1px solid var(--itn-line); }
        .itn-faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 21px 0; cursor: pointer; color: var(--itn-ink); font-size: 15px; font-weight: 800; list-style: none; }
        .itn-faq-list summary::-webkit-details-marker { display: none; }
        .itn-faq-list summary svg { flex: 0 0 auto; color: var(--itn-deep-aqua); transition: transform 180ms ease; }
        .itn-faq-list details[open] summary svg { transform: rotate(180deg); }
        .itn-faq-list p { max-width: 630px; margin: -4px 42px 22px 0; color: var(--itn-muted); font-size: 13px; font-weight: 500; line-height: 1.62; }

        /* ── Download ── */
        .itn-download { position: relative; padding: 78px 0; background: var(--itn-ink); overflow: hidden; }
        .itn-download::after { content: ''; position: absolute; width: 700px; height: 700px; top: -370px; right: -205px; border: 1px solid rgba(232, 240, 236, 0.22); border-radius: 49% 51% 63% 37% / 49% 36% 64% 51%; box-shadow: 0 0 0 60px rgba(104, 181, 185, 0.11), 0 0 0 120px rgba(104, 181, 185, 0.07); }
        .itn-download-panel { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 55px; align-items: center; padding: clamp(29px, 5vw, 61px); border: 1px solid rgba(232, 240, 236, 0.3); background: rgba(244, 243, 237, 0.055); }
        .itn-download .itn-section-label { color: var(--itn-aqua); }
        .itn-download h2 { max-width: 620px; margin: 0; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 4.6rem); font-weight: 600; line-height: 0.95; letter-spacing: -0.06em; }
        .itn-download p { max-width: 500px; margin: 21px 0 0; color: rgba(232, 240, 236, 0.75); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .itn-download p strong { color: #f7f7f1; }
        .itn-store-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .itn-store-button { display: inline-flex; align-items: center; gap: 10px; min-width: 179px; padding: 9px 10px; border: 1px solid rgba(232, 240, 236, 0.55); border-radius: 2px; background: #f7f7f1; color: var(--itn-ink); text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
        .itn-store-button:hover { background: var(--itn-signal); transform: translateY(-3px); }
        .itn-store-button:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }
        .itn-store-button .itn-store-mark { width: 20px; height: 23px; flex: 0 0 auto; fill: currentColor; }
        .itn-store-button span { display: grid; line-height: 1.05; }
        .itn-store-button small { font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; }
        .itn-store-button strong { margin-top: 3px; font-size: 14px; letter-spacing: -0.03em; }
        .itn-store-button > svg:last-child { margin-left: auto; }
        .itn-download-screen { width: 196px; margin: -30px 8px -114px 0; transform: rotate(4deg); }
        .itn-download-screen .itn-screen__meta { color: rgba(232, 240, 236, 0.7); }
        .itn-download-screen .itn-screen__live { color: var(--itn-signal); }
        .itn-download-screen .itn-screen__frame { border-radius: 16px; padding: 5px; box-shadow: 9px 11px 0 rgba(0, 0, 0, 0.28); }
        .itn-download-screen .itn-screen__frame img { border-radius: 11px; }

        @media (max-width: 900px) {
          .itn-nav { display: none; }
          .itn-hero { padding: 58px 0 70px; }
          .itn-hero__grid, .itn-section-head, .itn-faq-grid { grid-template-columns: 1fr; }
          .itn-hero-stage { max-width: 500px; margin: 6px auto 0; }
          .itn-section-head { gap: 22px; margin-bottom: 46px; }
          .itn-stops::before { left: 20px; }
          .itn-stop { grid-template-columns: 1fr; gap: 26px; padding: 34px 0 34px 58px; }
          .itn-stop__pin { left: 20px; top: 46px; transform: none; width: 46px; height: 46px; box-shadow: 0 0 0 6px var(--itn-paper); }
          .itn-stop:nth-child(even) .itn-stop__body { grid-column: auto; grid-row: auto; justify-self: start; }
          .itn-stop:nth-child(even) .itn-stop__screen { grid-column: auto; grid-row: auto; }
          .itn-stop:nth-child(odd) .itn-stop__screen { justify-self: start; }
          .itn-payout-grid { grid-template-columns: 1fr; }
          .itn-payout-cell + .itn-payout-cell { border-left: 0; padding-left: 0; border-top: 1px solid rgba(232, 240, 236, 0.18); padding-top: 20px; }
          .itn-voices-grid { grid-template-columns: 1fr; }
          .itn-faq-grid { gap: 47px; }
          .itn-download-panel { grid-template-columns: 1fr; }
          .itn-download-screen { display: none; }
        }

        @media (max-width: 620px) {
          .itn-shell { width: min(100% - 30px, 1180px); }
          .itn-header__inner { min-height: 65px; gap: 12px; }
          .itn-brand { font-size: 15px; gap: 7px; }
          .itn-brand img { height: 29px; }
          .itn-header-cta { padding: 9px 10px; font-size: 11px; }
          .itn-title { font-size: clamp(2.85rem, 14.6vw, 4.2rem); }
          .itn-hero-copy { margin: 22px 0 27px; font-size: 15px; }
          .itn-hero-stage { padding-left: 10px; padding-right: 10px; }
          .itn-hero-stage .itn-screen { width: min(100%, 296px); }
          .itn-stamp { left: -2px; }
          .itn-route, .itn-voices { padding: 76px 0; }
          .itn-section-title { font-size: clamp(2.4rem, 12vw, 3.5rem); }
          .itn-stop { padding-left: 52px; }
          .itn-stop__screen { width: min(100%, 240px); }
          .itn-payout { padding: 64px 0; }
          .itn-faq { padding: 72px 0; }
          .itn-faq-list summary { padding: 18px 0; font-size: 14px; }
          .itn-faq-list p { margin-right: 0; }
          .itn-download { padding: 52px 0; }
          .itn-download-panel { gap: 0; padding: 30px 23px; }
          .itn-download h2 { font-size: clamp(2.6rem, 13vw, 3.7rem); }
          .itn-store-row { display: grid; }
          .itn-store-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .itn-page *, .itn-page *::before, .itn-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
          .itn-header-cta:hover, .itn-store-button:hover, .itn-stop:hover .itn-stop__screen { transform: none; }
          .itn-stop:nth-child(odd) .itn-stop__screen, .itn-stop:nth-child(even) .itn-stop__screen { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .itn-header { background: var(--itn-paper); backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .itn-screen__frame, .itn-download-panel, .itn-header { border-width: 2px; }
        }
      `}</style>

      <header className="itn-header">
        <div className="itn-shell itn-header__inner">
          <a className="itn-brand" href="#top" aria-label="97plantões — início">
            <img src="./logo.svg" alt="" />
            <span><b>97</b>plantões</span>
          </a>
          <nav className="itn-nav" aria-label="Navegação principal">
            <a href="#roteiro">O roteiro</a>
            <a href="#repasse">Repasse</a>
            <a href="#perguntas">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="itn-header-cta" href="#baixar">
            Baixar o app <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="itn-hero" id="roteiro" aria-labelledby="itn-hero-title">
          <div className="itn-shell itn-hero__grid">
            <div>
              <p className="itn-kicker">97plantões / roteiro do plantão</p>
              <h1 className="itn-title" id="itn-hero-title">Do cadastro ao repasse: <em>quatro paradas</em>, nenhuma surpresa.</h1>
              <p className="itn-hero-copy">
                Um plantão passado pelo app tem começo, meio e fim bem marcados. <strong>Simples e rápido</strong>: você sabe exatamente onde está e o que vem a seguir.
              </p>
              <a className="itn-hero-link" href="#paradas">Seguir o roteiro <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>

            <div className="itn-hero-stage">
              <span className="itn-stamp">Partida · Cadastro</span>
              <AppScreen
                src="./unnamed (6).png"
                alt="Tela real de perfil profissional no 97plantões"
                label="Perfil médico"
                eager
              />
            </div>
          </div>
        </section>

        <section className="itn-route" id="paradas" aria-labelledby="itn-route-title">
          <div className="itn-shell">
            <div className="itn-section-head">
              <div>
                <p className="itn-section-label">Simples e rápido</p>
                <h2 className="itn-section-title" id="itn-route-title">Como funciona: o itinerário completo, carimbo a carimbo.</h2>
              </div>
              <p className="itn-section-intro">Cada parada usa uma tela real do aplicativo — nada aqui é simulação.</p>
            </div>

            <div className="itn-stops">
              {stops.map((stop) => (
                <article className="itn-stop" key={stop.no}>
                  <span className="itn-stop__pin" aria-hidden="true">{stop.icon}</span>
                  <div className="itn-stop__body">
                    <span className="itn-stop__no">{stop.no}</span>
                    <h3>{stop.title}</h3>
                    <p>{stop.text}</p>
                  </div>
                  <div className="itn-stop__screen">
                    <AppScreen src={stop.src} alt={stop.alt} label={stop.label} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="itn-payout" id="repasse" aria-labelledby="itn-payout-title">
          <div className="itn-shell">
            <div className="itn-payout__head">
              <div>
                <p className="itn-section-label">Destino final</p>
                <h2 id="itn-payout-title">Se você assumir um plantão, o repasse chega à sua conta.</h2>
              </div>
              <span className="itn-payout__note"><Wallet size={15} aria-hidden="true" /> Repasse assegurado pela plataforma</span>
            </div>

            <div className="itn-payout-grid">
              {payouts.map((payout) => (
                <div className="itn-payout-cell" key={payout.method}>
                  <h3><CalendarDays size={17} aria-hidden="true" /> {payout.method}</h3>
                  <p><strong>{payout.term}</strong> após a realização do plantão.</p>
                </div>
              ))}
            </div>
            <p className="itn-payout-foot">Modalidades de pagamento: cartão de crédito (parcelamento em até 6x), PIX e boleto. O valor é retido com segurança e repassado somente após a realização do plantão — mais segurança para ambas as partes.</p>
          </div>
        </section>

        <section className="itn-voices" aria-labelledby="itn-voices-title">
          <div className="itn-shell">
            <div className="itn-section-head">
              <div>
                <p className="itn-section-label">Comunidade 97</p>
                <h2 className="itn-section-title" id="itn-voices-title">Quem já percorreu esse roteiro.</h2>
              </div>
              <p className="itn-section-intro">Relatos de médicos verificados que usam a plataforma no dia a dia.</p>
            </div>

            <div className="itn-voices-grid">
              {testimonials.map((voice) => (
                <figure className="itn-voice" key={voice.role}>
                  <span className="itn-voice__stars" aria-label="Avaliação: 5 de 5">
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                  </span>
                  <blockquote>“{voice.text}”</blockquote>
                  <figcaption>{voice.role} · {voice.city} · Médico verificado</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="itn-faq" id="perguntas" aria-labelledby="itn-faq-title">
          <div className="itn-shell itn-faq-grid">
            <div>
              <p className="itn-section-label">Antes da partida</p>
              <h2 className="itn-section-title" id="itn-faq-title">Perguntas frequentes.</h2>
              <p className="itn-faq-sidecopy">Respostas diretas sobre ofertar, pagar e receber — do jeito que funcionam no app.</p>
            </div>

            <div className="itn-faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q} <ChevronDown size={19} aria-hidden="true" /></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="itn-download" id="baixar" aria-labelledby="itn-download-title">
          <div className="itn-shell itn-download-panel">
            <div>
              <p className="itn-section-label">Conectando a Saúde do Brasil</p>
              <h2 id="itn-download-title">Sua próxima parada começa com um download.</h2>
              <p>Junte-se à <strong>97plantões</strong> e percorra o roteiro completo: cadastro verificado, oferta ou candidatura, chat privado e pagamento garantido.</p>
              <div className="itn-store-row">
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
            <AppScreen
              src="./unnamed (5).png"
              alt="Tela real de pagamento no 97plantões"
              label="Pagamento no app"
              className="itn-download-screen"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
