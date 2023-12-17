// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
// function fixedNav() {
//   const nav = document.querySelector('nav')

//   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//   const breakpoint = 1
//   if (window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)

function reviewsSlider() {
  const container = document.querySelector('.reviews');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop: true,

    pagination: {
      el: '.reviews__slider-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    }
  })
}

if (window.matchMedia("(max-width: 992px)").matches) {
  reviewsSlider();
}



