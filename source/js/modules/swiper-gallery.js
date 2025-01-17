import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export function initializeGalleySwiper() {
  const isDesktop = window.innerWidth >= 1440;
  let gallerySlider;

  if (!isDesktop && !gallerySlider) {
    gallerySlider = new Swiper('.gallery__swiper', {
      modules: [Navigation],
      loop: true,
      direction: 'horizontal',
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 5,
      navigation: {
        nextEl: '.gallery__button.swiper-button-next',
        prevEl: '.gallery__button.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1440: {
          enabled: false,
        },
      },
    });
  }

  window.addEventListener('resize', () => {
    const isNowDesktop = window.innerWidth >= 1440;

    if (isNowDesktop && gallerySlider) {
      gallerySlider.destroy(true, true);
      gallerySlider = null;
    } else if (!isNowDesktop && !gallerySlider) {
      initializeGalleySwiper();
    }
  });
}
