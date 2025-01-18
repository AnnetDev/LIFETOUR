import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export function initializeAdvSwiper() {
  let advSlider = null;

  const initOrDestroySwiper = () => {
    const isDesktop = window.innerWidth >= 1440;

    if (isDesktop && !advSlider) {
      advSlider = new Swiper('.advantages__swiper', {
        modules: [Navigation],
        loop: true,
        grabCursor: true,
        normalizeSlideIndex: true,
        navigation: {
          nextEl: '.advantages__button.swiper-button-next',
          prevEl: '.advantages__button.swiper-button-prev',
        },
        slidesPerView: 3.3,
        spaceBetween: 30,
        slidesPerGroup: 2,
        slidesOffsetBefore: -290,
      });

      const prevButton = document.querySelector('.advantages__button.swiper-button-prev');
      const nextButton = document.querySelector('.advantages__button.swiper-button-next');

      if (prevButton && nextButton) {
        prevButton.setAttribute('tabindex', '0');
        nextButton.setAttribute('tabindex', '0');

        prevButton.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            advSlider.slidePrev();
          }
        });

        nextButton.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            advSlider.slideNext();
          }
        });
      }
    } else if (!isDesktop && advSlider) {
      advSlider.destroy(true, true);
      advSlider = null;
    }
  };

  initOrDestroySwiper();

  window.addEventListener('resize', initOrDestroySwiper);
}
