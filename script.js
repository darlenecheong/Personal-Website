function toggleNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".nav-overlay");
    mobileNav.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".nav-overlay");
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
}

// Close nav when any link inside it is clicked
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        closeNav();
    });
});

// Close nav when clicking outside the menu
document.querySelector(".nav-overlay").addEventListener("click", () => {
    closeNav();
});


// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("IVa4m-6Z4ghonp7_t"); // Replace with your EmailJS Public Key
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_qqjalyz", "template_pjh0cp8", this)
        .then(() => {
            // Show a popup when the message is sent successfully
            alert("Message sent successfully! I will get back to you soon.");
            document.getElementById("contact-form").reset(); // Clear the form
        })
        .catch((error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        });
});



const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3; // Smaller particles
        this.speedX = (Math.random() * 1 - 0.7) * 0.8; // Reduced speed
        this.speedY = (Math.random() * 1 - 0.7) * 0.8; // Reduced speed
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reverse direction when hitting canvas edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "#3B3B3B";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

let particlesArray = [];

function initParticles() {
    particlesArray = [];
    const numParticles = Math.floor(canvas.width * canvas.height / 12000); // Adjust density
    for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}

// Initialize and start animation
initParticles();
animateParticles();
