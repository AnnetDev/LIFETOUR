import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeTrainingSwiper() {
  new Swiper('.training__swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    grabCursor: true,
    normalizeSliderIndex: true,
    navigation: {
      nextEl: '.training__button.swiper-button-next',
      prevEl: '.training__button.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 3,
        initialSlide: 0,
        spaceBetween: 20, //?
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20, //?
      },
    },
  });
}
