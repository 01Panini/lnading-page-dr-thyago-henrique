import React from 'react';
import { motion } from 'framer-motion';

const STAGES = [
  {
    num: '01',
    name: ['Saturação', 'Latente'],
    score: '25 — 50',
    fill: 35,
    symptoms: [
      'Cansaço que não passa com fim de semana',
      'Sono parece bom, mas o corpo acorda em alerta',
      'Produtividade ainda funciona — pelo medo',
      'Irritabilidade subterrânea, contida',
    ],
  },
  {
    num: '02',
    name: ['Saturação', 'Ativa'],
    score: '50 — 70',
    fill: 60,
    symptoms: [
      'Acordar 3h da manhã virou rotina',
      'Irritabilidade explode com quem você ama',
      'Esquecimentos pontuais, traves decisórias',
      'Crises silenciosas no carro, na escada',
    ],
  },
  {
    num: '03',
    name: ['Saturação', 'Crônica'],
    score: '70 — 88',
    fill: 79,
    symptoms: [
      'Sintomas físicos aparecem',
      'Aperto no peito, refluxo persistente',
      'Pressão alta sem causa identificada',
      'Corpo entrega o que a mente vinha empurrando',
    ],
  },
  {
    num: '04',
    name: ['Colapso', 'Funcional'],
    score: '88 — 100',
    fill: 94,
    symptoms: [
      'Burnout clínico, travas decisórias',
      'Ataques de pânico recorrentes',
      'Afastamento involuntário do trabalho',
      'Esgotamento que não cede com nada',
    ],
  },
];

const Mechanism = () => {
  const [active, setActive] = React.useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="mechanism" id="mecanismo">
      <div className="wrap">
        <motion.div 
          className="section-num"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          02 · Mecanismo Proprietário
        </motion.div>
        
        <div className="mech-head">
          <motion.h2 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Saturação Neural <em>não é diagnóstico.</em><br/>É a moldura clínica do que você <em>já sente.</em>
          </motion.h2>
          <motion.p 
            className="lede"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Estado de hiperatividade crônica do eixo HPA caracterizado por ativação simpática persistente, ritmo circadiano fragmentado e exaustão funcional progressiva — distribuído em quatro estágios mensuráveis.
          </motion.p>
        </div>

        <motion.div 
          className="mech-tm"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mech-tm-grid">
            <h3 className="mech-tm-name">Saturação<br/><em>Neural</em><sup>™</sup></h3>
            <p className="mech-tm-def">Quando o eixo <strong>HPA</strong> permanece em alerta crônico, o corpo perde a capacidade de descer para repouso. Cortisol não acumula — mas o estado de ativação que ele produz, sim. <strong>Esse é o terreno onde toda a clínica opera.</strong></p>
          </div>
        </motion.div>

        <motion.div 
          className="stages"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {STAGES.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`stage ${active === i ? 'active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <div>
                <div className="stage-num">Estágio {s.num}</div>
                <h4 className="stage-name">{s.name[0]}<br/><em>{s.name[1]}</em></h4>
                <ul className="stage-symptoms">
                  {s.symptoms.map((sm, j) => <li key={j}>{sm}</li>)}
                </ul>
              </div>
              <div>
                <div className="stage-bar">
                  <motion.div 
                    className="stage-bar-fill" 
                    animate={{ width: active === i ? `${s.fill}%` : '0%' }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  ></motion.div>
                </div>
                <div className="stage-score">
                  <span>Score</span>
                  <span>{s.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mechanism;
