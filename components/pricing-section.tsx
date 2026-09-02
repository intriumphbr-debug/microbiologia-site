'use client';

import { Check, Star } from 'lucide-react';

/* ===== Constantes de preço e checkout (fáceis de editar) ===== */
const BASIC_PRICE = 'R$ 10,00';
const COMPLETE_PRICE = 'R$ 24,90';
const COMPLETE_TOTAL_PRICE = 'R$ 89,70';
const BASIC_CHECKOUT_URL = '#';
const COMPLETE_CHECKOUT_URL = '#';

/* Cada item: [número em destaque, restante do texto] */
const completeFeatures: [string, string][] = [
  ['+140', 'Recursos Visuais de Microbiologia'],
  ['40', 'Mapas Visuais'],
  ['30', 'Não Confunda'],
  ['40', 'Fichas Visuais'],
  ['15', 'Revisões Express'],
  ['15', 'Teste sua Memória'],
];

const completeBonuses = [
  'Bônus #1 — Plano Visual de Revisão em 21 Dias',
  'Bônus #2 — Flashcards Essenciais de Microbiologia',
  'Bônus #3 — Glossário de Microbiologia',
];

function goToCheckout(url: string) {
  if (!url || url === '#') return;
  const params = window.location.search;
  const separator = url.includes('?') ? '&' : '?';
  window.location.href = params ? `${url}${separator}${params.slice(1)}` : url;
}

export function PricingSection() {
  return (
    <section id="checkout" className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#4F46A8' }}>
            Escolha Como Você Quer Acessar
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#667179' }}>
            Comece pelo essencial ou tenha acesso ao sistema completo de revisão visual.
          </p>
        </div>

        {/* Planos: empilhados no mobile, lado a lado no desktop */}
        <div className="pricing-grid mx-auto flex max-w-4xl flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-6">
          {/* ===== PLANO BÁSICO (secundário) ===== */}
          <div
            className="flex w-full flex-col rounded-[20px] p-6 sm:p-8"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(79,70,168,0.15)' }}
          >
            <h3 className="font-grotesk text-lg sm:text-xl" style={{ color: '#1D252C' }}>
              Plano Básico
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-grotesk text-3xl sm:text-4xl" style={{ color: '#1D252C' }}>
                {BASIC_PRICE}
              </span>
            </div>
            <p className="mt-1 text-xs" style={{ color: '#667179' }}>Pagamento único</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: '18px', height: '18px', backgroundColor: '#F7F7F5', color: '#4F46A8' }}
                >
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-sm" style={{ color: '#1D252C' }}>
                  <span className="font-bold">40</span> Mapas Visuais de Microbiologia
                </span>
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: '#1D252C' }}>
              Uma opção direta para quem quer começar pelos mapas visuais e consultar os principais assuntos de microbiologia.
            </p>

            <button
              onClick={() => goToCheckout(BASIC_CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-3 px-6 text-sm font-bold active:scale-95"
              style={{
                backgroundColor: '#16C784',
                color: '#FFFFFF',
                border: '1.5px solid #16C784',
                boxShadow: '0 8px 22px rgba(22, 199, 132, 0.4)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#12B876';
                e.currentTarget.style.borderColor = '#12B876';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#16C784';
                e.currentTarget.style.borderColor = '#16C784';
              }}
            >
              QUERO O PLANO BÁSICO
            </button>
          </div>

          {/* ===== PLANO COMPLETO (oferta premium) ===== */}
          <div
            className="pricing-complete relative flex w-full flex-col rounded-[22px] p-6 pt-10 sm:p-8 sm:pt-11"
            style={{
              backgroundColor: '#4F46A8',
              border: '2px solid #E1B343',
              boxShadow: '0 24px 55px rgba(29, 26, 43, 0.45)',
            }}
          >
            {/* Selo MAIS ESCOLHIDO */}
            <div
              className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: '#E1B343', color: '#1D252C', boxShadow: '0 6px 16px rgba(225, 179, 67, 0.4)' }}
            >
              <Star size={12} strokeWidth={2.5} fill="#1D252C" aria-hidden="true" />
              Mais escolhido
            </div>

            {/* Títulos */}
            <div className="text-center">
              <p className="font-grotesk text-xs sm:text-sm uppercase tracking-[0.18em]" style={{ color: '#E1B343' }}>
                Plano Completo
              </p>
              <h3 className="mt-1 font-grotesk text-2xl sm:text-3xl leading-tight text-balance" style={{ color: '#FFFFFF' }}>
                Microbiologia Visual Completo
              </h3>
            </div>

            {/* Mockup grande */}
            <div className="mt-5 flex justify-center">
              <img
                src="/images/mockup-completo-garantia.png"
                alt="Mockup do Microbiologia Visual Completo com o produto principal, os três bônus e o selo de garantia de 7 dias"
                className="w-full max-w-[440px] h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Lista do que está incluído */}
            <ul className="mt-6 space-y-3.5">
              {completeFeatures.map(([num, rest]) => (
                <li key={rest} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '22px', height: '22px', backgroundColor: '#16C784', color: '#FFFFFF' }}
                  >
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base leading-snug" style={{ color: '#FFFFFF' }}>
                    <span className="font-bold">{num}</span> {rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bônus */}
            <ul className="mt-5 space-y-3">
              {completeBonuses.map((bonus) => (
                <li key={bonus} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">
                    🎁
                  </span>
                  <span className="text-sm sm:text-base font-semibold leading-snug" style={{ color: '#FFFFFF' }}>
                    {bonus}
                  </span>
                </li>
              ))}
            </ul>

            {/* Separador antes da área de preço */}
            <div className="mt-6 mb-5 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }} />

            {/* Área de preço */}
            <div className="text-center">
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Valor total: <span className="line-through">{COMPLETE_TOTAL_PRICE}</span>
              </p>
              <p className="mt-3 font-grotesk text-xs sm:text-sm uppercase tracking-[0.16em]" style={{ color: '#E1B343' }}>
                Hoje por apenas
              </p>
              <p className="mt-1 font-grotesk text-6xl sm:text-7xl leading-none" style={{ color: '#16C784' }}>
                {COMPLETE_PRICE}
              </p>
              <p className="mt-3 text-xs sm:text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Pagamento único • Sem mensalidade
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => goToCheckout(COMPLETE_CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-4 px-6 text-base font-bold active:scale-95 cta-animate"
              style={{
                background: '#16C784',
                color: '#FFFFFF',
                border: '1px solid #16C784',
                boxShadow: '0 10px 26px rgba(22, 199, 132, 0.35)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#12B876';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#16C784';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO O MICROBIOLOGIA VISUAL COMPLETO
            </button>

            {/* Linha de confiança */}
            <p className="mt-5 text-center text-xs sm:text-sm font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              🔒 Compra segura • 💳 Pagamento protegido • ⚡ Acesso imediato • ✅ 7 dias de garantia
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .pricing-complete {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
}
