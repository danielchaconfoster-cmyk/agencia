import './Portfolio.css';

const projects = [
  {
    title: 'E-commerce ModaMujer',
    category: 'Página Web',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    tags: ['React', 'E-commerce', 'SEO'],
    result: '+340% ventas online',
  },
  {
    title: 'AutoFlow CRM',
    category: 'Automatización',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tags: ['n8n', 'API', 'CRM'],
    result: '-70% trabajo manual',
  },
  {
    title: 'Branding FreshJuice',
    category: 'Diseño de Marca',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    tags: ['Logo', 'Branding', 'Packaging'],
    result: 'Identidad completa',
  },
  {
    title: 'RRSS TechStartup',
    category: 'Redes Sociales',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    tags: ['Instagram', 'LinkedIn', 'Ads'],
    result: '+12K seguidores en 3 meses',
  },
  {
    title: 'Consultora Finanzas',
    category: 'Asesoría Digital',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['Estrategia', 'Digital', 'Growth'],
    result: '2x conversión leads',
  },
  {
    title: 'Restaurant La Bella',
    category: 'Marketing Digital',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    tags: ['Google Ads', 'Meta', 'Email'],
    result: '+200% reservas online',
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Portafolio</div>
          <h2 className="section-title">
            Proyectos que
            <span className="gradient-text"> hablan por sí solos</span>
          </h2>
          <p className="section-subtitle">
            Resultados reales para clientes reales. Cada proyecto con estrategia personalizada.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p) => (
            <div className="portfolio-card" key={p.title}>
              <div className="portfolio-img-wrap">
                <img src={p.img} alt={p.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <span className="portfolio-result">{p.result}</span>
                </div>
                <span className="portfolio-category">{p.category}</span>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{p.title}</h3>
                <div className="portfolio-tags">
                  {p.tags.map((tag) => (
                    <span className="portfolio-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
