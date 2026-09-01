export function WhatYouGet() {
  const colecoes = [
    ['40', 'MAPAS VISUAIS', 'Estude visualmente temas como estrutura da célula bacteriana, Gram-positivas e Gram-negativas, morfologia, crescimento microbiano, nutrição, oxigênio, Staphylococcus, Streptococcus, enterobactérias, virulência, meios de cultura, micologia, virologia e outros assuntos fundamentais.', 'Entender e organizar o assunto.'],
    ['30', 'NÃO CONFUNDA', 'Compare lado a lado conceitos e microrganismos que costumam gerar dúvida: Staphylococcus x Streptococcus, Salmonella x Shigella, exotoxina x endotoxina, esterilização x desinfecção x antissepsia, vírus DNA x RNA, leveduras x fungos filamentosos e muito mais.', 'Diferenciar conceitos parecidos.'],
    ['40', 'FICHAS VISUAIS', 'Aprofunde e revise microrganismos específicos como Staphylococcus aureus, Streptococcus pyogenes, E. coli, Klebsiella pneumoniae, Salmonella, Pseudomonas aeruginosa, Mycobacterium tuberculosis, Candida albicans, Aspergillus fumigatus, HIV, HPV, Influenza e outros.', 'Memorizar características e pontos-chave.'],
    ['15', 'REVISÃO EXPRESS', 'Revise grandes blocos de microbiologia em uma única página: fundamentos, estrutura bacteriana, Gram e colorações, crescimento, cocos Gram-positivos, enterobactérias, resistência antimicrobiana, meios de cultura, micologia, virologia e outros.', 'Revisar rapidamente antes de provas e estudos.'],
    ['15', 'TESTE SUA MEMÓRIA', 'Coloque o conteúdo em prática com identificação visual, verdadeiro ou falso, associação de conceitos, tabelas para completar e desafios sobre Gram, crescimento, enterobactérias, virulência, meios de cultura, testes bioquímicos, fungos, vírus e resistência.', 'Recuperar e fixar o conteúdo estudado.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#4F46A8' }}>
            <span style={{ color: '#4F46A8' }}>140 Recursos Visuais</span> Organizados em 5 Coleções
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#667179' }}>
            Cada coleção cumpre uma função diferente no estudo, mas todas trabalham juntas para levar você do entendimento inicial à revisão e à fixação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {colecoes.map(([count, title, description, funcao]) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col rounded-[18px] border bg-white p-6 shadow-[0_8px_24px_rgba(29,26,43,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#E1B343] hover:shadow-[0_14px_30px_rgba(29,26,43,0.12)]"
              style={{ borderColor: 'rgba(79,70,168,0.15)' }}
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#E1B343] opacity-70 transition-opacity duration-250 group-hover:opacity-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-grotesk text-4xl leading-none sm:text-5xl" style={{ color: '#4F46A8' }}>
                  {count}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#4F46A8' }}>
                  Recursos
                </span>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty sm:text-xl" style={{ color: '#4F46A8' }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#667179' }}>{description}</p>
              </div>
              <p className="mt-5 border-t pt-4 text-xs sm:text-sm" style={{ color: '#667179', borderColor: 'rgba(79,70,168,0.15)' }}>
                <span className="font-bold uppercase tracking-wide" style={{ color: '#4F46A8' }}>Função:</span>{' '}
                {funcao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
