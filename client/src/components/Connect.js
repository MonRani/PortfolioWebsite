import React from 'react';
import '../styles/Connect.css';

const Connect = () => {
    const contactInfo = [
        {
            id: 'email',
            label: 'Email',
            value: 'monisha.ranidv@gmail.com',
            href: 'mailto:monisha.ranidv@gmail.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            )
        },
        {
            id: 'phone',
            label: 'Phone',
            value: '+1 (669) 329-9699',
            href: 'tel:+16693299699',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
            )
        },
        {
            id: 'location',
            label: 'Location',
            value: 'Bay Area, California',
            href: 'https://maps.google.com/?q=Bay+Area+CA',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
            )
        },
        {
            id: 'github',
            label: 'GitHub',
            value: 'github.com/MonRani',
            href: 'https://github.com/MonRani',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
            )
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'linkedin.com/in/monisha-rani',
            href: 'https://linkedin.com/in/monisha-rani',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            )
        },
        {
            id: 'medium',
            label: 'Medium',
            value: 'medium.com/@monishar110',
            href: 'https://medium.com/@monishar110',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
            )
        }
    ];

    return (
        <section id="connect" className="connect">
            <div className="connect-header">
                <h2>Let's Connect</h2>
                <p>Ready to collaborate? I'd love to hear from you!</p>
            </div>

            <div className="connect-container">
                {contactInfo.map(({ id, label, value, href, icon }) => (
                    <a
                        key={id}
                        href={href}
                        target={id !== 'phone' && id !== 'email' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="connect-item"
                    >
                        <div className="connect-icon">
                            {icon}
                        </div>
                        <div className="connect-info">
                            <span className="connect-label">{label}</span>
                            <span className="connect-value">{value}</span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="connect-footer">
                <p>Available for internships, collaborations, and exciting opportunities!</p>
            </div>
        </section>
    );
};

export default Connect;