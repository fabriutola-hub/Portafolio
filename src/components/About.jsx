import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/projects';
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
            { threshold: 0.2 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: '3+', label: 'Proyectos' },
        { value: '1+', label: 'Años Exp.' },
        { value: '100%', label: 'Dedicacion' }
    ];

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container">
                <div className="about__grid">
                    <div className="about__image reveal">
                        <div className="about__image-wrapper">
                            <div className="about__image-placeholder">
                                <span className="about__initials">LF</span>
                            </div>
                            <div className="about__image-decoration"></div>
                        </div>
                    </div>

                    <div className="about__content">
                        <span className="about__label reveal">Sobre Mi</span>
                        <h2 className="section-title reveal">
                            Creando experiencias digitales unicas
                        </h2>

                        <p className="about__text reveal">
                            Soy <strong>{personalInfo.name}</strong>, un desarrollador frontend de{' '}
                            <strong>{personalInfo.age} años</strong> apasionado por transformar ideas en
                            experiencias web interactivas y memorables.
                        </p>

                        <p className="about__text reveal">
                            Me especializo en <strong>React</strong> y tecnologias modernas como{' '}
                            <strong>Three.js</strong> para crear experiencias inmersivas. Mi enfoque
                            combina diseno elegante con codigo limpio y optimizado.
                        </p>

                        <p className="about__text reveal">
                            Cada proyecto es una oportunidad para superar limites y entregar
                            soluciones que no solo funcionan, sino que impresionan.
                        </p>

                        <div className="about__stats reveal">
                            {stats.map((stat, index) => (
                                <div key={index} className="about__stat">
                                    <span className="about__stat-value">{stat.value}</span>
                                    <span className="about__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
