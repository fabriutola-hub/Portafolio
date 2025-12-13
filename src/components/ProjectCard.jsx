import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card__image">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                />
                <div className="project-card__overlay">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Ver Proyecto
                    </a>
                </div>
            </div>

            <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tags">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="project-card__tag">{tech}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
