import Swiper from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/scss';

export function initializeHeroSwiper() {
  const heroSwiperContainer = document.querySelector('.hero__swiper');
  if (!heroSwiperContainer) {
    return;
  }

  const swiper = new Swiper(heroSwiperContainer, {
    modules: [Pagination, Keyboard],
    loop: true,
    loopedSlides: 3,
    effect: 'creative',
    slidesPerView: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) =>
        `<div class="${className}" tabindex="0" role="button" aria-label="Перейти к слайду ${index + 1}"></div>`,
    },
    on: {
      init: () => updateAccessibility(),
      slideChangeTransitionEnd: () => updateAccessibility(),
    },
  });

  function updateAccessibility() {
    const slides = heroSwiperContainer.querySelectorAll('.hero-swiper-slide .swiper-slide');
    const paginationBullets = heroSwiperContainer.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');

    slides.forEach((slide, index) => {
      const isActive = index === swiper.realIndex;
      const links = slide.querySelectorAll('a');

      slide.setAttribute('aria-hidden', !isActive);

      links.forEach((link) => {
        link.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      links.forEach((link) => {
        link.removeEventListener('focus', focusHandler);
        link.addEventListener('focus', focusHandler);
      });

      function focusHandler() {
        if (!isActive) {
          swiper.slideTo(index);
        }
      }
    });

    paginationBullets.forEach((bullet) => {
      bullet.setAttribute('tabindex', '0');
    });
  }

  heroSwiperContainer.querySelector('.swiper-pagination').addEventListener('focus', () => {
    swiper.slideTo(swiper.realIndex);
  });
}


// import Swiper from 'swiper';
// import { Pagination, EffectCreative, Navigation } from 'swiper/modules';
// import 'swiper/scss';

// export function initializeHeroSwiper() {
//   new Swiper('.hero__swiper', {
//     modules: [Pagination, EffectCreative, Navigation],
//     loop: true,
//     effect: 'creative',
//     creativeEffect: {
//       prev: {
//         shadow: true,
//         translate: ['-20%', 0, -1],
//       },
//       next: {
//         translate: ['100%', 0, 0],
//       },
//     },
//     normalizeSliderIndex: true,
//     slidesPerView: 1,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return `<div class="${className}" tabindex="1" role="button" aria-label="Перейти к слайду ${index + 1}"></div>`;
//       }
//     },
//   });
// }

//разобраться с фокусом и переключением слайдов
