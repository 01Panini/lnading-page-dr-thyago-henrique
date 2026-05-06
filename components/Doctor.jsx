import React from 'react';
import { motion } from 'framer-motion';

const Doctor = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="doctor" id="medico">
      <div className="wrap">
        <motion.div
          className="section-num"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          03 · O Médico
        </motion.div>

        <div className="doc-grid">
          <motion.div
            className="doc-photo"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/assets/dr-thyago.png" alt="Dr. Thyago Henrique" />
            <div className="doc-photo-cap">
              <div>
                <strong>Dr. Thyago Henrique</strong>
                <span>Medicina · <em>Psiquiatria Einstein</em></span>
              </div>
              <div>CRM-GO<br /><span style={{ color: 'var(--bone)', fontFamily: 'var(--mono)', fontSize: 11 }}>30.392</span></div>
            </div>
          </motion.div>

          <div className="doc-info">
            <motion.div
              className="eyebrow"
              style={{ marginBottom: 24 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Apresentação clínica
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Quatorze anos atendendo pacientes que <em>já tentaram tudo.</em>
            </motion.h3>

            <motion.p
              className="doc-bio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Dr. Thyago Henrique é médico formado pela Universidade José do Rosário Vellano (UNIFENAS), com pós-graduação em psiquiatria pelo <strong>Hospital Israelita Albert Einstein</strong>, atualmente cursando pós-graduação em psiquiatria infantil pelo IBCMED.
            </motion.p>

            <motion.p
              className="doc-bio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Sua atuação combina urgência, ensino e prática clínica: trabalha na <strong>UTI do Hospital Municipal de Morrinhos-GO</strong>, no setor de urgência e emergência do Hospital Municipal de Goiatuba-GO, e é preceptor do internato do curso de medicina da UNICERRADO.
            </motion.p>

            <motion.dl
              className="cred-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Registro', val: <strong>CRM-GO 30.392</strong>, meta: ' · Atuação ativa' },
                { label: 'Formação', val: <span>Medicina · <strong>UNIFENAS</strong></span> },
                { label: 'Pós · Adulto', val: <span>Psiquiatria · <strong>Hospital Einstein</strong></span> },
                { label: 'Pós · Infantil', val: <span>Psiquiatria infantil · <strong>IBCMED</strong></span> },
                { label: 'Atuação', val: <span>UTI · Urgência · Internato · Coordenador</span> },
                { label: 'Publicação', val: <span>Autor · <em>Genética Médica</em> · <strong>ISBN</strong></span> }
              ].map((c, i) => (
                <motion.div key={i} className="cred-row" variants={itemVariants}>
                  <dt>{c.label}</dt>
                  <dd>{c.val}{c.meta}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>

        <motion.div
          className="doc-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { num: '14', s: '+', label: 'Anos · Prática clínica' },
            { num: '3.4', s: 'k', label: 'Atendimentos realizados' },
            { num: '29', s: '', label: 'Capítulos publicados · ISBN' }
          ].map((s, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="doc-stat-num">{s.num}<em>{s.s}</em></div>
              <div className="doc-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Doctor;
