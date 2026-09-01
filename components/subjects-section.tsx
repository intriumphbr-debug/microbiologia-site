import { Dna, Microscope, FlaskConical, Biohazard, Sprout, Atom } from 'lucide-react';

type Block = {
  badge: string;
  title: string;
  icon: typeof Dna;
  accent: string;
  items: string[];
  description: string;
};

const blocks: Block[] = [
  {
    badge: 'FUNDAMENTOS',
    title: 'Fundamentos de Microbiologia',
    icon: Dna,
    accent: '#4F46A8',
    items: [
      'Estrutura da célula bacteriana',
      'Morfologia bacteriana',
      'Cocos, bacilos, espirilos e vibriões',
      'Gram-positivas x Gram-negativas',
      'Crescimento microbiano',
      'Curva de crescimento bacteriano',
      'Nutrição bacteriana',
      'Necessidades de oxigênio',
      'Reprodução bacteriana',
      'Endósporos',
      'Biofilme',
    ],
    description: 'Construa uma base visual antes de avançar para microrganismos e identificação.',
  },
  {
    badge: 'BACTERIOLOGIA',
    title: 'Bacteriologia',
    icon: Microscope,
    accent: '#4F46A8',
    items: [
      'Staphylococcus',
      'Streptococcus',
      'Enterococcus',
      'Escherichia coli',
      'Salmonella',
      'Shigella',
      'Klebsiella',
      'Neisseria',
      'Pseudomonas',
      'Acinetobacter',
      'Bacillus',
      'Clostridium / Clostridioides',
      'Listeria',
      'Mycobacterium',
    ],
    description: 'Revise características, diferenças e pontos importantes dos principais grupos bacterianos trabalhados no material.',
  },
  {
    badge: 'LABORATÓRIO',
    title: 'Identificação Laboratorial',
    icon: FlaskConical,
    accent: '#4F46A8',
    items: [
      'Microscopia',
      'Coloração de Gram',
      'Ziehl-Neelsen e outras colorações',
      'Meios de cultura',
      'Ágar sangue',
      'Ágar chocolate',
      'MacConkey',
      'EMB',
      'Hemólise',
      'Catalase',
      'Coagulase',
      'Oxidase',
      'Urease',
      'Indol',
      'Coleta e identificação microbiológica',
    ],
    description: 'Visualize a lógica por trás de meios, colorações e testes utilizados para diferenciar microrganismos.',
  },
  {
    badge: 'VIRULÊNCIA & RESISTÊNCIA',
    title: 'Virulência, Infecção e Resistência',
    icon: Biohazard,
    accent: '#4F46A8',
    items: [
      'Fatores de virulência',
      'Cápsula',
      'Biofilme',
      'Toxinas bacterianas',
      'Exotoxina x endotoxina',
      'Colonização x infecção',
      'Relação microrganismo-hospedeiro',
      'Transferência horizontal de genes',
      'Plasmídeos',
      'Resistência antimicrobiana',
      'Antibiograma',
    ],
    description: 'Entenda como microrganismos causam doença, persistem, trocam material genético e desenvolvem resistência.',
  },
  {
    badge: 'MICOLOGIA',
    title: 'Micologia',
    icon: Sprout,
    accent: '#4F46A8',
    items: [
      'Reino Fungi',
      'Estrutura dos fungos',
      'Leveduras',
      'Fungos filamentosos',
      'Fungos dimórficos',
      'Candida albicans',
      'Cryptococcus neoformans',
      'Aspergillus fumigatus',
      'Histoplasma capsulatum',
      'Paracoccidioides',
      'Sporothrix schenckii',
      'Dermatófitos',
      'Classificação das micoses',
    ],
    description: 'Revise estruturas, grupos e fungos de importância microbiológica e clínica.',
  },
  {
    badge: 'VIROLOGIA',
    title: 'Virologia',
    icon: Atom,
    accent: '#4F46A8',
    items: [
      'Estrutura viral',
      'DNA x RNA',
      'Vírus envelopados x não envelopados',
      'Capsídeo',
      'Replicação viral',
      'Ciclo viral',
      'Influenza',
      'HIV',
      'Herpes simplex',
      'HPV',
      'Hepatite B',
      'Dengue',
    ],
    description: 'Organize visualmente os principais fundamentos de virologia e exemplos importantes.',
  },
];

export function SubjectsSection() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#F7F7F5' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-14">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#4F46A8' }}>
            Veja Alguns dos Assuntos que Você Vai Encontrar
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#667179' }}>
            O conteúdo percorre diferentes áreas da microbiologia para que você consiga estudar fundamentos, reconhecer microrganismos importantes e revisar temas laboratoriais e clínicos sem depender de dezenas de fontes diferentes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.badge}
                className="flex flex-col rounded-[18px] border bg-white p-6 sm:p-7"
                style={{ borderColor: 'rgba(79,70,168,0.15)', boxShadow: '0 8px 24px rgba(29,26,43,0.06)' }}
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
                    <h3 className="font-grotesk text-lg leading-tight sm:text-xl" style={{ color: '#4F46A8' }}>
                      {block.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#1D252C' }}>
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: block.accent }}
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t pt-4 text-sm leading-relaxed" style={{ color: '#667179', borderColor: 'rgba(79,70,168,0.15)' }}>
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
