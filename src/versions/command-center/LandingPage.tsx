import { useState, type ReactNode } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Download,
  ExternalLink,
  MapPinned,
  Menu,
  MessageSquareText,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react';
import Footer from './Footer';

const APPLE_STORE_URL = 'https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sante.n97plantoes';

type Shift = {
  specialty: string;
  city: string;
  period: string;
  tone: 'cyan' | 'blue' | 'coral';
};

const shifts: Shift[] = [
  { specialty: 'Clínica médica', city: 'São Paulo · SP', period: 'Hoje · 19h — 07h', tone: 'cyan' },
  { specialty: 'Pediatria', city: 'Niterói · RJ', period: 'Sáb · 07h — 19h', tone: 'blue' },
  { specialty: 'Emergência', city: 'Salvador · BA', period: 'Dom · 12h — 00h', tone: 'coral' },
];

const capabilities: Array<{ icon: ReactNode; label: string; detail: string }> = [
  {
    icon: <MapPinned size={21} strokeWidth={1.9} />,
    label: 'Leia o mapa antes de decidir',
    detail: 'Busque por proximidade, especialidade e período para encontrar plantões que cabem na sua agenda.',
  },
  {
    icon: <CalendarDays size={21} strokeWidth={1.9} />,
    label: 'Organize o turno inteiro',
    detail: 'Acompanhe candidaturas, confirmações e compromissos em uma agenda feita para a rotina médica.',
  },
  {
    icon: <MessageSquareText size={21} strokeWidth={1.9} />,
    label: 'Alinhe antes de confirmar',
    detail: 'Converse no chat privado e deixe os detalhes claros entre quem oferece e quem assume.',
  },
];

const safeguards: Array<{ icon: ReactNode; title: string; detail: string }> = [
  {
    icon: <BadgeCheck size={24} strokeWidth={1.9} />,
    title: 'Médicos com CRM verificado',
    detail: 'A comunidade é exclusiva para médicos, com validação do CRM junto aos órgãos responsáveis.',
  },
  {
    icon: <CreditCard size={24} strokeWidth={1.9} />,
    title: 'Pagamento com proteção',
    detail: 'O valor fica retido com segurança e é repassado depois da realização do plantão.',
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.9} />,
    title: 'Histórico que gera confiança',
    detail: 'Os compromissos ficam registrados para tornar cada próxima conexão mais segura.',
  },
];

const testimonials = [
  {
    quote: 'Finalmente uma plataforma séria para médicos. A verificação de CRM traz muita segurança para quem precisa passar um plantão.',
    role: 'Clínica médica',
    city: 'São Paulo, SP',
    initials: 'CM',
  },
  {
    quote: 'Encontrar plantões na minha especialidade ficou muito mais fácil. O mapa ajuda muito quando preciso olhar opções perto de mim.',
    role: 'Pediatra',
    city: 'Rio de Janeiro, RJ',
    initials: 'PA',
  },
  {
    quote: 'O pagamento depois do plantão resolveu uma preocupação grande da rotina. O processo ficou bem mais previsível.',
    role: 'Emergencista',
    city: 'São Paulo, SP',
    initials: 'EM',
  },
];

const faqs = [
  {
    question: 'Quem pode usar a 97plantões?',
    answer: 'A plataforma é exclusiva para médicos. No cadastro, o CRM é verificado junto aos órgãos responsáveis para manter a comunidade confiável.',
  },
  {
    question: 'Posso ofertar um plantão sem custo?',
    answer: 'Sim. Você pode publicar um plantão avulso ou um contrato fixo pelo aplicativo e receber candidaturas de outros médicos cadastrados.',
  },
  {
    question: 'Como encontro oportunidades?',
    answer: 'Use a página inicial, o mapa ou a agenda. Os filtros ajudam a recortar por período, especialidade e tipo de plantão.',
  },
  {
    question: 'Quando o médico recebe o pagamento?',
    answer: 'Depois da realização do plantão, o pagamento é processado para a conta bancária informada, conforme o método escolhido.',
  },
  {
    question: 'Posso conversar antes da confirmação?',
    answer: 'Sim. O chat privado permite alinhar os detalhes com o outro médico antes e depois da confirmação.',
  },
];

function StoreButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-[188px] items-center justify-between gap-5 border border-white/15 bg-[#081c2d] px-4 py-3.5 text-left text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-[#0d2940] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
    >
      <span className="flex items-center gap-3">
        <Smartphone size={20} strokeWidth={1.8} className="text-cyan-300" />
        <span>{children}</span>
      </span>
      <ExternalLink size={16} className="text-slate-400 transition group-hover:text-cyan-200" aria-hidden="true" />
    </a>
  );
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${dark ? 'text-cyan-200' : 'text-[#087f8e]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-cyan-300 shadow-[0_0_0_4px_rgba(45,224,208,0.13)]' : 'bg-[#10a9b7]'}`} />
      {children}
    </p>
  );
}

export default function LandingPage({ onGoToApp: _onGoToApp }: { onGoToApp: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f2f7f8] font-sans text-[#0a2438] selection:bg-cyan-200 selection:text-[#061827]">
      <style>{`
        :root { color-scheme: light; }
        .cc-grid {
          background-image: linear-gradient(rgba(119, 220, 225, 0.095) 1px, transparent 1px), linear-gradient(90deg, rgba(119, 220, 225, 0.095) 1px, transparent 1px);
          background-size: 42px 42px;
          background-position: center center;
        }
        .cc-dashboard-grid {
          background-image: linear-gradient(rgba(111, 225, 226, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(111, 225, 226, 0.08) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .cc-panel-cut { clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%); }
        .cc-route { stroke-dasharray: 10 12; animation: cc-route 6s linear infinite; }
        .cc-scan { animation: cc-scan 4.8s ease-in-out infinite; }
        .cc-pulse { animation: cc-pulse 2.8s ease-in-out infinite; transform-origin: center; }
        .cc-live-dot { animation: cc-blink 1.75s ease-in-out infinite; }
        @keyframes cc-route { to { stroke-dashoffset: -176; } }
        @keyframes cc-scan { 0%, 100% { transform: translateY(-12%); opacity: 0; } 22%, 76% { opacity: 0.75; } 50% { transform: translateY(630%); opacity: 0.2; } }
        @keyframes cc-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.45); opacity: .5; } }
        @keyframes cc-blink { 0%, 100% { opacity: 1; } 50% { opacity: .32; } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061827]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" aria-label="97plantões, início">
            <span className="grid h-10 w-10 place-items-center border border-cyan-100/20 bg-white/95 p-1.5 shadow-[0_0_24px_rgba(45,224,208,0.13)]">
              <img src="./logo.svg" alt="" className="h-full w-full object-contain" />
            </span>
            <span className="leading-none">
              <span className="block text-[17px] font-extrabold tracking-tight">97<span className="text-cyan-300">plantões</span></span>
              <span className="mt-1 block font-mono text-[8px] font-bold tracking-[0.22em] text-slate-400">CENTRAL CLÍNICA</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <a className="text-sm font-medium text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href="#como-funciona">Como funciona</a>
            <a className="text-sm font-medium text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href="#seguranca">Segurança</a>
            <a className="text-sm font-medium text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href="#medicos">Para médicos</a>
            <a className="text-sm font-medium text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href="#faq">Dúvidas</a>
          </nav>

          <a href="#download" className="hidden items-center gap-2 bg-cyan-300 px-4 py-2.5 text-sm font-extrabold text-[#062035] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex">
            Baixar o app <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/15 text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#081c2d] px-5 py-5 lg:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ['Como funciona', '#como-funciona'],
                ['Segurança', '#seguranca'],
                ['Para médicos', '#medicos'],
                ['Dúvidas', '#faq'],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} className="border-b border-white/10 py-3 text-sm font-semibold text-slate-200 focus-visible:outline-2 focus-visible:outline-cyan-300">
                  {label}
                </a>
              ))}
              <a href="#download" onClick={closeMenu} className="mt-3 inline-flex items-center justify-center gap-2 bg-cyan-300 px-4 py-3 text-sm font-extrabold text-[#062035] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Baixar o app <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="inicio">
        <section className="cc-grid relative isolate overflow-hidden bg-[#061827] pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_79%_28%,rgba(35,173,193,0.2),transparent_24%),radial-gradient(circle_at_26%_82%,rgba(38,111,162,0.22),transparent_29%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full border border-cyan-100/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-10 top-44 h-64 w-64 rounded-full border border-cyan-100/10" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(490px,1.05fr)] lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow dark>Uma central para a sua rotina médica</Eyebrow>
              <h1 className="max-w-xl text-[clamp(2.65rem,6vw,5.25rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
                O plantão certo.<br />
                <span className="text-cyan-300">No momento</span> certo.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Encontre oportunidades por mapa, especialidade e data — ou passe seu plantão para médicos com CRM verificado, sem perder o controle da operação.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#download" className="group inline-flex items-center justify-center gap-3 bg-cyan-300 px-6 py-4 font-extrabold text-[#052034] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Abrir a central no app <ArrowRight size={19} className="transition duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 font-bold text-white transition hover:border-cyan-200 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                  Ver como funciona
                </a>
              </div>

              <ul className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 sm:gap-4" aria-label="Garantias da plataforma">
                {['CRM verificado', 'Chat privado', 'Pagamento protegido'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><Check size={15} className="text-cyan-300" strokeWidth={3} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
              <div className="cc-panel-cut relative overflow-hidden border border-cyan-100/15 bg-[#08233a] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.38)] sm:p-4">
                <div className="cc-dashboard-grid absolute inset-0 opacity-80" aria-hidden="true" />
                <div className="cc-scan pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cyan-200/20 to-transparent" aria-hidden="true" />
                <div className="relative border border-white/10 bg-[#061c30]/90">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <Activity size={17} className="text-cyan-300" aria-hidden="true" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">Central de plantões</span>
                    </div>
                    <span className="flex items-center gap-2 font-mono text-[9px] font-bold tracking-[0.12em] text-cyan-300"><span className="cc-live-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />VISUALIZAÇÃO</span>
                  </div>

                  <div className="grid gap-3 p-3 sm:grid-cols-[1.05fr_0.95fr] sm:p-4">
                    <div className="relative min-h-[260px] overflow-hidden border border-white/10 bg-[#09263d] p-4 sm:min-h-[302px]">
                      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 bg-[#061827]/85 px-2.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-300">
                        <MapPinned size={13} className="text-cyan-300" aria-hidden="true" /> mapa por proximidade
                      </div>
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 320" role="img" aria-label="Representação de conexões entre plantões no mapa">
                        <path d="M42 242 C94 180, 118 257, 179 195 S278 101, 362 80" fill="none" stroke="rgba(45,224,208,.65)" strokeWidth="2" className="cc-route" />
                        <path d="M27 118 C86 63, 125 126, 195 108 S297 176, 370 132" fill="none" stroke="rgba(60,166,242,.48)" strokeWidth="1.5" className="cc-route" />
                        <path d="M89 293 C139 230, 217 292, 275 220 S328 229, 379 196" fill="none" stroke="rgba(255,102,113,.48)" strokeWidth="1.5" className="cc-route" />
                        {[
                          [43, 242, '#2de0d0'], [179, 195, '#2de0d0'], [362, 80, '#2de0d0'], [27, 118, '#37a9f5'], [195, 108, '#37a9f5'], [275, 220, '#ff6671'],
                        ].map(([cx, cy, fill], index) => (
                          <g key={index}>
                            <circle cx={cx as number} cy={cy as number} r="12" fill={fill as string} opacity=".13" className={index === 2 ? 'cc-pulse' : ''} />
                            <circle cx={cx as number} cy={cy as number} r="4" fill={fill as string} />
                          </g>
                        ))}
                      </svg>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-400">Filtros ativos</p>
                          <p className="mt-1 text-xs font-bold text-white">12h · Clínica médica</p>
                        </div>
                        <span className="grid h-8 w-8 place-items-center border border-cyan-300/40 text-cyan-200" aria-hidden="true"><Search size={15} /></span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between px-1">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Em destaque</span>
                        <span className="font-mono text-[9px] font-bold text-cyan-300">03 ROTAS</span>
                      </div>
                      {shifts.map((shift, index) => (
                        <article key={shift.specialty} className="border border-white/10 bg-white/[0.035] p-3 transition hover:border-cyan-200/45 hover:bg-white/[0.07]">
                          <div className="flex items-start justify-between gap-2">
                            <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${shift.tone === 'cyan' ? 'bg-cyan-300' : shift.tone === 'blue' ? 'bg-[#5ebdff]' : 'bg-[#ff8a91]'}`} />
                            <span className="font-mono text-[9px] text-slate-500">0{index + 1}</span>
                          </div>
                          <h3 className="mt-2 text-sm font-bold text-white">{shift.specialty}</h3>
                          <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-300"><MapPinned size={11} aria-hidden="true" />{shift.city}</p>
                          <p className="mt-2 border-t border-white/10 pt-2 font-mono text-[9px] font-bold uppercase tracking-[0.07em] text-cyan-100">{shift.period}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-[11px] text-slate-300 sm:px-5">
                    <BellRing size={15} className="text-cyan-300" aria-hidden="true" />
                    <span>Centralize candidaturas, conversas e confirmações em um só lugar.</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-4 hidden border border-cyan-100/20 bg-[#0c314b] px-4 py-3 shadow-2xl sm:block">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300">Sinal de confiança</span>
                <p className="mt-1 text-sm font-bold text-white">CRM & pagamento no fluxo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#cce5e9] bg-[#e7f4f5]" aria-label="Benefícios principais">
          <div className="mx-auto grid max-w-7xl divide-y divide-[#c9e1e5] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
            {[
              ['Médico para médico', 'Uma rede pensada para a rotina de quem atende.'],
              ['Visão antes da decisão', 'Mapa, agenda e detalhes do plantão no app.'],
              ['De ponta a ponta, mais seguro', 'Verificação, conversa e pagamento no mesmo fluxo.'],
            ].map(([title, detail], index) => (
              <div key={title} className="flex gap-3 py-5 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0">
                <span className="font-mono text-xs font-bold text-[#0e96a6]">0{index + 1}</span>
                <div><p className="font-bold text-[#082b42]">{title}</p><p className="mt-1 text-sm leading-snug text-[#4a6879]">{detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="bg-[#f7fbfb] px-5 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <Eyebrow>Decisão com contexto</Eyebrow>
                <h2 className="max-w-md text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#082b42] sm:text-5xl">Sua rotina não precisa caber em uma conversa solta.</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-[#526e7d]">A 97plantões transforma a troca de plantões em um fluxo claro: descubra, avalie, converse e confirme.</p>
                <a href="#download" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#0e9cad] pb-1 text-sm font-extrabold text-[#087f8e] transition hover:border-[#082b42] hover:text-[#082b42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f8e]">
                  Baixar para começar <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="grid gap-px bg-[#c8e0e4] sm:grid-cols-3">
                {capabilities.map((capability, index) => (
                  <article key={capability.label} className="group min-h-[250px] bg-[#f7fbfb] p-6 transition hover:bg-white sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center border border-[#b8dfe3] bg-[#e6f7f7] text-[#087f8e]">{capability.icon}</span>
                      <span className="font-mono text-xs font-bold text-[#8cb4bb]">0{index + 1}</span>
                    </div>
                    <h3 className="mt-12 text-xl font-extrabold leading-tight tracking-[-0.03em] text-[#082b42]">{capability.label}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#57717f]">{capability.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="medicos" className="relative overflow-hidden bg-[#0a273e] px-5 py-20 text-white sm:py-28 lg:px-8">
          <div className="cc-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow dark>Escolha sua rota</Eyebrow>
              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl">Dois caminhos. Uma operação mais tranquila.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">Entre para encontrar um novo turno ou para resolver o plantão que você precisa passar.</p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <article className="relative overflow-hidden border border-cyan-200/25 bg-[#0b314c] p-7 sm:p-10">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-cyan-200/10" aria-hidden="true" />
                <div className="relative flex h-11 w-11 items-center justify-center border border-cyan-300/45 bg-cyan-300/10 text-cyan-200"><Search size={22} /></div>
                <p className="relative mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">Quero assumir</p>
                <h3 className="relative mt-3 text-3xl font-black tracking-[-0.04em] text-white">Veja onde o seu tempo faz sentido.</h3>
                <p className="relative mt-5 max-w-md leading-relaxed text-slate-300">Filtre plantões por localização, período e especialidade. Ao encontrar uma boa opção, candidate-se e acompanhe a resposta pelo app.</p>
                <ul className="relative mt-8 grid gap-3 text-sm text-slate-200">
                  {['Mapa por proximidade', 'Agenda de confirmações', 'Chat para alinhar detalhes'].map((item) => <li key={item} className="flex items-center gap-2"><Check size={15} className="text-cyan-300" strokeWidth={3} />{item}</li>)}
                </ul>
                <a href="#download" className="relative mt-9 inline-flex items-center gap-2 bg-cyan-300 px-5 py-3 text-sm font-extrabold text-[#052034] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Encontrar plantões <ArrowRight size={16} /></a>
              </article>
              <article className="relative overflow-hidden border border-white/15 bg-[#08243a] p-7 sm:p-10">
                <div className="absolute bottom-0 right-0 h-[72%] w-[55%] bg-[radial-gradient(circle_at_bottom_right,rgba(55,169,245,0.22),transparent_64%)]" aria-hidden="true" />
                <div className="relative flex h-11 w-11 items-center justify-center border border-[#75c8ff]/45 bg-[#37a9f5]/10 text-[#94d6ff]"><Send size={21} /></div>
                <p className="relative mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#94d6ff]">Quero ofertar</p>
                <h3 className="relative mt-3 text-3xl font-black tracking-[-0.04em] text-white">Passe o turno sem deixar pontas soltas.</h3>
                <p className="relative mt-5 max-w-md leading-relaxed text-slate-300">Publique a oportunidade, avalie candidaturas e combine tudo em um espaço privado, com pagamento integrado ao processo.</p>
                <ul className="relative mt-8 grid gap-3 text-sm text-slate-200">
                  {['Publicação de plantão avulso ou fixo', 'Candidaturas de médicos verificados', 'Pagamento por PIX, boleto ou cartão'].map((item) => <li key={item} className="flex items-center gap-2"><Check size={15} className="text-[#94d6ff]" strokeWidth={3} />{item}</li>)}
                </ul>
                <a href="#download" className="relative mt-9 inline-flex items-center gap-2 border border-[#75c8ff]/60 px-5 py-3 text-sm font-extrabold text-[#c5ebff] transition hover:border-[#c5ebff] hover:bg-[#37a9f5]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Ofertar um plantão <ArrowRight size={16} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f7f8] px-5 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <Eyebrow>Prova, não promessa</Eyebrow>
              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#082b42] sm:text-5xl">Veja o fluxo da 97plantões em ação.</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#526e7d]">Do primeiro filtro à confirmação: o app concentra o que normalmente fica espalhado entre mensagens, planilhas e lembretes.</p>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#31586e]"><span className="grid h-8 w-8 place-items-center bg-[#d9f2f3] text-[#087f8e]"><Activity size={17} /></span>Conheça a experiência antes de baixar.</div>
            </div>
            <div className="relative border border-[#bfdde1] bg-[#0a273e] p-2 shadow-[0_24px_60px_rgba(18,56,73,0.16)] sm:p-3">
              <div className="flex items-center gap-1.5 border border-white/10 bg-[#061827] px-3 py-2" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#ff737d]" /><span className="h-2 w-2 rounded-full bg-[#f5c867]" /><span className="h-2 w-2 rounded-full bg-cyan-300" /><span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">Demonstração do aplicativo</span></div>
              <video className="mt-2 aspect-video w-full bg-[#061827] object-cover" controls playsInline poster="./doctor_using_the_app.jpg">
                <source src="./NoveSeteVideo.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </section>

        <section id="seguranca" className="bg-white px-5 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 border-b border-[#d6e6e9] pb-10 lg:flex-row lg:items-end">
              <div className="max-w-xl"><Eyebrow>Confiança no centro do fluxo</Eyebrow><h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#082b42] sm:text-5xl">Todo mundo sabe onde está pisando.</h2></div>
              <p className="max-w-sm text-base leading-relaxed text-[#526e7d]">Mais contexto para decidir, mais proteção para confirmar e menos ruído na passagem de plantão.</p>
            </div>
            <div className="grid divide-y divide-[#d6e6e9] md:grid-cols-3 md:divide-x md:divide-y-0">
              {safeguards.map((safeguard, index) => (
                <article key={safeguard.title} className="py-9 md:px-8 md:py-12 first:md:pl-0 last:md:pr-0">
                  <span className="font-mono text-xs font-bold text-[#72aeb5]">0{index + 1}</span>
                  <div className="mt-7 text-[#087f8e]">{safeguard.icon}</div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.025em] text-[#082b42]">{safeguard.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#57717f]">{safeguard.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e9f5f6] px-5 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div><Eyebrow>Quem já usa na rotina</Eyebrow><h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#082b42] sm:text-5xl">Menos incerteza entre um turno e outro.</h2></div>
              <div className="flex items-center gap-1 text-[#e19b28]" aria-label="Avaliações positivas"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure key={testimonial.role} className={`flex min-h-[265px] flex-col justify-between border border-[#c7e0e4] bg-[#faffff] p-6 sm:p-7 ${index === 1 ? 'lg:translate-y-7' : ''}`}>
                  <blockquote className="text-lg font-semibold leading-relaxed tracking-[-0.018em] text-[#163a51]">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-9 flex items-center gap-3 border-t border-[#d9e9eb] pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b344e] font-mono text-[10px] font-bold text-cyan-200">{testimonial.initials}</span>
                    <span><strong className="block text-sm text-[#082b42]">{testimonial.role}</strong><span className="text-xs text-[#66818d]">{testimonial.city} · Médico verificado</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f7fbfb] px-5 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>Perguntas frequentes</Eyebrow>
              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#082b42] sm:text-5xl">Ainda em dúvida?</h2>
              <p className="mt-5 max-w-sm leading-relaxed text-[#526e7d]">Aqui estão respostas rápidas para os pontos que mais importam antes de entrar na plataforma.</p>
              <a href="?page=suporte" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#087f8e] underline decoration-[#7ac8ce] underline-offset-4 transition hover:text-[#082b42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f8e]">Falar com o suporte <ArrowUpRight size={16} /></a>
            </div>
            <div className="border-t border-[#c8e0e4]">
              {faqs.map((faq, index) => {
                const isOpen = index === openFaq;
                const answerId = `faq-answer-${index}`;
                return (
                  <div key={faq.question} className="border-b border-[#c8e0e4]">
                    <button type="button" className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#082b42] transition hover:text-[#087f8e] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#087f8e]" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{faq.question}</span>
                      <ChevronDown size={20} className={`shrink-0 text-[#087f8e] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {isOpen && <div id={answerId} role="region" className="-mt-2 max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-[#57717f]">{faq.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="download" className="cc-grid relative overflow-hidden bg-[#061827] px-5 py-20 text-white sm:py-28 lg:px-8">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_32%,rgba(45,224,208,0.2),transparent_45%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <Eyebrow dark>A sua próxima decisão começa aqui</Eyebrow>
              <h2 className="text-4xl font-black leading-[1] tracking-[-0.055em] text-white sm:text-6xl">Entre na central que acompanha a sua rotina.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">Baixe a 97plantões e encontre ou ofereça plantões em uma rede feita exclusivamente para médicos.</p>
              <div className="mt-8 flex flex-wrap gap-3"><StoreButton href={APPLE_STORE_URL}><span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">Disponível na</span><strong className="block text-base leading-none">App Store</strong></StoreButton><StoreButton href={GOOGLE_PLAY_URL}><span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">Baixe no</span><strong className="block text-base leading-none">Google Play</strong></StoreButton></div>
              <a href="#download" className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-200 underline decoration-cyan-500 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Abrir página de download <Download size={15} /></a>
            </div>
            <div className="hidden border border-cyan-100/15 bg-[#08243a]/90 p-7 text-center shadow-2xl md:block">
              <div className="mx-auto grid h-36 w-36 place-items-center border border-cyan-200/30 bg-[#eafeff] p-2">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent('https://97plantoes.com.br/baixar')}&color=062035&bgcolor=EAFFFF&margin=5`} alt="QR code para abrir a página de download da 97plantões" className="h-full w-full" loading="lazy" />
              </div>
              <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">Aponte a câmera</p>
              <p className="mt-2 max-w-[160px] text-sm leading-relaxed text-slate-300">Baixe direto no seu celular.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
