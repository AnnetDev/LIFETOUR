import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export function initializeReviewsSwiper() {
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    loop: false,
    grabCursor: true,
    normalizeSliderIndex: true,
    navigation: {
      nextEl: '.reviews__button.swiper-button-next',
      prevEl: '.reviews__button.swiper-button-prev',
    },
    slidesPerGroup: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 30,
        slidesOffsetAfter: 30,
      },
      1440: {
        slidesPerView: 1.8,
        spaceBetween: 120,
      },
    },
  });

  const prevButton = document.querySelector('.reviews__button.swiper-button-prev');
  const nextButton = document.querySelector('.reviews__button.swiper-button-next');

  if (prevButton && nextButton) {
    // Устанавливаем tabindex для стрелок
    prevButton.setAttribute('tabindex', '0');
    nextButton.setAttribute('tabindex', '0');

    // Событие для обработки нажатия клавиши "Enter" на стрелках
    prevButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        reviewsSwiper.slidePrev();
      }
    });

    nextButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        reviewsSwiper.slideNext();
      }
    });
  }
}
