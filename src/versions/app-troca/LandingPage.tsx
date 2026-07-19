import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import { AppShot, appScreens, Brand, FaqList, LegalFooter, StoreButtons } from '../shared/DesignKit';

const pathItems = [
  { icon: <MapPin size={17} />, title: 'Encontre', copy: 'Explore oportunidades na Página Inicial, no Mapa ou na Agenda.' },
  { icon: <Stethoscope size={17} />, title: 'Confira', copy: 'Veja especialidade, unidade, horário, duração e valor antes de decidir.' },
  { icon: <CalendarDays size={17} />, title: 'Candidate-se', copy: 'Acompanhe cada candidatura no Painel e organize os compromissos.' },
];

const offerItems = [
  { icon: <RefreshCw size={17} />, title: 'Oferte', copy: 'Publique um plantão gratuitamente ou atribua a um médico específico.' },
  { icon: <Users size={17} />, title: 'Escolha', copy: 'Revise o perfil, converse pelo chat e escolha quem vai assumir.' },
  { icon: <CreditCard size={17} />, title: 'Confirme', copy: 'Pague por cartão, PIX ou boleto; o repasse acontece após o plantão.' },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="swap-page" id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500..800&family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .swap-page {
          --swap-ink: #102f3d; --swap-muted: #587078; --swap-frost: #f2f7f7; --swap-white: #fff;
          --swap-cyan: #31b6be; --swap-deep: #137a84; --swap-coral: #ff705d; --swap-sun: #f3c74f;
          --swap-line: rgba(16,47,61,.16); --kit-ink: var(--swap-ink); --kit-muted: var(--swap-muted);
          --kit-accent: var(--swap-deep); --kit-accent-soft: #7cdae0; --kit-line: var(--swap-line);
          --kit-focus: var(--swap-sun); --kit-body: 'Manrope', sans-serif; --kit-utility: 'DM Mono', monospace;
          --kit-frame: var(--swap-ink); --kit-radius: 1.35rem; --kit-control-radius: .35rem;
          min-height: 100vh; overflow-x: clip; color: var(--swap-ink); background: var(--swap-frost);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
        }
        .swap-page *, .swap-page *::before, .swap-page *::after { box-sizing: border-box; }
        .swap-page ::selection { background: var(--swap-sun); color: var(--swap-ink); }
        .swap-shell { width: min(74rem, calc(100% - 3rem)); margin: 0 auto; }
        .swap-header { position: sticky; top: 0; z-index: 20; background: rgba(242,247,247,.82); backdrop-filter: blur(22px) saturate(160%); border-bottom: 1px solid var(--swap-line); }
        .swap-header-inner { min-height: 4.65rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
        .swap-nav { display: flex; gap: 1.7rem; color: var(--swap-muted); font-size: .74rem; font-weight: 750; }
        .swap-nav a { color: inherit; text-decoration: none; }
        .swap-header-cta, .swap-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: .55rem; padding: .72rem 1rem;
          color: #fff; background: var(--swap-ink); border: 1px solid var(--swap-ink); border-radius: .35rem;
          font-size: .74rem; font-weight: 800; text-decoration: none;
          transition: transform 180ms cubic-bezier(.23,1,.32,1), background-color 180ms ease;
        }
        .swap-header-cta:active, .swap-primary:active { transform: scale(.97); transition-duration: 160ms; }

        .swap-hero { position: relative; padding: clamp(4rem,8vw,7.5rem) 0 5.5rem; overflow: hidden; }
        .swap-hero::before { content: ''; position: absolute; inset: 0 50% 0 0; background: #dff3f2; border-right: 1px solid var(--swap-line); }
        .swap-hero::after { content: ''; position: absolute; width: 30rem; height: 30rem; right: -13rem; top: -16rem; border: 1px solid rgba(255,112,93,.35); border-radius: 50%; box-shadow: 0 0 0 4rem rgba(255,112,93,.06), 0 0 0 8rem rgba(49,182,190,.05); }
        .swap-hero-copy { position: relative; z-index: 2; max-width: 66rem; text-align: center; margin: 0 auto 4rem; }
        .swap-kicker { display: inline-flex; align-items: center; gap: .55rem; margin: 0 0 1.35rem; color: var(--swap-deep); font: 500 .66rem/1 'DM Mono', monospace; letter-spacing: .12em; text-transform: uppercase; }
        .swap-kicker i { width: .55rem; height: .55rem; background: var(--swap-coral); border-radius: 50%; box-shadow: 0 0 0 .35rem rgba(255,112,93,.14); }
        .swap-title { margin: 0; font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(3.2rem,6vw,5.9rem); font-stretch: 84%; font-weight: 750; line-height: .92; letter-spacing: -.065em; text-wrap: balance; }
        .swap-title span:first-child { color: var(--swap-deep); }
        .swap-title span:last-child { color: var(--swap-coral); }
        .swap-lede { max-width: 44rem; margin: 1.8rem auto 0; color: var(--swap-muted); font-size: clamp(.98rem,1.4vw,1.12rem); font-weight: 550; line-height: 1.7; }
        .swap-choice { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 4.6rem 1fr; align-items: center; }
        .swap-door { position: relative; min-height: 38rem; padding: clamp(1.4rem,3vw,2.7rem); overflow: hidden; border: 1px solid var(--swap-ink); }
        .swap-door--find { background: var(--swap-cyan); border-radius: 2rem 0 0 2rem; }
        .swap-door--pass { background: var(--swap-coral); border-radius: 0 2rem 2rem 0; }
        .swap-door-copy { position: relative; z-index: 3; width: 46%; max-width: 16rem; }
        .swap-door--pass .swap-door-copy { margin-left: auto; }
        .swap-door-label { margin: 0 0 .7rem; font: 500 .62rem/1 'DM Mono', monospace; letter-spacing: .12em; text-transform: uppercase; }
        .swap-door h2 { max-width: 16rem; margin: 0; font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(2rem,3vw,3rem); line-height: .96; letter-spacing: -.055em; }
        .swap-door p { margin: 1rem 0 0; font-size: .84rem; font-weight: 650; line-height: 1.55; }
        .swap-door .kit-shot { position: absolute; z-index: 2; width: min(49%,15.5rem); right: 1.25rem; bottom: -7rem; transform: rotate(4deg); }
        .swap-door--pass .kit-shot { right: auto; left: 1.25rem; transform: rotate(-4deg); }
        .swap-door .kit-shot-frame { box-shadow: .8rem 1rem 0 rgba(16,47,61,.2); }
        .swap-hinge { position: relative; z-index: 4; display: grid; width: 4.6rem; height: 4.6rem; margin: 0 -1px; place-items: center; color: var(--swap-ink); background: var(--swap-sun); border: 1px solid var(--swap-ink); border-radius: 50%; box-shadow: .35rem .35rem 0 var(--swap-ink); }

        .swap-bridge { padding: 1.15rem 0; color: #eef8f8; background: var(--swap-ink); }
        .swap-bridge-inner { display: grid; grid-template-columns: auto 1fr auto; gap: 1.3rem; align-items: center; }
        .swap-bridge p { margin: 0; font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(1.05rem,2vw,1.5rem); letter-spacing: -.035em; }
        .swap-bridge span { color: var(--swap-sun); font: 500 .6rem/1 'DM Mono', monospace; letter-spacing: .1em; text-transform: uppercase; }

        .swap-routes { padding: clamp(5rem,10vw,8.5rem) 0; background: #fff; }
        .swap-section-head { display: grid; grid-template-columns: 1fr .6fr; gap: 4rem; align-items: end; margin-bottom: 4rem; }
        .swap-section-head h2, .swap-proof h2, .swap-faq-copy h2, .swap-download h2 { margin: 0; font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(2.5rem,5vw,5rem); line-height: .92; letter-spacing: -.065em; }
        .swap-section-head p { margin: 0; color: var(--swap-muted); font-size: .93rem; line-height: 1.7; }
        .swap-route-grid { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--swap-line); }
        .swap-route { padding: clamp(1.6rem,4vw,3.4rem); }
        .swap-route:first-child { border-right: 1px solid var(--swap-line); }
        .swap-route-header { display: flex; justify-content: space-between; gap: 1rem; align-items: center; padding-bottom: 1.3rem; border-bottom: 1px solid var(--swap-ink); }
        .swap-route-header strong { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.35rem; letter-spacing: -.045em; }
        .swap-route-header span { font: 500 .58rem/1 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .09em; }
        .swap-route-list { display: grid; margin-top: 1.5rem; }
        .swap-route-item { display: grid; grid-template-columns: 2.3rem 1fr; gap: .9rem; padding: 1.15rem 0; border-bottom: 1px solid var(--swap-line); }
        .swap-route-icon { display: grid; width: 2.1rem; height: 2.1rem; place-items: center; color: var(--swap-deep); border: 1px solid currentColor; border-radius: 50%; }
        .swap-route-item h3 { margin: 0 0 .32rem; font-size: .93rem; letter-spacing: -.025em; }
        .swap-route-item p { margin: 0; color: var(--swap-muted); font-size: .75rem; line-height: 1.55; }
        .swap-route-visual { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 2.5rem; align-items: end; }
        .swap-route-visual .kit-shot:last-child { transform: translateY(2rem); }

        .swap-proof { padding: clamp(5rem,9vw,8rem) 0; background: #dff3f2; }
        .swap-proof-grid { display: grid; grid-template-columns: .75fr 1fr; gap: clamp(3rem,8vw,7rem); align-items: center; }
        .swap-proof-list { margin: 2rem 0 0; padding: 0; list-style: none; }
        .swap-proof-list li { display: flex; gap: .75rem; padding: 1rem 0; border-bottom: 1px solid var(--swap-line); font-size: .83rem; font-weight: 700; line-height: 1.45; }
        .swap-proof-list svg { flex: 0 0 auto; color: var(--swap-deep); }
        .swap-proof-stage { position: relative; min-height: 35rem; }
        .swap-proof-stage .kit-shot { position: absolute; width: min(59%,18.5rem); }
        .swap-proof-stage .kit-shot:first-child { left: 4%; top: 0; transform: rotate(-4deg); }
        .swap-proof-stage .kit-shot:last-child { right: 3%; bottom: 0; transform: rotate(4deg); }
        .swap-shield { position: absolute; z-index: 5; left: 47%; top: 44%; display: grid; width: 4.7rem; height: 4.7rem; place-items: center; color: var(--swap-ink); background: var(--swap-sun); border: 1px solid var(--swap-ink); border-radius: 50%; box-shadow: .4rem .4rem 0 var(--swap-ink); }

        .swap-faq { padding: clamp(5rem,9vw,8rem) 0; background: #fff; }
        .swap-faq-grid { display: grid; grid-template-columns: .65fr 1fr; gap: clamp(3rem,9vw,8rem); }
        .swap-faq-copy p { max-width: 21rem; color: var(--swap-muted); font-size: .84rem; line-height: 1.65; }
        .swap-download { padding: clamp(4rem,8vw,6rem) 0; color: #f4fbfb; background: var(--swap-ink); overflow: hidden; }
        .swap-download-grid { display: grid; grid-template-columns: 1fr auto; gap: 4rem; align-items: center; }
        .swap-download h2 { max-width: 48rem; }
        .swap-download p { max-width: 34rem; color: rgba(244,251,251,.72); line-height: 1.65; }
        .swap-download .kit-stores { margin-top: 2rem; }
        .swap-download-mark { font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(7rem,18vw,16rem); font-weight: 800; line-height: .7; color: var(--swap-coral); letter-spacing: -.1em; }
        .swap-page a:focus-visible { outline: 3px solid var(--swap-sun); outline-offset: 4px; }

        @media (hover: hover) and (pointer: fine) {
          .swap-nav a:hover { color: var(--swap-deep); }
          .swap-header-cta:hover, .swap-primary:hover { background: var(--swap-deep); transform: translateY(-2px); }
        }
        @media (max-width: 850px) {
          .swap-nav { display: none; }
          .swap-choice { grid-template-columns: 1fr; gap: 0; }
          .swap-door--find, .swap-door--pass { border-radius: 1.5rem; }
          .swap-door-copy { width: auto; max-width: 18rem; }
          .swap-door--pass .swap-door-copy { margin-left: 0; }
          .swap-hinge { margin: -1rem auto; transform: rotate(90deg); }
          .swap-section-head, .swap-proof-grid, .swap-faq-grid, .swap-download-grid { grid-template-columns: 1fr; }
          .swap-route-grid { grid-template-columns: 1fr; }
          .swap-route:first-child { border-right: 0; border-bottom: 1px solid var(--swap-line); }
          .swap-download-mark { display: none; }
        }
        @media (max-width: 560px) {
          .swap-shell { width: min(100% - 1.8rem, 74rem); }
          .swap-header-inner { min-height: 4.1rem; }
          .swap-header-cta { padding: .62rem .72rem; font-size: .65rem; }
          .swap-title { font-size: clamp(3.2rem,16vw,4.5rem); }
          .swap-door { min-height: 32rem; }
          .swap-door .kit-shot { width: 64%; right: .8rem; }
          .swap-door--pass .kit-shot { left: .8rem; }
          .swap-bridge-inner { grid-template-columns: 1fr auto; }
          .swap-bridge-inner > span:first-child { display: none; }
          .swap-route-visual { gap: .65rem; }
          .swap-proof-stage { min-height: 29rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .swap-header-cta, .swap-primary { transition: color 200ms ease, background-color 200ms ease, opacity 200ms ease; }
          .swap-header-cta:hover, .swap-primary:hover { transform: none; }
        }
        @media (prefers-reduced-transparency: reduce) { .swap-header { background: var(--swap-frost); backdrop-filter: none; } }
        @media (prefers-contrast: more) { .swap-door, .swap-route-grid, .kit-shot-frame { border-width: 2px; } }
      `}</style>

      <header className="swap-header">
        <div className="swap-shell swap-header-inner">
          <Brand />
          <nav className="swap-nav" aria-label="Navegação principal">
            <a href="#escolhas">Duas escolhas</a><a href="#seguranca">Segurança</a><a href="#duvidas">Dúvidas</a><a href="?page=sobre-nos">Sobre nós</a>
          </nav>
          <a className="swap-header-cta" href="#baixar">Baixar o app <ArrowDownRight size={15} /></a>
        </div>
      </header>

      <main>
        <section className="swap-hero" aria-labelledby="swap-title">
          <div className="swap-shell">
            <div className="swap-hero-copy">
              <p className="swap-kicker"><i /> De médico para médico</p>
              <h1 className="swap-title" id="swap-title">Encontre quando quiser. <span>Passe</span> quando <span>precisar.</span></h1>
              <p className="swap-lede">O 97plantões conecta médicos a oportunidades por todo o Brasil e organiza a passagem de plantão entre profissionais verificados.</p>
            </div>
            <div className="swap-choice" id="escolhas">
              <article className="swap-door swap-door--find">
                <div className="swap-door-copy"><p className="swap-door-label">Quero assumir</p><h2>Plantões que cabem no seu dia.</h2><p>Descubra, compare e candidate-se com as informações à vista.</p></div>
                <AppShot screen={appScreens.inicio} eager bare />
              </article>
              <div className="swap-hinge" aria-hidden="true"><RefreshCw size={27} /></div>
              <article className="swap-door swap-door--pass">
                <div className="swap-door-copy"><p className="swap-door-label">Preciso passar</p><h2>Boas mãos para continuar o turno.</h2><p>Oferte, converse e confirme a passagem com segurança.</p></div>
                <AppShot screen={appScreens.ofertas} eager bare />
              </article>
            </div>
          </div>
        </section>

        <aside className="swap-bridge"><div className="swap-shell swap-bridge-inner"><span>Uma rede · dois caminhos</span><p>A escolha muda. A confiança continua a mesma.</p><ArrowRight size={24} /></div></aside>

        <section className="swap-routes" aria-labelledby="swap-routes-title">
          <div className="swap-shell">
            <div className="swap-section-head"><h2 id="swap-routes-title">Cada lado da troca, sem atalhos escondidos.</h2><p>As telas reais mostram o fluxo na ordem certa: primeiro o contexto, depois a decisão e só então a confirmação.</p></div>
            <div className="swap-route-grid">
              <article className="swap-route">
                <div className="swap-route-header"><strong>Para quem encontra</strong><span>Rota A</span></div>
                <div className="swap-route-list">{pathItems.map((item) => <div className="swap-route-item" key={item.title}><i className="swap-route-icon">{item.icon}</i><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div>
                <div className="swap-route-visual"><AppShot screen={appScreens.mapa} /><AppShot screen={appScreens.detalhes} /></div>
              </article>
              <article className="swap-route">
                <div className="swap-route-header"><strong>Para quem passa</strong><span>Rota B</span></div>
                <div className="swap-route-list">{offerItems.map((item) => <div className="swap-route-item" key={item.title}><i className="swap-route-icon">{item.icon}</i><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div>
                <div className="swap-route-visual"><AppShot screen={appScreens.ofertas} /><AppShot screen={appScreens.pagamento} /></div>
              </article>
            </div>
          </div>
        </section>

        <section className="swap-proof" id="seguranca" aria-labelledby="swap-proof-title">
          <div className="swap-shell swap-proof-grid">
            <div><p className="swap-kicker"><i /> Segurança em primeiro lugar</p><h2 id="swap-proof-title">Confiança não é um selo. É o fluxo inteiro.</h2><ul className="swap-proof-list"><li><Check size={17} /> CRM verificado junto aos órgãos responsáveis.</li><li><Check size={17} /> Chat privado para alinhar os detalhes.</li><li><Check size={17} /> Pagamento protegido e repasse após a realização.</li><li><Check size={17} /> Perfil, histórico e recebimentos em uma área só.</li></ul></div>
            <div className="swap-proof-stage"><AppShot screen={appScreens.pagamento} /><AppShot screen={appScreens.perfil} /><i className="swap-shield"><ShieldCheck size={27} /></i></div>
          </div>
        </section>

        <section className="swap-faq" id="duvidas"><div className="swap-shell swap-faq-grid"><div className="swap-faq-copy"><p className="swap-kicker"><i /> Antes de baixar</p><h2>Dúvidas dos dois lados.</h2><p>Informação direta para quem procura uma oportunidade e para quem precisa passar um plantão.</p></div><FaqList /></div></section>

        <section className="swap-download" id="baixar"><div className="swap-shell swap-download-grid"><div><h2>Qual é a sua escolha hoje?</h2><p>Baixe o 97plantões para encontrar ou passar plantões com médicos verificados, em um fluxo organizado do início ao repasse.</p><StoreButtons /></div><span className="swap-download-mark">97</span></div></section>
      </main>
      <LegalFooter inverse />
    </div>
  );
}
