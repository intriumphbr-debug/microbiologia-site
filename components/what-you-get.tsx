export function WhatYouGet() {
  const collections = [
    ['10', 'FUNDAMENTOS', 'Construa a base necessária para interpretar corretamente todo o restante do material, com divisão do esqueleto, classificação dos ossos, termos de posição e direção, planos anatômicos, acidentes ósseos e orientação de peças.', 'Entender a linguagem visual da Osteologia.'],
    ['32', 'MEMBRO TORÁCICO', 'Estude escápula, úmero, rádio, ulna, carpo, metacarpos e falanges com diferentes vistas, acidentes ósseos, identificação do lado e comparações entre espécies.', 'Reconhecer e orientar os ossos do membro torácico.'],
    ['32', 'MEMBRO PÉLVICO', 'Visualize pelve, fêmur, patela, tíbia, fíbula, tarso, metatarsos e falanges, com foco nas principais estruturas anatômicas e diferenças entre espécies.', 'Identificar e comparar as estruturas do membro pélvico.'],
    ['22', 'COLUNA VERTEBRAL', 'Aprenda a diferenciar vértebras cervicais, torácicas, lombares, sacrais e caudais, incluindo atlas, áxis e os principais pontos de referência de cada região.', 'Reconhecer regiões e características vertebrais.'],
    ['12', 'TÓRAX', 'Visualize costelas, esterno e seus principais acidentes ósseos, relações anatômicas e diferenças relevantes entre espécies.', 'Organizar visualmente o esqueleto torácico.'],
    ['40', 'CRÂNIO', 'Explore o crânio em diferentes vistas, seus principais ossos, estruturas, mandíbula e comparações entre espécies.', 'Facilitar a identificação de uma das regiões mais complexas da Osteologia.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FBF8F2' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#5A3A27' }}>
            Osteologia Veterinária Organizada em 6 Coleções Visuais
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#8A7862' }}>
            Cada coleção reúne uma região ou grupo de estruturas, organizadas visualmente para facilitar a identificação, comparação e revisão durante o estudo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {collections.map(([count, title, description, funcao]) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col rounded-[18px] border p-6 shadow-[0_8px_24px_rgba(47,41,37,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#9D4E35] hover:shadow-[0_14px_30px_rgba(47,41,37,0.12)]"
              style={{ backgroundColor: '#FBF8F2', borderColor: 'rgba(90,58,39,0.15)' }}
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#9D4E35] opacity-70 transition-opacity duration-250 group-hover:opacity-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-grotesk text-4xl leading-none sm:text-5xl" style={{ color: '#9D4E35' }}>
                  {count}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#9D4E35' }}>
                  Páginas
                </span>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty sm:text-xl uppercase tracking-wide" style={{ color: '#5A3A27' }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#8A7862' }}>{description}</p>
              </div>
              <p className="mt-5 border-t pt-4 text-xs sm:text-sm" style={{ color: '#8A7862', borderColor: 'rgba(90,58,39,0.15)' }}>
                <span className="font-bold uppercase tracking-wide" style={{ color: '#9D4E35' }}>Função:</span>{' '}
                {funcao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
