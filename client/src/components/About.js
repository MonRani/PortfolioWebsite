import React from 'react';
import '../styles/About.css';

const About = () => {
    const skills = {
        "Programming Languages": [
            "Python", "Java", "C", "JavaScript", "HTML/CSS", "TypeScript"
        ],
        "Frameworks & Libraries": [
            "React.js", "Node.js", "jQuery", "Bootstrap", "scikit-learn",
            "TensorFlow", "NumPy", "Pandas", "Plotly"
        ],
        "Tools, Technologies & Domains": [
            "MySQL", "MongoDB", "PostgreSQL", "Jenkins", "Docker",
            "Kubernetes", "AWS", "AI/ML", "NLP"
        ]
    };

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="profile-section">
                    <div className="profile-image">
                        <img
                            src="/IMG_1598.jpg"
                            alt="Profile"
                            className="avatar"
                        />
                    </div>
                    <div className="about-content">
                        <h2>About Me</h2>
                        <p className="intro">
                            Hello! I'm a software developer passionate about creating efficient
                            and scalable web applications. I specialize in React, JavaScript, and CSS.
                        </p>
                        <p>
                            With a strong foundation in both frontend and backend technologies,
                            I enjoy building full-stack applications that solve real-world problems.
                            My experience spans from web development to machine learning, always
                            focusing on clean code and user-centered design.
                        </p>
                        <div className="location-info">
                            📍 Building the future, one line of code at a time
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h3 className="skills-title">Technical Skills</h3>
                    <div className="skills-grid">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div key={index} className="skill-category">
                                <h4 className="category-title">{category}</h4>
                                <div className="skills-list">
                                    {skillList.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;