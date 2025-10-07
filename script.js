// script.js

// Typewriter animation for "Hey World, I'm Harini"
const text = "Hey World, I'm Harini R B!";
const target = document.getElementById("typewriter");
let idx = 0;

function typeWriter() {
  if (idx < text.length) {
    target.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeWriter, 70); 
  }
}

// About section animation on scroll
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Start the animation when DOM is ready
document.addEventListener("DOMContentLoaded", typeWriter);

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('mainHeader');
  if(window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Go to Top Button
const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", function() {
  const aboutSection = document.getElementById("about");
  const triggerPoint = aboutSection.offsetTop + aboutSection.offsetHeight;
  if (window.scrollY > triggerPoint - 100) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

