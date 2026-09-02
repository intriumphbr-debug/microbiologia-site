import Image from 'next/image';

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E1B343" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8-5.2-4.6 6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Eu sempre me perdia quando precisava revisar porque tinha resumo em um lugar, anotação em outro e ainda confundia vários nomes. O que eu mais gostei foi conseguir abrir um assunto e visualizar tudo de forma muito mais organizada.',
      name: 'Mariana Alves',
      role: 'Estudante da área da saúde',
      photo: '/images/depoimentos/mariana-alves.png',
      objectPosition: '50% 22%',
    },
    {
      quote:
        'Os comparativos foram a parte que mais me ajudou. Eu entendia vários conteúdos separados, mas na hora de diferenciar um do outro acabava confundindo. Visualmente ficou muito mais fácil de revisar.',
      name: 'Lucas Martins',
      role: 'Estudante de Microbiologia',
      photo: '/images/depoimentos/lucas-martins.png',
      objectPosition: '50% 26%',
    },
    {
      quote:
        'Gostei principalmente das fichas e das revisões rápidas. Quando não tenho tempo de reler tudo, consigo abrir o material e lembrar dos pontos principais sem precisar voltar para várias anotações.',
      name: 'Camila Ferreira',
      role: 'Estudante da área da saúde',
      photo: '/images/depoimentos/camila-ferreira.png',
      objectPosition: '50% 26%',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#F7F7F5' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#4F46A8' }}>
            Relatos de quem já utiliza o microbiologia visual
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#667179' }}>
            Veja as experiências de quem passou a estudar e revisar microbiologia com mais clareza.  
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-5 p-8 md:p-9"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(79,70,168,0.15)', borderRadius: '20px', boxShadow: '0 8px 24px rgba(29,26,43,0.07)' }}
            >
              <StarRow />

              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#667179' }}>
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div
                  className="relative w-11 h-11 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ border: '2px solid #4F46A8' }}
                >
                  <Image
                    src={item.photo || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm" style={{ color: '#4F46A8' }}>
                    {item.name}
                  </span>
                  <span className="text-xs" style={{ color: '#667179' }}>
                    {item.role}
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
