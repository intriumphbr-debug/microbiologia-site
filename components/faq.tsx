'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem é este material de Osteologia Veterinária?',
      a: 'O material foi criado principalmente para estudantes de Medicina Veterinária que querem estudar e revisar Osteologia de forma mais visual, organizada e prática.',
    },
    {
      q: 'Quais espécies aparecem no material?',
      a: 'O conteúdo apresenta comparações entre canino, equino, bovino e suíno, destacando estruturas e diferenças anatômicas importantes entre as espécies.',
    },
    {
      q: 'O material substitui livros e aulas da faculdade?',
      a: 'Não. Ele funciona como um material complementar de estudo e revisão, ajudando você a visualizar melhor as estruturas e organizar os principais conteúdos de Osteologia.',
    },
    {
      q: 'O material é físico ou digital?',
      a: 'O material é 100% digital. Após a confirmação da compra, você receberá acesso para consultar os conteúdos online.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Sim. Você pode acessar pelo celular, tablet ou computador sempre que precisar estudar ou revisar.',
    },
    {
      q: 'Posso imprimir?',
      a: 'Sim. As páginas podem ser utilizadas digitalmente e também impressas para estudo pessoal.',
    },
    {
      q: 'Como receberei o acesso e por quanto tempo poderei usar?',
      a: 'Após a confirmação do pagamento, você receberá as instruções de acesso no e-mail informado na compra. O acesso é vitalício, para consultar o material sempre que precisar.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você terá 7 dias de garantia após a compra. Dentro desse período, caso o material não atenda às suas expectativas, poderá solicitar o reembolso conforme as regras da plataforma de pagamento.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#2F2925' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center"
          style={{ color: '#FBF8F2', fontSize: '32px', fontWeight: 600, marginBottom: '28px', lineHeight: 1.2 }}
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
                  backgroundColor: '#FBF8F2',
                  border: '1px solid rgba(90,58,39,0.18)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(47, 41, 37, 0.18)',
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
                      color: '#2F2925',
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
                      color: '#9D4E35',
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
                      borderTop: '1px solid rgba(90,58,39,0.18)',
                      backgroundColor: '#F3EBDD',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#2F2925', fontSize: '15px', lineHeight: 1.6 }}
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
