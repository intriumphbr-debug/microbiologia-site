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
  { image: '/images/carrossel2-fungos-clinicos.png', title: 'Fungos de Importância Clínica', tag: 'Revisão Express' },
  { image: '/images/carrossel2-virulencia-toxinas.png', title: 'Virulência, Toxinas e Relação Hospedeiro', tag: 'Revisão Express' },
  { image: '/images/carrossel2-endogena-exogena.png', title: 'Infecção Endógena vs Exógena', tag: 'Não Confunda' },
  { image: '/images/carrossel2-cocos-gram-positivos.png', title: 'Estafilococos vs Estreptococos vs Enterococos', tag: 'Não Confunda' },
  { image: '/images/carrossel2-gram-coloracoes.png', title: 'Gram e Colorações Microbiológicas', tag: 'Revisão Express' },
  { image: '/images/carrossel2-teste-memoria-virologia.png', title: 'Teste sua Memória: Virologia Essencial', tag: 'Teste sua Memória' },
  { image: '/images/carrossel2-teste-memoria-final.png', title: 'Teste sua Memória: Desafio Final', tag: 'Teste sua Memória' },
  { image: '/images/carrossel2-dengue.png', title: 'Vírus da Dengue', tag: 'Ficha Visual' },
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
        title="Cada Etapa Ajuda Você a Fixar Melhor o Conteúdo"
        subtitle="O conteúdo aparece em diferentes formatos para facilitar a compreensão, a revisão e a memorização ao longo do estudo."
        flowSteps={[
          ['Mapa Visual', 'Entenda o assunto.'],
          ['Não Confunda', 'Separe conceitos parecidos.'],
          ['Ficha Visual', 'Memorize características importantes.'],
          ['Revisão Express', 'Recupere rapidamente os pontos principais.'],
          ['Teste sua Memória', 'Reforce o conteúdo estudado.'],
        ]}
        items={carrossel2}
        reverse={true}
        bg="#FFFFFF"
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
