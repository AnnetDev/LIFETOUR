import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export function initializeAdvSwiper() {
  const isDesktop = window.innerWidth >= 1440;
  let advSlider;

  if (isDesktop && !advSlider) {
    advSlider = new Swiper('.advantages__swiper', {
      modules: [Navigation],
      loop: true,
      grabCursor: true,
      normalizeSliderIndex: true,
      navigation: {
        nextEl: '.advantages__button.swiper-button-next',
        prevEl: '.advantages__button.swiper-button-prev',
      },
      slidesPerView: 3.3,
      spaceBetween: 30,
      slidesPerGroup: 2,
    });
  } else if (!isDesktop && advSlider) {
    advSlider.destroy(true, true);
    advSlider = null;
  }
}
