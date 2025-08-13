//import React from 'react';
//import '../styles/Header.css';
//
//const Header = () => {
//    return (
//        <header className="header">
//            <h1>My Portfolio</h1>
//            <nav>
//                <a href="#about">About</a>
//                <a href="#experience">Experience</a>
//                <a href="#projects">Projects</a>
//                <a href="#connect">Connect</a>
//            </nav>
//        </header>
//    );
//};
//
//export default Header;

import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <h1>Monisha Rani</h1>
            <nav>
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('experience')}>Experience</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
                <button onClick={() => scrollToSection('connect')}>Connect</button>
            </nav>
        </header>
    );
};

export default Header;