import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
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

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="projects__header">
                    <span className="projects__label reveal">Portafolio</span>
                    <h2 className="section-title reveal">Proyectos Destacados</h2>
                    <p className="section-subtitle reveal">
                        Una seleccion de mis trabajos mas recientes en desarrollo frontend
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="reveal"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
