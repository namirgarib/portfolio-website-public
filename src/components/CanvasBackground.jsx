// Designed by Namir Garib
// All rights reserved

import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        /* Debounce utility function */
        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), delay);
            };
        };


        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(devicePixelRatio, devicePixelRatio);
            createParticles();
        };

        /* Particle properties */
        let particles = [];
        let particleCount = 100;
        const colors = ['#38c0ff', '#c960f8'];

        const adjustParticleCount = () => {
            particleCount = window.innerWidth < 768 ? 50 : 100;
        };

        /* Create particles and motion control */
        const createParticles = () => {
            adjustParticleCount();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    baseRadius: Math.random() * 1 + 0.5,
                    radius: Math.random() * 1 + 0.5,
                    speedX: Math.random() * 0.2 + 0.02,
                    speedY: Math.random() * 0.07 - 0.015,
                    phase: Math.random() * Math.PI * 2,
                    pulseSpeed: Math.random() * 0.02 + 0.01
                });
            }
        };

        /* Pulsating animation controls */
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                const transitionFactor = (Math.sin(particle.phase) + 1) / 2;
                const interpolatedColor = interpolateColor(colors[0], colors[1], transitionFactor);

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = interpolatedColor;
                ctx.shadowBlur = 15;
                ctx.shadowColor = interpolatedColor;
                ctx.fill();
                ctx.shadowBlur = 15;
                ctx.shadowColor = interpolatedColor;
                ctx.fill();
                ctx.shadowBlur = 15;
                ctx.shadowColor = interpolatedColor;
                ctx.fill();
                ctx.closePath();
            });
        };

        /* Color Interpolation */
        const interpolateColor = (color1, color2, factor) => {
            const hex = (c) => parseInt(c, 16);
            const r1 = hex(color1.substr(1, 2));
            const g1 = hex(color1.substr(3, 2));
            const b1 = hex(color1.substr(5, 2));
            const r2 = hex(color2.substr(1, 2));
            const g2 = hex(color2.substr(3, 2));
            const b2 = hex(color2.substr(5, 2));
            const r = Math.round(r1 + (r2 - r1) * factor);
            const g = Math.round(g1 + (g2 - g1) * factor);
            const b = Math.round(b1 + (b2 - b1) * factor);
            return `rgb(${r}, ${g}, ${b})`;
        };


        const updateParticles = () => {
            particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                particle.radius = particle.baseRadius + Math.sin(particle.phase) * 0.5;
                particle.phase += particle.pulseSpeed;

                if (particle.x > window.innerWidth) {
                    particle.x = 0;
                }
                if (particle.y > window.innerHeight) {
                    particle.y = 0;
                } else if (particle.y < 0) {
                    particle.y = window.innerHeight;
                }
            });
        };

        /* Animation loop */
        const animate = () => {
            drawParticles();
            updateParticles();
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        createParticles();
        animate();

        /* Handle canvas size with debounce function */
        const debouncedResize = debounce(resizeCanvas, 100);
        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, []);

    return <canvas ref={canvasRef} id="backgroundCanvas" style={{ display: 'block' }}></canvas>;
};

export default CanvasBackground;