'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem é a Osteologia Veterinária?',
      a: 'O material foi desenvolvido principalmente para estudantes de Medicina Veterinária que estão cursando Anatomia/Osteologia e querem facilitar a identificação de ossos, acidentes ósseos, vistas e diferenças entre espécies.',
    },
    {
      q: 'O material substitui livros e aulas da faculdade?',
      a: 'Não. Ele funciona como um material visual complementar de estudo e revisão, ajudando você a organizar e reconhecer melhor as estruturas estudadas nas aulas e livros.',
    },
    {
      q: 'Quais espécies aparecem no material?',
      a: 'As principais comparações trabalham canino, equino, bovino e suíno, destacando diferenças morfológicas importantes quando aplicável.',
    },
    {
      q: 'O material é físico ou digital?',
      a: '100% digital. Nenhum material físico será enviado para o seu endereço.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Sim. O material poderá ser consultado pelo celular, tablet ou computador.',
    },
    {
      q: 'Posso imprimir?',
      a: 'Sim. Caso o formato de entrega permita download em PDF, as páginas poderão ser impressas para uso pessoal.',
    },
    {
      q: 'Como receberei o acesso?',
      a: 'O acesso é liberado após a confirmação do pagamento, através dos dados cadastrados na compra.',
    },
    {
      q: 'Por quanto tempo terei acesso?',
      a: 'Acesso vitalício, permitindo que você volte aos conteúdos sempre que precisar estudar ou revisar.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você possui 7 dias após a compra para conhecer o material e solicitar reembolso caso ele não atenda às suas expectativas.',
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
