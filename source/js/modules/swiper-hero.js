import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeHeroSwiper() {
  new Swiper('.hero__swiper', {
    modules: [Pagination],
    loop: true,
    grabCursor: true,
    normalizeSliderIndex: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
