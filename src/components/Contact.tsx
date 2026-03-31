import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: '📞',
    label: 'Teléfono',
    value: '+54 11 5555-1234',
    sub: 'Lun–Vie 9:00–18:00',
    href: 'tel:+541155551234',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'hola@nexusdigital.com',
    sub: 'Respondemos en menos de 24h',
    href: 'mailto:hola@nexusdigital.com',
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: 'Buenos Aires, Argentina',
    sub: 'También atendemos de forma remota',
    href: '#',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+54 11 5555-5678',
    sub: 'Respuesta inmediata',
    href: 'https://wa.me/541155555678',
  },
];

const services = [
  'Página Web', 'Automatizaciones', 'Manejo RRSS',
  'Asesoría Digital', 'Diseño de Marca', 'Marketing Digital',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Contacto</div>
          <h2 className="section-title">
            Hablemos de tu
            <span className="gradient-text"> próximo proyecto</span>
          </h2>
          <p className="section-subtitle">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas con una propuesta.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">¿Cómo contactarnos?</h3>
            <p className="contact-info-desc">
              Estamos disponibles por múltiples canales. Elige el que más te convenga.
            </p>

            <div className="contact-cards">
              {contactInfo.map((item) => (
                <a href={item.href} className="contact-card" key={item.label} target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-icon">{item.icon}</span>
                  <div>
                    <p className="contact-card-label">{item.label}</p>
                    <p className="contact-card-value">{item.value}</p>
                    <p className="contact-card-sub">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <p className="contact-social-title">Síguenos en redes</p>
              <div className="social-links">
                {[
                  { name: 'Instagram', icon: '📸', href: '#' },
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'Facebook', icon: '👥', href: '#' },
                  { name: 'TikTok', icon: '🎵', href: '#' },
                ].map((s) => (
                  <a href={s.href} key={s.name} className="social-link" target="_blank" rel="noopener noreferrer">
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Te contactaremos en menos de 24 horas. ¡Gracias por confiar en nosotros!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Solicitar cotización gratuita</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre completo *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ej: Juan García"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+54 11 0000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Servicio de interés *</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar servicio...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Cuéntanos sobre tu proyecto *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe brevemente qué necesitas, tu industria, objetivos y cualquier detalle relevante..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Enviar Solicitud
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>

                <p className="form-note">🔒 Tu información está segura. No enviamos spam.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
