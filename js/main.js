let menu = document.querySelector(".nav__list");
let burger = document.querySelector(".burger");

burger.onclick = () => {
  menu.classList.toggle('nav__list-adaptive');
}