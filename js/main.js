/////navbar-list////
const burgerMenu = document.querySelector('.burger-menu');
const navBar = document.querySelector('.list-nav-bar');

function toggleNavBar() {
  navBar.classList.toggle('active');
}

burgerMenu.addEventListener('click', toggleNavBar);
navBar.classList.remove('active');
///nav bg change//
function changeBg(){
  var header = document.querySelector('header')
  var scrollValue= window.scrollY;
  console.log(scrollValue);
  if(scrollValue < 40){
    header.classList.remove('scrolled');
  }else{
    header.classList.add('scrolled');
  }
}

window.addEventListener('scroll' ,changeBg);

///////////////////////////////////////////////////////////////

//////HERO background swiper////
var swiper = new Swiper(".bg-swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
//txt_box animation//
window.onload = function () {
  var textbox = document.querySelector('.txt_box');
  textbox.classList.add('show');
};

//info slider swiper//

var swiper = new Swiper(".info_sliderSwiper", {
  loop: true,
  direction: "vertical",
  slidesPerView: 4,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

/////
//////eventsection slider/////
var swiper = new Swiper(".EventCardsSwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 0,
  navigation: {
    nextEl: ".EventCards-swiper-button-next",
    prevEl: ".EventCards-swiper-button-prev",
  },



  
breakpoints: {
  // when window width is xs lessthan576px
 0:{
     slidesPerView: 1.5,
     grid: {
    rows: 1,
  },
 },
 // when window width is sm576px
 576: {
   slidesPerView: 2,
   grid: {
    rows: 1,
  },
 },
 // when window width is md768
 768: {
   slidesPerView: 3,
   grid: {
    rows: 1,
  },
 },
 // when window width is lg992
 992: {
     slidesPerView: 4,
     grid: {
    rows: 2,
  },
   },

 // when window width is >= 1280px
 1280: {
   slidesPerView: 4,
   grid: {
    rows: 2,
  },
 }
}
});


////////////////////////////////////////////////////////////
////ACordion////
// Define variables
const toggles = document.querySelectorAll(".toggle");

// Set toggle actions
function toggleAccord(e) {
  e.preventDefault();

  // Deactivate all toggles
  if (this.parentNode.classList.contains("active")) {
    this.parentNode.classList.remove("active");
  } else {
    for (i = 0; i < toggles.length; i++) {
      toggles[i].parentNode.classList.remove("active");
    }
    this.parentNode.classList.add("active");
  }
}

// Apply event listeners
for (i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", toggleAccord);
}
///////
//
///
///
//testemonialsection//

var swiper = new Swiper(".mySwiper", {
  loop:true ,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});