export function HowItWorks() {
  const steps = [
    ['1', 'IDENTIFICAÇÃO VISUAL', 'Veja o osso e identifique suas principais estruturas.'],
    ['2', 'COMO RECONHECER', 'Entenda quais características ajudam a reconhecer cada peça.'],
    ['3', 'COMO SABER O LADO', 'Use os acidentes ósseos para diferenciar direita e esquerda.'],
    ['4', 'NÃO CONFUNDA', 'Compare estruturas parecidas e veja o que diferencia uma da outra.'],
    ['5', 'COMPARAÇÃO ENTRE ESPÉCIES', 'Compare canino, equino, bovino e suíno lado a lado.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#2F2925' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#FFFFFF' }}>
            Identifique, Compare e Diferencie com Mais Clareza
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(251,248,242,0.78)' }}>
            Cada tipo de página ajuda você a reconhecer estruturas, comparar diferenças e revisar os pontos que mais geram dúvida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-stretch">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="how-it-works-card relative flex flex-col items-center text-center h-full"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#3B322C',
                border: '1px solid rgba(251,248,242,0.12)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.28)',
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
                  background: '#9D4E35',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(0, 0, 0, 0.28)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3 uppercase tracking-wide" style={{ color: '#FFFFFF', textShadow: 'none' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,248,242,0.75)' }}>
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
