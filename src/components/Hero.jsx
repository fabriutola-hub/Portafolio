import { personalInfo } from '../data/projects';
import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__bg">
                <div className="hero__gradient hero__gradient--1"></div>
                <div className="hero__gradient hero__gradient--2"></div>
                <div className="hero__grid"></div>
            </div>

            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__badge animate-fade-in-up">
                        <span className="hero__badge-dot"></span>
                        Disponible para proyectos
                    </div>

                    <h1 className="hero__title animate-fade-in-up delay-100">
                        Hola, soy{' '}
                        <span className="hero__title-highlight">{personalInfo.name}</span>
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up delay-200">
                        {personalInfo.title}
                    </p>

                    <p className="hero__description animate-fade-in-up delay-300">
                        {personalInfo.bio}
                    </p>

                    <div className="hero__actions animate-fade-in-up delay-400">
                        <a href="#projects" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                            Ver Proyectos
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Contactar
                        </a>
                    </div>
                </div>

                <div className="hero__visual animate-fade-in delay-300">
                    <div className="hero__card">
                        <div className="hero__card-header">
                            <span className="hero__card-dot"></span>
                            <span className="hero__card-dot"></span>
                            <span className="hero__card-dot"></span>
                        </div>
                        <div className="hero__card-body">
                            <code className="hero__code">
                                <span className="code-keyword">const</span>{' '}
                                <span className="code-variable">developer</span> = {'{'}
                                <br />
                                {'  '}<span className="code-property">name</span>:{' '}
                                <span className="code-string">"{personalInfo.name}"</span>,
                                <br />
                                {'  '}<span className="code-property">age</span>:{' '}
                                <span className="code-number">{personalInfo.age}</span>,
                                <br />
                                {'  '}<span className="code-property">role</span>:{' '}
                                <span className="code-string">"Frontend Dev"</span>,
                                <br />
                                {'  '}<span className="code-property">passion</span>:{' '}
                                <span className="code-string">"Creating"</span>
                                <br />
                                {'}'};
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#about" className="hero__scroll">
                <span>Scroll</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </a>
        </section>
    );
}

export default Hero;
