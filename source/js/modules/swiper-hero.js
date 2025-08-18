import Swiper from 'swiper';
import { Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/scss';

export function initializeHeroSwiper() {
  const heroSwiperContainer = document.querySelector('.hero__swiper');
  if (!heroSwiperContainer) {
    return;
  }
  const swiper = new Swiper(heroSwiperContainer, {
    modules: [Pagination, Keyboard, A11y],
    loop: true,
    loopedSlides: 3,
    effect: 'creative',
    slidesPerView: 1,
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: {
      enabled: true,
      focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // отдаём пустую метку — заполним позже из translations.json
      renderBullet: (index, className) =>
        `<div class="${className}" tabindex="0" role="button" aria-label="" data-bullet-index="${index + 1}"></div>`,
    },
  });

  // делаем доступным глобально (если где-то нужно)
  window.heroSwiper = swiper;

  // перезаписываем подписи, когда пагинация перерисована/инициализирована
  const applyBullets = () => {
    if (window.__i18n) {
      const { translations, lang } = window.__i18n;
      updateSwiperBullets(translations, lang);
    }
  };

  swiper.on('init', applyBullets);
  swiper.on('paginationRender', applyBullets);
  swiper.on('slideChange', applyBullets); // на всякий случай

  // если нужно, можно инициировать вручную (обычно init уже auto)
  // swiper.init();
}

export function updateSwiperBullets(translations, lang) {
  const label = translations?.[lang]?.['go-to-slide'];
  if (!label) {
    return;
  }
  document.querySelectorAll('.swiper-pagination [aria-label]').forEach((bullet) => {
    const n = bullet.getAttribute('data-bullet-index') || '';
    bullet.setAttribute('aria-label', `${label} ${n}`);
  });
}
