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


function catalogSubfiltersSlider() {
  const container = document.querySelector('.catalog');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.catalog__subfilters', {
    slidesPerView: "auto",
    spaceBetween: 32,

    navigation: {
      nextEl: '.catalog__subfilters-arrow--next',
      prevEl: '.catalog__subfilters-arrow--prev',
    },

  })
}
catalogSubfiltersSlider();


function map() {
  const container = document.querySelector('.map-contacts')
  if (!container) {
    return null
  }

  let center = [55.751383, 37.936418];

  function init() {


    let map = new ymaps.Map('map', {
      center: center,
      zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      // iconImageHref: '../img/icons/pin.svg',
      // iconImageHref: '/local/templates/main/img/icons/pin.svg',
      // iconImageSize: [42, 42],
      // iconImageOffset: [-14, -64]
    })

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}

map();


AOS.init();

const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

// validate////////////////////////////////////////////////////////////////////////////////////////////////////////
let form = document.querySelector('.modal-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputEmail = document.querySelector('.js-input-email')
// inputPhone = document.querySelector('.js-input-phone');


function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// function validatePhone(phone) {
//   let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
//   return re.test(String(phone));
// }


form.onsubmit = function () {
  let emailVal = inputEmail.value,
    // phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
      console.log('input not filled');
    } else {
      input.classList.remove('error');
    }


  })

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }

  // if (!validatePhone(phoneVal)) {
  //   console.log('phone not valid');
  //   inputPhone.classList.add('error');
  //   return false;
  // } else {
  //   inputPhone.classList.remove('error');
  // }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
