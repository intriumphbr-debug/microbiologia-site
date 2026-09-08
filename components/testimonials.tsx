import { Quote } from 'lucide-react';

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#9D4E35" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8-5.2-4.6 6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  /*
    SEÇÃO DE DEPOIMENTOS — PLACEHOLDER
    Não usar depoimentos falsos como se fossem reais.
    Substitua cada bloco abaixo por um DEPOIMENTO REAL antes de publicar,
    seguindo dores como: reconhecer a peça na prova, confusão entre espécies,
    lembrar acidentes ósseos e facilidade de revisar visualmente.
    Enquanto não houver relatos reais, esta seção fica marcada como placeholder.
  */
  const placeholders = [
    'SUBSTITUIR POR DEPOIMENTO REAL — dificuldade para reconhecer a peça na prova prática.',
    'SUBSTITUIR POR DEPOIMENTO REAL — confusão entre espécies (canino, equino, bovino, suíno).',
    'SUBSTITUIR POR DEPOIMENTO REAL — facilidade para revisar visualmente antes da prova.',
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#F3EBDD' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#5A3A27' }}>
            Relatos de Estudantes que Utilizam o Material
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#8A7862' }}>
            Veja como outros estudantes passaram a revisar Osteologia com mais organização e clareza visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {placeholders.map((text, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-8 md:p-9"
              style={{ backgroundColor: '#FBF8F2', border: '1px dashed rgba(157,78,53,0.5)', borderRadius: '20px', boxShadow: '0 8px 24px rgba(47,41,37,0.07)' }}
            >
              <div className="flex items-center justify-between">
                <StarRow />
                <Quote size={22} style={{ color: 'rgba(157,78,53,0.4)' }} aria-hidden="true" />
              </div>

              <p className="text-sm md:text-base leading-relaxed font-semibold" style={{ color: '#9D4E35' }}>
                {text}
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex-shrink-0" style={{ backgroundColor: '#E8DDCB', border: '1px solid rgba(90,58,39,0.15)' }} aria-hidden="true" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm" style={{ color: '#5A3A27' }}>
                    Nome do estudante
                  </span>
                  <span className="text-xs" style={{ color: '#8A7862' }}>
                    Estudante de Medicina Veterinária
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
