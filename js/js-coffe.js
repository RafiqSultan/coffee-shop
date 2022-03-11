// *********menu bar 
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartitem.classList.remove('active');
    searchitem.classList.remove('active');
}


// ********* Cart-item  
let cartitem = document.querySelector('.header .cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchitem.classList.remove('active');
}


// ********* Search  
let searchitem = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchitem.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
    searchitem.classList.remove('active');
}