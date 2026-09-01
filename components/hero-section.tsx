'use client';

import { Check } from 'lucide-react';

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const scrollToOffer = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#F8F8F5' }}>
      <div className="mobile-content flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(75, 42, 123, 0.06)', color: '#4B2A7B', borderColor: 'rgba(75, 42, 123, 0.30)' }}>
              COMPRA 100% SEGURA E PROTEGIDA
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
            <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              <span style={{ color: '#123F4A' }}>Microbiologia</span>{' '}
              <span style={{ color: '#4B2A7B' }}>Visual</span>
            </span>
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance text-center max-w-2xl" style={{ color: '#18242A' }}>
              +140 recursos visuais de Microbiologia
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-pretty text-center max-w-md sm:max-w-lg" style={{ color: '#667177' }}>
              Mapas visuais, comparativos, fichas de revisão, resumos express e testes de memória para estudar, revisar e entender microbiologia de forma mais visual e organizada.
            </p>
          </div>
          <div className="w-full flex justify-center py-2 sm:py-4 md:py-6 overflow-visible">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <ImagePlaceholder
                label="Mockup do Microbiologia Visual"
                ratio="4 / 3"
                variant="light"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-12 rounded-full text-sm sm:text-base md:text-lg active:scale-95 cta-animate"
              style={{
                background: '#10C878',
                color: '#06331C',
                border: '1px solid #10C878',
                boxShadow: '0 8px 22px rgba(16, 200, 120, 0.4)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0DB068';
                e.currentTarget.style.borderColor = '#0DB068';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(16, 200, 120, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#10C878';
                e.currentTarget.style.borderColor = '#10C878';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(16, 200, 120, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O MICROBIOLOGIA VISUAL
            </button>
            <p className="text-xs sm:text-sm text-center" style={{ color: '#667177' }}>Acesso imediato após a confirmação do pagamento.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
            {['Pagamento único', 'Consulte quando precisar', 'Material 100% digital', 'Acesso imediato'].map((label) => <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#18242A' }}><span className="rounded-full flex items-center justify-center" style={{ backgroundColor: '#10C878', color: '#FFFFFF', width: '18px', height: '18px' }}><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{label}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({
  label,
  ratio = '4 / 3',
  variant = 'light',
}: {
  label: string;
  ratio?: string;
  variant?: 'light' | 'dark';
}) {
  const dark = variant === 'dark';
  return (
    <div
      className="w-full max-w-lg flex flex-col items-center justify-center gap-2 rounded-2xl text-center"
      style={{
        aspectRatio: ratio,
        border: `1.5px dashed ${dark ? 'rgba(213, 166, 46, 0.55)' : '#D5A62E'}`,
        backgroundColor: dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
        boxShadow: dark ? 'none' : '0 12px 30px rgba(18, 63, 74, 0.12)',
        padding: '20px',
      }}
    >
      <span
        className="flex items-center justify-center rounded-full text-lg"
        style={{
          width: '46px',
          height: '46px',
          backgroundColor: dark ? 'rgba(213, 166, 46, 0.15)' : '#F3EFF8',
          color: '#D5A62E',
          border: '1px solid rgba(213, 166, 46, 0.5)',
        }}
        aria-hidden="true"
      >
        +
      </span>
      <p className="font-grotesk text-sm sm:text-base" style={{ color: dark ? 'rgba(255,255,255,0.92)' : '#123F4A' }}>
        {label}
      </p>
      <p className="text-[11px] sm:text-xs" style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#667177' }}>
        Imagem em breve
      </p>
    </div>
  );
}
