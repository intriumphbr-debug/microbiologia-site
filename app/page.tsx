'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { SubjectsSection } from '@/components/subjects-section';
import { ForWhomSection } from '@/components/for-whom-section';
import { PricingSection } from '@/components/pricing-section';
import { BonusSection } from '@/components/bonus-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

// Páginas reais das coleções (substitua `image` pelos arquivos do Microbiologia Visual)
const carrossel1 = [
  { image: '/images/carrossel-classificacao-bacterias.webp', title: 'Classificação Geral das Bactérias', tag: 'Mapa Visual' },
  { image: '/images/carrossel-micoses.webp', title: 'Classificação das Micoses', tag: 'Mapa Visual' },
  { image: '/images/carrossel-virulencia.webp', title: 'Fatores de Virulência', tag: 'Mapa Visual' },
  { image: '/images/carrossel-meios-cultura.webp', title: 'Meios de Cultura Microbiológicos', tag: 'Mapa Visual' },
  { image: '/images/carrossel-endosporos.webp', title: 'Formação de Endósporos', tag: 'Mapa Visual' },
  { image: '/images/carrossel-microrganismos.webp', title: 'Classificação dos Microrganismos', tag: 'Mapa Visual' },
  { image: '/images/carrossel-virus.webp', title: 'Vírus Envelopados x Não Envelopados', tag: 'Mapa Visual' },
  { image: '/images/carrossel-enterobacterias.webp', title: 'Enterobactérias (Enterobacterales)', tag: 'Mapa Visual' },
];

const carrossel2 = [
  { image: '', title: 'Ficha Visual', tag: 'Fichas Visuais' },
  { image: '', title: 'Revisão Express', tag: 'Revisão' },
  { image: '', title: 'Mapa Visual', tag: 'Mapas Visuais' },
  { image: '', title: 'Teste sua Memória', tag: 'Teste' },
  { image: '', title: 'Não Confunda', tag: 'Comparativo' },
  { image: '', title: 'Revisão Express', tag: 'Revisão' },
  { image: '', title: 'Mapa Visual', tag: 'Mapas Visuais' },
  { image: '', title: 'Ficha Visual', tag: 'Fichas Visuais' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F7F7F5' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel
        title="Conheça o Microbiologia Visual por Dentro"
        subtitle="Tudo organizado visualmente para você entender melhor, revisar mais rápido e encontrar o que precisa com facilidade."
        items={carrossel1}
        landscape={true}
        bg="#FFFFFF"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
        title="Do Conteúdo Completo à Revisão de Última Hora"
        subtitle="O mesmo assunto pode aparecer de maneiras diferentes ao longo do sistema. Primeiro você entende visualmente, depois compara pontos que costumam gerar confusão, aprofunda características importantes, faz uma revisão rápida e finalmente testa o que conseguiu lembrar."
        flowSteps={[
          ['Mapa Visual', 'Entenda o assunto.'],
          ['Não Confunda', 'Separe conceitos parecidos.'],
          ['Ficha Visual', 'Memorize características importantes.'],
          ['Revisão Express', 'Recupere rapidamente os pontos principais.'],
          ['Teste sua Memória', 'Descubra o que realmente ficou.'],
        ]}
        items={carrossel2}
        reverse={true}
        bg="#FFFFFF"
      />
      <ForWhomSection />
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
