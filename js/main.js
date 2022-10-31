let menu = document.querySelector(".nav__list");
let burger = document.querySelector(".burger");

burger.onclick = () => {
  menu.classList.toggle('nav__list-adaptive');
}

let swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 500,
  },
  speed: 1800,
  effect: 'fade',
});