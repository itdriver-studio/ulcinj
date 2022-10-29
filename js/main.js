let menu = document.querySelector(".nav__list");
let burger = document.querySelector(".burger");

burger.onclick = () => {
  menu.classList.toggle('nav__list-adaptive');
}

let swiper = new Swiper(".slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1800,
  effect: 'fade',
});