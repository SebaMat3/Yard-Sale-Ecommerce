
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');

navEmail.addEventListener('click', () => toggle(desktopMenu));
burguerIcon.addEventListener('click',() => toggle(mobileMenu));

function toggle(elemento){         
    elemento.classList.toggle("inactive"); 
}