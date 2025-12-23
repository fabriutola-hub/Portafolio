import './ProjectCard.css';

function ProjectCard({ project, index }) {
    return (
        <article className="project-card">
            {/* Visual */}
            <div className="project-card__visual">
                <div className="project-card__image torn-clip">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                    />
                </div>
                <span className="project-card__number">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* Content */}
            <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>

                <div className="project-card__meta">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="project-card__tag">{tech}</span>
                    ))}
                </div>

                <div className="project-card__links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                        >
                            Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link project-card__link--primary"
                        >
                            View Project
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
