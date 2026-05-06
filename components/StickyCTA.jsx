import React from 'react';

const StickyCTA = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      // show after first viewport, hide near footer & near quiz
      const quiz = document.getElementById('diagnostico');
      const foot = document.querySelector('footer.foot');
      const inQuiz = quiz && y + h > quiz.offsetTop && y < quiz.offsetTop + quiz.offsetHeight;
      const inFoot = foot && y + h > foot.offsetTop;
      setShow(y > h * 0.8 && !inQuiz && !inFoot);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`sticky-cta ${show ? 'show' : ''}`}>
      <span className="sticky-cta-text">
        <span>Avaliação inicial · <em>gratuito</em></span>
        <strong>4 perguntas, 90 segundos</strong>
      </span>
      <button className="sticky-cta-btn" onClick={() => document.getElementById('diagnostico').scrollIntoView({ behavior: 'smooth' })}>
        Começar →
      </button>
    </div>
  );
};

export default StickyCTA;
