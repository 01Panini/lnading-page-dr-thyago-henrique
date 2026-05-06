import React from 'react';

const Authority = () => {
  const items = [
    'CRM-GO 30392',
    'Pós-graduação · Hospital Israelita Albert Einstein',
    'Psiquiatria Infantil · IBCMED',
    'ACLS · American Heart Association',
    'Coordenador & Autor · Livro ISBN · 29 capítulos',
    'Preceptor de Medicina · UNICERRADO',
  ];
  // Duplicate for seamless loop
  const list = [...items, ...items];
  return (
    <div className="authority">
      <div className="auth-track">
        {list.map((it, i) => (
          <React.Fragment key={i}>
            <span><strong>{it.split(' · ')[0]}</strong>{it.includes(' · ') ? ' · ' + it.split(' · ').slice(1).join(' · ') : ''}</span>
            <span className="dot"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Authority;
