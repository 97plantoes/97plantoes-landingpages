import { useId, useState, type FC, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Play,
  Search,
  ShieldCheck,
  Smartphone,
  UserCheck,
  WalletCards,
} from 'lucide-react';
import Footer from './Footer';

const appleStoreUrl = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

const faqGroups = [
  {
    category: 'Cadastro e perfil',
    items: [
      {
        q: 'Quem pode se cadastrar?',
        a: 'O aplicativo é destinado exclusivamente a médicos. Podem se cadastrar profissionais de todas as especialidades e níveis de experiência. Para manter a comunidade segura e confiável, verificamos se o CRM informado é válido junto aos respectivos órgãos.',
      },
      {
        q: 'Minhas informações pessoais estão seguras?',
        a: 'Sim. A privacidade dos seus dados é uma prioridade. Suas informações são protegidas por mecanismos de segurança e criptografia, com foco na confidencialidade e na proteção dos dados.',
      },
      {
        q: 'Posso atualizar meu perfil depois?',
        a: 'Sim. Você pode editar suas informações de perfil a qualquer momento pelo aplicativo, incluindo foto, dados de contato e especialidades. Um perfil completo ajuda a criar conexões mais confiáveis.',
      },
    ],
  },
  {
    category: 'Ofertar um plantão',
    items: [
      {
        q: 'Preciso pagar para ofertar um plantão?',
        a: 'Não. Ofertar um plantão no aplicativo é gratuito. A plataforma conecta médicos em um ambiente organizado e seguro para profissionalizar a oferta de plantões em todo o Brasil.',
      },
      {
        q: 'Como ofertar um plantão que preciso passar?',
        a: 'No Painel, toque no ícone no canto superior direito e escolha entre Plantão Avulso ou Contrato Fixo. Preencha as informações, incluindo a unidade de saúde, e toque em Ofertar. O plantão ficará visível para os médicos cadastrados.',
      },
      {
        q: 'Posso escolher quem vai assumir meu plantão?',
        a: 'Sim. Você pode direcionar a oferta para um médico específico cadastrado, usando a opção Atribuir, ou receber candidaturas abertas e escolher o profissional após revisar o perfil e conversar pelo chat.',
      },
      {
        q: 'Consigo enviar o link do meu plantão pelo WhatsApp?',
        a: 'Sim. Após criar e ofertar o plantão, você terá a opção de compartilhar o link pelo WhatsApp para que outros médicos possam acessar a oferta e se candidatar.',
      },
      {
        q: 'Você será notificado quando houver novas candidaturas?',
        a: 'Sim. Sempre que uma nova candidatura for registrada para um plantão seu, você será notificado automaticamente pelo aplicativo.',
      },
    ],
  },
  {
    category: 'Assumir um plantão',
    items: [
      {
        q: 'Posso assumir qualquer plantão publicado?',
        a: 'Sim, desde que o plantão esteja localizado em um estado onde o seu CRM seja válido. Verifique se a oferta pertence à unidade federativa em que você tem autorização para atuar.',
      },
      {
        q: 'Como encontro plantões disponíveis?',
        a: 'Os plantões aparecem na Página Inicial, no Mapa interativo por proximidade e na Agenda por data. Você pode aplicar filtros de período, especialidade e tipo de plantão.',
      },
      {
        q: 'Onde acompanho minhas candidaturas?',
        a: 'Na tela de Painel, na aba Pendências. Lá você visualiza cada candidatura, pode acessar o mapa da localidade e cancelar sua candidatura a qualquer momento. Quando a candidatura for aceita, você será notificado.',
      },
    ],
  },
  {
    category: 'Pagamento',
    items: [
      {
        q: 'Quais são as modalidades de pagamento?',
        a: 'Cartão de crédito, com parcelamento em até 6x, PIX e boleto.',
      },
      {
        q: 'O pagamento é seguro?',
        a: 'Sim. Os dados são protegidos por mecanismos de segurança e criptografia. O valor é repassado ao profissional responsável somente após a realização do plantão, trazendo mais segurança para ambas as partes.',
      },
      {
        q: 'Se eu assumir um plantão, quando recebo o pagamento?',
        a: 'Após realizar o plantão, o valor é repassado à sua conta bancária pessoal. PIX: no mesmo dia ou dia útil seguinte. Boleto: até 2 dias úteis. Cartão de crédito: até 14 dias úteis.',
      },
      {
        q: 'O pagamento é garantido após eu realizar o plantão?',
        a: 'Após a finalização do plantão, o pagamento é processado e repassado para a sua conta bancária pessoal, conforme os prazos informados.',
      },
    ],
  },
  {
    category: 'Comunicação e segurança',
    items: [
      {
        q: 'Consigo conversar em chat com o médico do plantão?',
        a: 'Sim. O chat é liberado após a confirmação do plantão e fica disponível na aba Conversas, na tela de Perfil. Você também pode enviar mensagens antes de confirmar para alinhar detalhes.',
      },
      {
        q: 'O chat é seguro e privado?',
        a: 'Sim. O chat é privado entre você e o outro profissional médico. Nenhuma outra pessoa tem acesso à conversa, e os dados são protegidos pela plataforma.',
      },
      {
        q: 'E se eu tiver um imprevisto e não conseguir comparecer ao plantão?',
        a: 'Acesse a aba Minhas Confirmações na tela de Perfil e selecione Tive um imprevisto. Você será direcionado ao suporte, que irá auxiliar. Atenção: deixar de comparecer pode impactar sua reputação na plataforma.',
      },
    ],
  },
];

const proofItems = [
  'CRM consultado antes da conexão',
  'Confirmação registrada no aplicativo',
  'Valor protegido até a realização',
];

const ledgerStages = [
  {
    number: '01',
    eyebrow: 'Identidade',
    title: 'CRM em ordem antes do plantão entrar na conversa.',
    description: 'A comunidade é exclusiva para médicos. A verificação do CRM ajuda a tornar cada nova conexão mais clara desde o começo.',
    icon: UserCheck,
  },
  {
    number: '02',
    eyebrow: 'Confirmação',
    title: 'O acordo deixa de ser só uma mensagem.',
    description: 'Oferta, candidatura e confirmação ficam organizadas no app — com chat privado para alinhar os detalhes do plantão.',
    icon: FileCheck2,
  },
  {
    number: '03',
    eyebrow: 'Proteção',
    title: 'O pagamento acompanha o compromisso.',
    description: 'PIX, boleto ou cartão. O valor é processado de forma segura e segue o fluxo do plantão, não um combinado solto.',
    icon: LockKeyhole,
  },
  {
    number: '04',
    eyebrow: 'Repasse',
    title: 'Plantão concluído, repasse encaminhado.',
    description: 'Após a realização, o pagamento é processado para a conta bancária pessoal do médico que assumiu.',
    icon: WalletCards,
  },
];

const featureItems = [
  {
    label: 'Encontrar',
    title: 'Decida com a agenda e o mapa na mesma tela.',
    description: 'Veja plantões por proximidade, data, especialidade, período e tipo de escala.',
    icon: Search,
  },
  {
    label: 'Passar',
    title: 'Ofereça um avulso ou contrato fixo sem perder o controle.',
    description: 'Direcione para alguém específico ou avalie candidaturas da comunidade verificada.',
    icon: CircleDollarSign,
  },
  {
    label: 'Conversar',
    title: 'Alinhe os detalhes em um chat privado.',
    description: 'A conversa faz parte do fluxo para que a confirmação aconteça com o contexto necessário.',
    icon: MessageCircle,
  },
  {
    label: 'Organizar',
    title: 'Deixe os próximos compromissos visíveis.',
    description: 'A agenda integrada reúne seus plantões confirmados em um só lugar.',
    icon: CalendarDays,
  },
];

const testimonials = [
  {
    quote: 'Finalmente uma plataforma séria para médicos. A verificação de CRM transmite muita segurança em relação ao médico para quem passei meu plantão.',
    role: 'Clínica médica',
    location: 'São Paulo, SP',
    initial: 'C',
    status: 'Médico verificado',
  },
  {
    quote: 'Encontrar plantões na minha especialidade ficou muito mais fácil. O mapa interativo é incrível para encontrar hospitais próximos a mim.',
    role: 'Pediatra',
    location: 'Rio de Janeiro, RJ',
    initial: 'A',
    status: 'Médica verificada',
  },
  {
    quote: 'Recebi o pagamento na minha conta logo após finalizar o plantão. Não preciso mais me preocupar com calotes no dia a dia.',
    role: 'Emergencista',
    location: 'São Paulo, SP',
    initial: 'G',
    status: 'Médico verificado',
  },
];

function QrCode({ href, alt }: { href: string; alt: string }) {
  const source = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(href)}&color=11283F&bgcolor=FFFFFF&margin=8`;

  return <img src={source} alt={alt} className="ledger-qr" loading="lazy" />;
}

function StoreBadge({ href, kind }: { href: string; kind: 'apple' | 'google' }) {
  const isApple = kind === 'apple';

  return (
    <a className="store-badge" href={href} target="_blank" rel="noopener noreferrer">
      {isApple ? (
        <svg aria-hidden="true" viewBox="0 0 384 512" className="store-badge-icon">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 512 512" className="store-badge-icon">
          <path fill="#67E6A3" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
          <path fill="#6AC7F7" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
          <path fill="#F4CF4B" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
          <path fill="#EC7D67" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499z" />
        </svg>
      )}
      <span>
        <small>{isApple ? 'Baixe na' : 'Disponível no'}</small>
        <strong>{isApple ? 'App Store' : 'Google Play'}</strong>
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="ledger-label"><span aria-hidden="true" />{children}</p>;
}

const FaqItem: FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article className="ledger-faq-item">
      <h3>
        <button
          type="button"
          className="ledger-faq-trigger"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{question}</span>
          <ChevronDown aria-hidden="true" size={20} className={isOpen ? 'is-open' : ''} />
        </button>
      </h3>
      <div id={contentId} className="ledger-faq-answer" hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </article>
  );
};

const ledgerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap');

  .ledger-page {
    --ink: #11283f;
    --ink-soft: #26445d;
    --aqua: #4ebfc6;
    --aqua-deep: #247f91;
    --mint: #dff3f1;
    --paper: #f4f7f5;
    --paper-deep: #e9efeb;
    --line: rgba(17, 40, 63, 0.15);
    --line-light: rgba(17, 40, 63, 0.09);
    --copper: #ae6747;
    color: var(--ink);
    background: var(--paper);
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    overflow-x: clip;
  }
  .ledger-page *, .ledger-page *::before, .ledger-page *::after { box-sizing: border-box; }
  .ledger-page a { color: inherit; }
  .ledger-page button { font: inherit; }
  .ledger-page :focus-visible { outline: 3px solid var(--aqua); outline-offset: 4px; }
  .ledger-page .ledger-skip-link {
    position: fixed; left: 1rem; top: 0.75rem; z-index: 100;
    transform: translateY(-180%); padding: 0.72rem 1rem; background: var(--ink); color: #fff;
    border-radius: 0.35rem; font-size: 0.85rem; font-weight: 700; text-decoration: none;
  }
  .ledger-page .ledger-skip-link:focus { transform: translateY(0); }
  .ledger-page .ledger-nav {
    position: fixed; inset: 0 0 auto; z-index: 50; height: 4.75rem;
    background: rgba(244, 247, 245, 0.88); border-bottom: 1px solid var(--line-light);
    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
  }
  .ledger-page .ledger-nav-inner {
    width: min(100% - 2rem, 76rem); height: 100%; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between; gap: 1.25rem;
  }
  .ledger-page .ledger-brand { display: inline-flex; align-items: center; gap: 0.62rem; text-decoration: none; min-width: max-content; }
  .ledger-page .ledger-brand img { width: 2.05rem; height: 2.05rem; object-fit: contain; }
  .ledger-page .ledger-brand-wordmark { font-size: 1.08rem; font-weight: 800; letter-spacing: -0.055em; color: var(--ink); }
  .ledger-page .ledger-brand-wordmark b { color: var(--aqua-deep); font-weight: 800; }
  .ledger-page .ledger-nav-links { display: flex; align-items: center; gap: 1.75rem; margin-left: auto; }
  .ledger-page .ledger-nav-links a { font-size: 0.78rem; font-weight: 700; text-decoration: none; color: var(--ink-soft); }
  .ledger-page .ledger-nav-links a:hover { color: var(--aqua-deep); }
  .ledger-page .ledger-nav-cta {
    display: inline-flex; align-items: center; justify-content: center; min-height: 2.4rem;
    padding: 0.55rem 0.9rem; background: var(--ink); color: #fff; border: 1px solid var(--ink);
    font-size: 0.77rem; line-height: 1; font-weight: 800; text-decoration: none; letter-spacing: 0.01em;
    box-shadow: 3px 3px 0 var(--aqua);
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }
  .ledger-page .ledger-nav-cta:hover { transform: translate(-2px, -2px); box-shadow: 5px 5px 0 var(--aqua); }
  .ledger-page .ledger-main { display: block; }
  .ledger-page .ledger-hero {
    position: relative; isolation: isolate; padding: clamp(7.5rem, 11vw, 10.75rem) 1rem clamp(4.5rem, 8vw, 7rem); overflow: hidden;
    background:
      linear-gradient(rgba(17, 40, 63, 0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(17, 40, 63, 0.045) 1px, transparent 1px),
      radial-gradient(circle at 77% 28%, rgba(78, 191, 198, 0.28), transparent 20rem),
      linear-gradient(118deg, #f6f8f6 0%, #edf4f2 63%, #e0eeee 100%);
    background-size: 2rem 2rem, 2rem 2rem, auto, auto;
  }
  .ledger-page .ledger-hero::after {
    content: ''; position: absolute; z-index: -1; width: 44rem; height: 44rem; border: 1px solid rgba(17, 40, 63, 0.14);
    border-radius: 50%; right: -22rem; top: -17rem; box-shadow: inset 0 0 0 3.75rem rgba(78, 191, 198, 0.06), inset 0 0 0 8.5rem rgba(17, 40, 63, 0.025);
  }
  .ledger-page .ledger-shell { width: min(100%, 76rem); margin: 0 auto; }
  .ledger-page .ledger-hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(22rem, 0.96fr); align-items: center; gap: clamp(2.5rem, 7vw, 6.5rem); }
  .ledger-page .ledger-label { display: inline-flex; align-items: center; gap: 0.55rem; margin: 0 0 1.2rem; color: var(--aqua-deep); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; }
  .ledger-page .ledger-label span { width: 1.6rem; height: 1px; background: currentColor; }
  .ledger-page .ledger-hero h1, .ledger-page .ledger-heading, .ledger-page .ledger-download-title { font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; letter-spacing: -0.045em; }
  .ledger-page .ledger-hero h1 { max-width: 10ch; margin: 0; color: var(--ink); font-size: clamp(3.15rem, 6.2vw, 5.85rem); line-height: 0.94; }
  .ledger-page .ledger-hero h1 em { color: var(--aqua-deep); font-style: italic; }
  .ledger-page .ledger-hero-copy { max-width: 35rem; margin: 1.65rem 0 0; color: var(--ink-soft); font-size: clamp(1rem, 1.55vw, 1.16rem); line-height: 1.68; }
  .ledger-page .ledger-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 0.8rem 1.25rem; margin-top: 2rem; }
  .ledger-page .ledger-primary-action, .ledger-page .ledger-quiet-action {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem; min-height: 3.2rem; padding: 0.85rem 1.15rem;
    font-size: 0.87rem; font-weight: 800; text-decoration: none; transition: transform 180ms ease, box-shadow 180ms ease, color 180ms ease;
  }
  .ledger-page .ledger-primary-action { background: var(--ink); color: #fff; box-shadow: 4px 4px 0 var(--aqua); }
  .ledger-page .ledger-primary-action:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--aqua); }
  .ledger-page .ledger-quiet-action { color: var(--ink); text-decoration: underline; text-decoration-color: rgba(17, 40, 63, 0.35); text-underline-offset: 0.35rem; }
  .ledger-page .ledger-quiet-action:hover { color: var(--aqua-deep); }
  .ledger-page .ledger-proof-list { display: flex; flex-wrap: wrap; gap: 0.75rem 1.15rem; padding: 0; margin: 1.55rem 0 0; list-style: none; }
  .ledger-page .ledger-proof-list li { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--ink-soft); font-size: 0.74rem; font-weight: 600; }
  .ledger-page .ledger-proof-list svg { color: var(--aqua-deep); }
  .ledger-page .ledger-ticket-wrap { position: relative; padding: 1rem 0 1rem 1rem; }
  .ledger-page .ledger-ticket-wrap::before { content: ''; position: absolute; inset: 0.25rem 1.2rem 0.25rem 0; border: 1px solid var(--line); transform: rotate(-3.5deg); }
  .ledger-page .ledger-ticket { position: relative; background: #fbfcfa; border: 1px solid rgba(17, 40, 63, 0.18); box-shadow: 0 1.4rem 3rem rgba(17, 40, 63, 0.12), 0.55rem 0.55rem 0 var(--ink); }
  .ledger-page .ledger-ticket-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; padding: 1.35rem 1.4rem 1.2rem; border-bottom: 1px dashed rgba(17, 40, 63, 0.3); }
  .ledger-page .ledger-ticket-kicker { margin: 0; font-family: 'IBM Plex Mono', ui-monospace, monospace; color: var(--ink-soft); font-size: 0.62rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
  .ledger-page .ledger-ticket-head h2 { margin: 0.45rem 0 0; font-family: 'DM Serif Display', Georgia, serif; color: var(--ink); font-size: 1.85rem; font-weight: 400; letter-spacing: -0.045em; line-height: 1; }
  .ledger-page .ledger-ticket-stamp { display: grid; width: 4.15rem; height: 4.15rem; place-items: center; flex: 0 0 auto; border: 1px solid var(--aqua-deep); border-radius: 50%; color: var(--aqua-deep); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.55rem; font-weight: 600; letter-spacing: 0.08em; line-height: 1.35; text-align: center; text-transform: uppercase; transform: rotate(11deg); }
  .ledger-page .ledger-ticket-body { padding: 0.85rem 1.4rem 0.45rem; }
  .ledger-page .ledger-ticket-row { display: grid; grid-template-columns: 1.45rem 1fr auto; align-items: center; gap: 0.8rem; padding: 0.9rem 0; border-bottom: 1px solid var(--line-light); }
  .ledger-page .ledger-ticket-row:last-child { border-bottom: 0; }
  .ledger-page .ledger-ticket-row-number { color: var(--aqua-deep); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.7rem; }
  .ledger-page .ledger-ticket-row strong { display: block; color: var(--ink); font-size: 0.82rem; line-height: 1.2; }
  .ledger-page .ledger-ticket-row small { display: block; margin-top: 0.2rem; color: var(--ink-soft); font-size: 0.68rem; line-height: 1.35; }
  .ledger-page .ledger-ticket-status { display: inline-flex; align-items: center; gap: 0.28rem; color: var(--aqua-deep); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.58rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
  .ledger-page .ledger-ticket-status span { width: 0.42rem; height: 0.42rem; border-radius: 50%; background: var(--aqua); }
  .ledger-page .ledger-ticket-foot { display: flex; align-items: center; gap: 0.55rem; padding: 1rem 1.4rem 1.2rem; background: var(--mint); color: var(--ink); font-size: 0.74rem; font-weight: 700; }
  .ledger-page .ledger-ticker { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--ink); color: #eaf7f5; overflow: hidden; }
  .ledger-page .ledger-ticker-inner { width: min(100%, 84rem); display: flex; align-items: center; min-height: 4.45rem; gap: 0; margin: 0 auto; }
  .ledger-page .ledger-ticker-item { display: flex; align-items: center; justify-content: center; gap: 0.6rem; flex: 1 1 0; min-width: max-content; padding: 0.65rem 1.2rem; border-right: 1px solid rgba(223, 243, 241, 0.2); color: #eaf7f5; font-size: 0.73rem; font-weight: 700; }
  .ledger-page .ledger-ticker-item:last-child { border-right: 0; }
  .ledger-page .ledger-ticker-item svg { color: var(--aqua); }
  .ledger-page .ledger-section { padding: clamp(4.75rem, 9vw, 8rem) 1rem; }
  .ledger-page .ledger-section-header { display: grid; grid-template-columns: minmax(0, 0.86fr) minmax(16rem, 0.65fr); gap: 2.5rem; align-items: end; margin-bottom: clamp(2.75rem, 5vw, 4.75rem); }
  .ledger-page .ledger-heading { max-width: 13ch; margin: 0; color: var(--ink); font-size: clamp(2.5rem, 5vw, 4.35rem); line-height: 0.98; }
  .ledger-page .ledger-heading em { color: var(--aqua-deep); font-style: italic; }
  .ledger-page .ledger-section-intro { margin: 0; max-width: 31rem; color: var(--ink-soft); font-size: 1rem; line-height: 1.65; }
  .ledger-page .ledger-flow-section { background: #fbfcfa; }
  .ledger-page .ledger-flow { border-top: 1px solid var(--line); }
  .ledger-page .ledger-flow-row { display: grid; grid-template-columns: 6rem minmax(0, 1fr) minmax(15rem, 0.78fr) 3rem; gap: 1.4rem; align-items: start; padding: 1.8rem 0; border-bottom: 1px solid var(--line); transition: background 180ms ease, padding 180ms ease; }
  .ledger-page .ledger-flow-row:hover { background: rgba(78, 191, 198, 0.08); padding-left: 0.8rem; padding-right: 0.8rem; }
  .ledger-page .ledger-flow-number { color: var(--aqua-deep); font-family: 'DM Serif Display', Georgia, serif; font-size: 2.6rem; line-height: 0.8; letter-spacing: -0.06em; }
  .ledger-page .ledger-flow-eyebrow { margin: 0 0 0.55rem; color: var(--aqua-deep); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.11em; text-transform: uppercase; }
  .ledger-page .ledger-flow-title { margin: 0; color: var(--ink); font-size: clamp(1.2rem, 2vw, 1.55rem); line-height: 1.22; letter-spacing: -0.035em; }
  .ledger-page .ledger-flow-description { margin: 0.13rem 0 0; color: var(--ink-soft); font-size: 0.87rem; line-height: 1.62; }
  .ledger-page .ledger-flow-icon { display: grid; width: 2.65rem; height: 2.65rem; place-items: center; color: var(--ink); background: var(--mint); border: 1px solid var(--line); }
  .ledger-page .ledger-clarity { padding: clamp(4.75rem, 8vw, 7rem) 1rem; background: var(--ink); color: #fff; }
  .ledger-page .ledger-clarity-grid { display: grid; grid-template-columns: minmax(0, 0.82fr) minmax(20rem, 1.18fr); gap: clamp(2.5rem, 7vw, 6.5rem); align-items: start; }
  .ledger-page .ledger-clarity .ledger-label { color: var(--aqua); }
  .ledger-page .ledger-clarity .ledger-heading { color: #fff; }
  .ledger-page .ledger-clarity .ledger-heading em { color: var(--aqua); }
  .ledger-page .ledger-clarity-copy { margin: 1.35rem 0 0; color: #bed1dc; font-size: 1rem; line-height: 1.68; }
  .ledger-page .ledger-clause-list { margin: 0; padding: 0; list-style: none; border-top: 1px solid rgba(223, 243, 241, 0.22); }
  .ledger-page .ledger-clause { display: grid; grid-template-columns: 2.8rem minmax(0, 1fr); gap: 1rem; padding: 1.5rem 0; border-bottom: 1px solid rgba(223, 243, 241, 0.22); }
  .ledger-page .ledger-clause-icon { display: grid; width: 2.35rem; height: 2.35rem; place-items: center; color: var(--aqua); border: 1px solid rgba(78, 191, 198, 0.45); }
  .ledger-page .ledger-clause h3 { margin: 0; color: #fff; font-size: 1rem; letter-spacing: -0.02em; }
  .ledger-page .ledger-clause p { margin: 0.35rem 0 0; color: #b8cdd8; font-size: 0.86rem; line-height: 1.55; }
  .ledger-page .ledger-clause-note { margin: 1.65rem 0 0; color: #91b6c3; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.65rem; line-height: 1.55; letter-spacing: 0.03em; }
  .ledger-page .ledger-features-section { background: var(--paper); }
  .ledger-page .ledger-features { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .ledger-page .ledger-feature { position: relative; min-height: 16rem; padding: clamp(1.4rem, 3vw, 2.3rem); border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255, 255, 255, 0.28); transition: background 180ms ease; }
  .ledger-page .ledger-feature:hover { background: #fff; }
  .ledger-page .ledger-feature-icon { display: grid; width: 2.75rem; height: 2.75rem; place-items: center; margin-bottom: 2.7rem; color: var(--aqua-deep); border: 1px solid var(--aqua-deep); border-radius: 50%; }
  .ledger-page .ledger-feature-label { margin: 0 0 0.55rem; color: var(--aqua-deep); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.63rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
  .ledger-page .ledger-feature h3 { max-width: 22rem; margin: 0; color: var(--ink); font-size: clamp(1.25rem, 2.15vw, 1.7rem); line-height: 1.18; letter-spacing: -0.045em; }
  .ledger-page .ledger-feature p { max-width: 28rem; margin: 0.85rem 0 0; color: var(--ink-soft); font-size: 0.86rem; line-height: 1.58; }
  .ledger-page .ledger-payments { padding: clamp(4.75rem, 8vw, 7rem) 1rem; background: #e2f0ed; }
  .ledger-page .ledger-payment-grid { display: grid; grid-template-columns: minmax(0, 0.78fr) minmax(21rem, 1.22fr); gap: clamp(2.5rem, 7vw, 6.5rem); align-items: start; }
  .ledger-page .ledger-payment-copy { max-width: 30rem; margin: 1.25rem 0 0; color: var(--ink-soft); font-size: 1rem; line-height: 1.68; }
  .ledger-page .ledger-payment-table { margin: 0; border-top: 2px solid var(--ink); }
  .ledger-page .ledger-payment-row { display: grid; grid-template-columns: minmax(8rem, 0.9fr) minmax(0, 1.55fr); gap: 1.25rem; padding: 1.15rem 0; border-bottom: 1px solid var(--line); }
  .ledger-page .ledger-payment-row dt { display: flex; align-items: center; gap: 0.55rem; color: var(--ink); font-size: 0.82rem; font-weight: 800; }
  .ledger-page .ledger-payment-row dd { margin: 0; color: var(--ink-soft); font-size: 0.84rem; line-height: 1.52; }
  .ledger-page .ledger-payment-row dd strong { color: var(--ink); }
  .ledger-page .ledger-video-section { background: #fbfcfa; }
  .ledger-page .ledger-video-grid { display: grid; grid-template-columns: minmax(0, 0.66fr) minmax(20rem, 1.34fr); gap: clamp(2rem, 6vw, 5.5rem); align-items: center; }
  .ledger-page .ledger-video-copy { max-width: 27rem; margin: 1.3rem 0 0; color: var(--ink-soft); font-size: 0.98rem; line-height: 1.68; }
  .ledger-page .ledger-video-link { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.7rem; color: var(--aqua-deep); font-size: 0.82rem; font-weight: 800; text-decoration: none; border-bottom: 1px solid currentColor; padding-bottom: 0.18rem; }
  .ledger-page .ledger-video-shell { position: relative; border: 1px solid var(--ink); background: var(--ink); box-shadow: 0.65rem 0.65rem 0 var(--aqua); }
  .ledger-page .ledger-video-shell::before { content: 'VISÃO GERAL DO APLICATIVO'; position: absolute; z-index: 1; top: 0.75rem; left: 0.85rem; padding: 0.35rem 0.5rem; background: rgba(17, 40, 63, 0.86); color: #fff; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.54rem; letter-spacing: 0.09em; }
  .ledger-page .ledger-video-shell video { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
  .ledger-page .ledger-voices { background: var(--paper); }
  .ledger-page .ledger-voice-head { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: clamp(2.7rem, 5vw, 4.5rem); }
  .ledger-page .ledger-voice-head .ledger-heading { max-width: 12ch; }
  .ledger-page .ledger-voice-note { max-width: 16rem; margin: 0; color: var(--ink-soft); font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.68rem; line-height: 1.55; }
  .ledger-page .ledger-testimonials { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); }
  .ledger-page .ledger-testimonial { display: flex; min-height: 19.5rem; flex-direction: column; justify-content: space-between; padding: clamp(1.3rem, 2.5vw, 2.1rem); background: var(--paper); }
  .ledger-page .ledger-quote-mark { color: var(--aqua-deep); font-family: 'DM Serif Display', Georgia, serif; font-size: 4.2rem; line-height: 0.6; }
  .ledger-page .ledger-testimonial blockquote { margin: 1.65rem 0 1.5rem; color: var(--ink); font-family: 'DM Serif Display', Georgia, serif; font-size: clamp(1.25rem, 2vw, 1.55rem); line-height: 1.27; letter-spacing: -0.035em; }
  .ledger-page .ledger-person { display: flex; align-items: center; gap: 0.65rem; padding-top: 1rem; border-top: 1px solid var(--line); }
  .ledger-page .ledger-person-initial { display: grid; width: 2rem; height: 2rem; place-items: center; border-radius: 50%; background: var(--ink); color: #fff; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.72rem; font-weight: 600; }
  .ledger-page .ledger-person strong { display: block; color: var(--ink); font-size: 0.76rem; }
  .ledger-page .ledger-person small { display: block; margin-top: 0.12rem; color: var(--ink-soft); font-size: 0.68rem; }
  .ledger-page .ledger-faq-section { background: #fbfcfa; }
  .ledger-page .ledger-faq-layout { display: grid; grid-template-columns: minmax(13rem, 0.38fr) minmax(0, 1fr); gap: clamp(2.5rem, 8vw, 7.5rem); align-items: start; }
  .ledger-page .ledger-faq-heading { position: sticky; top: 6.5rem; }
  .ledger-page .ledger-faq-heading .ledger-heading { font-size: clamp(2.5rem, 4.2vw, 3.7rem); }
  .ledger-page .ledger-faq-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
  .ledger-page .ledger-faq-tab { padding: 0.55rem 0.65rem; border: 1px solid var(--line); background: transparent; color: var(--ink-soft); cursor: pointer; font-size: 0.7rem; font-weight: 700; text-align: left; transition: border-color 180ms ease, background 180ms ease, color 180ms ease; }
  .ledger-page .ledger-faq-tab:hover, .ledger-page .ledger-faq-tab[aria-pressed='true'] { border-color: var(--ink); background: var(--ink); color: #fff; }
  .ledger-page .ledger-faq-list { border-top: 2px solid var(--ink); }
  .ledger-page .ledger-faq-item { border-bottom: 1px solid var(--line); }
  .ledger-page .ledger-faq-trigger { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.25rem 0; border: 0; background: transparent; color: var(--ink); cursor: pointer; font-size: 0.94rem; font-weight: 800; line-height: 1.35; text-align: left; }
  .ledger-page .ledger-faq-trigger:hover { color: var(--aqua-deep); }
  .ledger-page .ledger-faq-trigger svg { flex: 0 0 auto; transition: transform 180ms ease; }
  .ledger-page .ledger-faq-trigger svg.is-open { transform: rotate(180deg); }
  .ledger-page .ledger-faq-answer { padding: 0 2.25rem 1.4rem 0; }
  .ledger-page .ledger-faq-answer p { margin: 0; color: var(--ink-soft); font-size: 0.88rem; line-height: 1.65; }
  .ledger-page .ledger-download { position: relative; overflow: hidden; padding: clamp(4.75rem, 9vw, 8rem) 1rem; background: var(--ink); color: #fff; }
  .ledger-page .ledger-download::before { content: ''; position: absolute; inset: 0; opacity: 0.19; background-image: linear-gradient(rgba(223, 243, 241, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(223, 243, 241, 0.35) 1px, transparent 1px); background-size: 2rem 2rem; mask-image: linear-gradient(90deg, #000, transparent 78%); }
  .ledger-page .ledger-download-grid { position: relative; display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(20rem, 1.05fr); gap: clamp(2.75rem, 8vw, 7rem); align-items: center; }
  .ledger-page .ledger-download .ledger-label { color: var(--aqua); }
  .ledger-page .ledger-download-title { max-width: 11ch; margin: 0; color: #fff; font-size: clamp(2.85rem, 5vw, 4.7rem); line-height: 0.98; }
  .ledger-page .ledger-download-title em { color: var(--aqua); font-style: italic; }
  .ledger-page .ledger-download-copy { max-width: 31rem; margin: 1.35rem 0 0; color: #c5d8df; font-size: 1rem; line-height: 1.68; }
  .ledger-page .ledger-download-stores { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.75rem; }
  .ledger-page .store-badge { display: inline-flex; align-items: center; gap: 0.75rem; min-width: 10.65rem; padding: 0.65rem 0.85rem; background: #070e17; border: 1px solid rgba(223, 243, 241, 0.28); color: #fff; text-decoration: none; transition: transform 180ms ease, border-color 180ms ease; }
  .ledger-page .store-badge:hover { transform: translateY(-2px); border-color: var(--aqua); }
  .ledger-page .store-badge-icon { width: 1.65rem; height: 1.65rem; fill: currentColor; }
  .ledger-page .store-badge small, .ledger-page .store-badge strong { display: block; }
  .ledger-page .store-badge small { color: #bcd2d6; font-size: 0.55rem; font-weight: 600; line-height: 1.1; }
  .ledger-page .store-badge strong { margin-top: 0.12rem; font-size: 0.9rem; line-height: 1.1; }
  .ledger-page .ledger-download-proof { margin: 1.25rem 0 0; color: #9bb9c5; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 0.61rem; letter-spacing: 0.035em; }
  .ledger-page .ledger-qr-panel { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; max-width: 28rem; margin-left: auto; background: rgba(223, 243, 241, 0.26); border: 1px solid rgba(223, 243, 241, 0.26); }
  .ledger-page .ledger-qr-card { display: flex; flex-direction: column; align-items: center; padding: clamp(1rem, 2.3vw, 1.65rem); background: #f8fbfa; color: var(--ink); text-align: center; }
  .ledger-page .ledger-qr { display: block; width: min(100%, 9rem); aspect-ratio: 1; padding: 0.4rem; background: #fff; border: 1px solid var(--line); }
  .ledger-page .ledger-qr-card strong { margin-top: 0.8rem; font-size: 0.75rem; }
  .ledger-page .ledger-qr-card small { margin-top: 0.22rem; color: var(--ink-soft); font-size: 0.64rem; }
  @media (max-width: 900px) {
    .ledger-page .ledger-hero-grid, .ledger-page .ledger-clarity-grid, .ledger-page .ledger-payment-grid, .ledger-page .ledger-video-grid, .ledger-page .ledger-download-grid { grid-template-columns: 1fr; }
    .ledger-page .ledger-hero h1 { max-width: 12ch; }
    .ledger-page .ledger-ticket-wrap { width: min(100%, 35rem); margin: 0 auto; }
    .ledger-page .ledger-clarity-grid { gap: 3.25rem; }
    .ledger-page .ledger-download-grid { gap: 3.5rem; }
    .ledger-page .ledger-qr-panel { margin-left: 0; }
    .ledger-page .ledger-flow-row { grid-template-columns: 4.2rem minmax(0, 1fr) 2.75rem; }
    .ledger-page .ledger-flow-description { grid-column: 2 / 4; margin-top: -0.55rem; }
    .ledger-page .ledger-faq-layout { grid-template-columns: 1fr; gap: 2.75rem; }
    .ledger-page .ledger-faq-heading { position: static; }
  }
  @media (max-width: 720px) {
    .ledger-page .ledger-nav { height: 4.25rem; }
    .ledger-page .ledger-nav-inner { width: min(100% - 1.35rem, 76rem); }
    .ledger-page .ledger-nav-links { display: none; }
    .ledger-page .ledger-brand img { width: 1.85rem; height: 1.85rem; }
    .ledger-page .ledger-brand-wordmark { font-size: 1rem; }
    .ledger-page .ledger-nav-cta { min-height: 2.16rem; padding: 0.48rem 0.58rem; font-size: 0.69rem; box-shadow: 2px 2px 0 var(--aqua); }
    .ledger-page .ledger-hero { padding-top: 6.9rem; }
    .ledger-page .ledger-ticker-inner { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ledger-page .ledger-ticker-item { min-width: 0; padding: 0.7rem 0.4rem; border-bottom: 1px solid rgba(223, 243, 241, 0.2); font-size: 0.63rem; text-align: center; }
    .ledger-page .ledger-ticker-item:nth-child(2) { border-right: 0; }
    .ledger-page .ledger-ticker-item:nth-child(n + 3) { border-bottom: 0; }
    .ledger-page .ledger-section-header { grid-template-columns: 1fr; gap: 1.2rem; }
    .ledger-page .ledger-flow-row { grid-template-columns: 3.5rem minmax(0, 1fr) 2.55rem; gap: 0.75rem; }
    .ledger-page .ledger-flow-number { font-size: 2rem; }
    .ledger-page .ledger-flow-icon { width: 2.35rem; height: 2.35rem; }
    .ledger-page .ledger-features { grid-template-columns: 1fr; }
    .ledger-page .ledger-feature { min-height: auto; }
    .ledger-page .ledger-feature-icon { margin-bottom: 1.7rem; }
    .ledger-page .ledger-payment-row { grid-template-columns: 1fr; gap: 0.35rem; }
    .ledger-page .ledger-voice-head { display: block; }
    .ledger-page .ledger-voice-note { margin-top: 1rem; }
    .ledger-page .ledger-testimonials { grid-template-columns: 1fr; }
    .ledger-page .ledger-testimonial { min-height: 0; }
    .ledger-page .ledger-ticket-wrap { padding-left: 0.55rem; }
    .ledger-page .ledger-ticket-wrap::before { right: 0.65rem; }
    .ledger-page .ledger-ticket-head, .ledger-page .ledger-ticket-body, .ledger-page .ledger-ticket-foot { padding-left: 1rem; padding-right: 1rem; }
    .ledger-page .ledger-ticket-stamp { width: 3.65rem; height: 3.65rem; font-size: 0.49rem; }
    .ledger-page .ledger-download-stores { flex-direction: column; align-items: stretch; max-width: 17rem; }
    .ledger-page .store-badge { justify-content: center; }
  }
  @media (prefers-reduced-motion: reduce) {
    .ledger-page *, .ledger-page *::before, .ledger-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
  }
`;

export default function LandingPageTemplate({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [openCategory, setOpenCategory] = useState(faqGroups[0].category);
  const activeFaqs = faqGroups.find((group) => group.category === openCategory) ?? faqGroups[0];

  return (
    <div className="ledger-page min-h-screen">
      <style>{ledgerStyles}</style>
      <a className="ledger-skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="ledger-nav">
        <nav className="ledger-nav-inner" aria-label="Navegação principal">
          <a className="ledger-brand" href="#conteudo" aria-label="97plantões, início">
            <img src="./logo.svg" alt="" />
            <span className="ledger-brand-wordmark">97<b>plantões</b></span>
          </a>
          <div className="ledger-nav-links">
            <a href="#como-funciona">Garantia</a>
            <a href="#funcionalidades">Rotina no app</a>
            <a href="#faq">Dúvidas</a>
            <a href="?page=sobre-nos">Sobre nós</a>
          </div>
          <a className="ledger-nav-cta" href="#download">Baixar o app <ArrowDown aria-hidden="true" size={14} /></a>
        </nav>
      </header>

      <main id="conteudo" className="ledger-main">
        <section className="ledger-hero" aria-labelledby="hero-title">
          <div className="ledger-shell ledger-hero-grid">
            <div>
              <SectionLabel>97plantões · plantão com garantia</SectionLabel>
              <h1 id="hero-title">Seu plantão, com <em>processo garantido.</em></h1>
              <p className="ledger-hero-copy">
                Encontre uma escala ou passe a sua para médicos verificados. Da primeira confirmação ao repasse, o que importa fica registrado no app.
              </p>
              <div className="ledger-actions">
                <a className="ledger-primary-action" href="#download">Baixar o app <ArrowRight aria-hidden="true" size={17} /></a>
                <a className="ledger-quiet-action" href="#como-funciona">Entender a garantia</a>
              </div>
              <ul className="ledger-proof-list" aria-label="Proteções do processo">
                {proofItems.map((item) => (
                  <li key={item}><CheckCircle2 aria-hidden="true" size={15} />{item}</li>
                ))}
              </ul>
            </div>

            <div className="ledger-ticket-wrap" aria-label="Exemplo do fluxo protegido de um plantão" role="img">
              <article className="ledger-ticket">
                <div className="ledger-ticket-head">
                  <div>
                    <p className="ledger-ticket-kicker">Registro de plantão · fluxo protegido</p>
                    <h2>Plantão em ordem</h2>
                  </div>
                  <span className="ledger-ticket-stamp">processo<br />verificado</span>
                </div>
                <div className="ledger-ticket-body">
                  <div className="ledger-ticket-row">
                    <span className="ledger-ticket-row-number">01</span>
                    <span><strong>CRM verificado</strong><small>Comunidade exclusiva para médicos</small></span>
                    <span className="ledger-ticket-status"><span />validado</span>
                  </div>
                  <div className="ledger-ticket-row">
                    <span className="ledger-ticket-row-number">02</span>
                    <span><strong>Plantão confirmado</strong><small>Oferta, candidatura e aceite registrados</small></span>
                    <span className="ledger-ticket-status"><span />confirmado</span>
                  </div>
                  <div className="ledger-ticket-row">
                    <span className="ledger-ticket-row-number">03</span>
                    <span><strong>Pagamento protegido</strong><small>Até a realização do plantão</small></span>
                    <span className="ledger-ticket-status"><span />protegido</span>
                  </div>
                  <div className="ledger-ticket-row">
                    <span className="ledger-ticket-row-number">04</span>
                    <span><strong>Repasse processado</strong><small>Após a conclusão, para sua conta</small></span>
                    <span className="ledger-ticket-status"><span />encaminhado</span>
                  </div>
                </div>
                <div className="ledger-ticket-foot"><ShieldCheck aria-hidden="true" size={17} />O combinado não fica fora do fluxo.</div>
              </article>
            </div>
          </div>
        </section>

        <section className="ledger-ticker" aria-label="Pilares de confiança">
          <div className="ledger-ticker-inner">
            <div className="ledger-ticker-item"><UserCheck aria-hidden="true" size={16} />CRM validado</div>
            <div className="ledger-ticker-item"><FileCheck2 aria-hidden="true" size={16} />Confirmação registrada</div>
            <div className="ledger-ticker-item"><LockKeyhole aria-hidden="true" size={16} />Pagamento protegido</div>
            <div className="ledger-ticker-item"><WalletCards aria-hidden="true" size={16} />Repasse após o plantão</div>
          </div>
        </section>

        <section id="como-funciona" className="ledger-section ledger-flow-section" aria-labelledby="flow-title">
          <div className="ledger-shell">
            <div className="ledger-section-header">
              <div>
                <SectionLabel>Garantia de processo</SectionLabel>
                <h2 id="flow-title" className="ledger-heading">O plantão não depende de <em>um combinado.</em></h2>
              </div>
              <p className="ledger-section-intro">Uma boa escala começa com clareza. Por isso, a 97plantões organiza a identidade, a confirmação e o pagamento em uma sequência que ambos os médicos conseguem acompanhar.</p>
            </div>
            <ol className="ledger-flow">
              {ledgerStages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <li key={stage.number} className="ledger-flow-row">
                    <span className="ledger-flow-number" aria-hidden="true">{stage.number}</span>
                    <div>
                      <p className="ledger-flow-eyebrow">{stage.eyebrow}</p>
                      <h3 className="ledger-flow-title">{stage.title}</h3>
                    </div>
                    <p className="ledger-flow-description">{stage.description}</p>
                    <span className="ledger-flow-icon"><Icon aria-hidden="true" size={20} /></span>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="ledger-clarity" aria-labelledby="clarity-title">
          <div className="ledger-shell ledger-clarity-grid">
            <div>
              <SectionLabel>Na prática</SectionLabel>
              <h2 id="clarity-title" className="ledger-heading">Mais tranquilidade para quem passa. <em>Mais previsibilidade</em> para quem assume.</h2>
              <p className="ledger-clarity-copy">O app não substitui a sua decisão profissional. Ele dá ao processo uma trilha clara para que a negociação aconteça com mais segurança e menos ruído.</p>
            </div>
            <div>
              <ul className="ledger-clause-list">
                <li className="ledger-clause">
                  <span className="ledger-clause-icon"><ShieldCheck aria-hidden="true" size={19} /></span>
                  <div><h3>Comunidade com identidade profissional</h3><p>O CRM informado é consultado junto aos órgãos responsáveis antes da participação na plataforma.</p></div>
                </li>
                <li className="ledger-clause">
                  <span className="ledger-clause-icon"><MessageCircle aria-hidden="true" size={19} /></span>
                  <div><h3>Contexto antes da confirmação</h3><p>Use o chat privado para alinhar o necessário antes e depois do aceite do plantão.</p></div>
                </li>
                <li className="ledger-clause">
                  <span className="ledger-clause-icon"><CreditCard aria-hidden="true" size={19} /></span>
                  <div><h3>Pagamento dentro do fluxo</h3><p>O valor é processado com segurança e repassado após a realização do plantão.</p></div>
                </li>
              </ul>
              <p className="ledger-clause-note">A garantia está no processo visível: quem participa, o que foi confirmado e quando o pagamento é processado.</p>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="ledger-section ledger-features-section" aria-labelledby="features-title">
          <div className="ledger-shell">
            <div className="ledger-section-header">
              <div>
                <SectionLabel>Da busca à agenda</SectionLabel>
                <h2 id="features-title" className="ledger-heading">A rotina de plantões, no lugar <em>certo.</em></h2>
              </div>
              <p className="ledger-section-intro">Você não precisa escolher entre agilidade e critério. A 97plantões reúne os instrumentos que ajudam a decidir, conversar e acompanhar cada escala.</p>
            </div>
            <div className="ledger-features">
              {featureItems.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.label} className="ledger-feature">
                    <span className="ledger-feature-icon"><Icon aria-hidden="true" size={20} /></span>
                    <p className="ledger-feature-label">{feature.label}</p>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ledger-payments" aria-labelledby="payment-title">
          <div className="ledger-shell ledger-payment-grid">
            <div>
              <SectionLabel>Pagamento protegido</SectionLabel>
              <h2 id="payment-title" className="ledger-heading">O valor acompanha o plantão até o <em>repasse.</em></h2>
              <p className="ledger-payment-copy">Você escolhe como pagar. Depois da realização do plantão, o pagamento é processado para a conta do médico que assumiu, de acordo com o meio escolhido.</p>
            </div>
            <dl className="ledger-payment-table">
              <div className="ledger-payment-row">
                <dt><CircleDollarSign aria-hidden="true" size={18} />PIX</dt>
                <dd><strong>Mesmo dia ou dia útil seguinte</strong>, após o plantão ser realizado.</dd>
              </div>
              <div className="ledger-payment-row">
                <dt><CreditCard aria-hidden="true" size={18} />Cartão de crédito</dt>
                <dd>Parcelamento em até <strong>6x</strong>; prazo de repasse de até <strong>14 dias úteis</strong>.</dd>
              </div>
              <div className="ledger-payment-row">
                <dt><FileCheck2 aria-hidden="true" size={18} />Boleto</dt>
                <dd>Repasse em até <strong>2 dias úteis</strong> após a realização do plantão.</dd>
              </div>
              <div className="ledger-payment-row">
                <dt><ShieldCheck aria-hidden="true" size={18} />Registro</dt>
                <dd>O valor é protegido no fluxo da plataforma e não é liberado antes da conclusão da escala.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="ledger-section ledger-video-section" aria-labelledby="video-title">
          <div className="ledger-shell ledger-video-grid">
            <div>
              <SectionLabel>Veja em ação</SectionLabel>
              <h2 id="video-title" className="ledger-heading">Um app pensado para a sua <em>escala real.</em></h2>
              <p className="ledger-video-copy">Explore como ofertar, encontrar, confirmar e acompanhar plantões no 97plantões.</p>
              <a className="ledger-video-link" href="#download"><Play aria-hidden="true" size={15} />Baixar para ver no seu ritmo</a>
            </div>
            <div className="ledger-video-shell">
              <video controls playsInline poster="./doctor_using_the_app.jpg">
                <source src="./NoveSeteVideo.mp4" type="video/mp4" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
            </div>
          </div>
        </section>

        <section className="ledger-section ledger-voices" aria-labelledby="voices-title">
          <div className="ledger-shell">
            <div className="ledger-voice-head">
              <div>
                <SectionLabel>Comunidade 97</SectionLabel>
                <h2 id="voices-title" className="ledger-heading">Quando há clareza, a escala <em>flui.</em></h2>
              </div>
              <p className="ledger-voice-note">Relatos de médicos da comunidade 97plantões.</p>
            </div>
            <div className="ledger-testimonials">
              {testimonials.map((testimonial) => (
                <article key={testimonial.role} className="ledger-testimonial">
                  <div>
                    <span className="ledger-quote-mark" aria-hidden="true">“</span>
                    <blockquote>{testimonial.quote}</blockquote>
                  </div>
                  <footer className="ledger-person">
                    <span className="ledger-person-initial" aria-hidden="true">{testimonial.initial}</span>
                    <span><strong>{testimonial.role} · {testimonial.status}</strong><small>{testimonial.location}</small></span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="ledger-section ledger-faq-section" aria-labelledby="faq-title">
          <div className="ledger-shell ledger-faq-layout">
            <div className="ledger-faq-heading">
              <SectionLabel>Detalhes do processo</SectionLabel>
              <h2 id="faq-title" className="ledger-heading">Dúvidas que merecem resposta <em>clara.</em></h2>
              <div className="ledger-faq-tabs" aria-label="Categorias de perguntas frequentes">
                {faqGroups.map((group) => (
                  <button
                    key={group.category}
                    type="button"
                    className="ledger-faq-tab"
                    aria-pressed={openCategory === group.category}
                    onClick={() => setOpenCategory(group.category)}
                  >
                    {group.category}
                  </button>
                ))}
              </div>
            </div>
            <div className="ledger-faq-list" aria-live="polite">
              {activeFaqs.items.map((item) => <FaqItem key={item.q} question={item.q} answer={item.a} />)}
            </div>
          </div>
        </section>

        <section id="download" className="ledger-download" aria-labelledby="download-title">
          <div className="ledger-shell ledger-download-grid">
            <div>
              <SectionLabel>97plantões no seu bolso</SectionLabel>
              <h2 id="download-title" className="ledger-download-title">Plantão com mais <em>garantia.</em></h2>
              <p className="ledger-download-copy">Baixe o app para encontrar ou passar plantões com uma comunidade de médicos verificados e um processo de pagamento protegido.</p>
              <div className="ledger-download-stores">
                <StoreBadge href={appleStoreUrl} kind="apple" />
                <StoreBadge href={googlePlayUrl} kind="google" />
              </div>
              <p className="ledger-download-proof"><Smartphone aria-hidden="true" size={13} style={{ display: 'inline', verticalAlign: '-0.18em', marginRight: '0.35rem' }} />Disponível para iOS e Android</p>
            </div>
            <div className="ledger-qr-panel" aria-label="QR codes para baixar o aplicativo">
              <div className="ledger-qr-card"><QrCode href={appleStoreUrl} alt="QR code para baixar 97plantões na App Store" /><strong>App Store</strong><small>Aponte a câmera</small></div>
              <div className="ledger-qr-card"><QrCode href={googlePlayUrl} alt="QR code para baixar 97plantões no Google Play" /><strong>Google Play</strong><small>Aponte a câmera</small></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
