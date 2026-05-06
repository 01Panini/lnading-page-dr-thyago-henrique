import React from 'react';

const Footer = () => (
  <footer className="foot">
    <div className="foot-top">
      <div className="foot-brand">
        <h3>Thyago <em>Henrique</em></h3>
        <div className="foot-status">Médico · CRM-GO 30.392</div>
        <p>Medicina da Saturação Neural — protocolo clínico para profissionais que já tentaram terapia, meditação e medicação sem encontrar a moldura do que sentem.</p>
      </div>
      <div className="foot-col">
        <h4>Protocolos</h4>
        <ul>
          <li><a href="#produtos">Códigos da Mente · 365D</a></li>
          <li><a href="#produtos">Mapa de Saturação · 30D</a></li>
          <li><a href="#produtos">Aulas do Eixo HPA</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>Sobre</h4>
        <ul>
          <li><a href="#medico">O médico</a></li>
          <li><a href="#mecanismo">Mecanismo</a></li>
          <li><a href="#casos">Casos clínicos</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Termos de uso</a></li>
          <li><a href="#">Política de privacidade</a></li>
          <li><a href="#">LGPD · Dados sensíveis</a></li>
          <li><a href="#">Contato clínico</a></li>
        </ul>
      </div>
    </div>
    <p className="foot-disclaimer">
      Este conteúdo possui caráter meramente educativo e informativo, não substituindo a consulta médica presencial. O protocolo Saturação Neural é um framework clínico autoral e complementar, não constituindo diagnóstico CID/DSM ou promessa de cura. Resultados individuais podem variar. Em estrita conformidade com a <strong>Resolução CFM nº 2.336/2023</strong> e LGPD para proteção de dados sensíveis de saúde.
    </p>
    <div className="foot-bottom">
      <span>© 2026 · Dr. Thyago Henrique · CRM-GO 30.392</span>
      <span>Saturação Neural™ · Todos os direitos reservados</span>
    </div>
  </footer>
);

export default Footer;
