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
  autoplaySpeed: 1500,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnClick: false,
  draggable: false,
  fade: true,
  speed: 2200,
});

$('.sliderBigOne').slick({
  asNavFor: '.sliderSmallOne',
});

$('.sliderSmallOne').slick({
  asNavFor: '.sliderBigOne',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '110px',
  focusOnSelect: true,
  arrows: false,
});

$('.sliderBigTwo').slick({
  asNavFor: '.sliderSmallTwo',
});

$('.sliderSmallTwo').slick({
  asNavFor: '.sliderBigTwo',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '110px',
  focusOnSelect: true,
  arrows: false,
});

$('.sliderBigThree').slick({
  asNavFor: '.sliderSmallThree',
});

$('.sliderSmallThree').slick({
  asNavFor: '.sliderBigThree',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '110px',
  focusOnSelect: true,
  arrows: false,
});

$('.sliderBigFour').slick({
  asNavFor: '.sliderSmallFour',
});

$('.sliderSmallFour').slick({
  asNavFor: '.sliderBigFour',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '110px',
  focusOnSelect: true,
  arrows: false,
});



$('.gallery__caegories-link').click(function () {
  const value = $(this).attr('data-filter');
  if (value == 'all') {
    $('.gallery__bricks-item').show('1000');
  } else {
    $('.gallery__bricks-item').not('.' + value).hide('1000');
    $('.gallery__bricks-item').filter('.' + value).show('1000');
  }
})

$('.gallery__caegories-link').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
})