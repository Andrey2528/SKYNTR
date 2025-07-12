import React, { useCallback, useMemo } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

// Particles configuration
const PARTICLES_CONFIG = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
        number: { value: 50 },
        color: { value: '#00F0FF' },
        links: {
            enable: true,
            color: '#00F0FF',
            distance: 100,
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.5,
            outMode: 'bounce',
        },
        size: { value: 2 },
        opacity: { value: 0.5 },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
        },
        modes: {
            repulse: { distance: 70, duration: 0.4 },
        },
    },
};

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    // Memoize configuration to prevent recreation on every render
    const options = useMemo(() => PARTICLES_CONFIG, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
};

export default ParticlesBackground;
