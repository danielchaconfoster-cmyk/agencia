import './Footer.css';

const footerLinks = {
  'Servicios': [
    'Páginas Web',
    'Automatizaciones',
    'Manejo de RRSS',
    'Asesoría Digital',
    'Diseño de Marca',
    'Marketing Digital',
  ],
  'Empresa': [
    'Sobre Nosotros',
    'Portafolio',
    'Blog',
    'Casos de Éxito',
    'Trabaja con Nosotros',
  ],
  'Legal': [
    'Política de Privacidad',
    'Términos de Uso',
    'Política de Cookies',
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-cta-text">
            <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p>Contáctanos hoy y recibe una consultoría gratuita de 30 minutos.</p>
          </div>
          <div className="footer-cta-actions">
            <button className="btn-primary" onClick={() => scrollTo('#contacto')}>
              Cotizar Gratis
            </button>
            <a href="https://wa.me/541155555678" className="btn-outline" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
              <span className="logo-icon">⬡</span>
              <span className="logo-text">NEXUS<span className="logo-accent">Digital</span></span>
            </a>
            <p className="footer-brand-desc">
              Agencia de servicios digitales especializada en transformar negocios a través del diseño,
              la tecnología y el marketing digital.
            </p>

            <div className="footer-contact-list">
              <a href="tel:+541155551234" className="footer-contact-item">
                <span>📞</span>
                <span>+54 11 5555-1234</span>
              </a>
              <a href="tel:+541155555678" className="footer-contact-item">
                <span>💬</span>
                <span>+54 11 5555-5678 (WhatsApp)</span>
              </a>
              <a href="mailto:hola@nexusdigital.com" className="footer-contact-item">
                <span>✉️</span>
                <span>hola@nexusdigital.com</span>
              </a>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            <div className="footer-social">
              {[
                { label: 'Instagram', icon: '📸', href: '#' },
                { label: 'LinkedIn', icon: '💼', href: '#' },
                { label: 'Facebook', icon: '👥', href: '#' },
                { label: 'TikTok', icon: '🎵', href: '#' },
                { label: 'YouTube', icon: '▶️', href: '#' },
              ].map((s) => (
                <a href={s.href} key={s.label} className="footer-social-icon" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="footer-col" key={category}>
              <h4 className="footer-col-title">{category}</h4>
              <ul className="footer-col-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} NEXUS Digital. Todos los derechos reservados.
          </p>
          <p className="footer-made">
            Hecho con 💜 en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
