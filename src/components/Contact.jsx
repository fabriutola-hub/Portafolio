import { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/projects';
import './Contact.css';

function Contact() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', message: '' });

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
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            `Hola Luis! Soy ${formData.name || 'un visitante'}. ${formData.message || ''}`
        );
        const whatsappNumber = personalInfo.whatsapp.replace(/\s/g, '').replace('+', '');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container contact__layout">
                {/* Header */}
                <div className="contact__header reveal">
                    <span className="section-label">03 — Contacto</span>
                    <h2 className="contact__headline">
                        Hablemos de <br />
                        <span className="text-terracotta text-italic">Tu Idea.</span>
                    </h2>
                </div>

                {/* Split Layout */}
                <div className="contact__content">
                    {/* Left: Direct Contact Information */}
                    <div className="contact__direct reveal reveal-delay-1">
                        <p className="contact__desc">
                            ¿Tienes un proyecto en mente? Estoy disponible para nuevos desafíos.
                        </p>

                        <a
                            href={`https://wa.me/${personalInfo.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                            className="contact__whatsapp-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact__whatsapp-icon">●</span>
                            Chat en WhatsApp
                        </a>

                        <div className="contact__details">
                            <span className="detail-label">Ubicación</span>
                            <span className="detail-value">{personalInfo.location}</span>
                        </div>
                    </div>

                    {/* Right: Minimalist Form */}
                    <div className="contact__form-area reveal reveal-delay-2">
                        <div className="minimal-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Tu Nombre"
                                    className="minimal-input"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Cuéntame brevemente sobre tu proyecto..."
                                    rows="1"
                                    className="minimal-input"
                                />
                            </div>
                            <button
                                onClick={handleWhatsAppClick}
                                className="btn-minimal-submit"
                            >
                                Enviar Mensaje →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
