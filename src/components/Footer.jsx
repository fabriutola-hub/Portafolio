import { personalInfo } from '../data/projects';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <p className="footer__brand">
                        <span className="footer__name">{personalInfo.name}</span>
                        <span className="footer__location">— {personalInfo.location}</span>
                    </p>

                    <p className="footer__copyright">
                        © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
                    </p>

                    <nav className="footer__nav">
                        <a href="#hero">Inicio</a>
                        <a href="#about">Sobre Mí</a>
                        <a href="#projects">Proyectos</a>
                        <a href="#contact">Contacto</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
