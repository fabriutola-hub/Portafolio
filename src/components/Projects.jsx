import { useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

function Projects() {
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
            { threshold: 0.1 }
        );

        const lines = sectionRef.current?.querySelectorAll('.project-line');
        lines?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="projects__header">
                    <span className="section-label">02 — Portafolio Seleccionado</span>
                    <h2 className="projects__main-title">
                        Galería <span className="text-italic text-terracotta">Digital</span>
                    </h2>
                </div>

                <div className="projects__list">
                    {projects.map((project, index) => (
                        <article key={project.id} className="project-line">
                            <div className="project-line__content">
                                <div className="project-line__meta">
                                    <span className="project-line__number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="project-line__title">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="project-line__desc">
                                    {project.description}
                                </p>
                                <div className="project-line__tech">
                                    {project.technologies.slice(0, 3).map(tech => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-line__action">
                                    <a
                                        href={project.demo || project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-stone"
                                    >
                                        Visitar
                                    </a>
                                </div>
                            </div>

                            <a
                                href={project.demo || project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-line__visual torn-clip"
                            >
                                <div className="project-line__image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                    />
                                    <div className="project-line__overlay">
                                        <span>Ver Proyecto</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
