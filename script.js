
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-details');

const navEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){         
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
}
function toggleMobileMenu(){         
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive');
}
function toggleShoppingCart(){         
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.toggle('inactive');
}