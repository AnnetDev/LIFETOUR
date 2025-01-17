import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeTrainingSwiper() {
  const swiperTrainers = new Swiper('.training__swiper', {
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
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const prevButton = document.querySelector('.training__button.swiper-button-prev');
  const nextButton = document.querySelector('.training__button.swiper-button-next');
  const linkButton = document.querySelector('.training__trainer-social-link');


  if (prevButton && nextButton) {
    prevButton.setAttribute('tabindex', '0');
    nextButton.setAttribute('tabindex', '0');
    linkButton.setAttribute('tabindex', '0');

    prevButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        swiperTrainers.slidePrev();
      }
    });

    nextButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        swiperTrainers.slideNext();
      }
    });

    nextButton.addEventListener('blur', () => {
      if (document.activeElement === nextButton) {
        linkButton.focus();
      }
    });
  }
}
