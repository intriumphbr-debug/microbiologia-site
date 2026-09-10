'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { SubjectsSection } from '@/components/subjects-section';
import { PricingSection } from '@/components/pricing-section';
import { BonusSection } from '@/components/bonus-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

// Páginas internas reais da coleção de Osteologia Veterinária
const carrossel1 = [
  { image: '/images/osteo/pg-costela.webp', title: 'Como Reconhecer e Orientar uma Costela', tag: 'Vol. 5 · Tórax' },
  { image: '/images/osteo/pg-vertebras-toracicas.webp', title: 'Vértebras Torácicas — Comparação entre Espécies', tag: 'Vol. 4 · Coluna' },
  { image: '/images/osteo/pg-cranio-ventral.webp', title: 'Crânio — Vista Ventral', tag: 'Vol. 5 · Crânio' },
  { image: '/images/osteo/pg-vertebras-cervicais.webp', title: 'Vértebras Cervicais — Comparação entre Espécies', tag: 'Vol. 4 · Coluna' },
  { image: '/images/osteo/pg-vistas-cranio.webp', title: 'Como Identificar as Vistas do Crânio', tag: 'Vol. 5 · Crânio' },
  { image: '/images/osteo/pg-cranio.webp', title: 'Crânio — Estrutura e Comparação', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-mapa-torax.webp', title: 'Mapa Visual do Tórax Veterinário', tag: 'Vol. 5 · Tórax' },
  { image: '/images/osteo/pg-sacro.webp', title: 'Sacro — Identificação e Comparação', tag: 'Vol. 3 · Membro Pélvico' },
];

const carrossel2 = [
  { image: '/images/osteo/pg-denticao.webp', title: 'Dentição e Arcadas Dentárias', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-cavidade-nasal.webp', title: 'Cavidade Nasal e Conchas', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-maxila.webp', title: 'Maxila, Incisivo e Zigomático', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-neurocranio.webp', title: 'Neurocrânio e Viscerocrânio', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-base-cranio.webp', title: 'Base do Crânio', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-seios-paranasais.webp', title: 'Seios Paranasais', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-arcadas-dentarias.webp', title: 'Arcadas Dentárias e Tipos de Dentes', tag: 'Vol. 6 · Crânio' },
  { image: '/images/osteo/pg-orbita.webp', title: 'Órbita e Cavidade Orbital', tag: 'Vol. 6 · Crânio' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F3EBDD' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel
        title="Conheça a Osteologia Veterinária por Dentro"
        subtitle="Veja como o conteúdo foi organizado para você bater o olho, identificar a estrutura e entender exatamente o que está estudando."
        items={carrossel1}
        bg="#FBF8F2"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
        title="Identifique, Compare e Diferencie com Mais Clareza"
        subtitle="Cada tipo de página ajuda você a reconhecer estruturas, comparar diferenças e revisar os pontos que mais geram dúvida."
        flowSteps={[
          ['Identificação Visual', 'Veja o osso e identifique suas principais estruturas.'],
          ['Como Reconhecer', 'Entenda quais características ajudam a reconhecer cada peça.'],
          ['Como Saber o Lado', 'Use os acidentes ósseos para diferenciar direita e esquerda.'],
          ['Não Confunda', 'Compare estruturas parecidas e veja o que diferencia uma da outra.'],
          ['Comparação entre Espécies', 'Compare canino, equino, bovino e suíno lado a lado.'],
        ]}
        items={carrossel2}
        reverse={true}
        bg="#FBF8F2"
      />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef}><PricingSection /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
