import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Nav from './components/Hero.jsx'; // In the current setup Nav and Hero are in the same file
import { Hero } from './components/Hero.jsx';
import Authority from './components/Authority.jsx';
import Mechanism from './components/Mechanism.jsx';
import Doctor from './components/Doctor.jsx';
import Comparison from './components/Comparison.jsx';
import Quiz from './components/Quiz.jsx';
import Products from './components/Products.jsx';
import Cases from './components/Cases.jsx';
import Guarantee from './components/Guarantee.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import StickyCTA from './components/StickyCTA.jsx';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Authority />
      <Mechanism />
      <Doctor />
      <Comparison />
      <Quiz />
      <Products />
      <Cases />
      <Guarantee />
      <FAQ />
      <Footer />
      <StickyCTA />
    </>
  );
};

export default App;
