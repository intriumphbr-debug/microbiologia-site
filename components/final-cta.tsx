'use client';

export function FinalCta() {
  const scrollToPlans = () =>
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
      <section className="w-full py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#2B145F' }}>
        <div className="mobile-content flex flex-col items-center gap-4">
          <div className="text-center space-y-3 mb-4 w-full">
            <h2 className="w-full font-grotesk text-2xl sm:text-3xl md:text-4xl leading-tight text-pretty" style={{ color: '#FFFFFF', boxSizing: 'border-box' }}>
              Pare de Depender de Anotações Espalhadas para Revisar Microbiologia
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Tenha mapas, comparações, fichas, revisões e testes organizados visualmente em um único material.
            </p>
          </div>

        <button
          onClick={scrollToPlans}
          className="w-full font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg active:scale-95 cta-animate"
          style={{
            maxWidth: '100%',
            boxSizing: 'border-box',
            background: '#16C766',
            color: '#0A2A16',
            border: '1px solid #16C766',
            boxShadow: '0 8px 22px rgba(22, 199, 102, 0.4)',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#12A85A';
            e.currentTarget.style.borderColor = '#12A85A';
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(22, 199, 102, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#16C766';
            e.currentTarget.style.borderColor = '#16C766';
            e.currentTarget.style.boxShadow = '0 8px 22px rgba(22, 199, 102, 0.4)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          QUERO ACESSAR O MICROBIOLOGIA VISUAL
        </button>
      </div>
    </section>
  );
}
