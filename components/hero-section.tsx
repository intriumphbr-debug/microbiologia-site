'use client';

import { Check } from 'lucide-react';

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const scrollToOffer = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mobile-content flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(79, 70, 168, 0.06)', color: '#4F46A8', borderColor: 'rgba(79, 70, 168, 0.30)' }}>
              COMPRA 100% SEGURA E PROTEGIDA
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
            <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              <span style={{ color: '#1D252C' }}>Microbiologia</span>{' '}
              <span style={{ color: '#4F46A8' }}>Visual</span>
            </span>
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance text-center max-w-2xl" style={{ color: '#1D252C' }}>
              <span style={{ color: '#4F46A8' }}>+140</span> recursos{' '}
              <span style={{ color: '#4F46A8' }}>visuais</span> de Microbiologia
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-pretty text-center max-w-md sm:max-w-lg" style={{ color: '#667179' }}>
              Mapas visuais, comparativos, fichas de revisão, resumos express e testes de memória para estudar, revisar e entender microbiologia de forma mais visual e organizada.
            </p>
          </div>
          <div className="w-full flex justify-center py-2 sm:py-4 md:py-6 overflow-visible">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <img
                src="/images/mockup-hero.webp"
                alt="Mockup do Microbiologia Visual: guia principal, fichas de revisão e os três bônus"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 24px 45px rgba(79, 70, 168, 0.22))' }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-12 rounded-full text-sm sm:text-base md:text-lg active:scale-95 cta-animate"
              style={{
                background: '#16C784',
                color: '#FFFFFF',
                border: '1px solid #16C784',
                boxShadow: '0 8px 22px rgba(22, 199, 132, 0.4)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#12B876';
                e.currentTarget.style.borderColor = '#12B876';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(22, 199, 132, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#16C784';
                e.currentTarget.style.borderColor = '#16C784';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(22, 199, 132, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O MICROBIOLOGIA VISUAL
            </button>
            <p className="text-xs sm:text-sm text-center" style={{ color: '#667179' }}>Acesso imediato após a confirmação do pagamento.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
            {['Pagamento único', 'Consulte quando precisar', 'Material 100% digital', 'Acesso imediato'].map((label) => <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#1D252C' }}><span className="rounded-full flex items-center justify-center" style={{ backgroundColor: '#16C784', color: '#FFFFFF', width: '18px', height: '18px' }}><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{label}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
