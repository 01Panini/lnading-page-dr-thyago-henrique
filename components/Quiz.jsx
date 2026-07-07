import React from 'react';

const QUIZ_QUESTIONS = [
  {
    q: 'Como é seu sono nas últimas 4 semanas?',
    options: [
      { t: 'Durmo bem, acordo descansado', p: 0 },
      { t: 'Demoro a dormir, mas o sono é bom', p: 8 },
      { t: 'Acordo no meio da noite e custa voltar', p: 18 },
      { t: 'Acordo às 3h alerta, quase todos os dias', p: 28 },
    ],
  },
  {
    q: 'Como seu corpo reage ao acordar?',
    options: [
      { t: 'Tranquilo, leve, descansado', p: 0 },
      { t: 'Já em modo lista, mas funcional', p: 8 },
      { t: 'Coração acelerado antes do café', p: 18 },
      { t: 'Tensão, aperto no peito, alerta total', p: 26 },
    ],
  },
  {
    q: 'Você já tentou resolver isso antes?',
    options: [
      { t: 'Não, nunca tratei', p: 4 },
      { t: 'Sim · meditação, app, mindfulness', p: 12 },
      { t: 'Sim · terapia em curso ou recente', p: 18 },
      { t: 'Sim · terapia + medicação · ainda assim', p: 26 },
    ],
  },
  {
    q: 'Como está sua paciência com quem você ama?',
    options: [
      { t: 'Estável, dentro do esperado', p: 0 },
      { t: 'Mais curta que costumava ser', p: 10 },
      { t: 'Exploda por nada, depois me culpo', p: 18 },
      { t: 'Mal me reconheço · isso me assusta', p: 22 },
    ],
  },
];

const STAGE_RESULTS = [
  { name: ['Saturação', 'Latente'], score: '< 35', desc: 'Seu corpo ainda está compensando, mas a carga já é detectável. Este é o melhor momento para intervir — antes que sintomas físicos apareçam.' },
  { name: ['Saturação', 'Ativa'], score: '35 — 60', desc: 'O eixo HPA está em ativação simpática persistente. Sintomas já interferem em sono, humor e relações. Janela ideal para protocolo de descarga progressiva.' },
  { name: ['Saturação', 'Crônica'], score: '60 — 82', desc: 'Padrão neuroendócrino consolidado. Sintomas físicos começam a aparecer. Recuperação exige estrutura clínica e supervisão direta — não improviso.' },
  { name: ['Colapso', 'Funcional'], score: '> 82', desc: 'Estado de exaustão funcional. Recomendação de avaliação clínica imediata em paralelo ao protocolo. Não é sentença — é o ponto onde o tratamento estruturado tem maior taxa de resposta.' },
];

const Quiz = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const total = QUIZ_QUESTIONS.length;

  const choose = (pts) => {
    const newAnswers = [...answers, pts];
    setAnswers(newAnswers);
    setStep(step + 1);
  };
  const back = () => {
    if (step === 0) return;
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  };
  const reset = () => { setStep(0); setAnswers([]); };

  const score = answers.reduce((a, b) => a + b, 0);
  let resultIdx = 0;
  if (score >= 82) resultIdx = 3;
  else if (score >= 60) resultIdx = 2;
  else if (score >= 35) resultIdx = 1;
  const result = STAGE_RESULTS[resultIdx];
  const meterPct = Math.min(100, (score / 102) * 100);

  return (
    <section className="quiz" id="diagnostico">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 24, color: 'var(--eucalyptus-soft)', justifyContent: 'center', display: 'inline-flex' }}>
            Triagem Clínica
          </div>
          <h2 className="title" style={{ marginBottom: 0 }}>Em <em>4 perguntas,</em> identifique<br />seu estágio de Saturação Neural.</h2>
        </div>

        <div className="quiz-frame">
          {step < total ? (
            <>
              <div className="quiz-progress">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div key={i} className={`quiz-prog-step ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`}></div>
                ))}
              </div>
              <div className="quiz-step-num">Pergunta {step + 1} de {total}</div>
              <h3 className="quiz-question">{QUIZ_QUESTIONS[step].q}</h3>
              <div className="quiz-options">
                {QUIZ_QUESTIONS[step].options.map((opt, i) => (
                  <button key={i} className="quiz-option" onClick={() => choose(opt.p)}>
                    <span>{opt.t}</span>
                    <span className="pts">+{opt.p} pts</span>
                  </button>
                ))}
              </div>
              <div className="quiz-nav">
                <span className="quiz-back" onClick={back} style={{ visibility: step === 0 ? 'hidden' : 'visible' }}>← Voltar</span>
                <span>Não substitui consulta médica · LGPD</span>
              </div>
            </>
          ) : (
            <div className="quiz-result">
              <div className="quiz-result-eyebrow">Resultado · Score {score} / 102</div>
              <h3 className="quiz-result-stage">{result.name[0]}<br /><em>{result.name[1]}</em></h3>
              <div className="quiz-result-meter">
                <div className="quiz-result-meter-fill" style={{ width: `${meterPct}%` }}></div>
              </div>
              <div className="quiz-result-score">
                <span>Latente</span>
                <span>Ativa</span>
                <span>Crônica</span>
                <span>Colapso</span>
              </div>
              <p className="quiz-result-desc">{result.desc}</p>
              <div className="quiz-result-cta">
                <button className="btn-primary" onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}>
                  Ver protocolos disponíveis →
                </button>
                <button className="btn-ghost" onClick={reset}>Refazer diagnóstico</button>
              </div>
              <p style={{ marginTop: 32, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(242,244,255,.4)' }}>
                Este score é orientativo e não substitui avaliação médica presencial.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
