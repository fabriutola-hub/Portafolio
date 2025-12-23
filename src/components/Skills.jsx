import { useEffect, useRef } from 'react';
import './Skills.css';

function Skills() {
    const sectionRef = useRef(null);

    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS']
        },
        {
            title: 'Herramientas',
            skills: ['Git', 'Vite', 'VS Code']
        },
        {
            title: 'Aprendizaje',
            skills: ['Three.js', 'Node.js', 'TypeScript']
        }
    ];

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
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">Habilidades</span>

                <div className="skills__grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`skills__category reveal reveal-delay-${index + 1}`}
                        >
                            <h3 className="skills__category-title">{category.title}</h3>
                            <ul className="skills__list">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="skills__item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
