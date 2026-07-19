import React, { useState } from 'react';
import Footer from './Footer';

// --- Brand Colors ---
// Ciano Plantonista (Light/Teal): #32B3C5
// Ciano Plantonista (Dark/Teal): #0D8F9A
// Azul Escuro (Navy):   #0A2540
// Branco Hospitalar: #FFFFFF
// Azul:              #1C5A90 (auxiliary)

import {
  UserPlus,
  Search,
  MessageCircle,
  CreditCard,
  ShieldCheck,
  FileText,
  Map,
  CalendarDays,
  Lock,
  MessageSquare
} from 'lucide-react';

// --- Icons ---
const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// --- Subcomponents ---
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b py-5 cursor-pointer group"
      style={{ borderColor: '#e5e7eb' }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center text-base font-semibold gap-4">
        <span style={{ color: '#0A2540' }} className="group-hover:opacity-80 transition-opacity leading-snug">
          {question}
        </span>
        <span
          className="text-xl font-mono flex-shrink-0 transition-transform duration-300"
          style={{ color: '#32B3C5', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm leading-relaxed pr-8" style={{ color: '#4b5563' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div
    className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
    style={{
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 8px 32px 0 rgba(50, 179, 197, 0.07)'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 pointer-events-none rounded-3xl" />
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 relative z-10"
      style={{
        background: '#EAF8FA',
        color: '#0D8F9A'
      }}
    >
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 relative z-10" style={{ color: '#0A2540' }}>{title}</h3>
    <p className="text-sm leading-relaxed relative z-10" style={{ color: '#6b7280' }}>{desc}</p>
  </div>
);

const StepCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center px-4 relative z-10">
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-5 shadow-lg relative"
      style={{ background: 'linear-gradient(135deg, #32B3C5 0%, #0D8F9A 100%)' }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full animate-pulse opacity-30 blur-md bg-[#32B3C5]"></div>
      <div className="relative z-10">{icon}</div>
    </div>
    <h4 className="font-bold text-lg mb-2" style={{ color: '#0A2540' }}>{title}</h4>
    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{desc}</p>
  </div>
);

// --- FAQ Data from faq.txt ---
const faqGroups = [
  {
    category: 'Cadastro e Perfil',
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

const testimonials = [
  { role: 'Clínica Médica', city: 'São Paulo, SP', status: 'Médico verificado', letter: 'C', color: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', text: 'Finalmente uma plataforma séria para médicos. A verificação de CRM transmite muita segurança em relação ao médico para quem passei meu plantão.' },
  { role: 'Pediatra', city: 'Rio de Janeiro, RJ', status: 'Médica verificada', letter: 'A', color: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)', text: 'Encontrar plantões na minha especialidade ficou muito mais fácil. O Mapa interativo é incrível para encontrar plantões em Hospitais próximos a mim.' },
  { role: 'Emergencista', city: 'São Paulo, SP', status: 'Médico verificado', letter: 'G', color: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', text: 'Recebi o pagamento na minha conta logo após finalizar o plantão. Não preciso mais me preocupar com calotes, resolveu um maior problema de pegar plantão no dia a dia.' },
  { role: 'Intensivista', city: 'Rio de Janeiro, RJ', status: 'Médica verificada', letter: 'J', color: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)', text: 'O chat com o médico que vai assumir o plantão é uma ferramenta incrível para alinhar os detalhes com tranquilidade. Simples e privado.' },
];

// --- Main Component ---
export default function LandingPageTemplate({ onGoToApp }: { onGoToApp: () => void }) {
  const [openCategory, setOpenCategory] = useState<string>(faqGroups[0].category);

  const marqueeKeywords = [
    'Plantão Avulso', 'Contrato Fixo', 'Verificação de CRM', 'Chat Seguro',
    'Agenda Integrada', 'Pagamento Garantido', 'Mapa de Plantões', 'PIX · Cartão · Boleto',
    'Todas as Especialidades', 'Todo o Brasil',
  ];
  const marqueeItems = [...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-800 font-sans selection:bg-cyan-100 selection:text-cyan-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .btn-primary {
          background: linear-gradient(135deg, #32B3C5 0%, #0D8F9A 100%);
          color: white;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(50, 179, 197, 0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(50, 179, 197, 0.4);
        }
        .btn-secondary {
          background: white;
          color: #0A2540;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 9999px;
          border: 1.5px solid #E5E7EB;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #F8FAFC;
          border-color: #CBD5E1;
        }
        .nav-link {
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #0A2540; }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0A2540;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderColor: '#e5e7eb' }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src="./logo.svg" alt="97plantões logo" className="h-9 w-auto rounded-lg" />
            <span className="font-extrabold text-xl tracking-tight" style={{ color: '#1C5A90' }}>
              97<span style={{ color: '#55BCCD' }}>plantões</span>
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8">
            <a href="#funcionalidades" className="nav-link">Funcionalidades</a>
            <a href="#como-funciona" className="nav-link">Como funciona</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="?page=sobre-nos" className="nav-link">Sobre Nós</a>
          </div>

          {/* CTA */}
          <a href="#download" className="btn-primary" style={{ padding: '8px 22px', fontSize: '0.875rem' }}>
            Baixar o App
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-[#EBF7F9]">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-[#32B3C5] mix-blend-multiply blur-3xl" />
          <div className="absolute right-[20%] top-[40%] w-[400px] h-[400px] rounded-full bg-[#EBF7F9] mix-blend-multiply blur-3xl leading-none" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <div className="trust-badge mb-6">
              <span className="w-2 h-2 rounded-full bg-[#32B3C5] flex-shrink-0 animate-pulse"></span>
              De Médico para Médico 🛡️
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-black tracking-tight mb-6 leading-[1.2]"
              style={{ color: '#0A2540' }}
            >
              O App que conecta Médicos a plantões por todo o Brasil.
            </h1>

            <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium" style={{ color: '#4b5563' }}>
              Encontre plantões próximos a você ou passe seu plantão para médicos verificados com segurança, praticidade e eficiência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#download" className="btn-primary w-full sm:w-auto">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L12 16M12 16L8 12M12 16L16 12M4 20L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Baixar o App
              </a>
              <a href="#como-funciona" className="btn-secondary w-full sm:w-auto">
                Como funciona
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            {/* Glass panel effect behind the image */}
            <div className="absolute inset-4 sm:inset-10 bg-white/20 backdrop-blur-3xl rounded-[3rem] border border-white/40 shadow-2xl -z-10 transform rotate-3 scale-105" />

            <img
              src="./doctor_using_the_app.jpg"
              alt="Médico utilizando o aplicativo 97plantões"
              className="w-full max-w-[500px] h-auto object-contain rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-white/50"
            />
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section
        className="border-y overflow-hidden py-5"
        style={{ borderColor: '#55BCCD22', background: 'linear-gradient(90deg, #f0fafc 0%, #e8f7fa 50%, #f0fafc 100%)' }}
      >
        <div className="animate-marquee gap-10 items-center">
          {Array.from(marqueeItems).map((text, i) => (
            <span
              key={i}
              className="whitespace-nowrap flex items-center gap-10 font-semibold text-base"
              style={{ color: '#1C5A90' }}
            >
              {text}
              <span style={{ color: '#55BCCD', fontSize: '0.6rem' }}>●</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Funcionalidades ── */}
      <section
        id="funcionalidades"
        className="py-24 px-4 relative"
        style={{ background: '#F8FBFC' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#32B3C5' }}>
              TUDO QUE VOCÊ PRECISA
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: '#0A2540' }}>Funcionalidades</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck size={26} strokeWidth={2.5} />}
              title="Comunidade verificada"
              desc="Todos os médicos passam por verificação de dados e do CRM junto aos respectivos Conselhos. Apenas profissionais devidamente registrados podem participar da plataforma."
            />
            <FeatureCard
              icon={<Map size={26} strokeWidth={2.5} />}
              title="Encontre plantões no Mapa"
              desc="Encontre plantões de todas as especialidades e em Hospitais/Unidades de Saúde pelo Mapa. Veja os plantões próximos e escolha aqueles de seu interesse."
            />
            <FeatureCard
              icon={<FileText size={26} strokeWidth={2.5} />}
              title="Passar Plantão"
              desc="Passe seu plantão quando precisar para médicos qualificados e verificados e transfira o valor diretamente ao outro profissional pelo aplicativo, por Cartão de Crédito (em até 6x), PIX ou Boleto, de forma simples e segura."
            />
            <FeatureCard
              icon={<CreditCard size={26} strokeWidth={2.5} />}
              title="Pagamento seguro"
              desc="Pague o plantão que deseja passar por Cartão de Crédito (em até 6x), Pix ou boleto. O valor fica retido com segurança e é repassado ao médico que assumiu o plantão apenas após a sua conclusão."
            />
            <FeatureCard
              icon={<MessageSquare size={26} strokeWidth={2.5} />}
              title="Chat privado"
              desc="Converse com o outro médico antes e após a confirmação do plantão. As mensagens são privadas e seguras."
            />
            <FeatureCard
              icon={<CalendarDays size={26} strokeWidth={2.5} />}
              title="Agenda integrada"
              desc="Acompanhe todos os seus plantões confirmados em um calendário integrado no aplicativo. Veja seus compromissos e planeje sua agenda com antecedência."
            />
          </div>
        </div>
      </section>

      {/* ── Confiança & Comunidade ── */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: '#0A2540' }}>
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#32B3C5] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D8F9A] opacity-[0.1] blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#32B3C5' }}>
              SEGURANÇA EM PRIMEIRO LUGAR
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white">Segurança em primeiro lugar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {Array.from([
              {
                icon: <ShieldCheck size={32} className="text-[#32B3C5]" />,
                title: 'CRM Verificado',
                desc: 'Verificamos com rigor se o CRM informado é válido junto aos órgãos responsáveis. Apenas médicos ativos podem participar.',
              },
              {
                icon: <Lock size={32} className="text-[#32B3C5]" />,
                title: 'Dados Protegidos',
                desc: 'Suas informações pessoais e de pagamento são protegidas com mecanismos de segurança de ponta a ponta.',
              },
              {
                icon: <CreditCard size={32} className="text-[#32B3C5]" />,
                title: 'Pagamento Escrow',
                desc: 'O valor do plantão é retido e apenas repassado somente após a realização do plantão por ambas as partes.',
              },
              {
                icon: <UserPlus size={32} className="text-[#32B3C5]" />,
                title: 'Reputação na Plataforma',
                desc: 'O histórico de compromissos cumpridos é registrado. Médicos confiáveis se destacam, promovendo responsabilidade.',
              },
            ]).map((item: any, i: number) => (
              <div
                key={i}
                className="flex gap-6 p-8 rounded-4xl transition-transform hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(50, 179, 197, 0.2)',
                  boxShadow: 'inset 0 0 20px rgba(50, 179, 197, 0.05)'
                }}
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#a8d8e8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ── Como funciona ── */}
      <section id="como-funciona" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#32B3C5' }}>
              SIMPLES E RÁPIDO
            </p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: '#0A2540' }}>Como funciona</h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 z-0 rounded-full"
              style={{ background: '#EAF8FA' }}
            >
              <div className="h-full bg-[#32B3C5] w-full rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <StepCard
                icon={<UserPlus size={24} />}
                title="Cadastre-se como Médico"
                desc=""
              />
              <StepCard
                icon={<Search size={24} />}
                title="Oferte ou Candidate-se"
                desc=""
              />
              <StepCard
                icon={<MessageCircle size={24} />}
                title="Converse pelo chat"
                desc=""
              />
              <StepCard
                icon={<CreditCard size={24} />}
                title="Pagamento garantido"
                desc=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section id="depoimentos" className="py-24 px-4" style={{ background: '#F8FBFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: '#0A2540' }}>O que os médicos dizem</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left Testimonials */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  <span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-gray-700 italic">
                  "Encontrar plantões na minha especialidade ficou muito mais fácil. O Mapa interativo é incrível para encontrar plantões em Hospitais próximos a mim."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full font-bold text-white text-sm flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)' }}>A</div>
                  <div>
                    <div className="font-bold text-sm text-[#0A2540]">Pediatra</div>
                    <div className="text-xs text-gray-500">Rio de Janeiro, RJ · Médica verificada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Logo/App Image */}
            <div className="w-full lg:w-1/3 flex justify-center py-8 lg:py-0 relative">
              <div className="absolute inset-0 bg-linear-to-b from-[#32B3C5]/10 to-transparent rounded-full blur-3xl scale-150 animate-pulse pointer-events-none" />
              <img
                src="./logo.svg"
                alt="97plantões App"
                className="w-full max-w-[280px] h-auto object-contain relative z-10 drop-shadow-2xl animate-float"
              />
            </div>

            {/* Right Testimonials */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  <span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span><span className="text-[#f59e0b] text-lg">★</span>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-gray-700 italic">
                  "Recebi o pagamento na minha conta logo após finalizar o plantão. Não preciso mais me preocupar com calotes, resolveu um maior problema de pegar plantão no dia a dia"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full font-bold text-white text-sm flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>G</div>
                  <div>
                    <div className="font-bold text-sm text-[#0A2540]">Emergencista</div>
                    <div className="text-xs text-gray-500">São Paulo, SP · Médico verificado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video / App overview ── */}
      <section className="py-24 px-4" style={{ background: '#f8fcfd' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
            Veja em ação
          </p>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#1C5A90' }}>O app em detalhe</h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Veja como é simples ofertar, encontrar e confirmar plantões médicos no 97plantões.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: '#55BCCD33' }}>
            <video
              className="w-full h-auto"
              controls
              playsInline
              poster="./doctor_using_the_app.jpg"
            >
              <source src="./NoveSeteVideo.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section id="depoimentos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-base font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Comunidade 97
            </p>
            <h2 className="text-4xl font-black" style={{ color: '#1C5A90' }}>O que os médicos dizem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from(testimonials).map((t: any, i: number) => (
              <div
                key={i}
                className="p-7 rounded-2xl border flex flex-col"
                style={{ background: '#f8fcfd', borderColor: '#55BCCD22' }}
              >
                <div className="flex gap-1 mb-4">
                  <span style={{ color: '#f59e0b' }}>★</span><span style={{ color: '#f59e0b' }}>★</span><span style={{ color: '#f59e0b' }}>★</span><span style={{ color: '#f59e0b' }}>★</span><span style={{ color: '#f59e0b' }}>★</span>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#374151' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.letter}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1C5A90' }}>{t.role}</div>
                    <div className="text-xs" style={{ color: '#9ca3af' }}>{t.city} · {t.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-4" style={{ background: '#f8fcfd' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Dúvidas?
            </p>
            <h2 className="text-4xl font-black" style={{ color: '#1C5A90' }}>Perguntas Frequentes</h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqGroups.map(g => (
              <button
                key={g.category}
                onClick={() => setOpenCategory(g.category)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={
                  openCategory === g.category
                    ? { background: 'linear-gradient(135deg, #55BCCD 0%, #1C5A90 100%)', color: 'white', border: 'none' }
                    : { background: 'white', color: '#1C5A90', border: '1.5px solid #55BCCD55' }
                }
              >
                {g.category}
              </button>
            ))}
          </div>

          {/* Active FAQ items */}
          {faqGroups.filter(g => g.category === openCategory).map(g => (
            <div key={g.category} className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#55BCCD22' }}>
              <div className="border-t" style={{ borderColor: '#f3f4f6' }}>
                {g.items.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section
        id="download"
        className="py-24 px-4 flex flex-col justify-center items-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C5A90 0%, #32B3C5 100%)' }}
      >
        <div className="max-w-3xl w-full text-center mb-12 relative z-10">
          <div className="inline-block bg-white/20 text-white rounded-full px-5 py-2 text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm border border-white/20">
            Disponível na App Store & Google Play
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-sm">
            Conectando a Saúde do Brasil
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Junte-se à <span className="font-black" style={{ color: '#0A2540' }}>97plantões</span> e conecte-se a médicos de todo o Brasil para encontrar ou passar plantões com segurança e eficiência.
          </p>
        </div>

        <div
          className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12 p-10 md:p-14 rounded-[2.5rem] relative z-10"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
          }}
        >
          {/* Glass shine effect inner */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[2.5rem]" />

          {/* Left Text & Buttons */}
          <div className="flex flex-col items-center md:items-start relative z-10 w-full md:w-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Baixe o App Agora
            </h2>

            <div className="flex flex-col gap-4 w-full sm:w-auto">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl transition-transform hover:scale-105 shadow-xl"
              >
                <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span className="text-[10px] font-medium text-gray-200 uppercase tracking-widest">Download on the</span>
                  <span className="text-xl font-semibold -mt-0.5 tracking-tight">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.sante.n97plantoes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl transition-transform hover:scale-105 shadow-xl"
              >
                <svg viewBox="0 0 512 512" className="w-8 h-8">
                  <path fill="#4CAF50" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                  <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                  <path fill="#FFEB3B" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                  <path fill="#F44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span className="text-[10px] font-medium text-gray-200 uppercase tracking-widest">GET IT ON</span>
                  <span className="text-xl font-semibold -mt-0.5 tracking-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right QR Code */}
          {/* QR Codes — one for each store */}
          <div className="flex flex-col items-center relative z-10 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* App Store QR */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-2xl shadow-xl mb-2">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://apps.apple.com/br/app/97plant%C3%B5es/id6760927669')}&color=0A2540&bgcolor=FFFFFF&margin=8`}
                    alt="QR Code para App Store"
                    className="w-36 h-36 md:w-44 md:h-44 rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-white text-sm font-medium tracking-wide">
                  <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                  App Store
                </div>
              </div>
              {/* Google Play QR */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-2xl shadow-xl mb-2">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://play.google.com/store/apps/details?id=com.sante.n97plantoes')}&color=0A2540&bgcolor=FFFFFF&margin=8`}
                    alt="QR Code para Google Play"
                    className="w-36 h-36 md:w-44 md:h-44 rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-white text-sm font-medium tracking-wide">
                  <svg viewBox="0 0 512 512" className="w-4 h-4">
                    <path fill="#4CAF50" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                    <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                    <path fill="#FFEB3B" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                    <path fill="#F44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
