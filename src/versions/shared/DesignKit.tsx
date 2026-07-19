import { ArrowUpRight, ChevronDown, Headphones } from 'lucide-react';
import './design-kit.css';

export const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

export const appScreens = {
  inicio: {
    src: '/unnamed.png',
    label: 'Início',
    alt: 'Tela inicial do 97plantões com oportunidades, especialidades, horários e valores',
  },
  mapa: {
    src: '/unnamed (1).png',
    label: 'Mapa',
    alt: 'Mapa do 97plantões com marcadores de unidades de saúde no Rio de Janeiro',
  },
  agenda: {
    src: '/unnamed (2).png',
    label: 'Agenda',
    alt: 'Agenda do 97plantões com calendário e oportunidade disponível no dia',
  },
  ofertas: {
    src: '/unnamed (3).png',
    label: 'Painel de ofertas',
    alt: 'Painel do 97plantões com os plantões ofertados pelo usuário',
  },
  detalhes: {
    src: '/unnamed (4).png',
    label: 'Detalhes',
    alt: 'Detalhes de um plantão com especialidade, local, data, horário, duração e valor',
  },
  pagamento: {
    src: '/unnamed (5).png',
    label: 'Pagamento',
    alt: 'Pagamento de um plantão com profissional responsável e métodos disponíveis',
  },
  perfil: {
    src: '/unnamed (6).png',
    label: 'Perfil',
    alt: 'Perfil médico no 97plantões com agenda, histórico, recebimentos, conversas e suporte',
  },
} as const;

export const coreFaq = [
  {
    q: 'Quem pode se cadastrar?',
    a: 'O aplicativo é destinado exclusivamente a médicos. O CRM informado é verificado junto aos órgãos responsáveis para manter uma comunidade profissional e confiável.',
  },
  {
    q: 'Preciso pagar para ofertar um plantão?',
    a: 'Não. Ofertar um plantão no aplicativo é gratuito. Você pode publicar a oferta para a comunidade ou atribuí-la a um médico específico cadastrado.',
  },
  {
    q: 'Como encontro plantões disponíveis?',
    a: 'As oportunidades aparecem na Página Inicial, no Mapa por proximidade e na Agenda por data. Os filtros incluem período, especialidade e tipo de plantão.',
  },
  {
    q: 'Quais são as modalidades de pagamento?',
    a: 'Cartão de crédito, com parcelamento em até 6 vezes, PIX e boleto. O valor é repassado ao profissional responsável somente após a realização do plantão.',
  },
];

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="kit-store-mark">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="kit-store-mark">
      <path fill="#4CAF50" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1Z" />
      <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0Z" />
      <path fill="#FFEB3B" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8Z" />
      <path fill="#F44336" d="M104.6 499 385.4 337.8l-60.1-60.1L104.6 499Z" />
    </svg>
  );
}

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`kit-brand${inverse ? ' kit-brand--inverse' : ''}`} href="#top" aria-label="97plantões — início">
      <img src="/logo.svg" alt="" />
      <span><b>97</b>plantões</span>
    </a>
  );
}

export function AppShot({
  screen,
  className = '',
  eager = false,
  bare = false,
}: {
  screen: (typeof appScreens)[keyof typeof appScreens];
  className?: string;
  eager?: boolean;
  bare?: boolean;
}) {
  return (
    <figure className={`kit-shot ${bare ? 'kit-shot--bare' : ''} ${className}`}>
      {!bare && (
        <figcaption>
          <span>{screen.label}</span>
          <i>tela real</i>
        </figcaption>
      )}
      <div className="kit-shot-frame">
        <img src={screen.src} alt={screen.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}

export function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`kit-stores ${className}`}>
      <a className="kit-store" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Baixar na App Store — abre em nova aba">
        <AppleMark />
        <span><small>Baixe na</small><strong>App Store</strong></span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <a className="kit-store" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Baixar na Google Play — abre em nova aba">
        <GooglePlayMark />
        <span><small>Disponível no</small><strong>Google Play</strong></span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

export function FaqList({ items = coreFaq, className = '' }: { items?: typeof coreFaq; className?: string }) {
  return (
    <div className={`kit-faq ${className}`}>
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}<ChevronDown size={19} aria-hidden="true" /></summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function LegalFooter({ inverse = false }: { inverse?: boolean }) {
  return (
    <footer className={`kit-footer${inverse ? ' kit-footer--inverse' : ''}`}>
      <div className="kit-footer-inner">
        <Brand inverse={inverse} />
        <nav aria-label="Links institucionais">
          <a href="?page=sobre-nos">Sobre nós</a>
          <a href="?page=termos-de-uso">Termos de uso</a>
          <a href="?page=termos-de-uso#privacidade">Privacidade</a>
          <a href="?page=suporte"><Headphones size={15} aria-hidden="true" /> Suporte</a>
        </nav>
      </div>
      <p>© {new Date().getFullYear()} SANT-E TECNOLOGIA EM SAUDE LTDA · CNPJ 63.478.081/0001-50</p>
    </footer>
  );
}

