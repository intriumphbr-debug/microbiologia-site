'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Qual é a diferença entre o Plano Básico e o Plano Completo?',
      a: 'O Plano Básico inclui os 40 Mapas Visuais de Microbiologia. Já o Plano Completo dá acesso às 5 coleções, com mais de 140 recursos visuais, além dos 3 bônus exclusivos.',
    },
    {
      q: 'O material é físico ou digital?',
      a: 'O Microbiologia Visual é um produto 100% digital. Nenhum material físico será enviado para o seu endereço.',
    },
    {
      q: 'Como receberei o acesso?',
      a: 'Após a confirmação do pagamento, você receberá as instruções de acesso ao material de forma digital.',
    },
    {
      q: 'Posso acessar pelo celular e imprimir as páginas?',
      a: 'Sim. Você pode acessar o material pelo celular, tablet ou computador e também imprimir as páginas para uso nos seus estudos, caso prefira.',
    },
    {
      q: 'Por quanto tempo terei acesso?',
      a: 'O acesso ao material é vitalício, permitindo que você volte aos conteúdos sempre que precisar estudar ou revisar.',
    },
    {
      q: 'Como funciona a garantia de 7 dias?',
      a: 'Você terá 7 dias para conhecer o material. Se dentro desse prazo entender que ele não atende às suas expectativas, poderá solicitar o reembolso dentro do período de garantia.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#4F46A8' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center uppercase"
          style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, marginBottom: '28px', lineHeight: 1.2 }}
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
                  border: '1px solid rgba(79,70,168,0.18)',
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
                      color: '#1D252C',
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
                      color: '#4F46A8',
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
                      borderTop: '1px solid rgba(79,70,168,0.18)',
                      backgroundColor: '#F7F7F5',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#1D252C', fontSize: '15px', lineHeight: 1.6 }}
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
