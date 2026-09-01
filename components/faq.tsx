'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Qual é a diferença entre o Plano Básico e o Plano Completo?',
      a: 'Sim. O Plano Básico inclui os 40 Mapas Visuais. Já o Plano Completo libera as 5 coleções, totalizando mais de 140 recursos visuais entre mapas, comparativos, fichas, revisões express e testes de memória.',
    },
    {
      q: 'O Microbiologia Visual é um produto físico?',
      a: 'Não. Todo o material é 100% digital, para você consultar e revisar quando precisar, sem receber nada impresso pelos correios.',
    },
    {
      q: 'Como receberei o material?',
      a: 'Após a confirmação do pagamento, você recebe as instruções de acesso imediatamente pelo e-mail cadastrado na compra.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Sim. O material foi pensado para ser consultado com facilidade no celular, no tablet ou no computador, sempre que você precisar estudar ou revisar.',
    },
    {
      q: 'Posso imprimir as páginas?',
      a: 'Sim. Você pode imprimir as páginas que quiser para estudar no papel, além de utilizá-las digitalmente sempre que preferir.',
    },
    {
      q: 'O Plano Completo possui realmente mais de 140 recursos?',
      a: 'Sim. O Plano Completo reúne as 5 coleções: 40 Mapas Visuais, 30 Não Confunda, 40 Fichas Visuais, 15 Revisões Express e 15 Teste sua Memória, totalizando mais de 140 recursos visuais.',
    },
    {
      q: 'Os bônus estão incluídos em qual plano?',
      a: 'Os 3 bônus complementares estão incluídos no Plano Completo. O Plano Básico inclui apenas os 40 Mapas Visuais.',
    },
    {
      q: 'Quais assuntos de microbiologia aparecem no material?',
      a: 'O Microbiologia Visual aborda fundamentos de microbiologia, estrutura e morfologia bacteriana, Gram, crescimento e metabolismo, bacteriologia, meios de cultura, testes bioquímicos, identificação microbiológica, virulência, toxinas, resistência antimicrobiana, micologia, virologia e diversos microrganismos importantes. Os temas aparecem distribuídos entre mapas, comparativos, fichas, revisões e testes.',
    },
    {
      q: 'Como o material é organizado?',
      a: 'O conteúdo é dividido em 5 coleções que se complementam, permitindo encontrar o assunto, entender visualmente, comparar informações parecidas, revisar rapidamente e testar a memória.',
    },
    {
      q: 'O material pode ser utilizado para revisão?',
      a: 'Sim. Além do conteúdo completo, há páginas de Revisão Express e testes de memória pensados justamente para revisões rápidas e recuperação ativa do conteúdo.',
    },
    {
      q: 'Preciso já dominar microbiologia para utilizar?',
      a: 'Não. O material ajuda tanto quem está começando a organizar o conteúdo quanto quem já estuda e quer revisar de forma mais visual e prática.',
    },
    {
      q: 'Por quanto tempo terei acesso?',
      a: 'O pagamento é único e você poderá consultar o material sempre que precisar, conforme as condições da plataforma de pagamento.',
    },
    {
      q: 'Existe garantia?',
      a: 'Sim. Você tem 7 dias para conhecer o material. Caso não atenda às suas expectativas, poderá solicitar o reembolso dentro do prazo da garantia.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center uppercase"
          style={{ color: '#5A3D82', fontSize: '32px', fontWeight: 700, marginBottom: '28px', lineHeight: 1.2 }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col" style={{ gap: '10px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(90,61,130,0.18)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(29, 26, 43, 0.08)',
                  width: '100%',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between transition-colors"
                  style={{ padding: '19px 18px' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left"
                    style={{
                      color: '#24242A',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      paddingRight: '14px',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="transition-transform duration-200"
                    style={{
                      color: '#5A3D82',
                      fontSize: '20px',
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: '1px',
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                <div
                  className="transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      borderTop: '1px solid rgba(90,61,130,0.18)',
                      backgroundColor: '#F3F0F5',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#24242A', fontSize: '15px', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
