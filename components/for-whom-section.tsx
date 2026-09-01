export function ForWhomSection() {
  const profiles = [
    ['1', 'SÃO MUITOS NOMES PARA MEMORIZAR', 'Use fichas e mapas para organizar características de bactérias, fungos, vírus, meios de cultura e testes sem depender apenas da memorização por texto.'],
    ['2', 'EU SEMPRE CONFUNDO CONCEITOS PARECIDOS', 'Compare Gram+ x Gram−, Salmonella x Shigella, Staphylococcus x Streptococcus, exotoxina x endotoxina, vírus DNA x RNA e dezenas de outros pares.'],
    ['3', 'MINHAS ANOTAÇÕES ESTÃO ESPALHADAS', 'Tenha fundamentos, bacteriologia, laboratório, micologia, virologia e resistência organizados dentro do mesmo sistema visual.'],
    ['4', 'ENTENDO NA HORA, MAS DEPOIS ESQUEÇO', 'Volte às Revisões Express e aos Testes sua Memória para recuperar o conteúdo sem precisar reler tudo desde o início.'],
    ['5', 'QUERO ENXERGAR O ASSUNTO, NÃO APENAS LER', 'Observe estruturas, microrganismos, meios, testes, comparações e processos representados visualmente para criar referências mais fáceis de lembrar.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#1D1A2B' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty max-w-3xl" style={{ color: '#FFFFFF' }}>
            Se Microbiologia às Vezes Parece Informação Demais, Você Vai Entender Essa Sensação
          </h2>
        </div>
        <div className="for-whom-grid flex flex-wrap justify-center" style={{ gap: '28px' }}>
          {profiles.map(([number, title, description]) => (
            <div
              key={title}
              className="for-whom-card relative flex flex-col items-start text-left"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E4DEEF',
                boxShadow: '0 12px 30px rgba(29, 26, 43, 0.12)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#C9A34A' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'linear-gradient(135deg, #2F737A 0%, #5A3D82 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(29, 26, 43, 0.25)',
                  marginBottom: '20px',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg uppercase" style={{ color: '#5A3D82', marginBottom: '11px' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6872' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .for-whom-card {
          width: 100%;
        }
        .for-whom-card:hover {
          transform: translateY(-4px);
          border-color: #C9A34A;
          box-shadow: 0 18px 38px rgba(29, 26, 43, 0.16);
        }
        @media (min-width: 640px) {
          .for-whom-card {
            width: calc((100% - 28px) / 2);
          }
        }
        @media (min-width: 1024px) {
          .for-whom-card {
            width: calc((100% - 56px) / 3);
          }
        }
      `}</style>
    </section>
  );
}
