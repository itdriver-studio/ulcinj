let menu = document.querySelector(".nav__list");
let burger = document.querySelector(".burger");
let navListAdaptive = document.querySelectorAll(".nav__item");


burger.addEventListener('click', () => {
  menu.classList.toggle('nav__list-adaptive');
});

menu.addEventListener('click', () => {
  menu.classList.remove('nav__list-adaptive');
});

$('.excursions__slider').slick({
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 1500,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: true,
});