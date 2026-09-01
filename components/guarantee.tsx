export function Guarantee() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#1D1A2B' }}>
      <div className="mobile-content">
        <div
          className="max-w-2xl mx-auto bg-card p-6 sm:p-8 md:p-12 lg:p-16 border relative"
          style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,163,74,0.5)', boxShadow: '0 8px 24px rgba(29,26,43,.28)', borderRadius: '20px' }}
        >
          {/* Selo */}
          <div className="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2 w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center">
            <img
              src="/images/selo-garantia-7-dias.png"
              alt="Garantia de 7 Dias"
              className="w-full h-full object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="text-center space-y-6 sm:space-y-8 pt-12 sm:pt-16">
            <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#5A3D82' }}>
              Você Tem 7 Dias para Conhecer o Material
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base" style={{ color: '#6B6872' }}>
              <p className="leading-relaxed">
                Após acessar o Microbiologia Visual, você terá 7 dias para avaliar o conteúdo. Caso entenda que o material não atende às suas expectativas, poderá solicitar o reembolso dentro do prazo de garantia, conforme as condições da plataforma de pagamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
