import Swiper from 'swiper';
import { Pagination, Keyboard, A11y, EffectCreative } from 'swiper/modules';
import 'swiper/scss';

export function initializeHeroSwiper() {
  const heroSwiperContainer = document.querySelector('.hero__swiper');
  if (!heroSwiperContainer) {
    return;
  }

  const swiper = new Swiper(heroSwiperContainer, {
    modules: [Pagination, Keyboard, A11y, EffectCreative],
    loop: true,
    loopedSlides: 3,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }, slidesPerView: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      enabled: true,
      focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) =>
        `<div class="${className}" tabindex="0" role="button" aria-label="Перейти к слайду ${index + 1}"></div>`,
    },
  });

  // Handle focus issue and ensure proper slide transition when tabbing
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusedElement = document.activeElement;
      const swiperElement = document.querySelector('.hero__swiper');

      if (focusedElement && swiperElement) {
        const slide = focusedElement.closest('.swiper-slide');

        if (slide) {
          const slideIndex = Array.from(slide.parentElement.children).indexOf(slide);
          swiper.slideTo(slideIndex, 300, true);
        }
      }
    }
  });
}
