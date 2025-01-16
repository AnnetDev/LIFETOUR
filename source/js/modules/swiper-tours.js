// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/scss';

// export function initializeToursSwiper() {
//   new Swiper('.tours__swiper', {
//     modules: [Navigation, Pagination],
//     loop: false,
//     grabCursor: true,
//     normalizeSliderIndex: true,
//     navigation: {
//       nextEl: '.tours__button.swiper-button-next',
//       prevEl: '.tours__button.swiper-button-prev',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 18, //?
//       },
//       1440: {
//         slidesPerView: 3,
//         spaceBetween: 30, //?
//       },
//     },
//   });
// }

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeToursSwiper() {
  const swiperInstance = new Swiper('.tours__swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    grabCursor: true,
    normalizeSliderIndex: true,
    navigation: {
      nextEl: '.tours__button.swiper-button-next',
      prevEl: '.tours__button.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Добавление Tab-порядка
  const prevButton = document.querySelector('.tours__button.swiper-button-prev');
  const nextButton = document.querySelector('.tours__button.swiper-button-next');
  const linkButton = document.querySelector('.tours__link');

  if (prevButton && nextButton && linkButton) {
    // Устанавливаем tabindex для стрелок
    prevButton.setAttribute('tabindex', '0');
    nextButton.setAttribute('tabindex', '0');
    linkButton.setAttribute('tabindex', '0');

    // Событие для обработки нажатия клавиши "Enter" на стрелках
    prevButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        swiperInstance.slidePrev();
      }
    });

    nextButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        swiperInstance.slideNext();
      }
    });

    // Смена фокуса после переключения слайдов
    nextButton.addEventListener('blur', () => {
      if (document.activeElement === nextButton) {
        linkButton.focus();
      }
    });
  }
}
