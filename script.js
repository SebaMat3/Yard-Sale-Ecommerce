
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-details');

const navEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');

const cardsContainer = document.querySelector('.cards-container')


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

//Array containing products
const productList = [];

productList.push({
    name: 'Bike',
    price: '$220',
    img: "https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg?auto=compress&cs=tinysrgb&w=800"
});
productList.push({
    name: 'Laptop',
    price: '$1200',
    img: "https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg?auto=compress&cs=tinysrgb&w=800"
});

//function to introduce array elements into the HTML
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        cardsContainer.appendChild(productCard);
            //Product-img
            productImg = document.createElement('img');
            productImg.setAttribute('src',product.img);
            productImg.classList.add('product-img');

            //Product-info container div
            productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
                productInfoDiv = document.createElement('div');
                    productPrice = document.createElement('p');
                    productName = document.createElement('p');
                    productPrice.innerText = product.price;
                    productName.innerText = product.name;
                    productInfoDiv.append(productPrice,productName);
                //AddToCart figure>img
                addToCartFigure = document.createElement('figure');
                    addToCartImg = document.createElement('img')
                    addToCartImg.setAttribute('src','assets/icons/bt_add_to_cart.svg');
                    addToCartImg.setAttribute('alt','add to cart icon');
                    addToCartFigure.append(addToCartImg);
            //Last tags nestings
            productInfo.append(productInfoDiv,addToCartFigure);
        productCard.append(productImg,productInfo);
    }
}

renderProducts(productList);