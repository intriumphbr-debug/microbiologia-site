'use client';

import { Star } from 'lucide-react';

const bonuses = [
  {
    label: 'BÔNUS 1',
    name: 'Plano de Revisão de Microbiologia em 21 Dias',
    description:
      'Um roteiro prático para organizar seus estudos ao longo de 21 dias, indicando o que revisar, quais coleções utilizar e quando testar sua memória para manter uma sequência de estudo mais clara.',
    oldPrice: 'De R$ 19,90',
    image: '/images/bonus/capa-bonus-01.jpg',
  },
  {
    label: 'BÔNUS 2',
    name: '30 Flashcards Essenciais de Microbiologia',
    description:
      'Uma seleção de perguntas e respostas rápidas com conceitos, estruturas, microrganismos e diferenças importantes para revisar em poucos minutos e reforçar a memorização.',
    oldPrice: 'De R$ 27,00',
    image: '/images/bonus/capa-bonus-02.jpg',
  },
  {
    label: 'BÔNUS 3',
    name: 'Glossário de Microbiologia',
    description:
      'Um guia de consulta com 50 termos e expressões importantes da microbiologia explicados de forma simples e direta para recorrer sempre que surgir alguma dúvida durante os estudos.',
    oldPrice: 'De R$ 24,90',
    image: '/images/bonus/capa-bonus-03.jpg',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#E1B343" strokeWidth={0} />
      ))}
    </div>
  );
}

export function BonusSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#4F46A8' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#E1B343' }}>
            Exclusivo do Plano Completo
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-balance" style={{ color: '#FFFFFF' }}>
            Receba 3 Bônus para Completar Sua Revisão
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.90)' }}>
            Materiais complementares para agilizar a consulta, reforçar a fixação e tornar sua revisão de microbiologia ainda mais prática.
          </p>
        </div>

        {/* Cards: empilhados no mobile, lado a lado no desktop */}
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-6 lg:flex-row lg:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.label}
              className="bonus-card flex w-full flex-col rounded-[20px] p-5 sm:p-6"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(79,70,168,0.15)',
                boxShadow: '0 12px 30px rgba(29, 26, 43, 0.08)',
                transition: 'all 250ms ease',
              }}
            >
              {/* Badge */}
              <span
                className="self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#4F46A8', color: '#FFFFFF' }}
              >
                {bonus.label}
              </span>

              {/* Mockup */}
              <div className="mt-4 flex justify-center">
                <div
                  className="w-full max-w-[220px] overflow-hidden rounded-xl"
                  style={{ aspectRatio: '3 / 4', border: '1px solid rgba(79,70,168,0.15)', backgroundColor: '#F7F7F5' }}
                >
                  <img
                    src={bonus.image || '/placeholder.svg'}
                    alt={`Mini capa do bônus: ${bonus.name}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Estrelas */}
              <div className="mt-4">
                <StarRow />
              </div>

              {/* Nome */}
              <h3 className="mt-3 font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#4F46A8' }}>
                {bonus.name}
              </h3>

              {/* Descrição */}
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#667179' }}>
                {bonus.description}
              </p>

              {/* Preço + selo */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: 'rgba(79,70,168,0.15)' }}>
                <span className="text-sm line-through" style={{ color: '#667179' }}>
                  {bonus.oldPrice}
                </span>
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ backgroundColor: '#16C784', color: '#FFFFFF' }}
                >
                  Hoje grátis
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reforço de inclusão */}
        <p className="mt-10 text-center text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.90)' }}>
          {' '}
          <span className="font-bold" style={{ color: '#E1B343' }}></span>
        </p>
      </div>

      <style>{`
        bonus-card:hover {
          transform: translateY(-4px);
          border-color: #E1B343;
          box-shadow: 0 20px 42px rgba(29, 26, 43, 0.14);
        }
      `}</style>
    </section>
  );
}
