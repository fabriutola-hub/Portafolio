import { personalInfo } from '../data/projects';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <span className="footer__logo">LF</span>
                        <p className="footer__tagline">
                            Creando experiencias web unicas
                        </p>
                    </div>

                    <nav className="footer__nav">
                        <a href="#hero" className="footer__link">Inicio</a>
                        <a href="#about" className="footer__link">Sobre Mi</a>
                        <a href="#projects" className="footer__link">Proyectos</a>
                        <a href="#skills" className="footer__link">Skills</a>
                        <a href="#contact" className="footer__link">Contacto</a>
                    </nav>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">
                        {currentYear} {personalInfo.name}. Todos los derechos reservados.
                    </p>
                    <p className="footer__made">
                        Hecho con dedicacion en Bolivia
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
