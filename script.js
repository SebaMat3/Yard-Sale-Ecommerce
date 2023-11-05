
const desktopMenu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

console.log('JS working');