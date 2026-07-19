import { useState } from 'react';
import Footer from './Footer';
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Barcode,
  ChevronDown,
  ClipboardList,
  CreditCard,
  ShieldCheck,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="ops-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="ops-store-mark">
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
      className="ops-store-button"
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
    <figure className={`ops-screen ${className}`}>
      <div className="ops-screen__meta">
        <span className="ops-screen__dot" aria-hidden="true" />
        <span>{label}</span>
        <span className="ops-screen__live">tela real</span>
      </div>
      <div className="ops-screen__frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

const briefingGroups = [
  {
    category: 'Cadastro e Perfil',
    code: 'SEÇÃO 01',
    items: [
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
    ],
  },
  {
    category: 'Ofertar um Plantão',
    code: 'SEÇÃO 02',
    items: [
      {
        q: 'Preciso pagar para ofertar um plantão?',
        a: 'Não. Ofertar um plantão no aplicativo é totalmente gratuito. A plataforma foi criada para profissionalizar a oferta de plantões em todo o Brasil, conectando médicos de forma organizada e segura em um ambiente único.',
      },
      {
        q: 'Como ofertar um plantão que preciso passar?',
        a: 'No Painel, toque no ícone no canto superior direito e escolha entre Plantão Avulso ou Contrato Fixo. Preencha as informações do plantão, incluindo a unidade de saúde, e toque em Ofertar. O plantão será publicado automaticamente e ficará visível para todos os médicos cadastrados.',
      },
      {
        q: 'Posso escolher quem vai assumir meu plantão?',
        a: 'Sim. É possível direcionar a oferta para um médico específico cadastrado na plataforma, usando a opção Atribuir. Você também pode receber candidaturas abertas e escolher o profissional mais adequado após revisar o perfil e entrar em contato pelo chat.',
      },
      {
        q: 'Consigo enviar o link do meu plantão pelo WhatsApp?',
        a: 'Sim. Após criar a oferta e clicar em Ofertar, você terá a opção de compartilhar o link da oferta pelo WhatsApp, permitindo que outros médicos acessem o plantão e se candidatem.',
      },
      {
        q: 'Você será notificado quando houver novas candidaturas?',
        a: 'Sim. Sempre que uma nova candidatura for registrada para um plantão seu, você será notificado automaticamente pelo aplicativo.',
      },
    ],
  },
  {
    category: 'Candidatar-se a um Plantão',
    code: 'SEÇÃO 03',
    items: [
      {
        q: 'Posso assumir qualquer plantão publicado?',
        a: 'Sim, desde que o plantão esteja localizado em um Estado onde o seu CRM seja válido. É importante verificar se o plantão pertence à unidade federativa em que você possui autorização para atuar profissionalmente.',
      },
      {
        q: 'Como encontro plantões disponíveis?',
        a: 'Os plantões aparecem na Página Inicial em formato de rolagem com priorização inteligente, no Mapa interativo por proximidade, e na Agenda por data. Você pode aplicar filtros de período (6h, 12h ou 24h), especialidade e tipo de plantão.',
      },
      {
        q: 'Onde acompanho minhas candidaturas?',
        a: 'Na tela de Painel, na aba Pendências. Lá você visualiza cada candidatura, pode acessar o mapa da localidade e cancelar sua candidatura a qualquer momento. Quando sua candidatura for aceita, você será notificado.',
      },
    ],
  },
  {
    category: 'Pagamento',
    code: 'SEÇÃO 04',
    items: [
      {
        q: 'Quais são as modalidades de pagamento?',
        a: 'Cartão de crédito (parcelamento em até 6x), PIX e Boleto.',
      },
      {
        q: 'O pagamento é seguro?',
        a: 'Sim. O pagamento é realizado de forma segura, com dados protegidos por mecanismos de segurança e criptografia. O repasse ao profissional responsável ocorre somente após a realização do plantão, trazendo mais segurança para ambas as partes.',
      },
      {
        q: 'Se eu assumir um plantão, quando recebo o pagamento?',
        a: 'Após realizar o plantão, o valor é repassado à sua conta bancária pessoal. PIX: mesmo dia ou dia útil seguinte. Boleto: até 2 dias úteis. Cartão de crédito: até 14 dias úteis.',
      },
      {
        q: 'O pagamento é garantido após eu realizar o plantão?',
        a: 'Sim. Após a finalização do plantão, o pagamento é processado e repassado para a sua conta bancária pessoal, conforme os prazos informados. A plataforma assegura esse repasse.',
      },
    ],
  },
  {
    category: 'Comunicação e Segurança',
    code: 'SEÇÃO 05',
    items: [
      {
        q: 'Consigo conversar em chat com o médico do plantão?',
        a: 'Sim. O chat é liberado após a confirmação do plantão. A conversa fica disponível na aba Conversas, na tela de Perfil. Você também pode enviar mensagens antes de confirmar para alinhar detalhes.',
      },
      {
        q: 'O chat é seguro e privado?',
        a: 'Sim. O chat é privado entre você e o outro profissional médico. Nenhuma outra pessoa tem acesso à conversa, e os dados são protegidos pela plataforma.',
      },
      {
        q: 'E se eu tiver um imprevisto e não conseguir comparecer ao plantão?',
        a: 'Acesse a aba Minhas Confirmações na tela de Perfil e selecione Tive um imprevisto. Você será direcionado ao suporte, que irá auxiliar da melhor forma possível. Atenção: deixar de comparecer pode impactar sua reputação na plataforma.',
      },
    ],
  },
];

const totalAnswers = briefingGroups.reduce((sum, group) => sum + group.items.length, 0);

const paymentMethods = [
  {
    icon: <CreditCard size={20} aria-hidden="true" />,
    title: 'Cartão de crédito',
    detail: 'Parcelamento em até 6x',
    term: 'Repasse em até 14 dias úteis',
  },
  {
    icon: <Banknote size={20} aria-hidden="true" />,
    title: 'PIX',
    detail: 'Direto e sem intermediários',
    term: 'Repasse no mesmo dia ou dia útil seguinte',
  },
  {
    icon: <Barcode size={20} aria-hidden="true" />,
    title: 'Boleto',
    detail: 'Compensação bancária tradicional',
    term: 'Repasse em até 2 dias úteis',
  },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  const [activeCategory, setActiveCategory] = useState(briefingGroups[0].category);
  const activeGroup = briefingGroups.find((group) => group.category === activeCategory) ?? briefingGroups[0];

  return (
    <div className="ops-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        .ops-page {
          --ops-ink: #183338;
          --ops-muted: #5f7375;
          --ops-paper: #f4f3ed;
          --ops-panel: #e9eeea;
          --ops-aqua: #68b5b9;
          --ops-deep-aqua: #0a6870;
          --ops-signal: #e7bb35;
          --ops-coral: #dc7553;
          --ops-line: rgba(24, 51, 56, 0.16);
          background: var(--ops-paper);
          color: var(--ops-ink);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: clip;
        }

        .ops-page *, .ops-page *::before, .ops-page *::after { box-sizing: border-box; }
        .ops-page a { color: inherit; }
        .ops-page a:focus-visible, .ops-page summary:focus-visible, .ops-page button:focus-visible {
          outline: 3px solid var(--ops-signal);
          outline-offset: 4px;
        }
        .ops-page ::selection { background: var(--ops-signal); color: var(--ops-ink); }
        .ops-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }

        .ops-header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(244, 243, 237, 0.91);
          border-bottom: 1px solid var(--ops-line);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
        }
        .ops-header__inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .ops-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 17px; font-weight: 800; letter-spacing: -0.05em; }
        .ops-brand img { height: 34px; width: auto; border-radius: 9px; }
        .ops-brand b { color: var(--ops-deep-aqua); }
        .ops-nav { display: flex; align-items: center; gap: 25px; color: var(--ops-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.035em; }
        .ops-nav a { text-decoration: none; transition: color 160ms ease; }
        .ops-nav a:hover { color: var(--ops-deep-aqua); }
        .ops-header-cta {
          display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto;
          padding: 10px 14px; background: var(--ops-ink); color: #fff !important;
          border: 1px solid var(--ops-ink); border-radius: 3px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.02em; transition: transform 180ms ease, background 180ms ease;
        }
        .ops-header-cta:hover { background: var(--ops-deep-aqua); transform: translateY(-2px); }
        .ops-header-cta:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }

        /* ── Hero: the briefing masthead ── */
        .ops-hero { position: relative; isolation: isolate; padding: 80px 0 88px; border-bottom: 1px solid var(--ops-line); }
        .ops-hero::before {
          content: ''; position: absolute; inset: 0; z-index: -2;
          background-image: linear-gradient(rgba(24, 51, 56, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 51, 56, 0.06) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.12));
        }
        .ops-hero__grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(330px, 0.68fr); gap: clamp(36px, 7vw, 100px); align-items: center; }
        .ops-doc-head {
          display: flex; flex-wrap: wrap; gap: 8px 26px; margin-bottom: 30px; padding: 11px 0;
          border-top: 1px solid var(--ops-ink); border-bottom: 1px solid var(--ops-line);
          font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ops-muted);
        }
        .ops-doc-head strong { color: var(--ops-deep-aqua); font-weight: 500; }
        .ops-title { max-width: 700px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(3rem, 5.9vw, 5.4rem); font-weight: 600; line-height: 0.94; letter-spacing: -0.062em; }
        .ops-title em { color: var(--ops-deep-aqua); font-style: italic; }
        .ops-title mark { background: linear-gradient(transparent 58%, rgba(231, 187, 53, 0.55) 58%); color: inherit; padding: 0 2px; }
        .ops-hero-copy { max-width: 540px; margin: 26px 0 32px; color: var(--ops-muted); font-size: clamp(1rem, 1.35vw, 1.12rem); font-weight: 500; line-height: 1.7; }
        .ops-hero-copy strong { color: var(--ops-ink); }
        .ops-hero-link { display: inline-flex; align-items: center; gap: 9px; padding-bottom: 5px; border-bottom: 1px solid currentColor; color: var(--ops-ink); text-decoration: none; font-size: 13px; font-weight: 800; transition: color 160ms ease, gap 160ms ease; }
        .ops-hero-link:hover { color: var(--ops-deep-aqua); gap: 14px; }

        .ops-hero-stage { position: relative; display: grid; justify-items: center; padding: 22px 16px 28px; }
        .ops-hero-stage::before { content: ''; position: absolute; inset: 5% 3% 5%; background: var(--ops-aqua); opacity: 0.22; transform: rotate(-3deg); border: 1px solid var(--ops-deep-aqua); }
        .ops-hero-stage .ops-screen { position: relative; z-index: 1; width: min(100%, 336px); }
        .ops-hero-tag {
          position: absolute; z-index: 3; right: -4px; bottom: 40px; display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 13px; background: var(--ops-signal); border: 1px solid var(--ops-ink); color: var(--ops-ink);
          font-size: 11px; font-weight: 800; line-height: 1.2; box-shadow: 4px 4px 0 var(--ops-ink); max-width: 190px;
        }

        .ops-screen { margin: 0; }
        .ops-screen__meta { display: flex; align-items: center; gap: 7px; min-height: 31px; color: var(--ops-muted); font-family: 'DM Mono', ui-monospace, monospace; font-size: 9px; letter-spacing: 0.055em; text-transform: uppercase; }
        .ops-screen__dot { width: 7px; height: 7px; background: var(--ops-coral); border-radius: 50%; }
        .ops-screen__live { margin-left: auto; color: var(--ops-deep-aqua); }
        .ops-screen__frame { overflow: hidden; padding: 7px; background: #183338; border: 1px solid #183338; border-radius: 22px; box-shadow: 13px 13px 0 rgba(24, 51, 56, 0.14); }
        .ops-screen__frame img { display: block; width: 100%; height: auto; border-radius: 16px; }

        /* ── Briefing manifest: tabbed sections ── */
        .ops-manifest { padding: 108px 0 104px; }
        .ops-section-head { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(260px, 0.5fr); gap: 48px; align-items: end; margin-bottom: 54px; }
        .ops-section-label { display: flex; align-items: center; gap: 9px; margin: 0 0 15px; color: var(--ops-deep-aqua); font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .ops-section-label::before { content: ''; width: 28px; height: 1px; background: currentColor; }
        .ops-section-title { max-width: 720px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.4rem, 4.4vw, 4.3rem); font-weight: 600; line-height: 0.98; letter-spacing: -0.06em; }
        .ops-section-intro { max-width: 380px; margin: 0 0 4px; color: var(--ops-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }

        .ops-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 0; border-top: 1px solid var(--ops-ink); padding-top: 22px; }
        .ops-tab {
          appearance: none; border: 1px solid var(--ops-line); background: transparent; color: var(--ops-muted);
          font-family: 'DM Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase;
          padding: 10px 16px; cursor: pointer; border-radius: 2px;
          transition: color 150ms ease, border-color 150ms ease, background 150ms ease, transform 150ms ease;
        }
        .ops-tab:hover { color: var(--ops-ink); border-color: var(--ops-ink); }
        .ops-tab:active { transform: scale(0.97); transition-duration: 90ms; }
        .ops-tab[aria-selected="true"] {
          background: var(--ops-ink); border-color: var(--ops-ink); color: #f4f3ed;
          box-shadow: 3px 3px 0 var(--ops-signal);
        }
        .ops-tab__code { color: var(--ops-coral); margin-right: 8px; }
        .ops-tab[aria-selected="true"] .ops-tab__code { color: var(--ops-signal); }

        .ops-panel { border-top: 1px solid var(--ops-line); margin-top: 26px; }
        .ops-panel__meta {
          display: flex; align-items: center; gap: 12px; padding: 18px 0 6px;
          font-family: 'DM Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ops-muted);
        }
        .ops-panel__meta strong { color: var(--ops-coral); font-weight: 500; }
        .ops-panel details { border-bottom: 1px solid var(--ops-line); }
        .ops-panel summary {
          display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px;
          padding: 19px 0; cursor: pointer; color: var(--ops-ink); font-size: 15px; font-weight: 800; list-style: none;
        }
        .ops-panel summary::-webkit-details-marker { display: none; }
        .ops-panel summary:hover { color: var(--ops-deep-aqua); }
        .ops-item-no { font-family: 'DM Mono', ui-monospace, monospace; color: var(--ops-coral); font-size: 10px; letter-spacing: 0.06em; }
        .ops-panel summary svg { flex: 0 0 auto; color: var(--ops-deep-aqua); transition: transform 180ms ease; }
        .ops-panel details[open] summary svg { transform: rotate(180deg); }
        .ops-panel details p { max-width: 720px; margin: -4px 42px 20px 44px; color: var(--ops-muted); font-size: 13px; font-weight: 500; line-height: 1.62; }

        /* ── Payment briefing ── */
        .ops-payment { padding: 96px 0; background: var(--ops-ink); color: #e8f0ec; }
        .ops-payment .ops-section-label { color: var(--ops-aqua); }
        .ops-payment h2 { max-width: 700px; margin: 0; color: #f7f7f1; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.2rem, 4vw, 3.7rem); font-weight: 600; line-height: 0.99; letter-spacing: -0.055em; }
        .ops-payment__head { margin-bottom: 46px; }
        .ops-payment-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid rgba(232, 240, 236, 0.3); }
        .ops-payment-cell { padding: 26px 26px 4px 0; }
        .ops-payment-cell + .ops-payment-cell { border-left: 1px solid rgba(232, 240, 236, 0.18); padding-left: 26px; }
        .ops-payment-cell h3 { display: flex; align-items: center; gap: 10px; margin: 0 0 8px; color: #f7f7f1; font-size: 16px; font-weight: 800; letter-spacing: -0.02em; }
        .ops-payment-cell h3 svg { color: var(--ops-signal); }
        .ops-payment-cell p { margin: 0 0 6px; color: rgba(232, 240, 236, 0.72); font-size: 13px; line-height: 1.55; }
        .ops-payment-cell .ops-term { color: var(--ops-signal); font-weight: 800; font-size: 12px; font-family: 'DM Mono', ui-monospace, monospace; letter-spacing: 0.05em; text-transform: uppercase; }
        .ops-payment-note { display: flex; gap: 12px; align-items: flex-start; margin: 36px 0 0; padding: 18px 20px; border: 1px dashed rgba(231, 187, 53, 0.65); max-width: 820px; }
        .ops-payment-note svg { flex: 0 0 auto; color: var(--ops-signal); margin-top: 2px; }
        .ops-payment-note p { margin: 0; color: rgba(232, 240, 236, 0.8); font-size: 13px; line-height: 1.6; }

        /* ── Download ── */
        .ops-download { position: relative; padding: 78px 0; background: var(--ops-panel); border-top: 1px solid var(--ops-line); overflow: hidden; }
        .ops-download::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(24, 51, 56, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 51, 56, 0.05) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .ops-download-panel { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 55px; align-items: center; padding: clamp(29px, 5vw, 61px); border: 1px solid var(--ops-ink); background: var(--ops-paper); box-shadow: 12px 12px 0 rgba(10, 104, 112, 0.16); }
        .ops-download h2 { max-width: 620px; margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 4.4rem); font-weight: 600; line-height: 0.95; letter-spacing: -0.06em; }
        .ops-download p { max-width: 500px; margin: 21px 0 0; color: var(--ops-muted); font-size: 15px; font-weight: 500; line-height: 1.65; }
        .ops-download p strong { color: var(--ops-ink); }
        .ops-store-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .ops-store-button { display: inline-flex; align-items: center; gap: 10px; min-width: 179px; padding: 9px 10px; border: 1px solid var(--ops-ink); border-radius: 2px; background: var(--ops-ink); color: #f7f7f1; text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
        .ops-store-button:hover { background: var(--ops-deep-aqua); border-color: var(--ops-deep-aqua); transform: translateY(-3px); }
        .ops-store-button:active { transform: translateY(0) scale(0.98); transition-duration: 100ms; }
        .ops-store-button .ops-store-mark { width: 20px; height: 23px; flex: 0 0 auto; fill: currentColor; }
        .ops-store-button span { display: grid; line-height: 1.05; }
        .ops-store-button small { font-family: 'DM Mono', ui-monospace, monospace; font-size: 8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; }
        .ops-store-button strong { margin-top: 3px; font-size: 14px; letter-spacing: -0.03em; }
        .ops-store-button > svg:last-child { margin-left: auto; }
        .ops-download-screen { width: 196px; margin: -30px 8px -114px 0; transform: rotate(4deg); }
        .ops-download-screen .ops-screen__frame { border-radius: 16px; padding: 5px; box-shadow: 9px 11px 0 rgba(24, 51, 56, 0.2); }
        .ops-download-screen .ops-screen__frame img { border-radius: 11px; }

        @media (max-width: 900px) {
          .ops-nav { display: none; }
          .ops-hero { padding: 58px 0 70px; }
          .ops-hero__grid, .ops-section-head { grid-template-columns: 1fr; }
          .ops-hero-stage { max-width: 500px; margin: 6px auto 0; }
          .ops-section-head { gap: 22px; margin-bottom: 40px; }
          .ops-payment-grid { grid-template-columns: 1fr; }
          .ops-payment-cell + .ops-payment-cell { border-left: 0; padding-left: 0; border-top: 1px solid rgba(232, 240, 236, 0.18); padding-top: 20px; }
          .ops-download-panel { grid-template-columns: 1fr; }
          .ops-download-screen { display: none; }
        }

        @media (max-width: 620px) {
          .ops-shell { width: min(100% - 30px, 1180px); }
          .ops-header__inner { min-height: 65px; gap: 12px; }
          .ops-brand { font-size: 15px; gap: 7px; }
          .ops-brand img { height: 29px; }
          .ops-header-cta { padding: 9px 10px; font-size: 11px; }
          .ops-title { font-size: clamp(2.85rem, 14.6vw, 4.2rem); }
          .ops-hero-copy { margin: 22px 0 27px; font-size: 15px; }
          .ops-hero-stage .ops-screen { width: min(100%, 296px); }
          .ops-hero-tag { right: 0; font-size: 10px; }
          .ops-manifest { padding: 76px 0; }
          .ops-section-title { font-size: clamp(2.4rem, 12vw, 3.5rem); }
          .ops-panel summary { grid-template-columns: auto minmax(0, 1fr) auto; gap: 12px; padding: 17px 0; font-size: 14px; }
          .ops-panel details p { margin: -4px 0 18px 0; }
          .ops-payment { padding: 70px 0; }
          .ops-download { padding: 52px 0; }
          .ops-download-panel { gap: 0; padding: 30px 23px; }
          .ops-download h2 { font-size: clamp(2.55rem, 12.6vw, 3.6rem); }
          .ops-store-row { display: grid; }
          .ops-store-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ops-page *, .ops-page *::before, .ops-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
          .ops-header-cta:hover, .ops-store-button:hover { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .ops-header { background: var(--ops-paper); backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .ops-screen__frame, .ops-download-panel, .ops-header { border-width: 2px; }
        }
      `}</style>

      <header className="ops-header">
        <div className="ops-shell ops-header__inner">
          <a className="ops-brand" href="#top" aria-label="97plantões — início">
            <img src="./logo.svg" alt="" />
            <span><b>97</b>plantões</span>
          </a>
          <nav className="ops-nav" aria-label="Navegação principal">
            <a href="#manual">O manual</a>
            <a href="#pagamento">Pagamento</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="ops-header-cta" href="#baixar">
            Baixar o app <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="ops-hero" aria-labelledby="ops-hero-title">
          <div className="ops-shell ops-hero__grid">
            <div>
              <div className="ops-doc-head" aria-label="Dados do documento">
                <span>DOCUMENTO <strong>BRF-97</strong></span>
                <span>SEÇÕES <strong>{briefingGroups.length}</strong></span>
                <span>RESPOSTAS <strong>{totalAnswers}</strong></span>
                <span>DISTRIBUIÇÃO <strong>MÉDICOS VERIFICADOS</strong></span>
              </div>
              <h1 className="ops-title" id="ops-hero-title">O <em>briefing</em> completo antes do seu próximo plantão: <mark>leia, confira, confirme</mark>.</h1>
              <p className="ops-hero-copy">
                Tudo que você precisa saber sobre o 97plantões reunido em um único manual: <strong>cadastro, ofertas, candidaturas, pagamento e comunicação</strong> — na ordem em que as dúvidas aparecem.
              </p>
              <a className="ops-hero-link" href="#manual">Abrir o manual <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>

            <div className="ops-hero-stage">
              <AppScreen
                src="./unnamed (4).png"
                alt="Tela real de detalhes de um plantão no 97plantões"
                label="Detalhes do plantão"
                eager
              />
              <span className="ops-hero-tag"><ClipboardList size={15} aria-hidden="true" /> A informação certa antes de confirmar</span>
            </div>
          </div>
        </section>

        <section className="ops-manifest" id="manual" aria-labelledby="ops-manifest-title">
          <div className="ops-shell">
            <div className="ops-section-head">
              <div>
                <p className="ops-section-label">Dúvidas? · Perguntas frequentes</p>
                <h2 className="ops-section-title" id="ops-manifest-title">Cinco seções. Dezoito respostas. Nenhuma letra miúda.</h2>
              </div>
              <p className="ops-section-intro">Escolha a seção do briefing e abra cada item para ler a resposta completa.</p>
            </div>

            <div className="ops-tabs" role="tablist" aria-label="Seções do briefing">
              {briefingGroups.map((group) => (
                <button
                  key={group.category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === group.category}
                  className="ops-tab"
                  onClick={() => setActiveCategory(group.category)}
                >
                  <span className="ops-tab__code">{group.code}</span>
                  {group.category}
                </button>
              ))}
            </div>

            <div className="ops-panel" role="tabpanel" aria-label={activeGroup.category}>
              <div className="ops-panel__meta">
                <span>{activeGroup.code}</span>
                <span aria-hidden="true">·</span>
                <strong>{activeGroup.items.length} itens</strong>
                <span aria-hidden="true">·</span>
                <span>{activeGroup.category}</span>
              </div>
              {activeGroup.items.map((item, index) => (
                <details key={item.q}>
                  <summary>
                    <span className="ops-item-no">{String(index + 1).padStart(2, '0')}</span>
                    {item.q}
                    <ChevronDown size={19} aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ops-payment" id="pagamento" aria-labelledby="ops-payment-title">
          <div className="ops-shell">
            <div className="ops-payment__head">
              <p className="ops-section-label">Anexo financeiro</p>
              <h2 id="ops-payment-title">Modalidades de pagamento e prazos de repasse, item por item.</h2>
            </div>

            <div className="ops-payment-grid">
              {paymentMethods.map((method) => (
                <div className="ops-payment-cell" key={method.title}>
                  <h3>{method.icon} {method.title}</h3>
                  <p>{method.detail}</p>
                  <p className="ops-term">{method.term}</p>
                </div>
              ))}
            </div>

            <div className="ops-payment-note">
              <ShieldCheck size={19} aria-hidden="true" />
              <p>O pagamento é realizado de forma segura, com dados protegidos por mecanismos de segurança e criptografia. O repasse ao profissional responsável ocorre somente após a realização do plantão, trazendo mais segurança para ambas as partes.</p>
            </div>
          </div>
        </section>

        <section className="ops-download" id="baixar" aria-labelledby="ops-download-title">
          <div className="ops-shell ops-download-panel">
            <div>
              <p className="ops-section-label">Conectando a Saúde do Brasil</p>
              <h2 id="ops-download-title">Briefing lido? Então é hora de baixar.</h2>
              <p>Junte-se à <strong>97plantões</strong> e tenha o manual inteiro no bolso: oferte, candidate-se, converse e receba com segurança.</p>
              <div className="ops-store-row">
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
            <AppScreen
              src="./unnamed.png"
              alt="Tela real de início do 97plantões com oportunidades em hospitais"
              label="Início no app"
              className="ops-download-screen"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
