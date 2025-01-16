// import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';
// import 'swiper/scss';

// export function initializeHeroSwiper() {
//   const heroSwiperContainer = document.querySelector('.hero__swiper');
//   if (!heroSwiperContainer) {
//     return;
//   }

//   const swiper = new Swiper(heroSwiperContainer, {
//     modules: [Pagination],
//     loop: true, // Бесконечный режим
//     loopedSlides: 3, // Количество слайдов для корректной работы loop
//     slidesPerView: 1,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: (index, className) =>
//         `<div class="${className}" tabindex="0" role="button" aria-label="Перейти к слайду ${index + 1}"></div>`,
//     },
//     on: {
//       init: () => updateAccessibility(),
//       slideChangeTransitionEnd: () => updateAccessibility(),
//     },
//   });

//   /**
//    * Обновление доступности
//    */
//   function updateAccessibility() {
//     const slides = heroSwiperContainer.querySelectorAll('.swiper-slide');
//     const paginationBullets = heroSwiperContainer.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');

//     slides.forEach((slide, index) => {
//       const isActive = index === swiper.realIndex; // Текущий активный индекс
//       const links = slide.querySelectorAll('a');

//       // Устанавливаем aria-hidden для неактивных слайдов
//       slide.setAttribute('aria-hidden', !isActive);

//       // Обновляем tabindex ссылок в слайде
//       links.forEach((link) => {
//         link.setAttribute('tabindex', isActive ? '0' : '-1');
//       });

//       // Слушаем фокус на ссылках только активного слайда
//       if (isActive) {
//         links.forEach((link) => {
//           link.addEventListener('focus', () => swiper.slideTo(index));
//         });
//       }
//     });

//     // Убедимся, что только активная пагинация доступна для фокуса
//     paginationBullets.forEach((bullet, index) => {
//       bullet.setAttribute('tabindex', index === swiper.realIndex ? '0' : '-1');

//       // Добавляем обработчик клавиши Enter для переключения слайда
//       bullet.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//           swiper.slideTo(index);
//         }
//       });
//     });
//   }

//   // Перенаправление фокуса с пагинации на активный слайд
//   heroSwiperContainer.addEventListener('keydown', (event) => {
//     if (event.key === 'Tab') {
//       const activeBullet = heroSwiperContainer.querySelector('.swiper-pagination-bullet-active');
//       const activeSlide = heroSwiperContainer.querySelector('.swiper-slide-active');
//       const firstLink = activeSlide?.querySelector('a');

//       if (document.activeElement === activeBullet && firstLink) {
//         // Переносим фокус с пагинации на первую ссылку в активном слайде
//         event.preventDefault();
//         firstLink.focus();
//       }
//     }
//   });
// }


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
    loop: true, // Бесконечный режим
    loopedSlides: 3, // Количество слайдов для корректной работы loop
    effect: 'creative',
    slidesPerView: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true, // Обеспечивает работу клавиш только в зоне видимости
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

  /**
   * Обновление доступности (focus, aria-hidden)
   */
  function updateAccessibility() {
    const slides = heroSwiperContainer.querySelectorAll('.hero-swiper-slide .swiper-slide');
    const paginationBullets = heroSwiperContainer.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');

    slides.forEach((slide, index) => {
      const isActive = index === swiper.realIndex; // Текущий активный индекс
      const links = slide.querySelectorAll('a');

      // Устанавливаем aria-hidden для неактивных слайдов
      slide.setAttribute('aria-hidden', !isActive);

      // Обновляем tabindex ссылок в слайде
      links.forEach((link) => {
        link.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      // Удаляем предыдущие обработчики, чтобы избежать дублирования
      links.forEach((link) => {
        link.removeEventListener('focus', focusHandler);
        link.addEventListener('focus', focusHandler);
      });

      function focusHandler() {
        // Проверяем, нужно ли переключать слайды
        if (!isActive) {
          swiper.slideTo(index);
        }
      }
    });

    // Делаем кнопки пагинации доступными
    paginationBullets.forEach((bullet) => {
      bullet.setAttribute('tabindex', '0');
    });
  }

  // Убедимся, что пагинация получает фокус первой
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
