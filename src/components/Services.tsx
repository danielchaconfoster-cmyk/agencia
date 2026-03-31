import './Services.css';

const services = [
  {
    icon: '🌐',
    title: 'Páginas Web',
    desc: 'Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Responsive, SEO-friendly y con panel de administración.',
    features: ['Diseño personalizado', 'Responsive design', 'Optimización SEO', 'Panel de gestión'],
    color: '#6C63FF',
  },
  {
    icon: '⚡',
    title: 'Automatizaciones',
    desc: 'Automatizamos procesos repetitivos de tu negocio para ahorrarte tiempo y dinero. Integramos herramientas, flujos de trabajo y sistemas para que todo funcione solo.',
    features: ['Flujos de trabajo', 'Integraciones API', 'Chatbots con IA', 'CRM automático'],
    color: '#FF6584',
  },
  {
    icon: '📱',
    title: 'Manejo de RRSS',
    desc: 'Gestionamos tus redes sociales con estrategia, contenido de calidad y análisis de métricas. Crecemos tu comunidad y mejoramos tu presencia en línea.',
    features: ['Calendarios editoriales', 'Diseño de contenido', 'Análisis de métricas', 'Pauta digital'],
    color: '#43E8A0',
  },
  {
    icon: '🎯',
    title: 'Asesoría Digital',
    desc: 'Te acompañamos en la transformación digital de tu negocio con estrategias personalizadas, análisis de competencia y planes de acción concretos.',
    features: ['Auditoría digital', 'Plan estratégico', 'Consultoría 1:1', 'Seguimiento mensual'],
    color: '#FFB347',
  },
  {
    icon: '🎨',
    title: 'Diseño de Marca',
    desc: 'Creamos identidades visuales poderosas que comunican la esencia de tu negocio. Logo, paleta de colores, tipografía y manual de marca completo.',
    features: ['Logotipo profesional', 'Manual de marca', 'Papelería corporativa', 'Activos digitales'],
    color: '#FF79C6',
  },
  {
    icon: '📊',
    title: 'Marketing Digital',
    desc: 'Estrategias de marketing orientadas a resultados. Email marketing, campañas en Google, Meta Ads y analítica avanzada para maximizar tu ROI.',
    features: ['Google & Meta Ads', 'Email marketing', 'Analytics avanzado', 'Landing pages'],
    color: '#8BE9FD',
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Nuestros Servicios</div>
          <h2 className="section-title">
            Todo lo que tu negocio
            <span className="gradient-text"> necesita para crecer</span>
          </h2>
          <p className="section-subtitle">
            Ofrecemos soluciones digitales integrales adaptadas a las necesidades de cada cliente.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon-wrap" style={{ '--service-color': service.color } as React.CSSProperties}>
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f} className="feature-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="service-cta" onClick={() => scrollTo('#contacto')}>
                Solicitar servicio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
