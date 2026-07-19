import { ArrowDownRight, Check, ClipboardCheck, CreditCard, FileCheck2, MessageSquare, ShieldCheck, UserRoundCheck } from 'lucide-react';
import { AppShot, appScreens, Brand, FaqList, LegalFooter, StoreButtons } from '../shared/DesignKit';

const recordSteps = [
  { code: '01', title: 'Cadastro e perfil', copy: 'A comunidade é exclusiva para médicos e o CRM informado passa por verificação.', icon: <UserRoundCheck size={18} /> },
  { code: '02', title: 'Escolha com contexto', copy: 'Página Inicial, Mapa e Agenda apresentam oportunidades por lista, proximidade e data.', icon: <ClipboardCheck size={18} /> },
  { code: '03', title: 'Conversa privada', copy: 'O chat ajuda os profissionais a alinhar os detalhes antes e após a confirmação.', icon: <MessageSquare size={18} /> },
  { code: '04', title: 'Pagamento e repasse', copy: 'Cartão, PIX e boleto; o repasse ocorre depois da realização do plantão.', icon: <CreditCard size={18} /> },
];

export default function LandingPageTemplate(_: { onGoToApp: () => void }) {
  return (
    <div className="record-page" id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Condensed:wght@400;500;600;700&family=League+Spartan:wght@600;700;800&display=swap');
        .record-page {
          --rec-ink:#17212b; --rec-paper:#eef4f7; --rec-sheet:#fbfcfd; --rec-blue:#265b8f; --rec-red:#d9473f;
          --rec-mint:#b7ddd6; --rec-yellow:#f2ce64; --rec-muted:#586a75; --rec-line:rgba(23,33,43,.2);
          --kit-ink:var(--rec-ink); --kit-muted:var(--rec-muted); --kit-accent:var(--rec-blue); --kit-accent-soft:#8fc3e3;
          --kit-line:var(--rec-line); --kit-focus:var(--rec-yellow); --kit-body:'IBM Plex Sans Condensed',sans-serif;
          --kit-utility:'IBM Plex Mono',monospace; --kit-frame:var(--rec-ink); --kit-radius:.4rem; --kit-control-radius:.2rem;
          color:var(--rec-ink); background:var(--rec-paper); font-family:'IBM Plex Sans Condensed',sans-serif; overflow-x:clip;
        }
        .record-page *, .record-page *::before, .record-page *::after { box-sizing:border-box; }
        .record-page ::selection { background:var(--rec-yellow); color:var(--rec-ink); }
        .record-shell { width:min(73rem,calc(100% - 3rem)); margin:0 auto; }
        .record-header { position:sticky; top:0; z-index:30; background:rgba(238,244,247,.9); backdrop-filter:blur(18px) saturate(150%); border-bottom:1px solid var(--rec-line); }
        .record-header-inner { min-height:4.6rem; display:flex; align-items:center; justify-content:space-between; gap:2rem; }
        .record-nav { display:flex; align-items:center; gap:1.5rem; color:var(--rec-muted); font:600 .72rem/1 'IBM Plex Mono',monospace; text-transform:uppercase; letter-spacing:.05em; }
        .record-nav a { color:inherit; text-decoration:none; }
        .record-download { display:inline-flex; align-items:center; gap:.5rem; padding:.65rem .85rem; color:#fff; background:var(--rec-blue); border:1px solid var(--rec-blue); text-decoration:none; font-size:.76rem; font-weight:700; transition:transform 180ms cubic-bezier(.23,1,.32,1),background-color 180ms ease; }
        .record-download:active { transform:scale(.97); transition-duration:160ms; }

        .record-hero { padding:clamp(3.5rem,7vw,6.4rem) 0 5rem; }
        .record-folder { position:relative; display:grid; grid-template-columns:minmax(0,1.02fr) minmax(22rem,.78fr); gap:clamp(2.2rem,6vw,6.5rem); padding:clamp(2rem,5vw,5rem); background:var(--rec-sheet); border:1px solid var(--rec-ink); box-shadow:1rem 1rem 0 var(--rec-mint); }
        .record-folder::before { content:'PRONTUÁRIO 97'; position:absolute; top:-2rem; left:-1px; padding:.58rem 1.1rem; color:#fff; background:var(--rec-blue); border:1px solid var(--rec-ink); font:600 .62rem/1 'IBM Plex Mono',monospace; letter-spacing:.1em; }
        .record-tabs { position:absolute; top:2rem; right:-2.35rem; display:grid; gap:.45rem; }
        .record-tab { padding:.7rem .5rem; color:var(--rec-ink); background:var(--rec-yellow); border:1px solid var(--rec-ink); writing-mode:vertical-rl; font:600 .56rem/1 'IBM Plex Mono',monospace; letter-spacing:.06em; text-transform:uppercase; }
        .record-tab:nth-child(2){background:var(--rec-mint)} .record-tab:nth-child(3){background:#ef8b80}
        .record-eyebrow { display:flex; gap:.8rem; align-items:center; margin:0 0 1.5rem; color:var(--rec-blue); font:600 .64rem/1 'IBM Plex Mono',monospace; letter-spacing:.11em; text-transform:uppercase; }
        .record-eyebrow::before { content:''; width:2.2rem; height:3px; background:var(--rec-red); }
        .record-title { margin:0; font-family:'League Spartan',sans-serif; font-size:clamp(3.2rem,6.7vw,6.6rem); font-weight:800; line-height:.86; letter-spacing:-.07em; text-transform:uppercase; }
        .record-title span { display:inline; color:var(--rec-blue); }
        .record-lede { max-width:36rem; margin:1.65rem 0 0; color:var(--rec-muted); font-size:1.02rem; font-weight:500; line-height:1.65; }
        .record-facts { display:grid; grid-template-columns:repeat(3,1fr); margin:2.2rem 0 0; border-top:1px solid var(--rec-line); border-bottom:1px solid var(--rec-line); }
        .record-fact { padding:1rem .8rem 1rem 0; }
        .record-fact + .record-fact { padding-left:.8rem; border-left:1px solid var(--rec-line); }
        .record-fact strong { display:block; font-size:.9rem; }
        .record-fact span { display:block; margin-top:.3rem; color:var(--rec-muted); font:500 .56rem/1.4 'IBM Plex Mono',monospace; text-transform:uppercase; }
        .record-hero-actions { display:flex; flex-wrap:wrap; gap:.8rem; margin-top:2rem; }
        .record-primary,.record-secondary { display:inline-flex; align-items:center; gap:.55rem; padding:.8rem 1rem; color:#fff; background:var(--rec-blue); border:1px solid var(--rec-ink); font-size:.8rem; font-weight:700; text-decoration:none; transition:transform 180ms cubic-bezier(.23,1,.32,1),background-color 180ms ease; }
        .record-secondary { color:var(--rec-ink); background:var(--rec-yellow); }
        .record-primary:active,.record-secondary:active { transform:scale(.97); transition-duration:160ms; }
        .record-hero-screen { align-self:end; width:min(100%,22rem); margin-left:auto; transform:rotate(1.7deg); }
        .record-hero-screen .kit-shot-frame { box-shadow:.65rem .65rem 0 var(--rec-red); }

        .record-index { padding:1rem 0; color:#fff; background:var(--rec-ink); }
        .record-index-inner { display:grid; grid-template-columns:auto 1fr auto; gap:1.2rem; align-items:center; }
        .record-index strong { color:var(--rec-yellow); font:600 .6rem/1 'IBM Plex Mono',monospace; text-transform:uppercase; letter-spacing:.1em; }
        .record-index p { margin:0; font-family:'League Spartan',sans-serif; font-size:clamp(1.15rem,2.2vw,1.7rem); font-weight:700; letter-spacing:-.035em; }

        .record-protocol { padding:clamp(5rem,9vw,8rem) 0; }
        .record-section-head { display:grid; grid-template-columns:.7fr 1fr; gap:4rem; margin-bottom:4rem; }
        .record-section-no { color:var(--rec-red); font:600 .63rem/1 'IBM Plex Mono',monospace; letter-spacing:.1em; }
        .record-section-head h2,.record-safety h2,.record-faq-copy h2,.record-cta h2 { margin:0; font-family:'League Spartan',sans-serif; font-size:clamp(2.7rem,5.5vw,5.3rem); line-height:.88; letter-spacing:-.065em; text-transform:uppercase; }
        .record-protocol-grid { display:grid; grid-template-columns:.8fr 1fr; gap:clamp(3rem,7vw,6rem); align-items:start; }
        .record-step-list { border-top:2px solid var(--rec-ink); }
        .record-step { display:grid; grid-template-columns:2.5rem 2.4rem 1fr; gap:.8rem; padding:1.25rem 0; border-bottom:1px solid var(--rec-line); }
        .record-step code { color:var(--rec-red); font:600 .62rem/2.1 'IBM Plex Mono',monospace; }
        .record-step i { display:grid; width:2rem; height:2rem; place-items:center; color:var(--rec-blue); background:#dcebf2; border-radius:50%; }
        .record-step h3 { margin:0 0 .35rem; font-size:1rem; }
        .record-step p { margin:0; color:var(--rec-muted); font-size:.8rem; line-height:1.55; }
        .record-flow { position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; padding-top:2.5rem; }
        .record-flow::before { content:''; position:absolute; top:.9rem; left:8%; right:8%; height:2px; background:var(--rec-red); }
        .record-flow .kit-shot:nth-child(2) { transform:translateY(2rem); }

        .record-safety { padding:clamp(5rem,9vw,7.5rem) 0; background:var(--rec-mint); border-block:1px solid var(--rec-ink); }
        .record-safety-grid { display:grid; grid-template-columns:.8fr 1fr; gap:clamp(3rem,8vw,7rem); align-items:center; }
        .record-checks { margin:2rem 0 0; padding:0; list-style:none; border-top:2px solid var(--rec-ink); }
        .record-checks li { display:flex; gap:.75rem; padding:1rem 0; border-bottom:1px solid rgba(23,33,43,.25); font-size:.84rem; font-weight:600; }
        .record-checks svg { flex:0 0 auto; color:var(--rec-blue); }
        .record-payment { position:relative; max-width:30rem; margin:auto; padding:2rem; background:var(--rec-sheet); border:1px solid var(--rec-ink); box-shadow:.8rem .8rem 0 var(--rec-yellow); }
        .record-payment .kit-shot { width:min(72%,18rem); margin:0 auto; }
        .record-stamp { position:absolute; right:-2rem; top:3.2rem; display:grid; width:7rem; height:7rem; place-items:center; color:var(--rec-red); border:.25rem double var(--rec-red); border-radius:50%; transform:rotate(12deg); font:700 .7rem/1.25 'IBM Plex Mono',monospace; text-align:center; text-transform:uppercase; }

        .record-faq { padding:clamp(5rem,9vw,8rem) 0; background:var(--rec-sheet); }
        .record-faq-grid { display:grid; grid-template-columns:.6fr 1fr; gap:clamp(3rem,9vw,8rem); }
        .record-faq-copy p { max-width:20rem; color:var(--rec-muted); line-height:1.65; }
        .record-cta { padding:clamp(4rem,8vw,6.5rem) 0; color:#fff; background:var(--rec-blue); }
        .record-cta-grid { display:grid; grid-template-columns:1fr auto; gap:3rem; align-items:end; }
        .record-cta h2 { max-width:49rem; }
        .record-cta p { max-width:34rem; color:rgba(255,255,255,.75); line-height:1.6; }
        .record-cta .kit-stores { margin-top:2rem; --kit-store-bg:var(--rec-sheet); --kit-store-ink:var(--rec-ink); }
        .record-file-mark { display:grid; width:9rem; height:11rem; place-items:center; color:var(--rec-ink); background:var(--rec-yellow); border:1px solid var(--rec-ink); box-shadow:.7rem .7rem 0 var(--rec-ink); }
        .record-page a:focus-visible { outline:3px solid var(--rec-yellow); outline-offset:4px; }
        @media (hover:hover) and (pointer:fine) { .record-nav a:hover{color:var(--rec-blue)} .record-download:hover,.record-primary:hover{background:var(--rec-ink);transform:translateY(-2px)} .record-secondary:hover{background:#ffe188;transform:translateY(-2px)} }
        @media (max-width:880px) { .record-nav{display:none}.record-folder{grid-template-columns:1fr}.record-hero-screen{margin:0 auto}.record-section-head,.record-protocol-grid,.record-safety-grid,.record-faq-grid,.record-cta-grid{grid-template-columns:1fr}.record-flow{max-width:38rem;margin:auto}.record-file-mark{display:none} }
        @media (max-width:580px) { .record-shell{width:min(100% - 1.8rem,73rem)}.record-folder{padding:2rem 1.2rem 2.4rem;box-shadow:.45rem .45rem 0 var(--rec-mint)}.record-tabs{display:none}.record-facts{grid-template-columns:1fr}.record-fact+.record-fact{padding-left:0;border-left:0;border-top:1px solid var(--rec-line)}.record-flow{gap:.45rem}.record-step{grid-template-columns:2rem 2rem 1fr}.record-payment{padding:1.2rem}.record-stamp{right:-.7rem;width:5.5rem;height:5.5rem;font-size:.55rem} }
        @media (prefers-reduced-motion:reduce){.record-download,.record-primary,.record-secondary{transition:color 200ms ease,background-color 200ms ease,opacity 200ms ease}.record-download:hover,.record-primary:hover,.record-secondary:hover{transform:none}}
        @media (prefers-reduced-transparency:reduce){.record-header{background:var(--rec-paper);backdrop-filter:none}}
      `}</style>

      <header className="record-header"><div className="record-shell record-header-inner"><Brand /><nav className="record-nav" aria-label="Navegação principal"><a href="#protocolo">Protocolo</a><a href="#seguranca">Segurança</a><a href="#duvidas">Dúvidas</a><a href="?page=sobre-nos">Sobre nós</a></nav><a className="record-download" href="#baixar">Baixar o app <ArrowDownRight size={15}/></a></div></header>
      <main>
        <section className="record-hero" aria-labelledby="record-title"><div className="record-shell record-folder"><div className="record-tabs" aria-hidden="true"><span className="record-tab">Contexto</span><span className="record-tab">Confiança</span><span className="record-tab">Repasse</span></div><div><p className="record-eyebrow">Registro de uma boa decisão</p><h1 className="record-title" id="record-title">Tudo o que importa, <span>antes do plantão.</span></h1><p className="record-lede">Encontre ou passe plantões com médicos verificados. O 97plantões deixa as informações, a conversa e a confirmação no mesmo fluxo.</p><div className="record-facts"><div className="record-fact"><strong>CRM verificado</strong><span>Comunidade médica</span></div><div className="record-fact"><strong>Oferta gratuita</strong><span>Para passar plantão</span></div><div className="record-fact"><strong>Repasse protegido</strong><span>Depois da realização</span></div></div><div className="record-hero-actions"><a className="record-primary" href="#baixar">Baixar o app <ArrowDownRight size={16}/></a><a className="record-secondary" href="#protocolo">Abrir o protocolo <FileCheck2 size={16}/></a></div></div><AppShot className="record-hero-screen" screen={appScreens.detalhes} eager /></div></section>
        <aside className="record-index"><div className="record-shell record-index-inner"><strong>Documento vivo</strong><p>O produto aparece antes da promessa: estas são telas reais do aplicativo.</p><FileCheck2 size={24}/></div></aside>
        <section className="record-protocol" id="protocolo" aria-labelledby="protocol-title"><div className="record-shell"><div className="record-section-head"><span className="record-section-no">SEÇÃO 01 / FLUXO</span><h2 id="protocol-title">Um processo legível do cadastro ao repasse.</h2></div><div className="record-protocol-grid"><div className="record-step-list">{recordSteps.map(step=><article className="record-step" key={step.code}><code>{step.code}</code><i>{step.icon}</i><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}</div><div className="record-flow" aria-label="Telas reais da jornada"><AppShot screen={appScreens.inicio}/><AppShot screen={appScreens.agenda}/><AppShot screen={appScreens.perfil}/></div></div></div></section>
        <section className="record-safety" id="seguranca"><div className="record-shell record-safety-grid"><div><p className="record-eyebrow">Segurança em primeiro lugar</p><h2>Uma confirmação com evidências, não suposições.</h2><ul className="record-checks"><li><Check size={17}/> Dados e CRM verificados.</li><li><Check size={17}/> Informações pessoais e de pagamento protegidas.</li><li><Check size={17}/> Chat privado entre os profissionais.</li><li><Check size={17}/> Pagamento retido até a realização do plantão.</li></ul></div><div className="record-payment"><AppShot screen={appScreens.pagamento}/><span className="record-stamp"><ShieldCheck size={24}/> fluxo<br/>protegido</span></div></div></section>
        <section className="record-faq" id="duvidas"><div className="record-shell record-faq-grid"><div className="record-faq-copy"><p className="record-eyebrow">Seção 02 / FAQ</p><h2>Leia antes de confirmar.</h2><p>As respostas essenciais sobre cadastro, oferta, candidatura e pagamento.</p></div><FaqList/></div></section>
        <section className="record-cta" id="baixar"><div className="record-shell record-cta-grid"><div><h2>Seu próximo registro começa no app.</h2><p>Baixe o 97plantões e conecte-se à comunidade médica para encontrar ou passar plantões com segurança e eficiência.</p><StoreButtons/></div><span className="record-file-mark"><FileCheck2 size={58}/></span></div></section>
      </main><LegalFooter inverse/>
    </div>
  );
}
