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
      slidesOffsetBefore: -290,
    });
  } else if (!isDesktop && advSlider) {
    advSlider.destroy(true, true);
    advSlider = null;
  }

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
}

// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/scss';

// export function initializeAdvSwiper() {
//   const isDesktop = window.innerWidth >= 1440;
//   let advSlider;

//   // Перемещаем функцию вне условий
//   function cloneLastSlide(slides, swiperContainer) {
//     const lastSlide = slides[slides.length - 1];
//     const clone = lastSlide.cloneNode(true);

//     // Добавляем клонированный слайд в конец слайдера
//     swiperContainer.querySelector('.swiper-wrapper').appendChild(clone);

//     // Скрываем клонированный слайд
//     clone.style.visibility = 'hidden';

//     // Делаем его видимым после первого переключения
//     advSlider.on('slideChange', () => {
//       if (advSlider.activeIndex === slides.length) {
//         clone.style.visibility = 'visible';
//       }
//     });
//   }

//   if (isDesktop && !advSlider) {
//     const swiperContainer = document.querySelector('.advantages__swiper');
//     const slides = Array.from(swiperContainer.querySelectorAll('.swiper-slide'));

//     // Клонируем последний слайд
//     cloneLastSlide(slides, swiperContainer);

//     // Инициализация Swiper
//     advSlider = new Swiper('.advantages__swiper', {
//       modules: [Navigation],
//       loop: true,
//       grabCursor: true,
//       normalizeSliderIndex: true,
//       navigation: {
//         nextEl: '.advantages__button.swiper-button-next',
//         prevEl: '.advantages__button.swiper-button-prev',
//       },
//       slidesPerView: 3.3,
//       spaceBetween: 30,
//       slidesPerGroup: 2,
//       slidesOffsetBefore: -290,
//     });
//   } else if (!isDesktop && advSlider) {
//     advSlider.destroy(true, true);
//     advSlider = null;
//   }

//   const prevButton = document.querySelector('.advantages__button.swiper-button-prev');
//   const nextButton = document.querySelector('.advantages__button.swiper-button-next');

//   if (prevButton && nextButton) {
//     prevButton.setAttribute('tabindex', '0');
//     nextButton.setAttribute('tabindex', '0');

//     prevButton.addEventListener('keydown', (event) => {
//       if (event.key === 'Enter') {
//         advSlider.slidePrev();
//       }
//     });

//     nextButton.addEventListener('keydown', (event) => {
//       if (event.key === 'Enter') {
//         advSlider.slideNext();
//       }
//     });
//   }
// }

