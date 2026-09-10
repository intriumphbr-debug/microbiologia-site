'use client';

const CHECKOUT_URL = 'https://pay.cakto.com.br/buy5dpo_1080833';

export function FinalCta() {
  const goToCheckout = () => {
    if (typeof window === 'undefined') return;
    const params = window.location.search;
    const separator = CHECKOUT_URL.includes('?') ? '&' : '?';
    window.location.href = params
      ? `${CHECKOUT_URL}${separator}${params.slice(1)}`
      : CHECKOUT_URL;
  };

  return (
      <section className="w-full py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#2F2925' }}>
        <div className="mobile-content flex flex-col items-center gap-4">
          <div className="text-center space-y-3 mb-4 w-full">
            <h2 className="w-full font-grotesk text-2xl sm:text-3xl md:text-4xl leading-tight text-pretty" style={{ color: '#FBF8F2', boxSizing: 'border-box' }}>
              Chega de Travar na Hora de Identificar as Estruturas
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl" style={{ color: 'rgba(251,248,242,0.78)' }}>
              Tenha ossos, acidentes ósseos, vistas e comparações entre espécies prontos para consultar sempre que precisar.
            </p>
          </div>

        <button
          onClick={goToCheckout}
          className="w-full font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg active:scale-95 cta-animate"
          style={{
            maxWidth: '100%',
            boxSizing: 'border-box',
            background: '#22C55E',
            color: '#FFFFFF',
            border: '1px solid #22C55E',
            boxShadow: '0 8px 22px rgba(34, 197, 94, 0.4)',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#16A34A';
            e.currentTarget.style.borderColor = '#16A34A';
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(34, 197, 94, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#22C55E';
            e.currentTarget.style.borderColor = '#22C55E';
            e.currentTarget.style.boxShadow = '0 8px 22px rgba(34, 197, 94, 0.4)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          QUERO ACESSAR A OSTEOLOGIA VETERINÁRIA
        </button>
        <p className="text-xs sm:text-sm text-center" style={{ color: 'rgba(251,248,242,0.7)' }}>
          Acesso imediato • Pagamento único de R$ 19,90 • 7 dias de garantia
        </p>
      </div>
    </section>
  );
}
