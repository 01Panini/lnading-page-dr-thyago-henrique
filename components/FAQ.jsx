import React from 'react';

const FAQS = [
  { q: 'O protocolo substitui meu tratamento atual?', a: 'Não. O protocolo é complementar e nunca interrompe medicação ou terapia em curso. Qualquer ajuste de fármaco é feito sob supervisão do seu médico assistente — nunca de forma autônoma.' },
  { q: 'Saturação Neural é diagnóstico oficial?', a: 'Não é diagnóstico médico no CID/DSM. Saturação Neural é o framework clínico que o Dr. Thyago utiliza para nomear e descarregar um padrão neuroendócrino observado em mais de 3.400 atendimentos. A terminologia oficial permanece em paralelo, sempre que aplicável.' },
  { q: 'Como funciona a supervisão de 365 dias?', a: 'Encontros quinzenais ao vivo em pequenos grupos clínicos, aplicação do score quinzenalmente, ajustes de protocolo a cada bloco de 90 dias, e canal direto para dúvidas técnicas com a equipe clínica.' },
  { q: 'Eu preciso parar minha medicação?', a: 'Em hipótese alguma sem supervisão médica direta. O protocolo opera em paralelo. Reduções, ajustes ou descontinuações são decisões clínicas individuais, sempre acompanhadas pelo médico que prescreveu.' },
  { q: 'Quanto tempo até eu sentir diferença?', a: 'A primeira fase (Estabilização) dura 60 dias. A maioria dos pacientes relata mudança mensurável no score dentro deste primeiro bloco — mas o protocolo é desenhado para 12 meses porque a consolidação neuroendócrina exige tempo biológico, não tempo de marketing.' },
  { q: 'Funciona se eu já tentei terapia e remédio?', a: 'O protocolo foi construído precisamente para esse perfil. A maior parte dos pacientes chega após terapia, ansiolítico, mindfulness, retiros — tendo tentado tudo, menos uma moldura clínica do estado de saturação.' },
  { q: 'Há contraindicações?', a: 'Sim. Quadros psiquiátricos agudos não estabilizados, transtornos psicóticos em crise, dependência química ativa e gestantes em primeiro trimestre são casos em que o protocolo não é indicado neste momento. A triagem clínica avalia compatibilidade antes da entrada.' },
];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="section-num">08 · Perguntas frequentes</div>
        <div className="faq-grid">
          <div>
            <h2 className="title" style={{marginBottom:24}}>Dúvidas <em>clínicas.</em><br/>Respostas <em>diretas.</em></h2>
            <p className="lede">Sem floreios, sem evasivas. Se a sua pergunta não estiver aqui, escreva — respondemos em até 24h.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
