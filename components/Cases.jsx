import React from 'react';

const CASES = [
  {
    name: 'Marina, 38',
    meta: 'Advogada · São Paulo',
    stage: 'Estágio 03 → 01',
    quote: 'Eu já sabia que não era só estresse. Mas ninguém tinha me dado uma resposta clínica que fizesse sentido. Foi a primeira vez em três anos que voltei a dormir a noite inteira.',
    stats: [
      { v: '−72%', l: 'Despertar 3h' },
      { v: '6.8h', l: 'Sono médio' },
      { v: '08m', l: 'Para Estágio 01' },
    ],
  },
  {
    name: 'Rafael, 44',
    meta: 'CFO · Rio de Janeiro',
    stage: 'Estágio 04 → 02',
    quote: 'Cheguei depois de um afastamento. Outros médicos diziam que era só descanso. O protocolo me devolveu uma estrutura mensurável — eu via no score que estava melhorando, mesmo nos dias ruins.',
    stats: [
      { v: '−58%', l: 'Carga acumulada' },
      { v: '0', l: 'Crises · 6 meses' },
      { v: '11m', l: 'Para Estágio 02' },
    ],
  },
  {
    name: 'Camila, 34',
    meta: 'Médica · Belo Horizonte',
    stage: 'Estágio 03 → 01',
    quote: 'Como médica, eu desconfiava de tudo o que prometesse rápido. O que me convenceu foi ver protocolo escrito, score aferido, fases nomeadas. Senti que estava sendo tratada como adulta.',
    stats: [
      { v: '−65%', l: 'Cortisol matinal' },
      { v: '7.4h', l: 'Sono médio' },
      { v: '09m', l: 'Para Estágio 01' },
    ],
  },
  {
    name: 'Lucas, 41',
    meta: 'Engenheiro · Curitiba',
    stage: 'Estágio 03 → 02',
    quote: 'Não acreditava mais em nenhum tratamento. O que mudou foi a primeira fase — em 60 dias o aperto no peito sumiu. Pela primeira vez vi um caminho com prazo, não uma promessa.',
    stats: [
      { v: '−81%', l: 'Sintomas físicos' },
      { v: '+44%', l: 'Foco diário' },
      { v: '10m', l: 'Para Estágio 02' },
    ],
  },
];

const Cases = () => (
  <section className="cases" id="casos">
    <div className="wrap">
      <div className="section-num">06 · Casos clínicos</div>
      <h2 className="title">Quatro pacientes.<br/>Quatro <em>scores diferentes.</em></h2>
      <p className="lede">Casos selecionados de pacientes que completaram pelo menos 8 meses do protocolo. Nomes alterados, dados clínicos preservados, consentimento por escrito arquivado conforme CFM.</p>

      <div className="cases-grid">
        {CASES.map((c, i) => (
          <div className="case" key={i}>
            <div className="case-meta">
              <div>
                <div className="case-name">{c.name}</div>
                <span style={{opacity:.6}}>{c.meta}</span>
              </div>
              <span style={{color:'var(--eucalyptus-soft)'}}>{c.stage}</span>
            </div>
            <p className="case-quote">{c.quote}</p>
            <div className="case-stats">
              {c.stats.map((s, j) => (
                <div className="case-stat" key={j}>
                  <span className="case-stat-val">{s.v}</span>
                  <span className="case-stat-lbl">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="case-disclaimer">Resultados individuais variam · Não constitui promessa de resultado · CFM 1.974/2011</p>
    </div>
  </section>
);

export default Cases;
