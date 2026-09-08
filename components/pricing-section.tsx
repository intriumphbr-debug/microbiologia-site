'use client';

import { Check, Star } from 'lucide-react';

/* ===== Constantes de preço e checkout (fáceis de editar) ===== */
const PRICE = 'R$ 19,90';
const TOTAL_PRICE = 'R$ 89,70';
const CHECKOUT_URL = 'https://pay.cakto.com.br/buy5dpo_1080833';

/* O que está incluído na oferta */
const includedFeatures: [string, string][] = [
  ['≈150', 'páginas visuais de Osteologia'],
  ['6', 'volumes: Fundamentos, Membro Torácico, Membro Pélvico, Coluna Vertebral, Tórax e Crânio'],
  ['4', 'espécies: canino, equino, bovino e suíno'],
];

const includedList = [
  'Diferentes vistas anatômicas',
  'Identificação dos principais acidentes ósseos',
  'Orientação de peças (direita x esquerda)',
  'Páginas "Como Reconhecer" e "Não Confunda"',
  'Comparações entre espécies',
];

const bonuses = [
  'Bônus #1 — Revisão Prática de Osteologia',
  'Bônus #2 — Teste Sua Identificação',
  'Bônus #3 — Flashcards de Acidentes Ósseos',
];

function goToCheckout(url: string) {
  if (!url || url === '#') return;
  const params = window.location.search;
  const separator = url.includes('?') ? '&' : '?';
  window.location.href = params ? `${url}${separator}${params.slice(1)}` : url;
}

export function PricingSection() {
  return (
    <section id="checkout" className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#FBF8F2' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#5A3A27' }}>
            Acesse a Coleção Completa de Osteologia Veterinária
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#8A7862' }}>
            Todos os volumes e bônus em um único material visual, feito para você identificar e revisar as estruturas com clareza.
          </p>
        </div>

        {/* Plano único */}
        <div className="mx-auto flex max-w-xl">
          <div
            className="relative flex w-full flex-col rounded-[22px] p-6 pt-10 sm:p-8 sm:pt-11"
            style={{
              backgroundColor: '#2F2925',
              border: '2px solid #9D4E35',
              boxShadow: '0 24px 55px rgba(47, 41, 37, 0.45)',
            }}
          >
            {/* Badge OFERTA ESPECIAL */}
            <div
              className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: '#9D4E35', color: '#FBF8F2', boxShadow: '0 6px 16px rgba(157, 78, 53, 0.4)' }}
            >
              <Star size={12} strokeWidth={2.5} fill="#FBF8F2" aria-hidden="true" />
              Oferta Especial
            </div>

            {/* Nome */}
            <div className="text-center">
              <h3 className="font-grotesk text-2xl sm:text-3xl leading-tight text-balance" style={{ color: '#FBF8F2' }}>
                Osteologia Veterinária
              </h3>
            </div>

            {/* Mockup grande */}
            <div className="mt-5 flex justify-center">
              <img
                src="/images/osteo/pricing-mockup.png"
                alt="Coleção Osteologia Veterinária completa com os 6 volumes, os três bônus e o selo de garantia de 7 dias"
                className="w-full max-w-[440px] h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Destaques principais */}
            <ul className="mt-6 space-y-3.5">
              {includedFeatures.map(([num, rest]) => (
                <li key={rest} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '22px', height: '22px', backgroundColor: '#22C55E', color: '#FFFFFF' }}
                  >
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base leading-snug" style={{ color: '#FBF8F2' }}>
                    <span className="font-bold">{num}</span> {rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* Lista de inclusões */}
            <ul className="mt-4 space-y-3">
              {includedList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '22px', height: '22px', backgroundColor: 'rgba(34,197,94,0.16)', color: '#22C55E' }}
                  >
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base leading-snug" style={{ color: 'rgba(251,248,242,0.92)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bônus */}
            <ul className="mt-5 space-y-3">
              {bonuses.map((bonus) => (
                <li key={bonus} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">
                    🎁
                  </span>
                  <span className="text-sm sm:text-base font-semibold leading-snug" style={{ color: '#FBF8F2' }}>
                    {bonus}
                  </span>
                </li>
              ))}
            </ul>

            {/* Separador antes da área de preço */}
            <div className="mt-6 mb-5 h-px w-full" style={{ backgroundColor: 'rgba(251,248,242,0.18)' }} />

            {/* Área de preço */}
            <div className="text-center">
              <p className="text-sm" style={{ color: 'rgba(251,248,242,0.75)' }}>
                Valor total: <span className="line-through">{TOTAL_PRICE}</span>
              </p>
              <p className="mt-3 font-grotesk text-xs sm:text-sm uppercase tracking-[0.16em]" style={{ color: '#D8845E' }}>
                Hoje por apenas
              </p>
              <p className="mt-1 font-grotesk text-6xl sm:text-7xl leading-none" style={{ color: '#22C55E' }}>
                {PRICE}
              </p>
              <p className="mt-3 text-xs sm:text-sm font-medium" style={{ color: 'rgba(251,248,242,0.75)' }}>
                Pagamento único • Sem mensalidade
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => goToCheckout(CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-4 px-6 text-base font-bold active:scale-95 cta-animate"
              style={{
                background: '#22C55E',
                color: '#FFFFFF',
                border: '1px solid #22C55E',
                boxShadow: '0 10px 26px rgba(34, 197, 94, 0.35)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#16A34A';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#22C55E';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR A OSTEOLOGIA VETERINÁRIA
            </button>

            {/* Linha de confiança */}
            <p className="mt-5 text-center text-xs sm:text-sm font-medium leading-relaxed" style={{ color: 'rgba(251,248,242,0.85)' }}>
              🔒 Compra segura • 💳 Pagamento protegido • ⚡ Acesso imediato • ✅ 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
