import React from 'react';

const Comparison = () => {
  const rows = [
    ['Premissa de partida', 'Sintoma é o problema', 'Sintoma é mensagem', 'Eixo HPA hiperativo é o problema'],
    ['Tempo de tratamento', '6 — 18 meses · indefinido', 'Anos · sem prazo', '12 meses · estruturado em 4 fases'],
    ['Mensuração de progresso', 'Auto-relato', 'Auto-relato verbal', 'Score quinzenal · marcadores objetivos'],
    ['Acompanhamento', 'Consultas espaçadas', 'Sessão semanal', 'Supervisão direta · 365 dias'],
    ['Risco de dependência', 'Médio a alto', 'Baixo · sem fármaco', 'Baixo · descarga progressiva'],
    ['Causa do não-resultado', 'Dose, adesão', 'Resistência, tempo', 'Falta de moldura clínica do estado'],
  ];
  return (
    <section className="compare">
      <div className="wrap">
        <div className="section-num">04 · Comparação</div>
        <h2 className="title">O que <em>já tentaram</em> com você.<br/>E por que <em>não resolveu.</em></h2>
        <p className="lede">Cada via abaixo trata uma camada legítima — mas nenhuma nomeia o estado de saturação que produz o sintoma. Sem moldura, o sintoma volta.</p>
        <div className="compare-table">
          <div className="compare-row head">
            <div className="compare-cell feature">Critério clínico</div>
            <div className="compare-cell">Ansiolítico</div>
            <div className="compare-cell">Terapia genérica</div>
            <div className="compare-cell us">Protocolo Saturação Neural</div>
          </div>
          {rows.map((r, i) => (
            <div className="compare-row" key={i}>
              <div className="compare-cell feature">{r[0]}</div>
              <div className="compare-cell">{r[1]}</div>
              <div className="compare-cell">{r[2]}</div>
              <div className="compare-cell us"><strong>{r[3]}</strong></div>
            </div>
          ))}
        </div>
        <div className="compare-hint">Deslize para comparar →</div>
      </div>
    </section>
  );
};

export default Comparison;
