// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navbar = document.getElementById('navbar');
const togglerIcon = document.getElementById('icon');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }
});


document.querySelector('.navbar-toggler').addEventListener('click', () => {
    togglerIcon.classList.toggle('collapsed'); 
});

const words = ["Developer", "Designer", "Programmer", "Creator"];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    const dynamicTextElement = document.getElementById("dynamic-text");

    if (isDeleting) {
      
        currentWord = words[index].substring(0, charIndex--);
    } else {
        
        currentWord = words[index].substring(0, charIndex++);
    }

    dynamicTextElement.textContent = currentWord;

    if (!isDeleting && charIndex === words[index].length) {
        setTimeout(() => isDeleting = true, 1000); // الانتظار قبل بدء الحذف
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length; 
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200); // 
}

typeEffect(); 