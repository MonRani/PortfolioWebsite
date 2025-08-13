import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        id: 1,
        title: 'Backend Redesign & Automation',
        company: 'IpserLab',
        description: 'Redesigned and implemented a scalable backend system using Jakarta EE, creating 15+ optimized REST APIs with 40% improved latency. Developed automated content ingestion pipeline processing 50+ articles daily.',
        skills: ['Java', 'Jakarta EE', 'REST APIs', 'Tomcat', 'Automation']
    },
    {
        id: 2,
        title: 'Fault-Tolerant Distributed Key-Value Store',
        company: 'Northeastern University',
        description: 'Developed a fault-tolerant Key-Value Store using Java, Paxos, and RPC for consistent data storage. Implemented CRUD operations and handled server failures.',
        skills: ['Paxos', 'Multithreading', 'RPC', 'Docker'],
        github: 'https://github.com/MonRani/DistributedKeyValue'
    },
    {
        id: 3,
        title: 'Fraudulent Job Posting Detector',
        company: 'Northeastern University',
        description: 'Built an end-to-end ML pipeline using NLP and classification algorithms to detect scam job listings. Solved class imbalance using SMOTE.',
        skills: ['Python', 'Scikit-Learn', 'NLP', 'Machine Learning'],
        github: 'https://github.com/MonRani/AIProject'
    },
    {
        id: 4,
        title: 'Full Stack Drawing App',
        company: 'Personal Project',
        description: 'Real-time drawing and image annotation tool with JWT-secured login and image APIs. Containerized with Docker Compose.',
        skills: ['React.js', 'FastAPI', 'MongoDB', 'Docker'],
        github: 'https://github.com/MonRani/TrinzzFullStack'
    },
    {
        id: 5,
        title: 'Moody - AI Meditation App',
        company: 'Northeastern University',
        description: 'MERN stack app providing emotion analysis & personalized activity recommendations using Generative AI APIs.',
        skills: ['MERN Stack', 'AI API', 'Hugging Face', 'Jest'],
        github: 'https://github.com/srijagadiraju/Moody/',
        demo: 'https://moody-j5f5.onrender.com/'
    },
    {
            id: 6,
            title: 'Jenkins-Based CI/CD Pipeline',
            company: 'Northeastern University',
            description: 'Automated the build, test, and deployment of C programs using a Jenkins-based CI/CD pipeline. Implemented automated unit testing and static analysis for early issue detection.',
            skills: ['C', 'Jenkins', 'Shell Scripting', 'Cunit', 'CPP'],
            github: 'https://github.com/MonRani/CICD'
        },
        {
            id: 7,
            title: 'Kanbas - Learning Management System',
            company: 'Northeastern University',
            description: 'Built a web app for managing courses, assignments, and grades with secure authentication and efficient CRUD operations.',
            skills: ['React.js', 'Node.js', 'REST APIs', 'MongoDB']
        },
        {
            id: 8,
            title: 'One-Lane Road Simulation',
            company: 'Northeastern University',
            description: 'Developed a simulation model to analyze traffic flow on a one-lane road, optimizing performance for real-world traffic management systems.',
            skills: ['Python', 'Simulation Modeling', 'Data Structures', 'OOP'],
            github: 'https://github.com/MonRani/Traffic_Simulation'
        },
        {
            id: 9,
            title: 'Payroll Management System',
            company: 'Personal Project',
            description: 'Created a MySQL-based payroll management system with employee data storage and automated pay calculation features.',
            skills: ['MySQL', 'Database Design', 'SQL']
        },
        {
            id: 10,
            title: 'Predictive Model Evaluation',
            company: 'Northeastern University',
            description: 'Built a predictive model to estimate diastolic blood pressure from cholesterol levels, achieving 92% accuracy.',
            skills: ['Python', 'Machine Learning', 'Data Analysis', 'Matplotlib'],
            github: 'https://github.com/MonRani/cost-function-predictive-model'
        },
        {
            id: 11,
            title: 'Preswald CSV Encoding Fix',
            company: 'Open Source Contribution',
            description: 'Patched Latin-1 parsing issue in open-source ETL tool for Python-based interactive data apps.',
            skills: ['Python', 'DuckDB', 'TOML'],
            github: 'https://github.com/MonRani/preswald'
        }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-company">{project.company}</p>
                            <p className="project-description">{project.description}</p>
                            <div className="skills-container">
                                {project.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;