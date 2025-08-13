import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Evenness Inc',
            location: 'Remote',
            title: 'Software Engineering Intern - Agentic AI',
            period: 'Sep 2025 - Dec 2025',
            status: 'Incoming',
        },
        {
            company: 'Evenness Inc',
            location: 'Remote',
            title: 'Data Scientist Intern',
            period: 'Jun 2025 - Sep 2025',
            achievements: [
                'Bridged research insights with product development by translating accessibility research into actionable UX strategies',
                'Created production-ready dashboards using Streamlit and Jupyter to visualize health metrics, enabling real-time monitoring',
                'Collaborate with AI/ML teams on scoring algorithms focused on fairness and bias mitigation'
            ]
        },
        {
            company: 'IpserLab LLC',
            location: 'Mountain View, CA',
            title: 'Software Engineer Intern – Backend Lead',
            period: 'Apr 2025 - Jul 2025',
            achievements: [
                'Led backend redesign with Jakarta EE, delivering 15+ low-latency REST APIs (15% faster) via XML schemas',
                'Built and deployed automated content ingestion system processing 50+ daily articles, eliminating manual hours',
                'Automated deployment/configuration workflows via Tomcat scripting, boosting release efficiency'
            ]
        },
        {
            company: 'LinkedIn',
            location: 'Bengaluru, India',
            title: 'LinkedIn Marketing Solutions Support Consultant 1 & 2',
            period: 'Jul 2021 - Jul 2023',
            achievements: [
                "Enhanced brands' online presence by providing optimization recommendations, improving team output by 21.5%",
                'Collaborated with engineering teams to analyze challenges, offering recommendations to improve software functionality',
                'Mentored new hires, facilitating smooth onboarding and accelerating their learning curve'
            ]
        },
        {
            company: 'ACE Online',
            location: 'Bengaluru, India',
            title: 'Operation Executive',
            period: 'Jul 2020 - Jun 2021',
            achievements: [
                'Boosted app ratings from 3 to 4.5 stars and generated $30K+ in sales by analyzing customer feedback',
                'Managed full-cycle hiring for 7 roles and co-created a company-wide Code of Conduct informed by research and surveys'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="experience-container">
                <h2>Work Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <div className="company-info">
                                        <h3>{exp.company}</h3>
                                        <span className="location">{exp.location}</span>
                                    </div>
                                    <div className="role-info">
                                        <h4>{exp.title}</h4>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>
                                {exp.status && <div className="status">{exp.status}</div>}
                                {exp.achievements && (
                                    <ul className="achievements">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;