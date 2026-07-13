import {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type LazyExoticComponent,
} from 'react';
import { ChevronLeft, ChevronRight, LayoutPanelTop, Palette } from 'lucide-react';

const CommandCenter = lazy(() => import('./versions/command-center/LandingPage'));
const MapRadar = lazy(() => import('./versions/map-radar/LandingPage'));
const TrustLedger = lazy(() => import('./versions/trust-ledger/LandingPage'));
const MobileRhythm = lazy(() => import('./versions/mobile-rhythm/LandingPage'));
const HumanNetwork = lazy(() => import('./versions/human-network/LandingPage'));
const AppGallery = lazy(() => import('./versions/app-gallery/LandingPage'));
const AppDiscovery = lazy(() => import('./versions/app-discovery/LandingPage'));
const AppEscrow = lazy(() => import('./versions/app-escrow/LandingPage'));
const AppTimeline = lazy(() => import('./versions/app-timeline/LandingPage'));
const AppIdentity = lazy(() => import('./versions/app-identity/LandingPage'));

type LandingProps = { onGoToApp: () => void };
type LazyLanding = LazyExoticComponent<ComponentType<LandingProps>>;

type LandingVariant = {
  id: string;
  label: string;
  family: 'Conceitos' | 'Telas reais';
  description: string;
  Component: LazyLanding;
};

const variants: LandingVariant[] = [
  {
    id: 'command-center',
    label: 'Command center',
    family: 'Conceitos',
    description: 'Painel clínico operacional',
    Component: CommandCenter,
  },
  {
    id: 'map-radar',
    label: 'Radar de plantões',
    family: 'Conceitos',
    description: 'Descoberta por proximidade',
    Component: MapRadar,
  },
  {
    id: 'trust-ledger',
    label: 'Plantão com garantia',
    family: 'Conceitos',
    description: 'Confiança, CRM e repasse',
    Component: TrustLedger,
  },
  {
    id: 'mobile-rhythm',
    label: 'Mobile rhythm',
    family: 'Conceitos',
    description: 'Agenda como ritmo de trabalho',
    Component: MobileRhythm,
  },
  {
    id: 'human-network',
    label: 'Rede humana',
    family: 'Conceitos',
    description: 'Passagem de plantão entre médicos',
    Component: HumanNetwork,
  },
  {
    id: 'app-gallery',
    label: 'Galeria do app',
    family: 'Telas reais',
    description: 'A jornada completa em telas reais',
    Component: AppGallery,
  },
  {
    id: 'app-discovery',
    label: 'Descoberta geográfica',
    family: 'Telas reais',
    description: 'Mapa e proximidade em primeiro plano',
    Component: AppDiscovery,
  },
  {
    id: 'app-escrow',
    label: 'Confirmação protegida',
    family: 'Telas reais',
    description: 'Detalhes, pagamento e repasse',
    Component: AppEscrow,
  },
  {
    id: 'app-timeline',
    label: 'Semana em ordem',
    family: 'Telas reais',
    description: 'Agenda e organização da rotina',
    Component: AppTimeline,
  },
  {
    id: 'app-identity',
    label: 'Perfil profissional',
    family: 'Telas reais',
    description: 'Perfil e confiança na comunidade',
    Component: AppIdentity,
  },
];

function idFromLocation() {
  const candidate = new URLSearchParams(window.location.search).get('v');
  return variants.some((variant) => variant.id === candidate) ? candidate as string : variants[0].id;
}

export default function Showcase() {
  const [activeId, setActiveId] = useState(idFromLocation);
  const activeIndex = variants.findIndex((variant) => variant.id === activeId);
  const active = variants[activeIndex] ?? variants[0];

  const groupedVariants = useMemo(
    () => ({
      Conceitos: variants.filter((variant) => variant.family === 'Conceitos'),
      'Telas reais': variants.filter((variant) => variant.family === 'Telas reais'),
    }),
    [],
  );

  const navigate = (id: string, replace = false) => {
    const url = new URL(window.location.href);
    url.searchParams.set('v', id);
    const nextLocation = url.pathname + url.search + url.hash;
    window.history[replace ? 'replaceState' : 'pushState']({}, '', nextLocation);
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const move = (direction: 1 | -1) => {
    const nextIndex = (activeIndex + direction + variants.length) % variants.length;
    navigate(variants[nextIndex].id);
  };

  useEffect(() => {
    const handlePopState = () => setActiveId(idFromLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = '97plantões — ' + active.label;
  }, [active.label]);

  const ActiveLanding = active.Component;

  return (
    <div className="showcase-shell">
      <main className="showcase-stage">
        <Suspense fallback={<div className="showcase-loading">Carregando a direção selecionada…</div>}>
          <ActiveLanding onGoToApp={() => navigate('app-gallery')} />
        </Suspense>
      </main>

      <nav className="showcase-dock" aria-label="Navegação entre as versões da landing page">
        <div className="showcase-dock__identity">
          <span className="showcase-dock__mark"><Palette size={15} /></span>
          <span>
            <strong>97 Landing Lab</strong>
            <small>{active.family}</small>
          </span>
        </div>

        <div className="showcase-dock__controls">
          <button type="button" onClick={() => move(-1)} aria-label="Ver versão anterior">
            <ChevronLeft size={18} />
          </button>
          <label>
            <span className="showcase-visually-hidden">Escolher versão</span>
            <select value={active.id} onChange={(event) => navigate(event.target.value)}>
              {Object.entries(groupedVariants).map(([family, entries]) => (
                <optgroup key={family} label={family}>
                  {entries.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <button type="button" onClick={() => move(1)} aria-label="Ver próxima versão">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="showcase-dock__meta">
          <LayoutPanelTop size={15} />
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(variants.length).padStart(2, '0')}</span>
          <p>{active.description}</p>
        </div>
      </nav>
    </div>
  );
}
