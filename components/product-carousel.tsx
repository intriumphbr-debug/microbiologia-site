'use client';

import { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  note?: string;
  flowSteps?: Array<[string, string]>;
  items: Array<{
    image: string;
    title: string;
    tag?: string;
  }>;
  reverse?: boolean;
  bg?: string;
  landscape?: boolean;
}

function CarouselCard({ title, image, tag }: { title: string; image: string; tag?: string }) {
  if (image) {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          decoding="async"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3 p-4"
      style={{ backgroundColor: '#FFFFFF', border: '1.5px dashed #E1B343', boxShadow: '0 8px 22px rgba(29, 26, 43, 0.08)' }}
    >
      {tag && (
        <span
          className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
          style={{ backgroundColor: '#F7F7F5', color: '#4F46A8', border: '1px solid rgba(79, 70, 168, 0.25)' }}
        >
          {tag}
        </span>
      )}
      <span
        className="flex items-center justify-center rounded-full text-lg"
        style={{ width: '44px', height: '44px', backgroundColor: 'rgba(225, 179, 67, 0.12)', color: '#E1B343', border: '1px solid rgba(225, 179, 67, 0.5)' }}
        aria-hidden="true"
      >
        +
      </span>
      <p className="text-center font-grotesk text-sm sm:text-base leading-snug" style={{ color: '#1D252C' }}>
        {title}
      </p>
      <p className="text-center text-[10px] sm:text-xs leading-snug" style={{ color: '#667179' }}>
        Página em breve
      </p>
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{ backgroundColor: '#E1B343' }}
      />
    </div>
  );
}

export function ProductCarousel({ title, subtitle, note, flowSteps, items, reverse = false, bg = '#FFFFFF', landscape = false }: ProductCarouselProps) {
  useEffect(() => {
    items.forEach((item) => {
      if (item.image) {
        const img = new Image();
        img.src = item.image;
        img.crossOrigin = 'anonymous';
      }
    });
  }, [items]);

  const trackItems = [...items, ...items];

  return (
    <section className="w-full overflow-hidden py-12 md:py-16 lg:py-20" style={{ backgroundColor: bg }}>
      <div className="mobile-content">
        {/* Título e Subtítulo */}
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#1D252C' }}>
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-2xl" style={{ color: '#667179' }}>
            {subtitle}
          </p>
          {note && (
            <p className="text-xs sm:text-sm leading-relaxed text-center max-w-2xl" style={{ color: '#667179' }}>
              {note}
            </p>
          )}
        </div>

        {flowSteps && (
          <div className="mx-auto mb-12 md:mb-16 max-w-md">
            <div className="flex flex-col gap-2">
              {flowSteps.map(([name, desc], idx) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-2xl px-5 py-3.5 text-center"
                    style={{
                      background: '#4F46A8',
                      boxShadow: '0 8px 20px rgba(29, 26, 43, 0.14)',
                    }}
                  >
                    <p className="font-grotesk text-sm sm:text-base font-bold uppercase tracking-wide" style={{ color: '#FFFFFF' }}>
                      {name}
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {desc}
                    </p>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <ArrowDown size={18} strokeWidth={2.5} style={{ color: '#E1B343' }} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

        <style>{`
          @keyframes marquee-forward {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.5rem)); }
          }
          @keyframes marquee-backward {
            0% { transform: translateX(calc(-50% - 0.5rem)); }
            100% { transform: translateX(0); }
          }
          .carousel-track {
            display: flex;
            width: max-content;
            gap: 1rem;
            will-change: transform;
          }
          .carousel-track.forward {
            animation: marquee-forward 40s linear infinite;
          }
          .carousel-track.backward {
            animation: marquee-backward 40s linear infinite;
          }
          .carousel-item {
            flex-shrink: 0;
            width: 200px;
            height: auto;
            aspect-ratio: 3 / 4;
          }
          .carousel-item.landscape {
            width: 300px;
            aspect-ratio: 3 / 2;
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .carousel-item { width: 240px; }
            .carousel-item.landscape { width: 400px; }
            .carousel-track { gap: 1.5rem; }
          }
          @media (min-width: 1025px) {
            .carousel-item { width: 280px; }
            .carousel-item.landscape { width: 460px; }
            .carousel-track { gap: 2rem; }
          }
        `}</style>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-20 pointer-events-none" style={{ background: `linear-gradient(to right, ${bg}, transparent)` }} />
          <div className={`carousel-track ${reverse ? 'backward' : 'forward'}`}>
            {trackItems.map((item, idx) => (
              <div key={idx} className={`carousel-item${landscape ? ' landscape' : ''}`}>
                <CarouselCard title={item.title} image={item.image} tag={item.tag} />
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-20 pointer-events-none" style={{ background: `linear-gradient(to left, ${bg}, transparent)` }} />
        </div>
    </section>
  );
}
