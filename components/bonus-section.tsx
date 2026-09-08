'use client';

import { Star } from 'lucide-react';

const bonuses = [
  {
    label: 'BÔNUS 1',
    name: 'Revisão Prática de Osteologia',
    description:
      'Uma coleção de páginas de revisão rápida com imagens limpas, pontos-chave e sínteses visuais para consultar antes das aulas e avaliações.',
    oldPrice: 'De R$ 19,90',
    image: '/images/osteo/bonus-01.png',
  },
  {
    label: 'BÔNUS 2',
    name: 'Teste Sua Identificação',
    description:
      'Exercícios visuais com ossos e estruturas sem identificação, setas numeradas e gabarito para você testar se realmente consegue reconhecer o que estudou.',
    oldPrice: 'De R$ 24,90',
    image: '/images/osteo/bonus-02.png',
  },
  {
    label: 'BÔNUS 3',
    name: 'Flashcards de Acidentes Ósseos',
    description:
      'Cards rápidos com imagens, nomes e perguntas de identificação para reforçar os principais acidentes ósseos e pontos de referência anatômicos.',
    oldPrice: 'De R$ 19,90',
    image: '/images/osteo/bonus-03.png',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#9D4E35" strokeWidth={0} />
      ))}
    </div>
  );
}

export function BonusSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#2F2925' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#D8845E' }}>
            Bônus Inclusos
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-balance" style={{ color: '#FBF8F2' }}>
            Materiais Extras para Reforçar Sua Identificação
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(251,248,242,0.90)' }}>
            Recursos complementares pensados para transformar a consulta em revisão ativa e preparar você para identificar as estruturas sem depender da legenda.
          </p>
        </div>

        {/* Cards: empilhados no mobile, lado a lado no desktop */}
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-6 lg:flex-row lg:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.label}
              className="bonus-card flex w-full flex-col rounded-[20px] p-5 sm:p-6"
              style={{
                backgroundColor: '#FBF8F2',
                border: '1px solid rgba(90,58,39,0.15)',
                boxShadow: '0 12px 30px rgba(47, 41, 37, 0.28)',
                transition: 'all 250ms ease',
              }}
            >
              {/* Badge */}
              <span
                className="self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#5A3A27', color: '#FBF8F2' }}
              >
                {bonus.label}
              </span>

              {/* Mockup */}
              <div className="mt-4 flex justify-center">
                <img
                  src={bonus.image || '/placeholder.svg'}
                  alt={`Capa do bônus: ${bonus.name}`}
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Estrelas */}
              <div className="mt-4">
                <StarRow />
              </div>

              {/* Nome */}
              <h3 className="mt-3 font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#5A3A27' }}>
                {bonus.name}
              </h3>

              {/* Descrição */}
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#8A7862' }}>
                {bonus.description}
              </p>

              {/* Preço + selo */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: 'rgba(90,58,39,0.15)' }}>
                <span className="text-sm line-through" style={{ color: '#8A7862' }}>
                  {bonus.oldPrice}
                </span>
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
                >
                  Hoje grátis
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bonus-card:hover {
          transform: translateY(-4px);
          border-color: #9D4E35;
          box-shadow: 0 20px 42px rgba(47, 41, 37, 0.34);
        }
      `}</style>
    </section>
  );
}
