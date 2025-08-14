// Remove loader when page loads
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const letters = document.querySelectorAll('.letter');
    
    // Animate letters one by one
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animation = `floatIn 0.5s forwards ${index * 0.1}s`;
        }, 100);
    });
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000);
});

// Particle Explosion for "Coming Soon"
const comingSoon = document.querySelector('.coming-soon');
const particleContainer = document.querySelector('.particle-explosion');

comingSoon.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    particleContainer.appendChild(particle);
    
    // Random color
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = randomColor;
    
    // Animate particle
    gsap.to(particle, {
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        opacity: 0,
        scale: 0,
        duration: 1,
        onComplete: () => particle.remove()
    });
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('section').forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top center',
            scrub: true
        },
        opacity: 0,
        y: 100,
        duration: 1
    });
});
