import type { CSSProperties, ReactNode } from 'react';
import Footer from './Footer';
import {
  Apple,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Play,
} from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

const appScreens = [
  {
    id: 'ofertas',
    number: '01',
    label: 'Início',
    title: 'Comece pela oferta.',
    description:
      'Especialidade, hospital, data, duração e valor aparecem juntos — antes de você perder tempo abrindo uma tela a mais.',
    details: ['especialidade', 'unidade de saúde', 'valor e duração'],
    src: './unnamed.png',
    alt: 'Tela real de início do 97plantões com ofertas de plantão disponíveis.',
    theme: 'coral',
  },
  {
    id: 'mapa',
    number: '02',
    label: 'Mapas',
    title: 'Decida pela distância.',
    description:
      'Quando localização muda a escolha, o mapa transforma os plantões publicados em uma leitura espacial rápida.',
    details: ['filtro por especialidade', 'plantões no mapa', 'leitura por região'],
    src: './unnamed%20(1).png',
    alt: 'Tela real de mapas do 97plantões com marcadores de plantões no Rio de Janeiro.',
    theme: 'aqua',
  },
  {
    id: 'agenda',
    number: '03',
    label: 'Agenda',
    title: 'Veja o mês antes de dizer sim.',
    description:
      'Calendário e ofertas disponíveis compartilham a mesma tela para ajudar a encaixar o próximo plantão na sua rotina.',
    details: ['calendário mensal', 'dia selecionado', 'ofertas disponíveis'],
    src: './unnamed%20(2).png',
    alt: 'Tela real de agenda do 97plantões com calendário e plantão disponível.',
    theme: 'blue',
  },
  {
    id: 'painel',
    number: '04',
    label: 'Painel',
    title: 'Acompanhe o que está em movimento.',
    description:
      'Pendências, confirmações, ofertas e a passagem de plantão ficam reunidas no ponto de controle do seu dia.',
    details: ['pendências', 'confirmados', 'passar plantão'],
    src: './unnamed%20(3).png',
    alt: 'Tela real de painel do 97plantões com ofertas publicadas.',
    theme: 'lime',
  },
  {
    id: 'detalhe',
    number: '05',
    label: 'Detalhes',
    title: 'Confira antes de se candidatar.',
    description:
      'Natureza, especialidade, localidade, horários, período e valor: o essencial do plantão está em uma só leitura.',
    details: ['horário de início e saída', 'localidade', 'valor do plantão'],
    src: './unnamed%20(4).png',
    alt: 'Tela real de detalhes do plantão no 97plantões.',
    theme: 'green',
  },
  {
    id: 'pagamento',
    number: '06',
    label: 'Pagamento',
    title: 'Resolva o pagamento no fluxo.',
    description:
      'A etapa reúne o plantão que será passado e as opções de cartão, boleto, Pix e Bolepix no mesmo contexto.',
    details: ['resumo do plantão', 'métodos de pagamento', 'dados para confirmação'],
    src: './unnamed%20(5).png',
    alt: 'Tela real de pagamento do 97plantões com opções de cartão, boleto e Pix.',
    theme: 'gold',
  },
  {
    id: 'perfil',
    number: '07',
    label: 'Perfil',
    title: 'Deixe sua operação por perto.',
    description:
      'Agenda, histórico, recebimentos, dados bancários e conversas continuam acessíveis depois da confirmação.',
    details: ['recebimentos', 'dados bancários', 'conversas'],
    src: './unnamed%20(6).png',
    alt: 'Tela real de perfil do 97plantões com agenda, recebimentos e conversas.',
    theme: 'violet',
  },
] as const;

function StoreLink({
  href,
  label,
  platform,
  icon,
}: {
  href: string;
  label: string;
  platform: string;
  icon: ReactNode;
}) {
  return (
    <a className="store-link" href={href} target="_blank" rel="noreferrer">
      <span className="store-link__icon" aria-hidden="true">{icon}</span>
      <span>
        <span className="store-link__eyebrow">Disponível na</span>
        <span className="store-link__name">{platform}</span>
      </span>
      <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </a>
  );
}

export default function LandingPageTemplate({
  onGoToApp: _onGoToApp,
}: {
  onGoToApp: () => void;
}) {
  void _onGoToApp;

  return (
    <div className="gallery-page min-h-screen overflow-x-hidden bg-[#f4f7f7] text-[#102c3c] selection:bg-[#c9f2ed] selection:text-[#102c3c]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .gallery-page {
          --ink: #102c3c;
          --ink-soft: #48606c;
          --paper: #f4f7f7;
          --line: #cdd9dc;
          --teal: #0d858d;
          --mint: #c9f2ed;
          font-family: 'Manrope', Inter, ui-sans-serif, system-ui, sans-serif;
        }
        .gallery-page * { box-sizing: border-box; }
        .gallery-page a:focus-visible,
        .gallery-page summary:focus-visible {
          outline: 3px solid #e8bc21;
          outline-offset: 4px;
        }
        .gallery-data {
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-variant-numeric: tabular-nums;
        }
        .gallery-display {
          letter-spacing: -0.064em;
          text-wrap: balance;
        }
        .nav-shell {
          background: rgba(244, 247, 247, 0.82);
          border-bottom: 1px solid rgba(16, 44, 60, 0.12);
          backdrop-filter: blur(18px) saturate(125%);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
        }
        .nav-link {
          color: #48606c;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: color 180ms ease;
        }
        .nav-link:hover { color: var(--ink); }
        .nav-download {
          background: var(--ink);
          border-radius: 999px;
          color: white;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          padding: 0.7rem 1rem;
          text-decoration: none;
          transition: background 180ms ease, transform 180ms ease;
        }
        .nav-download:hover { background: #1a4558; transform: translateY(-1px); }
        .hero-grid {
          background-color: #f4f7f7;
          background-image: linear-gradient(rgba(16, 44, 60, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 44, 60, 0.055) 1px, transparent 1px);
          background-size: 2.5rem 2.5rem;
        }
        .hero-grid::after {
          background: radial-gradient(circle at 73% 25%, rgba(201, 242, 237, 0.92), transparent 23rem), radial-gradient(circle at 8% 88%, rgba(255, 222, 211, 0.68), transparent 21rem);
          content: '';
          inset: 0;
          pointer-events: none;
          position: absolute;
        }
        .eyebrow {
          align-items: center;
          color: #315868;
          display: inline-flex;
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.69rem;
          font-weight: 500;
          gap: 0.58rem;
          letter-spacing: 0.045em;
          text-transform: uppercase;
        }
        .eyebrow::before {
          background: #d8f700;
          border: 1px solid #102c3c;
          border-radius: 999px;
          content: '';
          height: 0.56rem;
          width: 0.56rem;
        }
        .hero-title {
          color: var(--ink);
          font-size: clamp(3rem, 6.7vw, 6.35rem);
          font-weight: 800;
          line-height: 0.93;
          max-width: 49rem;
        }
        .hero-copy {
          color: #48606c;
          font-size: clamp(1rem, 1.6vw, 1.18rem);
          line-height: 1.7;
          max-width: 35rem;
        }
        .proof-list {
          border-left: 1px solid #8ca2aa;
          color: #315868;
          display: grid;
          font-size: 0.82rem;
          font-weight: 700;
          gap: 0.65rem;
          line-height: 1.35;
          padding-left: 1rem;
        }
        .proof-list li { align-items: center; display: flex; gap: 0.56rem; }
        .proof-list svg { color: #0d858d; flex: 0 0 auto; }
        .primary-cta {
          align-items: center;
          background: #102c3c;
          border: 1px solid #102c3c;
          border-radius: 999px;
          color: white;
          display: inline-flex;
          font-size: 0.9rem;
          font-weight: 800;
          gap: 0.65rem;
          justify-content: center;
          padding: 1rem 1.3rem;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }
        .primary-cta:hover {
          background: #1a4558;
          box-shadow: 0 13px 26px rgba(16, 44, 60, 0.17);
          transform: translateY(-2px);
        }
        .text-link {
          align-items: center;
          color: #315868;
          display: inline-flex;
          font-size: 0.88rem;
          font-weight: 800;
          gap: 0.35rem;
          text-decoration: none;
          text-underline-offset: 0.28em;
        }
        .text-link:hover { color: #0d858d; text-decoration: underline; }
        .hero-stage {
          min-height: 39rem;
          position: relative;
        }
        .stage-panel {
          background: #102c3c;
          border: 1px solid rgba(16, 44, 60, 0.32);
          box-shadow: 0 32px 70px rgba(16, 44, 60, 0.18);
          inset: 1rem 0 0 3rem;
          overflow: hidden;
          position: absolute;
        }
        .stage-panel::before,
        .stage-panel::after {
          background: radial-gradient(circle, #f4f7f7 2.2px, transparent 2.8px) 0 0 / 18px 18px;
          content: '';
          height: calc(100% - 1.1rem);
          opacity: 0.85;
          position: absolute;
          top: 0.55rem;
          width: 0.75rem;
          z-index: 0;
        }
        .stage-panel::before { left: 0.42rem; }
        .stage-panel::after { right: 0.42rem; }
        .stage-copy {
          color: rgba(244, 247, 247, 0.74);
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.63rem;
          letter-spacing: 0.08em;
          position: absolute;
          right: 1.35rem;
          text-transform: uppercase;
          top: 1.35rem;
          writing-mode: vertical-rl;
          z-index: 1;
        }
        .hero-screen {
          animation: screen-arrive 650ms cubic-bezier(0.16, 1, 0.3, 1) both;
          background: white;
          border: 7px solid #f8fbfa;
          box-shadow: 0 20px 42px rgba(0, 0, 0, 0.28);
          left: clamp(1.1rem, 6vw, 4rem);
          max-width: 17.7rem;
          position: absolute;
          top: 2.9rem;
          transform: rotate(-2.2deg);
          z-index: 2;
        }
        .hero-screen img { display: block; height: auto; width: 100%; }
        .capture-tag {
          align-items: center;
          background: #d8f700;
          border: 1px solid #102c3c;
          color: #102c3c;
          display: inline-flex;
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.61rem;
          font-weight: 500;
          gap: 0.42rem;
          letter-spacing: 0.045em;
          padding: 0.45rem 0.6rem;
          position: absolute;
          right: -2.75rem;
          text-transform: uppercase;
          top: 1.1rem;
          z-index: 3;
        }
        .capture-tag::before { background: #102c3c; content: ''; height: 0.38rem; width: 0.38rem; }
        .stage-note {
          bottom: 1.35rem;
          color: white;
          font-size: 0.82rem;
          font-weight: 700;
          left: clamp(1.1rem, 5vw, 3.25rem);
          line-height: 1.4;
          max-width: 14rem;
          position: absolute;
          z-index: 1;
        }
        .stage-note span { color: #b7ced2; display: block; font-size: 0.69rem; font-weight: 500; margin-top: 0.25rem; }
        .contact-sheet {
          bottom: -1rem;
          display: flex;
          gap: 0.55rem;
          left: min(48%, 14rem);
          margin: 0;
          position: absolute;
          z-index: 4;
        }
        .contact-sheet li {
          background: white;
          border: 3px solid white;
          box-shadow: 0 9px 18px rgba(16, 44, 60, 0.2);
          list-style: none;
          overflow: hidden;
          transform: rotate(var(--sheet-rotation, 0deg));
          transition: transform 180ms ease;
          width: 3.65rem;
        }
        .contact-sheet li:hover { transform: translateY(-0.45rem) rotate(0deg); }
        .contact-sheet img { display: block; height: auto; width: 100%; }
        .film-caption {
          color: #48606c;
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.67rem;
          letter-spacing: 0.04em;
          margin-top: 1.2rem;
          text-transform: uppercase;
        }
        .quiet-rule { background: #cdd9dc; height: 1px; width: 100%; }
        .section-kicker {
          color: #0d858d;
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.075em;
          text-transform: uppercase;
        }
        .section-title {
          color: #102c3c;
          font-size: clamp(2.25rem, 5vw, 4.75rem);
          font-weight: 800;
          line-height: 0.98;
          max-width: 46rem;
        }
        .section-copy { color: #48606c; font-size: 1rem; line-height: 1.72; max-width: 34rem; }
        .scene {
          --scene-ink: #102c3c;
          --scene-paper: #edf3f3;
          background: var(--scene-paper);
          border-bottom: 1px solid rgba(16, 44, 60, 0.16);
          min-height: 33rem;
          overflow: hidden;
          position: relative;
        }
        .scene::before {
          border: 1px solid color-mix(in srgb, var(--scene-ink) 18%, transparent);
          border-radius: 999px;
          content: '';
          height: 24rem;
          position: absolute;
          right: -10rem;
          top: -8rem;
          width: 24rem;
        }
        .scene--coral { --scene-ink: #b93719; --scene-paper: #fff0eb; }
        .scene--aqua { --scene-ink: #087d85; --scene-paper: #e8f7f5; }
        .scene--blue { --scene-ink: #087ba6; --scene-paper: #e9f4fa; }
        .scene--lime { --scene-ink: #5f8d0b; --scene-paper: #f1f8df; }
        .scene--green { --scene-ink: #3d8c30; --scene-paper: #eef8ed; }
        .scene--gold { --scene-ink: #ae7900; --scene-paper: #fff5d9; }
        .scene--violet { --scene-ink: #6517bb; --scene-paper: #f6efff; }
        .scene-number {
          color: var(--scene-ink);
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: clamp(4.5rem, 10vw, 8.8rem);
          font-weight: 500;
          letter-spacing: -0.09em;
          line-height: 0.82;
          opacity: 0.16;
        }
        .scene-label {
          align-items: center;
          color: var(--scene-ink);
          display: inline-flex;
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.69rem;
          font-weight: 500;
          gap: 0.55rem;
          letter-spacing: 0.055em;
          text-transform: uppercase;
        }
        .scene-label::before { background: var(--scene-ink); content: ''; height: 0.42rem; width: 0.42rem; }
        .scene-title {
          color: #102c3c;
          font-size: clamp(2rem, 4vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.055em;
          line-height: 0.98;
          max-width: 29rem;
        }
        .scene-description { color: #315868; font-size: 0.98rem; line-height: 1.7; max-width: 28rem; }
        .evidence-chip {
          align-items: center;
          border: 1px solid color-mix(in srgb, var(--scene-ink) 35%, transparent);
          border-radius: 999px;
          color: #315868;
          display: inline-flex;
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.66rem;
          gap: 0.34rem;
          letter-spacing: -0.02em;
          padding: 0.45rem 0.58rem;
        }
        .evidence-chip svg { color: var(--scene-ink); }
        .scene-screen-wrap {
          align-self: end;
          background: rgba(255, 255, 255, 0.78);
          border: 6px solid rgba(255, 255, 255, 0.94);
          box-shadow: 0 21px 40px rgba(16, 44, 60, 0.16);
          max-width: 16.8rem;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }
        .scene-screen-wrap img { display: block; height: auto; width: 100%; }
        .scene-screen-wrap::after {
          background: var(--scene-ink);
          bottom: 0;
          content: '';
          height: 0.32rem;
          left: 0;
          position: absolute;
          width: 100%;
        }
        .scene-meta {
          color: var(--scene-ink);
          font-family: 'DM Mono', ui-monospace, monospace;
          font-size: 0.63rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .scene:nth-child(even) .scene-copy { order: 2; }
        .scene:nth-child(even) .scene-visual { order: 1; }
        .decision-panel { background: #102c3c; color: white; }
        .decision-panel .section-title { color: white; }
        .decision-panel .section-copy { color: #b7ced2; }
        .decision-line { border-color: rgba(201, 242, 237, 0.22); }
        .decision-item { border-bottom: 1px solid rgba(201, 242, 237, 0.2); }
        .decision-item:last-child { border-bottom: 0; }
        .decision-number { color: #d8f700; font-family: 'DM Mono', ui-monospace, monospace; font-size: 0.72rem; }
        .decision-item h3 { color: white; font-size: 1rem; font-weight: 800; }
        .decision-item p { color: #b7ced2; font-size: 0.88rem; line-height: 1.55; }
        .download-panel {
          background: #d8f700;
          color: #102c3c;
          overflow: hidden;
          position: relative;
        }
        .download-panel::before {
          background: repeating-linear-gradient(90deg, #102c3c 0 1px, transparent 1px 16px);
          bottom: 0;
          content: '';
          height: 1rem;
          left: 0;
          opacity: 0.17;
          position: absolute;
          right: 0;
        }
        .download-title { color: #102c3c; font-size: clamp(2.35rem, 5.5vw, 5.2rem); font-weight: 800; letter-spacing: -0.067em; line-height: 0.95; max-width: 45rem; }
        .download-copy { color: #315868; font-size: 1rem; line-height: 1.7; max-width: 34rem; }
        .store-link {
          align-items: center;
          background: #102c3c;
          border: 1px solid #102c3c;
          color: white;
          display: grid;
          font-weight: 700;
          gap: 0.7rem;
          grid-template-columns: auto 1fr auto;
          min-width: min(100%, 17rem);
          padding: 0.78rem 0.9rem;
          text-align: left;
          text-decoration: none;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .store-link:hover { box-shadow: 0 12px 0 rgba(16, 44, 60, 0.2); transform: translateY(-2px); }
        .store-link__icon { display: grid; place-items: center; }
        .store-link__eyebrow { color: #b7ced2; display: block; font-size: 0.59rem; font-weight: 600; letter-spacing: 0.025em; line-height: 1.1; }
        .store-link__name { color: white; display: block; font-size: 0.96rem; letter-spacing: -0.025em; line-height: 1.2; margin-top: 0.12rem; }
        .faq-shell { background: #f4f7f7; }
        .faq-item { border-bottom: 1px solid #cdd9dc; }
        .faq-item summary { align-items: center; color: #102c3c; cursor: pointer; display: flex; font-size: 1rem; font-weight: 800; gap: 1rem; list-style: none; padding: 1.25rem 0; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { color: #0d858d; content: '+'; font-family: 'DM Mono', ui-monospace, monospace; font-size: 1.35rem; font-weight: 400; margin-left: auto; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-item p { color: #48606c; font-size: 0.94rem; line-height: 1.7; max-width: 46rem; padding-bottom: 1.35rem; }
        @keyframes screen-arrive {
          from { opacity: 0; transform: translateY(1.25rem) rotate(-2.2deg); }
          to { opacity: 1; transform: translateY(0) rotate(-2.2deg); }
        }
        @media (max-width: 767px) {
          .hero-stage { min-height: 33.5rem; }
          .stage-panel { left: 1rem; }
          .hero-screen { left: 1.65rem; max-width: 15.5rem; top: 2.5rem; }
          .capture-tag { right: -1.7rem; }
          .contact-sheet { left: 8.5rem; }
          .contact-sheet li { width: 2.8rem; }
          .scene:nth-child(even) .scene-copy,
          .scene:nth-child(even) .scene-visual { order: initial; }
          .scene-screen-wrap { max-width: 14rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 1ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 1ms !important; }
          .hero-screen { transform: rotate(-2.2deg); }
        }
        @media (prefers-reduced-transparency: reduce) {
          .nav-shell { background: #f4f7f7; backdrop-filter: none; -webkit-backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .nav-shell, .scene-screen-wrap, .store-link { border-width: 2px; }
          .proof-list { border-color: #102c3c; }
        }
      `}</style>

      <nav className="nav-shell sticky top-0 z-50" aria-label="Navegação principal">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-2.5 no-underline" href="#top" aria-label="97plantões, voltar ao início">
            <img src="./logo.svg" alt="" className="h-9 w-auto" />
            <span className="text-[1.08rem] font-extrabold tracking-[-0.06em] text-[#102c3c]">
              97<span className="text-[#0d858d]">plantões</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a className="nav-link" href="#sequencia">O app real</a>
            <a className="nav-link" href="#decisoes">Como ajuda</a>
            <a className="nav-link" href="#duvidas">Dúvidas</a>
          </div>

          <a className="nav-download" href="#download">Baixar o app</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero-grid relative overflow-hidden px-4 pb-18 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.86fr)] lg:gap-10">
            <div className="max-w-2xl">
              <p className="eyebrow">97plantões / Galeria do plantão real</p>
              <h1 className="gallery-display hero-title mt-6">Escolha o próximo plantão olhando o que importa.</h1>
              <p className="hero-copy mt-7">
                O 97plantões organiza a escolha em telas de verdade: oferta, mapa, agenda, detalhes e pagamento — no ritmo de quem vive a escala médica.
              </p>

              <ul className="proof-list mt-8" aria-label="O que aparece na oferta">
                <li><Check size={16} strokeWidth={2.6} aria-hidden="true" />Especialidade e unidade de saúde na mesma leitura</li>
                <li><Check size={16} strokeWidth={2.6} aria-hidden="true" />Horário, duração e valor visíveis antes da candidatura</li>
                <li><Check size={16} strokeWidth={2.6} aria-hidden="true" />A próxima decisão já está no fluxo: localizar, agendar ou confirmar</li>
              </ul>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a className="primary-cta" href="#download">
                  Ver nas lojas <ArrowDownRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </a>
                <a className="text-link" href="#sequencia">
                  Percorrer as 7 telas <ChevronRight size={17} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure className="m-0 w-full lg:justify-self-end">
              <div className="hero-stage mx-auto max-w-[31rem]">
                <div className="stage-panel" aria-hidden="true">
                  <span className="stage-copy">capturas do app / 97</span>
                  <p className="stage-note">
                    Uma oferta, vista como ela é.
                    <span>Dados essenciais no primeiro gesto.</span>
                  </p>
                </div>
                <div className="hero-screen">
                  <span className="capture-tag"><span aria-hidden="true" />tela real · início</span>
                  <img src="./unnamed.png" width="665" height="1440" alt="Tela real de ofertas de plantão disponíveis no aplicativo 97plantões." />
                </div>
                <ul className="contact-sheet" aria-label="Prévia de outras telas reais do aplicativo">
                  {appScreens.slice(1, 5).map((screen, index) => (
                    <li key={screen.id} style={{ '--sheet-rotation': `${[-7, 3, -2, 6][index]}deg` } as CSSProperties}>
                      <img src={screen.src} width="665" height="1440" alt="" />
                    </li>
                  ))}
                </ul>
              </div>
              <figcaption className="film-caption">Capturas reais do app · sem telas ilustrativas</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-[#102c3c] px-4 py-5 sm:px-6 lg:px-8" aria-label="Resumo do fluxo no aplicativo">
          <div className="gallery-data mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-3 text-[0.67rem] font-medium uppercase tracking-[0.05em] text-[#c9f2ed]">
            <span className="text-[#d8f700]">Oferta</span><span aria-hidden="true">→</span>
            <span>Mapa</span><span aria-hidden="true">→</span>
            <span>Agenda</span><span aria-hidden="true">→</span>
            <span>Painel</span><span aria-hidden="true">→</span>
            <span>Detalhes</span><span aria-hidden="true">→</span>
            <span>Pagamento</span><span aria-hidden="true">→</span>
            <span>Perfil</span>
          </div>
        </section>

        <section id="sequencia" className="bg-[#f4f7f7] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.5fr)]">
              <div>
                <p className="section-kicker">Uma jornada, sete momentos</p>
                <h2 className="gallery-display section-title mt-4">O produto não fica escondido atrás da promessa.</h2>
              </div>
              <p className="section-copy md:justify-self-end">
                Cada quadro abaixo é uma captura do 97plantões. Percorra o caminho que começa em uma oferta e termina na sua operação organizada.
              </p>
            </div>
            <div className="quiet-rule mt-12" />
          </div>
        </section>

        <div aria-label="Sequência de telas reais do aplicativo">
          {appScreens.map((screen) => (
            <article key={screen.id} className={`scene scene--${screen.theme} px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20`}>
              <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(14rem,17rem)] md:gap-18">
                <div className="scene-copy">
                  <p className="scene-number" aria-hidden="true">{screen.number}</p>
                  <p className="scene-label mt-5">{screen.label}</p>
                  <h3 className="scene-title mt-4">{screen.title}</h3>
                  <p className="scene-description mt-5">{screen.description}</p>
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Elementos visíveis na tela ${screen.label}`}>
                    {screen.details.map((detail) => (
                      <li className="evidence-chip" key={detail}><Check size={12} strokeWidth={2.6} aria-hidden="true" />{detail}</li>
                    ))}
                  </ul>
                </div>

                <figure className="scene-visual m-0 justify-self-center md:justify-self-end">
                  <div className="scene-screen-wrap">
                    <img src={screen.src} width="665" height="1440" loading="lazy" alt={screen.alt} />
                  </div>
                  <figcaption className="scene-meta mt-4">Tela {screen.number} / {screen.label}</figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>

        <section id="decisoes" className="decision-panel px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(24rem,1fr)] lg:gap-20">
            <div>
              <p className="eyebrow !text-[#c9f2ed]">Menos troca de contexto</p>
              <h2 className="gallery-display section-title mt-5">Tudo o que decide um plantão tem o seu momento.</h2>
              <p className="section-copy mt-6">
                A experiência foi desenhada para a sequência real de uma decisão médica, sem pedir que você monte o quebra-cabeça entre ferramentas diferentes.
              </p>
              <a className="mt-9 inline-flex items-center gap-2 text-sm font-extrabold text-[#d8f700] no-underline hover:underline" href="#download">
                Baixar para ver no celular <ArrowDownRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
            <ol className="decision-line border-t">
              <li className="decision-item grid grid-cols-[2.6rem_1fr] gap-3 py-5">
                <span className="decision-number">A</span>
                <div><h3>Encontrar</h3><p className="mt-1">Oferta e mapa deixam claro o que existe e onde está.</p></div>
              </li>
              <li className="decision-item grid grid-cols-[2.6rem_1fr] gap-3 py-5">
                <span className="decision-number">B</span>
                <div><h3>Encaixar</h3><p className="mt-1">Agenda e painel ajudam a visualizar o que já está em andamento.</p></div>
              </li>
              <li className="decision-item grid grid-cols-[2.6rem_1fr] gap-3 py-5">
                <span className="decision-number">C</span>
                <div><h3>Confirmar</h3><p className="mt-1">Detalhes e pagamento mantêm a decisão no mesmo fluxo.</p></div>
              </li>
              <li className="decision-item grid grid-cols-[2.6rem_1fr] gap-3 py-5">
                <span className="decision-number">D</span>
                <div><h3>Acompanhar</h3><p className="mt-1">Perfil reúne o que continua importante depois da confirmação.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section id="duvidas" className="faq-shell px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(30rem,1fr)] lg:gap-20">
            <div>
              <p className="section-kicker">Perguntas frequentes</p>
              <h2 className="gallery-display section-title mt-4">Também vale saber.</h2>
              <p className="section-copy mt-5">O essencial para começar a usar o 97plantões com mais clareza.</p>
            </div>
            <div>
              <details className="faq-item" open>
                <summary>Quem pode se cadastrar?</summary>
                <p>O aplicativo é destinado exclusivamente a médicos. O cadastro passa pela verificação das informações e do CRM para manter a comunidade profissional e confiável.</p>
              </details>
              <details className="faq-item">
                <summary>Como encontro plantões disponíveis?</summary>
                <p>Você pode consultar as ofertas no início do aplicativo, explorar os plantões por proximidade no mapa e organizar a busca por data na agenda.</p>
              </details>
              <details className="faq-item">
                <summary>Quais formas de pagamento estão no app?</summary>
                <p>O fluxo de pagamento contempla cartão de crédito, Pix, boleto e Bolepix. A tela apresenta as opções no contexto do plantão que será passado.</p>
              </details>
              <details className="faq-item">
                <summary>Onde acompanho agenda e recebimentos?</summary>
                <p>No perfil, você encontra atalhos para agenda, histórico de plantões, recebimentos, dados bancários e conversas.</p>
              </details>
            </div>
          </div>
        </section>

        <section id="download" className="download-panel px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.6fr)]">
            <div>
              <p className="gallery-data text-[0.69rem] font-medium uppercase tracking-[0.055em] text-[#315868]">Seu próximo plantão começa no celular</p>
              <h2 className="download-title mt-5">Abra o fluxo completo no app.</h2>
              <p className="download-copy mt-6">Baixe o 97plantões para ver ofertas, mapas, agenda, painel, detalhes e pagamentos em uma experiência feita para médicos.</p>
            </div>
            <div className="flex flex-col gap-3 lg:justify-self-end">
              <StoreLink href={APP_STORE_URL} label="Baixar 97plantões na App Store" platform="App Store" icon={<Apple size={29} strokeWidth={1.8} />} />
              <StoreLink href={GOOGLE_PLAY_URL} label="Baixar 97plantões no Google Play" platform="Google Play" icon={<Play size={28} fill="currentColor" strokeWidth={1.6} />} />
              <p className="gallery-data mt-2 text-center text-[0.61rem] uppercase tracking-[0.04em] text-[#315868]">iOS e Android</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
