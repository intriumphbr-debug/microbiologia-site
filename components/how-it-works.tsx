export function HowItWorks() {
  const steps = [
    ['1', 'VISUALIZE', 'Veja o assunto de forma organizada, sem precisar caçar informação em vários lugares.'],
    ['2', 'ENTENDA', 'Transforme conceitos cheios de detalhes em estruturas visuais muito mais fáceis de acompanhar.'],
    ['3', 'COMPARE', 'Diferencie microrganismos, processos e conceitos parecidos sem misturar tudo na cabeça.'],
    ['4', 'FIXE', 'Volte ao conteúdo de forma rápida e reforce o que ainda precisa ser lembrado.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#4F46A8' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#FFFFFF' }}>
            Revisar Microbiologia Pode Ser Muito Mais Simples
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Em quatro etapas, você encontra o assunto, entende visualmente, compara informações importantes e fixa o conteúdo.
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
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(79,70,168,0.15)',
                boxShadow: '0 12px 30px rgba(29, 26, 43, 0.14)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#E1B343' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'linear-gradient(135deg, #4F46A8 0%, #4F46A8 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(29, 26, 43, 0.25)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3" style={{ color: '#1D252C' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#667179' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #E1B343;
          box-shadow: 0 18px 38px rgba(29, 26, 43, 0.14);
        }
      `}</style>
    </section>
  );
}
