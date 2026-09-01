'use client';

import { Star } from 'lucide-react';

const bonuses = [
  {
    label: 'BÔNUS 1',
    name: 'Checklist Visual de Biossegurança em Microbiologia',
    description:
      'Um material prático para consultar rapidamente cuidados com EPIs, prevenção de contaminação, descarte correto, organização da bancada e boas práticas na rotina microbiológica.',
    oldPrice: 'De R$ 19,90',
    image: '/images/bonus/bonus-biosseguranca.png',
  },
  {
    label: 'BÔNUS 2',
    name: 'Tabela Rápida de Meios de Cultura',
    description:
      'Um guia visual complementar para revisar os principais meios de cultura, suas finalidades, aplicações, seletividade, diferencial e usos mais frequentes.',
    oldPrice: 'De R$ 27,00',
    image: '/images/bonus/bonus-meios-cultura.png',
  },
  {
    label: 'BÔNUS 3',
    name: 'Guia Visual de Erros Frequentes em Microbiologia',
    description:
      'Um material complementar para revisar erros comuns em colorações, interpretação, coleta, isolamento, leitura de resultados e confusões recorrentes no estudo de microbiologia.',
    oldPrice: 'De R$ 24,90',
    image: '/images/bonus/bonus-erros-frequentes.png',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#D6A62E" strokeWidth={0} />
      ))}
    </div>
  );
}

export function BonusSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#24114F' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#D6A62E' }}>
            Exclusivo do Plano Completo
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-balance" style={{ color: '#FFFFFF' }}>
            Receba 3 Bônus para Completar Sua Revisão
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
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
                border: '1px solid #E4DEEF',
                boxShadow: '0 12px 30px rgba(43, 20, 95, 0.08)',
                transition: 'all 250ms ease',
              }}
            >
              {/* Badge */}
              <span
                className="self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#2B145F', color: '#FFFFFF' }}
              >
                {bonus.label}
              </span>

              {/* Mockup */}
              <div className="mt-4 flex justify-center">
                <div
                  className="w-full max-w-[240px] overflow-hidden rounded-xl"
                  style={{ aspectRatio: '4 / 3', border: '1px solid #E4DEEF', backgroundColor: '#F7F3FB' }}
                >
                  <img
                    src={bonus.image || '/placeholder.svg'}
                    alt={`Mini capa do bônus: ${bonus.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Estrelas */}
              <div className="mt-4">
                <StarRow />
              </div>

              {/* Nome */}
              <h3 className="mt-3 font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#2B145F' }}>
                {bonus.name}
              </h3>

              {/* Descrição */}
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#43505C' }}>
                {bonus.description}
              </p>

              {/* Preço + selo */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: '#E4DEEF' }}>
                <span className="text-sm line-through" style={{ color: '#9A93AC' }}>
                  {bonus.oldPrice}
                </span>
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ backgroundColor: '#16C766', color: '#0A2A16' }}
                >
                  Hoje grátis
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reforço de inclusão */}
        <p className="mt-10 text-center text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.78)' }}>
          {' '}
          <span className="font-bold" style={{ color: '#D6A62E' }}></span>
        </p>
      </div>

      <style>{`
        bonus-card:hover {
          transform: translateY(-4px);
          border-color: #D6A62E;
          box-shadow: 0 20px 42px rgba(43, 20, 95, 0.14);
        }
      `}</style>
    </section>
  );
}
