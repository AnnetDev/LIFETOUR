import Swiper from 'swiper';
import { Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/scss';

export function initializeHeroSwiper() {
  new Swiper('.hero__swiper', {
    modules: [Pagination, EffectCreative],
    loop: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    // grabCursor: true,
    normalizeSliderIndex: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
