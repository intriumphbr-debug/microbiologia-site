'use client';

import { Check, Star, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ===== Constantes de preço e checkout (fáceis de editar) ===== */
const BASIC_PRICE = 'R$ 10,00';
const COMPLETE_PRICE = 'R$ 24,90';
const COMPLETE_TOTAL_PRICE = 'R$ 89,70';
const COMPLETE_DISCOUNT_PRICE = 'R$ 16,00';
const BASIC_CHECKOUT_URL = 'https://pay.cakto.com.br/mn53ikz_1082144';
const COMPLETE_CHECKOUT_URL = '#';
const COMPLETE_DISCOUNT_CHECKOUT_URL = 'https://pay.cakto.com.br/3vv5xt3_1082158';

/* Itens do Plano Básico */
const basicFeatures = [
  '40 Mapas Visuais de Microbiologia',
  'Fundamentos de Microbiologia',
  'Estrutura e Morfologia Bacteriana',
  'Gram-positivas e Gram-negativas',
  'Crescimento e Nutrição Microbiana',
  'Bacteriologia, Micologia e Virologia',
  'Acesso imediato ao material',
];

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
  const [upsellOpen, setUpsellOpen] = useState(false);
  const basicBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  /* Bloqueia scroll do body enquanto o popup está aberto e foca o modal */
  useEffect(() => {
    if (!upsellOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Foco inicial no modal
    const focusTimer = window.setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeUpsell();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upsellOpen]);

  function openUpsell() {
    setUpsellOpen(true);
  }

  function closeUpsell() {
    setUpsellOpen(false);
    // Devolve o foco ao botão do Plano Básico
    window.setTimeout(() => basicBtnRef.current?.focus(), 0);
  }

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
            className="flex w-full flex-col rounded-[24px] p-6 sm:p-8"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(79,70,168,0.16)',
              boxShadow: '0 8px 24px rgba(29, 26, 43, 0.06)',
            }}
          >
            {/* Títulos */}
            <div className="text-center">
              <p className="font-grotesk text-2xl sm:text-3xl leading-tight" style={{ color: '#1D252C' }}>
                Plano Básico
              </p>
              <p className="mt-1.5 text-lg" style={{ color: '#667179' }}>
                Microbiologia Visual — Mapas Visuais
              </p>
            </div>

            {/* Texto de apoio */}
            <p className="mt-4 text-center text-[15px] leading-relaxed" style={{ color: '#667179' }}>
              Uma opção direta para quem quer começar pelos mapas visuais e consultar os principais assuntos de microbiologia de forma clara e organizada.
            </p>

            {/* Lista do que está incluído */}
            <ul className="mt-6 space-y-3.5">
              {basicFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '20px', height: '20px', backgroundColor: 'rgba(22,199,132,0.12)', color: '#16C784' }}
                  >
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[15px] leading-snug" style={{ color: '#1D252C' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Separador */}
            <div className="mt-7 mb-6 h-px w-full" style={{ backgroundColor: 'rgba(79,70,168,0.12)' }} />

            {/* Área de preço */}
            <div className="text-center">
              <p className="font-grotesk text-xs uppercase tracking-[0.16em]" style={{ color: '#667179' }}>
                Acesso ao Plano Básico
              </p>
              <p className="mt-2 font-grotesk text-5xl sm:text-6xl leading-none" style={{ color: '#1D252C' }}>
                {BASIC_PRICE}
              </p>
              <p className="mt-2 text-sm font-medium" style={{ color: '#667179' }}>
                Pagamento único
              </p>
            </div>

            {/* Botão que abre o popup de upsell */}
            <button
              ref={basicBtnRef}
              onClick={openUpsell}
              className="mt-6 w-full rounded-full px-6 text-base font-bold active:scale-95"
              style={{
                minHeight: '52px',
                backgroundColor: '#1D1D1D',
                color: '#FFFFFF',
                transition: 'all 200ms ease',
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

      {/* ===== POPUP DE UPSELL DO PLANO COMPLETO ===== */}
      {upsellOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.55)', padding: '16px' }}
          onClick={closeUpsell}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="upsell-title"
            tabIndex={-1}
            className="relative flex flex-col rounded-[26px] outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              width: 'calc(100% - 32px)',
              maxWidth: '400px',
              padding: '28px 24px 24px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar (X) */}
            <button
              onClick={closeUpsell}
              aria-label="Fechar oferta"
              className="absolute right-2.5 top-2.5 flex items-center justify-center rounded-full"
              style={{ width: '44px', height: '44px', color: '#9AA0A6' }}
            >
              <X size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>

            {/* Badge */}
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#F6E3B0', color: '#1D252C' }}
              >
                🎁 Oferta Especial
              </span>
            </div>

            {/* Headline */}
            <h3
              id="upsell-title"
              className="mt-6 text-center font-grotesk leading-tight text-balance"
              style={{ color: '#1D252C', fontSize: '26px' }}
            >
              Leve o PLANO COMPLETO por{' '}
              <span style={{ color: '#16C784' }}>{COMPLETE_DISCOUNT_PRICE}</span>
            </h3>

            {/* Subheadline */}
            <p className="mt-3 text-center text-[15px] leading-relaxed" style={{ color: '#4A5158' }}>
              Todos os bônus + atualizações futuras. Esta condição desaparece ao fechar esta janela.
            </p>

            {/* CTA principal */}
            <button
              onClick={() => goToCheckout(COMPLETE_DISCOUNT_CHECKOUT_URL)}
              className="mt-6 w-full rounded-full px-6 text-base font-bold active:scale-95"
              style={{
                minHeight: '54px',
                backgroundColor: '#16C784',
                color: '#FFFFFF',
                boxShadow: '0 10px 26px rgba(22, 199, 132, 0.35)',
                transition: 'all 200ms ease',
              }}
            >
              SIM! QUERO O COMPLETO POR {COMPLETE_DISCOUNT_PRICE}
            </button>

            {/* Recusar e seguir com o Básico */}
            <button
              onClick={() => goToCheckout(BASIC_CHECKOUT_URL)}
              className="mt-4 w-full px-4 py-1 text-center text-sm underline"
              style={{ color: '#667179' }}
            >
              Não, obrigado. Quero continuar com o básico
            </button>
          </div>
        </div>
      )}

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
