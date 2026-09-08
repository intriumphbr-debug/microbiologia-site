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
  { image: '/images/osteo/c1-escapula.png', title: 'Escápula', tag: 'Página Anatômica' },
  { image: '/images/osteo/c1-umero.png', title: 'Úmero', tag: 'Página Anatômica' },
  { image: '/images/osteo/c1-carpo.png', title: 'Carpo', tag: 'Página Anatômica' },
  { image: '/images/osteo/c1-lado.png', title: 'Como Identificar o Lado', tag: 'Direito x Esquerdo' },
  { image: '/images/osteo/c1-escapula-especies.png', title: 'Escápula Comparada entre Espécies', tag: 'Comparação' },
  { image: '/images/osteo/c1-umero-especies.png', title: 'Úmero Comparado entre Espécies', tag: 'Comparação' },
  { image: '/images/osteo/c1-comparacao-geral.png', title: 'Comparação Geral entre Espécies', tag: 'Comparação' },
  { image: '/images/osteo/c1-mapa-toracico.png', title: 'Mapa Visual do Membro Torácico', tag: 'Mapa Visual' },
];

const carrossel2 = [
  { image: '/images/osteo/c2-carpo-especies.png', title: 'Carpo Comparado entre Espécies', tag: 'Comparação' },
  { image: '/images/osteo/c2-metacarpos.png', title: 'Metacarpos Comparados', tag: 'Comparação' },
  { image: '/images/osteo/c2-falanges.png', title: 'Falanges Comparadas', tag: 'Comparação' },
  { image: '/images/osteo/c2-articulacoes.png', title: 'Articulações do Membro Torácico', tag: 'Página Anatômica' },
  { image: '/images/osteo/c2-diferencas.png', title: 'Diferenças que Mais Caem entre Espécies', tag: 'Não Confunda' },
  { image: '/images/osteo/c2-checklist.png', title: 'Checklist para Prova Prática', tag: 'Revisão' },
  { image: '/images/osteo/c2-treino.png', title: 'Treino Prático de Identificação', tag: 'Teste' },
  { image: '/images/osteo/c2-resumo.png', title: 'Resumo Visual', tag: 'Revisão' },
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
        subtitle="Veja como ossos, acidentes ósseos, vistas anatômicas e diferenças entre espécies foram organizados para facilitar sua identificação e revisão."
        items={carrossel1}
        landscape={true}
        bg="#FBF8F2"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
        title="Veja Como a Identificação Fica Muito Mais Clara Quando Tudo Está Lado a Lado"
        subtitle="Cada tipo de página resolve uma dúvida diferente para você reconhecer, diferenciar e revisar as estruturas ósseas com clareza."
        flowSteps={[
          ['Identificação Visual', 'Veja o osso e localize suas estruturas.'],
          ['Como Reconhecer', 'Descubra o que ajuda a reconhecer a peça.'],
          ['Como Saber o Lado', 'Use os acidentes para diferenciar direita e esquerda.'],
          ['Não Confunda', 'Compare estruturas semelhantes e evite erros.'],
          ['Comparação entre Espécies', 'Observe canino, equino, bovino e suíno lado a lado.'],
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
