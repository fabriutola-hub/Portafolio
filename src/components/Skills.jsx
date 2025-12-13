import { useEffect, useRef } from 'react';
import { skills } from '../data/projects';
import './Skills.css';

function Skills() {
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

    const skillCategories = [
        { title: 'Frontend', skills: skills.frontend, icon: 'code' },
        { title: 'Herramientas', skills: skills.tools, icon: 'tool' },
        { title: 'Otros', skills: skills.other, icon: 'star' }
    ];

    const getIcon = (type) => {
        const icons = {
            code: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            tool: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            star: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            )
        };
        return icons[type];
    };

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="skills__header">
                    <span className="skills__label reveal">Habilidades</span>
                    <h2 className="section-title reveal">Tecnologias y Skills</h2>
                    <p className="section-subtitle reveal">
                        Las herramientas y tecnologias que utilizo para crear experiencias web
                    </p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.title}
                            className="skills__category reveal"
                            style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                        >
                            <div className="skills__category-header">
                                <span className="skills__category-icon">
                                    {getIcon(category.icon)}
                                </span>
                                <h3 className="skills__category-title">{category.title}</h3>
                            </div>

                            <div className="skills__list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skills__tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
