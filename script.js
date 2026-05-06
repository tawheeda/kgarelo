// =========================
// script.js
// =========================

// Current year in footer
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
