import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar__content">
                    <a href="#hero" className="navbar__brand">LF.</a>

                    <div className="navbar__links">
                        <a href="#about">Sobre Mí</a>
                        <a href="#projects">Proyectos</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact" className="navbar__btn-contact">Contacto</a>
                    </div>

                    <button
                        className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${menuOpen ? 'active' : ''}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>Sobre Mí</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
            </div>
        </>
    );
}

export default Navbar;
