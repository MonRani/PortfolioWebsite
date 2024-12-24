import React from 'react';
import '../styles/Projects.css';

const projects = [
    { id: 1, title: 'Kanbas Project', description: 'A React-based web application.' },
    { id: 2, title: 'Open Source Contribution', description: 'Bug fixes and enhancements for Joplin.' },
    { id: 3, title: 'Responsive Design', description: 'Created responsive layouts using CSS.' },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;