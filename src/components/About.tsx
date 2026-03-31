import './About.css';

const team = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO & Estratega Digital',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sofía Ramírez',
    role: 'Directora de Diseño',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Diego Torres',
    role: 'Lead Developer',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Valentina Cruz',
    role: 'Social Media Manager',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const values = [
  { icon: '🚀', title: 'Resultados reales', desc: 'Nos enfocamos en métricas que impactan tu negocio.' },
  { icon: '🤝', title: 'Comunicación abierta', desc: 'Reportes claros y reuniones periódicas de seguimiento.' },
  { icon: '💡', title: 'Innovación constante', desc: 'Adoptamos las últimas tecnologías para darte ventaja.' },
  { icon: '🎯', title: 'Estrategia personalizada', desc: 'Cada cliente es único, cada solución es a medida.' },
];

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-badge">Sobre Nosotros</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px' }}>
              Somos tu aliado en la
              <span className="gradient-text"> era digital</span>
            </h2>
            <p className="about-desc">
              Somos una agencia digital apasionada por transformar negocios. Con más de 5 años de experiencia,
              hemos ayudado a más de 80 empresas a crecer en el mundo digital con estrategias que realmente funcionan.
            </p>
            <p className="about-desc">
              Nuestro equipo multidisciplinario combina creatividad, tecnología y datos para entregar
              soluciones integrales que generan resultados medibles para nuestros clientes.
            </p>

            <div className="values-grid">
              {values.map((v) => (
                <div className="value-item" key={v.title}>
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <p className="value-title">{v.title}</p>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Equipo de trabajo"
                className="about-main-img"
              />
              <div className="about-badge-float">
                <span className="about-badge-icon">⭐</span>
                <div>
                  <p className="about-badge-num">4.9/5</p>
                  <p className="about-badge-txt">Valoración clientes</p>
                </div>
              </div>
              <div className="about-badge-float2">
                <span>🏆</span>
                <div>
                  <p className="about-badge-num">+150</p>
                  <p className="about-badge-txt">Proyectos exitosos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <div className="section-badge">El Equipo</div>
            <h2 className="section-title">Conoce a nuestros <span className="gradient-text">expertos</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar-wrap">
                  <img src={member.img} alt={member.name} className="team-avatar" />
                  <div className="team-online" />
                </div>
                <p className="team-name">{member.name}</p>
                <p className="team-role">{member.role}</p>
                <div className="team-socials">
                  <a href="#" className="team-social" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" className="team-social" aria-label="Twitter">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
