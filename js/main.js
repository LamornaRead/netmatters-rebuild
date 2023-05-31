//hamburger vars

const hamburger = document.querySelector('.hamburger');
const navSmall = document.querySelector('.side-nav');
const body = document.querySelector('.container-main');
const navLink = document.querySelectorAll('.nav-li');



//sticky header vars

let didScroll;
let lastScrollTop = 0;
let delta = 10; /* adjusts amount of scroll before active */
const navbarHeight = $('.header').outerHeight();




//hamburger event and function

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navSmall.classList.toggle('active');
    body.classList.toggle('active');
};

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navSmall.classList.remove('active');
    body.classList.remove('active');
}



//sticky header 

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    const st =$(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta) 
        return;

    if(st > lastScrollTop ) {
        $('.header').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()){
            $('.header').removeClass('nav-up');
            $('.header').addClass('sticky');
            $('.banner').addClass('stuck');
        }
    }
    lastScrollTop = st;
}

