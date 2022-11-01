let menu = document.querySelector(".nav__list");
let burger = document.querySelector(".burger");

burger.onclick = () => {
  menu.classList.toggle('nav__list-adaptive');
}

$('.excursions__slider').slick({
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 1500,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: true,
});