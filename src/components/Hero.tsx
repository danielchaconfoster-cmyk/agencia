import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Agencia de Servicios Digitales
        </div>

        <h1 className="hero-title">
          Transformamos tu negocio en el
          <span className="gradient-text"> mundo digital</span>
        </h1>

        <p className="hero-desc">
          Diseño web, automatizaciones, branding, redes sociales y consultoría digital.
          Todo lo que necesitas para crecer en línea, en un solo lugar.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('#servicios')}>
            Ver Servicios
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-outline" onClick={() => scrollTo('#contacto')}>
            Hablar con un Experto
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">+150</span>
            <span className="stat-label">Proyectos entregados</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">+80</span>
            <span className="stat-label">Clientes satisfechos</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
        </div>
      </div>

      <div className="container hero-image-row">
        <div className="hero-cards">
          {[
            { icon: '🌐', title: 'Páginas Web', desc: 'Diseño profesional y moderno' },
            { icon: '⚡', title: 'Automatizaciones', desc: 'Procesos más eficientes' },
            { icon: '🎨', title: 'Diseño de Marca', desc: 'Identidad única y poderosa' },
          ].map((card) => (
            <div className="hero-card" key={card.title}>
              <span className="hero-card-icon">{card.icon}</span>
              <div>
                <p className="hero-card-title">{card.title}</p>
                <p className="hero-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('#servicios')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
