import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export function initializeReviewsSwiper() {
  new Swiper('.reviews__swiper', {
    modules: [Navigation],
    loop: false,
    grabCursor: true,
    normalizeSliderIndex: true,
    navigation: {
      nextEl: '.reviews__button.swiper-button-next',
      prevEl: '.reviews__button.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 30, //?
      },
      1440: {
        slidesPerView: 1.8,
        spaceBetween: 120, //?
      },
    },
  });
}