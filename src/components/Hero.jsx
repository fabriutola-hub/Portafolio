import { personalInfo } from '../data/projects';
import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__container">
                {/* Meta Info (Top) */}
                <div className="hero__meta">
                    <span className="hero__role">{personalInfo.title}</span>
                    <span className="hero__location">{personalInfo.location}</span>
                </div>

                {/* Massive Typographic Sculpture */}
                <h1 className="hero__title">
                    <span className="hero__title-line">LUIS</span>
                    <span className="hero__title-line">FABRIZIO</span>
                </h1>

                {/* The "Artifact" Image - Pinned/Stamp style */}
                <div className="hero__image-artifact">
                    <div className="hero__image-wrapper torn-clip">
                        <img
                            src="/Foto.jpg"
                            alt="Luis Fabrizio"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="hero__actions">
                    <a href="#projects" className="btn-stone">
                        Ver Proyectos
                    </a>
                </div>
            </div>

            {/* Minimal Scroll Indicator */}
            <div className="hero__scroll-indicator">
                <span className="text-xs tracking-widest uppercase opacity-50">Desliza</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
}

export default Hero;
