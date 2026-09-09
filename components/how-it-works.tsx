export function HowItWorks() {
  const steps = [
    ['1', 'OBSERVE', 'Analise o formato geral do osso, suas extremidades e os principais pontos de referência.'],
    ['2', 'IDENTIFIQUE', 'Localize acidentes ósseos, superfícies articulares e estruturas importantes diretamente na imagem.'],
    ['3', 'COMPARE', 'Observe diferentes vistas e compare as particularidades entre canino, equino, bovino e suíno.'],
    ['4', 'FIXE', 'Retorne às imagens, revise rapidamente e teste se reconhece cada estrutura sem depender da legenda.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#2F2925' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#FBF8F2' }}>
            Estudar Osteologia Pode Ser Muito Mais Visual
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(251,248,242,0.78)' }}>
            Em quatro etapas, você aprende a observar a peça, localizar os pontos de referência, diferenciar estruturas e reforçar sua identificação.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="how-it-works-card relative flex flex-col items-center text-center h-full"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FBF8F2',
                border: '1px solid rgba(90,58,39,0.15)',
                boxShadow: '0 12px 30px rgba(47, 41, 37, 0.28)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#9D4E35' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#5A3A27',
                  color: '#FBF8F2',
                  boxShadow: '0 6px 14px rgba(47, 41, 37, 0.25)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3 uppercase tracking-wide" style={{ color: '#2F2925' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A7862' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #9D4E35;
          box-shadow: 0 18px 38px rgba(47, 41, 37, 0.32);
        }
      `}</style>
    </section>
  );
}
