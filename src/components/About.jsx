import { useEffect, useRef } from 'react';
import './About.css';

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container about__layout">
                {/* 1. Header Centered */}
                <div className="about__header reveal">
                    <span className="section-label">01 — Perfil</span>
                    <h2 className="about__headline">
                        Ingeniería <span className="text-italic text-terracotta">&</span> <br />
                        Creatividad Digital.
                    </h2>
                </div>

                {/* 2. Structured Split Grid */}
                <div className="about__content">
                    {/* Left: Controlled Image */}
                    <div className="about__image-container reveal reveal-delay-1">
                        <div className="about__image-frame torn-clip">
                            <img
                                src="/Foto.jpg"
                                alt="Luis Fabrizio"
                                className="about__img"
                            />
                        </div>
                    </div>

                    {/* Right: Clean Typography */}
                    <div className="about__info reveal reveal-delay-2">
                        <div className="about__bio">
                            <p className="about__lead">
                                Soy <strong>Luis Fabrizio</strong>, desarrollador de 20 años y estudiante de último año de <strong>Ingeniería de Sistemas</strong>.
                            </p>
                            <p className="about__text">
                                Mi enfoque combina la lógica estructurada de la ingeniería con una sensibilidad visual refinada.
                                No me limito a escribir código; busco la arquitectura detrás de la emoción.
                                Creo firmemente que la web moderna necesita menos ruido y más señal.
                            </p>
                        </div>

                        {/* Structured Stats */}
                        <div className="about__stats-grid">
                            <div className="stat-item">
                                <span className="stat-num">20</span>
                                <span className="stat-label">Años</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">4+</span>
                                <span className="stat-label">Proyectos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
