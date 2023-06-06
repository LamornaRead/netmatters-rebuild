//hamburger vars

const hamburger = document.querySelector('.hamburger');
const hamburgerTwo = document.querySelector('.hamburger-two');
const navSmall = document.querySelector('.side-nav');
const body = document.querySelector('.container-main');
const navLink = document.querySelectorAll('.nav-li');


//hamburger event and function

hamburger.addEventListener("click", mobileMenu);
hamburgerTwo.addEventListener("click", mobileMenu);

function mobileMenu() {
    this.classList.toggle('active');
    navSmall.classList.toggle('active');
    body.classList.toggle('active');
};

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    this.classList.remove('active');
    navSmall.classList.remove('active');
    body.classList.remove('active');
}





