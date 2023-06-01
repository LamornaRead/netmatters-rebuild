//sticky header vars
let bodyMain = $('.body');
const head = $('.sticky-head');
let scroll = window.scrollY;
let didScroll;
let lastScrollTop = 0;
// let delta = 10; /* adjusts amount of scroll before active */
// const navbarHeight = $('.header').outerHeight();

//sticky header 

// $(window).scroll(function(event) {
    // didScroll = true;
    // scrolled();
    // console.log(window.scrollY);
    // console.log($(this).scrollTop());

    // console.log(window.scrollY, 'scroll y');

// });

// function scrolled() {
//     hasScrolled();
//     didScroll = false;
// };



window.onscroll = function(e) {
  // print "false" if direction is down and "true" if up
    onScroll(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;

} 



function onScroll(scrollPos) {
    let scroll = window.scrollY;
    if(scrollPos && scroll > 250) {
        addSticky();
    } else {
        removeSticky(); 
        stayStuck();
    }
}


function addSticky() {
    head.addClass('sticky');
}

function removeSticky() {
    head.removeClass('sticky');
}
function stayStuck() {
    let scroll = window.scrollY;
    if(scroll < 850) {
        head.addClass('sticky');
    }
}



// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);



// function hasScrolled() {
//     const st =$(this).scrollTop();

//     if(Math.abs(lastScrollTop - st) >= 250) 
//         return;

//     if(st > lastScrollTop ) {
//         head.removeClass('sticky');
//     } else {
//         if(st + $(window).height() < $(document).height()){
//             // head.removeClass('nav-up');
 
                

//         }
//     }
//     console.log(st , 'st');
//     lastScrollTop = st;
// }
