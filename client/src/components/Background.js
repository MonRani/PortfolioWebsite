import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#000000", // Background color
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse", // Interactivity on hover
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff", // Particle color
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80, // Number of particles
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Background;
