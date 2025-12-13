import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/projects';
import './Contact.css';

function Contact() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:kresterflores@gmail.com?subject=Contacto desde Portfolio&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container">
                <div className="contact__grid">
                    <div className="contact__info">
                        <span className="contact__label reveal">Contacto</span>
                        <h2 className="section-title reveal">Trabajemos Juntos</h2>
                        <p className="contact__text reveal">
                            Estoy disponible para proyectos freelance y oportunidades laborales.
                            Si tienes una idea o proyecto en mente, me encantaria escuchar de ti.
                        </p>

                        <div className="contact__details reveal">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">Ubicacion</span>
                                    <span className="contact__detail-value">{personalInfo.location}</span>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                        <path d="m22 7-10 7L2 7" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">Email</span>
                                    <span className="contact__detail-value">kresterflores@gmail.com</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/59175843980"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__detail contact__detail--whatsapp"
                            >
                                <div className="contact__detail-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">WhatsApp</span>
                                    <span className="contact__detail-value">+591 75843980</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className="contact__form reveal" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__form-label">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="contact__form-input"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__form-label">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact__form-input contact__form-textarea"
                                placeholder="Tu mensaje..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary contact__submit">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
