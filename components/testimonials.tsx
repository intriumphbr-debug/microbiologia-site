import { Quote } from 'lucide-react';

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8-5.2-4.6 6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

const depoimentos = [
  {
    text: 'Antes da prova eu ficava voltando em várias partes da matéria e ainda confundia algumas estruturas. Com o material visual ficou muito mais fácil revisar os principais pontos e lembrar onde cada coisa estava.',
    name: 'Mariana Alves',
    role: 'Estudante de Medicina Veterinária',
    image: '/images/osteo/depoimento-mariana.webp',
  },
  {
    text: 'O que mais me ajudou foi conseguir comparar as estruturas lado a lado. Eu tinha bastante dificuldade para diferenciar alguns ossos e acidentes ósseos, e visualmente ficou muito mais claro.',
    name: 'Camila Rocha',
    role: 'Estudante de Medicina Veterinária',
    image: '/images/osteo/depoimento-camila.webp',
  },
  {
    text: 'Eu usava muito texto e acabava decorando os nomes sem conseguir visualizar direito. Com as imagens organizadas, comecei a reconhecer melhor as estruturas e revisar de forma muito mais rápida.',
    name: 'Lucas Ferreira',
    role: 'Estudante de Medicina Veterinária',
    image: '/images/osteo/depoimento-lucas.webp',
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#F3EBDD' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#5A3A27' }}>
            Relatos de quem já Utiliza o Material
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#8A7862' }}>
            Veja as experiências de quem passou a estudar e revisar osteologia com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-8 md:p-9"
              style={{ backgroundColor: '#FBF8F2', border: '1px solid rgba(157,78,53,0.15)', borderRadius: '20px', boxShadow: '0 8px 24px rgba(47,41,37,0.07)' }}
            >
              <div className="flex items-center justify-between">
                <StarRow />
                <Quote size={22} style={{ color: 'rgba(157,78,53,0.4)' }} aria-hidden="true" />
              </div>

              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#2F2925' }}>
                {'\u201C'}{d.text}{'\u201D'}
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ boxShadow: '0 2px 6px rgba(47,41,37,0.15)' }}
                >
                  <img
                    src={d.image || "/placeholder.svg"}
                    alt={`Foto de ${d.name}, ${d.role}`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm" style={{ color: '#5A3A27' }}>
                    {d.name}
                  </span>
                  <span className="text-xs" style={{ color: '#8A7862' }}>
                    {d.role}
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
