import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export function initializeToursSwiper() {
  new Swiper('.tours__swiper', {
    modules: [Navigation],
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
        spaceBetween: 18, //?
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30, //?
      },
    },
  });
}
