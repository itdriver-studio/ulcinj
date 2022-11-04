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

$('.rooms__sliderbigOne').slick({
  asNavFor: '.rooms__slidersmallOne',
  infinite: true,
  arrows: false,
});

$('.rooms__slidersmallOne').slick({
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.rooms__sliderbigOne',
  infinite: true,
  centerMode: true,
  arrows: true,
  responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    }
  ],
});
$('.rooms__sliderbigTwo').slick({
  asNavFor: '.rooms__slidersmallTwo',
  infinite: true,
  arrows: false,
});

$('.rooms__slidersmallTwo').slick({
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.rooms__sliderbigTwo',
  infinite: true,
  centerMode: true,
  arrows: true,
  responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    }
  ],
});

$('.rooms__sliderbigThree').slick({
  asNavFor: '.rooms__slidersmallThree',
  infinite: true,
  arrows: false,
});

$('.rooms__slidersmallThree').slick({
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.rooms__sliderbigThree',
  infinite: true,
  centerMode: true,
  arrows: true,
  responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    }
  ],
});

$('.rooms__sliderbigFour').slick({
  asNavFor: '.rooms__slidersmallFour',
  infinite: true,
  arrows: false,
});

$('.rooms__slidersmallFour').slick({
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.rooms__sliderbigFour',
  infinite: true,
  centerMode: true,
  arrows: true,
  responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    }
  ],
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