// Remove loader when page loads
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000);
});

// Particle Effects
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ['#ff5e00', '#00a8ff', '#8b4513', '#a8e6cf'];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
    if (particles.length < 100) {
        particles.push(new Particle());
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Elemental Master Interactions
const fireMaster = document.getElementById('fire-master');
const waterMaster = document.getElementById('water-master');
const earthMaster = document.getElementById('earth-master');
const airMaster = document.getElementById('air-master');
const arena = document.getElementById('arena');

fireMaster.addEventListener('click', () => createFireEffect());
waterMaster.addEventListener('click', () => createWaterEffect());
earthMaster.addEventListener('click', () => createEarthEffect());
airMaster.addEventListener('click', () => createAirEffect());

function createFireEffect() {
    const fire = document.createElement('div');
    fire.className = 'fire-effect';
    arena.appendChild(fire);
    setTimeout(() => fire.remove(), 1000);
}

function createWaterEffect() {
    const water = document.createElement('div');
    water.className = 'water-effect';
    arena.appendChild(water);
    setTimeout(() => water.remove(), 1000);
}

// Add GSAP animations for scroll effects
gsap.registerPlugin(ScrollTrigger);

gsap.from('.title', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from('.master', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top center',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});
