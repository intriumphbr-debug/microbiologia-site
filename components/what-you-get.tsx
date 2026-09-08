export function WhatYouGet() {
  const volumes = [
    ['01', 'VOLUME 1', 'FUNDAMENTOS', 'Construa a base necessária para interpretar corretamente todo o restante da coleção: divisão do esqueleto, classificação dos ossos, termos de posição e direção, planos anatômicos, principais acidentes ósseos e orientação de peças.', 'Entender a linguagem visual da Osteologia.'],
    ['02', 'VOLUME 2', 'MEMBRO TORÁCICO', 'Estude escápula, úmero, rádio, ulna, carpo, metacarpos e falanges com diferentes vistas, acidentes ósseos e comparações entre espécies.', 'Reconhecer e orientar os ossos do membro torácico.'],
    ['03', 'VOLUME 3', 'MEMBRO PÉLVICO', 'Visualize pelve, fêmur, patela, tíbia, fíbula, tarso, metatarsos e falanges, além das principais diferenças entre espécies.', 'Identificar estruturas do membro pélvico.'],
    ['04', 'VOLUME 4', 'COLUNA VERTEBRAL', 'Aprenda a diferenciar vértebras cervicais, torácicas, lombares, sacrais e caudais, incluindo atlas e áxis.', 'Reconhecer regiões e características vertebrais.'],
    ['05', 'VOLUME 5', 'TÓRAX', 'Visualize costelas, esterno e seus principais acidentes e relações anatômicas.', 'Organizar visualmente o esqueleto torácico.'],
    ['06', 'VOLUME 6', 'CRÂNIO', 'Explore o crânio em diferentes vistas, seus principais ossos e estruturas, mandíbula e diferenças anatômicas entre espécies.', 'Facilitar a identificação de uma das regiões mais complexas da Osteologia.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FBF8F2' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#5A3A27' }}>
            Uma Coleção Visual Completa de Osteologia Veterinária
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#8A7862' }}>
            Do reconhecimento básico das peças à comparação entre espécies, cada volume foi organizado para ajudar você a enxergar, identificar e revisar as estruturas que aparecem no estudo de Osteologia.
          </p>
        </div>

        <div className="mx-auto mb-10 flex max-w-2xl flex-wrap items-center justify-center gap-3 md:mb-12">
          {[['6', 'Volumes'], ['≈150', 'Páginas'], ['4', 'Espécies principais']].map(([n, l]) => (
            <div key={l} className="flex items-baseline gap-2 rounded-full px-4 py-2" style={{ backgroundColor: '#F3EBDD', border: '1px solid rgba(90,58,39,0.15)' }}>
              <span className="font-grotesk text-xl leading-none" style={{ color: '#9D4E35' }}>{n}</span>
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6B5A47' }}>{l}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {volumes.map(([count, label, title, description, funcao]) => (
            <article
              key={label}
              className="group relative flex min-h-[220px] flex-col rounded-[18px] border p-6 shadow-[0_8px_24px_rgba(47,41,37,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#9D4E35] hover:shadow-[0_14px_30px_rgba(47,41,37,0.12)]"
              style={{ backgroundColor: '#FBF8F2', borderColor: 'rgba(90,58,39,0.15)' }}
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#9D4E35] opacity-70 transition-opacity duration-250 group-hover:opacity-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-grotesk text-4xl leading-none sm:text-5xl" style={{ color: '#9D4E35' }}>
                  {count}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#9D4E35' }}>
                  {label}
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
