import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre Mi', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contacto', href: '#contact' }
    ];

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <a href="#hero" className="navbar__logo">
                    <span className="navbar__logo-text">LF</span>
                </a>

                <button
                    className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
