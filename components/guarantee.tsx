export function Guarantee() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#2F2925' }}>
      <div className="mobile-content">
        <div
          className="max-w-2xl mx-auto p-6 sm:p-8 md:p-12 lg:p-16 border relative"
          style={{ backgroundColor: '#FBF8F2', borderColor: 'rgba(157,78,53,0.5)', boxShadow: '0 8px 24px rgba(47,41,37,.34)', borderRadius: '20px' }}
        >
          {/* Selo */}
          <div className="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2 w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center">
            <img
              src="/images/osteo/selo-garantia-7dias.webp"
              alt="Selo de garantia de 7 dias"
              className="w-full h-full object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="text-center space-y-6 sm:space-y-8 pt-12 sm:pt-16">
            <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#5A3A27' }}>
              Você Tem 7 Dias para Conhecer o Material
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base" style={{ color: '#8A7862' }}>
              <p className="leading-relaxed">
                Acesse a Osteologia Veterinária, explore os volumes e veja se o formato de estudo faz sentido para você. Se dentro de 7 dias entender que o material não atende às suas expectativas, poderá solicitar o reembolso dentro do prazo de garantia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
