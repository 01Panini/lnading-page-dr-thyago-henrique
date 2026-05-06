import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Nav + Hero
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);

    // Detecção de tema (apenas mobile) para trocar cor do header
    const sections = document.querySelectorAll('section, footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          const bg = window.getComputedStyle(entry.target).backgroundColor;
          // Verificar se a cor de fundo é clara (bone/f5f3ee)
          const isBone = bg.includes('245, 243, 238') || bg.includes('234, 230, 220') || bg.includes('221, 215, 199');
          setIsLight(isBone);
        }
      });
    }, { threshold: [0.1, 0.5, 0.8] });

    sections.forEach(s => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${isLight ? 'is-light' : ''}`}>
      <a href="#top" className="nav-logo">
        <div className="nav-logo-name">Thyago <em>Henrique</em></div>
        <div className="nav-logo-status">Médico · CRM-GO 30.392</div>
      </a>
      <div className="nav-actions">
        <a href="#diagnostico" className="nav-cta">Fazer avaliação →</a>
        <div className="nav-brand-right">Saturação Neural<sup>™</sup></div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();

  // Animações de profundidade e blur
  const yContent = useTransform(scrollY, [0, 500], [0, -40]);
  const yVisual = useTransform(scrollY, [0, 500], [0, 40]);
  const blurVal = useTransform(scrollY, [0, 300], [1, 0]); // Blur quase zero conforme solicitado
  const opacityVisual = useTransform(scrollY, [0, 400], [0.5, 0.7]);

  return (
    <section className="hero" id="top">
      {/* Background System */}
      <div className="hero-particles" />
      <div className="hero-grain" />
      <div className="hero-shadow" />

      <div className="hero-grid">
        {/* LADO ESQUERDO (70%) - Conteúdo Editorial */}
        <motion.div
          className="hero-content"
          style={{ y: yContent }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            SISTEMA DE DESCARGA NEURAL · PROTOCOLO CLÍNICO 365D
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            O cérebro que <em>não desliga</em> não tem ansiedade.<br />Tem <em>Saturação.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.5, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Você não precisa de motivação. Você precisa de um protocolo médico de 12 meses para descarregar o estado de alerta crônico do seu eixo HPA. Baseado em dados, não em promessas.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn-primary" onClick={() => document.getElementById('diagnostico').scrollIntoView({ behavior: 'smooth' })}>
              Acessar avaliação de perfil
              <span style={{ fontSize: 14, letterSpacing: 0 }}>→</span>
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById('medico').scrollIntoView({ behavior: 'smooth' })}>
              Conhecer o Médico
            </button>
          </motion.div>
        </motion.div>

        {/* LADO DIREITO (30%) - Visual do Médico */}
        <div className="hero-visual">
          <motion.div
            className="hero-doctor-wrap"
            style={{
              y: yVisual,
              opacity: opacityVisual,
              filter: `blur(${blurVal}px)`
            }}
            initial={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
            animate={{ opacity: 0.7, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/assets/dr-thyago-clinical.png"
              alt="Dr. Thyago Henrique — Visão Clínica"
              style={{ objectPosition: 'center 20%' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Authority Meta Bar */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div>Expertise<br /><strong>3.400+ <em>Atendimentos</em></strong></div>
        <div>Mecanismo<br /><strong>Saturação <em>Neural</em><sup>™</sup></strong></div>
        <div>Estrutura<br /><strong>365 Dias <em>de Protocolo</em></strong></div>
        <div>Credencial<br /><strong>CRM-GO <em>30.392</em></strong></div>
      </motion.div>
    </section>
  );
};

export default Nav;
