import React from 'react';

const Products = () => (
  <section className="products" id="produtos">
    <div className="wrap">
      <div className="section-num">05 · Protocolos & Produtos</div>
      <div className="prod-head">
        <h2 className="title">Três caminhos.<br/><em>Mesma origem clínica.</em></h2>
        <p className="lede">Cada protocolo opera em uma fase específica do espectro de Saturação Neural. Todos partem do mesmo mecanismo — mudam profundidade, duração e nível de supervisão.</p>
      </div>
      <div className="prod-grid">
        <div className="prod-card flagship">
          <span className="prod-tag">Principal · 365D</span>
          <div>
            <div className="prod-eyebrow">Protocolo médico · Alto compromisso</div>
            <h3 className="prod-name">Códigos da<br/><em>Mente</em></h3>
            <p className="prod-desc">
              Protocolo de 12 meses estruturado em 4 fases — Estabilização, Reconstrução, Consolidação e Manutenção. Score quinzenal, supervisão médica direta, ajustes individualizados a cada bloco.
            </p>
          </div>
          <div>
            <div className="prod-meta">
              <span>Duração · 365 dias · 4 fases</span>
              <span>Modalidade · 100% online · Supervisão direta</span>
              <strong>R$ 2.997 · em até 12x</strong>
            </div>
            <a className="prod-cta" href="#diagnostico">Aplicar para vaga →</a>
          </div>
        </div>

        <div className="prod-card">
          <div>
            <div className="prod-eyebrow">Diagnóstico · 30 dias</div>
            <h3 className="prod-name">Mapa de<br/><em>Saturação</em></h3>
            <p className="prod-desc">
              Avaliação completa em 30 dias com identificação de fase, mapeamento de gatilhos neuroendócrinos e plano clínico individualizado entregue em PDF.
            </p>
          </div>
          <div>
            <div className="prod-meta">
              <span>Duração · 30 dias</span>
              <strong>R$ 1.497</strong>
            </div>
            <a className="prod-cta" href="#diagnostico">Saber mais →</a>
          </div>
        </div>

        <div className="prod-card">
          <div>
            <div className="prod-eyebrow">Estudo clínico · 8 módulos</div>
            <h3 className="prod-name">Aulas<br/>do <em>Eixo HPA</em></h3>
            <p className="prod-desc">
              Curso autônomo com 8 módulos densos sobre o eixo HPA, ritmo circadiano e neurobiologia da saturação. Para quem quer entender a fundo antes de entrar no protocolo.
            </p>
          </div>
          <div>
            <div className="prod-meta">
              <span>8 módulos · Acesso 12 meses</span>
              <strong>R$ 597</strong>
            </div>
            <a className="prod-cta" href="#diagnostico">Acessar →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
