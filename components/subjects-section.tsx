import { Bone, Compass, Layers, Boxes, Skull } from 'lucide-react';

type Block = {
  badge: string;
  title: string;
  icon: typeof Bone;
  accent: string;
  items: string[];
  description: string;
};

const accent = '#9D4E35';

const blocks: Block[] = [
  {
    badge: 'FUNDAMENTOS',
    title: 'Fundamentos',
    icon: Compass,
    accent,
    items: [
      'Divisão do esqueleto',
      'Classificação dos ossos',
      'Termos de posição e direção',
      'Planos anatômicos',
      'Principais acidentes ósseos',
      'Orientação de peças',
    ],
    description: 'Construa a base visual e a linguagem necessária antes de avançar para as regiões.',
  },
  {
    badge: 'MEMBRO TORÁCICO',
    title: 'Membro Torácico',
    icon: Bone,
    accent,
    items: [
      'Escápula',
      'Úmero',
      'Rádio',
      'Ulna',
      'Carpo',
      'Metacarpos',
      'Falanges',
      'Vistas e acidentes ósseos',
    ],
    description: 'Reconheça e oriente os ossos do membro torácico com diferentes vistas e comparações.',
  },
  {
    badge: 'MEMBRO PÉLVICO',
    title: 'Membro Pélvico',
    icon: Bone,
    accent,
    items: [
      'Pelve',
      'Fêmur',
      'Patela',
      'Tíbia',
      'Fíbula',
      'Tarso',
      'Metatarsos',
      'Falanges',
    ],
    description: 'Identifique as estruturas do membro pélvico e as principais diferenças entre espécies.',
  },
  {
    badge: 'COLUNA VERTEBRAL',
    title: 'Coluna Vertebral',
    icon: Layers,
    accent,
    items: [
      'Vértebras cervicais',
      'Vértebras torácicas',
      'Vértebras lombares',
      'Vértebras sacrais',
      'Vértebras caudais',
      'Atlas e áxis',
    ],
    description: 'Diferencie regiões e características vertebrais, incluindo as duas primeiras cervicais.',
  },
  {
    badge: 'TÓRAX',
    title: 'Tórax',
    icon: Boxes,
    accent,
    items: [
      'Costelas',
      'Esterno',
      'Principais acidentes',
      'Relações anatômicas',
    ],
    description: 'Organize visualmente o esqueleto torácico e suas relações anatômicas.',
  },
  {
    badge: 'CRÂNIO',
    title: 'Crânio',
    icon: Skull,
    accent,
    items: [
      'Vistas do crânio',
      'Principais ossos do crânio',
      'Estruturas cranianas',
      'Mandíbula',
      'Diferenças entre espécies',
    ],
    description: 'Facilite a identificação de uma das regiões mais complexas da Osteologia.',
  },
];

export function SubjectsSection() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#F3EBDD' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-14">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#5A3A27' }}>
            Veja Tudo o Que Você Vai Encontrar no Material
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#8A7862' }}>
            O conteúdo foi dividido por regiões anatômicas para você localizar rapidamente o que precisa estudar e entender cada estrutura com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.badge}
                className="flex flex-col rounded-[18px] border p-6 sm:p-7"
                style={{ backgroundColor: '#FBF8F2', borderColor: 'rgba(90,58,39,0.15)', boxShadow: '0 8px 24px rgba(47,41,37,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex shrink-0 items-center justify-center rounded-xl"
                    style={{ width: '44px', height: '44px', backgroundColor: `${block.accent}14`, color: block.accent }}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: block.accent }}
                    >
                      {block.badge}
                    </span>
                    <h3 className="font-grotesk text-lg leading-tight sm:text-xl" style={{ color: '#5A3A27' }}>
                      {block.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#2F2925' }}>
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: block.accent }}
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t pt-4 text-sm leading-relaxed" style={{ color: '#8A7862', borderColor: 'rgba(90,58,39,0.15)' }}>
                  {block.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
