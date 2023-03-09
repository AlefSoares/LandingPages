//HAMBURGER
const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('.nav-ul')

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active')
  navUl.classList.toggle('active')
})


const techlogies = document.querySelector(".hydra-techs2")
const imageCicle = document.querySelector(".image-cicle")

imageCicle.addEventListener("click", () => {
    techlogies.classList.toggle("active-techcicle")
    imageCicle.classList.toggle("invert-img-cicle")    
})

// SWIPER INFORMATION
var swiper1 = new Swiper(".info-container", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".info-next",
    prevEl: ".info-prev",
  },
});

// SWIPER SERVICES

var swiper2 = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".serv-next",
    prevEl: ".serv-prev",
  },
 
});

// SWIPER TECHNOLOGIES

var swiper3 = new Swiper(".tech-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".tech-next",
    prevEl: ".tech-prev",
  }, 
});

// SWIPER HOW TO 
var swiper3 = new Swiper(".ht-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".ht-next",
    prevEl: ".ht-prev",
  }, 
});

const infoSwiper = document.getElementById("informations")
const infoWrapper = document.getElementById("info-content")


function screenChange(e) {
  if(e.matches) {
    infoSwiper.classList.remove('swiper')
    infoWrapper.classList.remove('swiper-wrapper')
    
  } else {
    infoWrapper.classList.add('swiper-wrapper')
    infoSwiper.classList.add('swiper')
    
  }
}

const mediaQuery = window.matchMedia('(min-width: 900px)')
mediaQuery.addListener(screenChange)
screenChange(mediaQuery)
