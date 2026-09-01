'use client';

import { Check, Star, Lock, CreditCard, Zap, ShieldCheck, Gift } from 'lucide-react';

/* ===== Constantes de preço e checkout (fáceis de editar) ===== */
const BASIC_PRICE = 'R$ 10,00';
const COMPLETE_PRICE = 'R$ 24,90';
const BASIC_CHECKOUT_URL = '#';
const COMPLETE_CHECKOUT_URL = '#';

const completeFeatures = [
  '40 Mapas Visuais',
  '30 Não Confunda',
  '40 Fichas Visuais',
  '15 Revisões Express',
  '15 Teste sua Memória',
];

const completeBonus = '+ 3 Bônus Exclusivos';

const securityItems = [
  [Lock, 'Compra segura'],
  [CreditCard, 'Pagamento protegido'],
  [Zap, 'Acesso imediato'],
  [ShieldCheck, '7 dias de garantia'],
] as const;

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
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#5A3D82' }}>
            Escolha Como Você Quer Acessar
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#6B6872' }}>
            Comece pelo essencial ou tenha acesso ao sistema completo de revisão visual.
          </p>
        </div>

        {/* Planos: empilhados no mobile, lado a lado no desktop */}
        <div className="pricing-grid mx-auto flex max-w-4xl flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-6">
          {/* ===== PLANO BÁSICO (secundário) ===== */}
          <div
            className="flex w-full flex-col rounded-[20px] p-6 sm:p-8"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #D8D4E4' }}
          >
            <h3 className="font-grotesk text-lg sm:text-xl" style={{ color: '#24242A' }}>
              Plano Básico
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-grotesk text-3xl sm:text-4xl" style={{ color: '#24242A' }}>
                {BASIC_PRICE}
              </span>
            </div>
            <p className="mt-1 text-xs" style={{ color: '#6B6872' }}>Pagamento único</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: '18px', height: '18px', backgroundColor: '#F3F0F5', color: '#5A3D82' }}
                >
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-sm" style={{ color: '#24242A' }}>
                  <span className="font-bold">40</span> Mapas Visuais de Microbiologia
                </span>
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: '#24242A' }}>
              Uma opção direta para quem quer começar pelos mapas visuais e consultar os principais assuntos de microbiologia.
            </p>

            <button
              onClick={() => goToCheckout(BASIC_CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-3 px-6 text-sm font-bold active:scale-95"
              style={{
                backgroundColor: 'transparent',
                color: '#5A3D82',
                border: '1.5px solid #5A3D82',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5A3D82';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#5A3D82';
              }}
            >
              QUERO O PLANO BÁSICO
            </button>
          </div>

          {/* ===== PLANO COMPLETO (destaque) ===== */}
          <div
            className="pricing-complete relative flex w-full flex-col rounded-[22px] p-6 pt-9 sm:p-8 sm:pt-10"
            style={{
              background: 'linear-gradient(180deg, #1D1A2B 0%, #1D1A2B 100%)',
              border: '2px solid #C9A34A',
              boxShadow: '0 24px 55px rgba(29, 26, 43, 0.45)',
            }}
          >
            {/* Selo */}
            <div
              className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: '#C9A34A', color: '#1D1A2B', boxShadow: '0 6px 16px rgba(201, 163, 74, 0.4)' }}
            >
              <Star size={12} strokeWidth={2.5} fill="#1D1A2B" aria-hidden="true" />
              Mais escolhido
            </div>

            <h3 className="font-grotesk text-xl sm:text-2xl" style={{ color: '#FFFFFF' }}>
              Plano Completo
            </h3>
            <p className="mt-1 font-grotesk text-sm uppercase tracking-wide" style={{ color: '#C9A34A' }}>
              Microbiologia Visual Completo
            </p>

            {/* Mockup */}
            <div className="mt-5 flex justify-center">
              <div
                className="flex w-full max-w-[220px] flex-col items-center justify-center gap-1.5 rounded-xl text-center"
                style={{
                  aspectRatio: '4 / 3',
                  border: '1.5px dashed rgba(201, 163, 74, 0.55)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  padding: '14px',
                }}
              >
                <span
                  className="flex items-center justify-center rounded-full text-base"
                  style={{ width: '38px', height: '38px', backgroundColor: 'rgba(201,163,74,0.15)', color: '#C9A34A', border: '1px solid rgba(201,163,74,0.5)' }}
                  aria-hidden="true"
                >
                  +
                </span>
                <p className="font-grotesk text-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>Mockup completo</p>
                <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Imagem em breve</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {completeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '20px', height: '20px', backgroundColor: '#C9A34A', color: '#1D1A2B' }}
                  >
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base font-medium" style={{ color: '#FFFFFF' }}>
                    {feature}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: '20px', height: '20px', backgroundColor: '#C9A34A', color: '#1D1A2B' }}
                >
                  <Gift size={12} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-base font-bold" style={{ color: '#C9A34A' }}>
                  {completeBonus}
                </span>
              </li>
            </ul>

            <p className="mt-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              São mais de 140 recursos cobrindo desde estrutura bacteriana e Gram até meios de cultura, testes bioquímicos, fungos, vírus e resistência antimicrobiana.
            </p>

            <div
              className="mt-6 rounded-xl px-4 py-3 text-center"
              style={{ backgroundColor: 'rgba(47, 115, 122, 0.35)', border: '1px solid rgba(201, 163, 74, 0.35)' }}
            >
              <p className="font-grotesk text-lg" style={{ color: '#C9A34A' }}>+140 RECURSOS VISUAIS</p>
              <p className="mt-1 text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
                + bônus exclusivos incluídos
              </p>
            </div>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Tenha acesso ao sistema completo com conteúdos de fundamentos, bacteriologia, identificação laboratorial, virulência, resistência antimicrobiana, micologia e virologia distribuídos em 5 coleções complementares.
            </p>

            <div className="mt-6 text-center">
              <span className="font-grotesk text-5xl sm:text-6xl" style={{ color: '#FFFFFF' }}>
                {COMPLETE_PRICE}
              </span>
              <p className="mt-2 text-xs sm:text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.78)' }}>
                Pagamento único • Sem mensalidade
              </p>
            </div>

            <button
              onClick={() => goToCheckout(COMPLETE_CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-4 px-6 text-base font-bold active:scale-95 cta-animate"
              style={{
                background: '#14C979',
                color: '#0A2A16',
                border: '1px solid #14C979',
                boxShadow: '0 10px 26px rgba(20, 201, 121, 0.5)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#10A862';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#14C979';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO O MICROBIOLOGIA VISUAL COMPLETO
            </button>
          </div>
        </div>

        {/* Comparação rápida de valor */}
        <p className="mt-8 text-center text-sm" style={{ color: '#6B6872' }}>
          <span className="font-bold" style={{ color: '#5A3D82' }}>Básico</span> {BASIC_PRICE} · 40 recursos
          <span className="mx-2" style={{ color: '#C9A34A' }}>→</span>
          <span className="font-bold" style={{ color: '#5A3D82' }}>Completo</span> {COMPLETE_PRICE} · 140 recursos
        </p>

        {/* Linha de segurança */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {securityItems.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#6B6872' }}>
              <Icon size={15} strokeWidth={2} style={{ color: '#2F737A' }} aria-hidden="true" />
              {label}
            </div>
          ))}
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
