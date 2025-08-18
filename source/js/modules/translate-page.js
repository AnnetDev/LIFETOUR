import { updateSwiperBullets } from './swiper-hero';

function loadTranslations(lang) {
  fetch('translations.json')
    .then((r) => r.json())
    .then((translations) => {
      // сделать доступным глобально
      window.__i18n = { translations, lang };

      // ==== текст ====
      document.querySelectorAll('[data-translate]').forEach((el) => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
          const hidden = el.querySelector('.visually-hidden');
          if (hidden) {
            hidden.textContent = translations[lang][key];
          }
          if (el.hasAttribute('data-heading')) {
            el.setAttribute('data-heading', translations[lang][key]);
          }
        }
      });

      // ==== атрибуты ====
      document.querySelectorAll('[data-translate-attr]').forEach((el) => {
        const [attr, key] = el.getAttribute('data-translate-attr').split(':');
        if (translations[lang][key]) {
          el.setAttribute(attr, translations[lang][key]);
        }
      });

      // кнопка языка
      const btn = document.querySelector('.language-switcher');
      if (btn){
        btn.firstChild.textContent = lang === 'ru' ? 'En' : 'Ru';
      }

      // обновляем буллеты (без привязки к window.heroSwiper)
      // немного подождём чтобы пагинация успела дорисоваться
      setTimeout(() => updateSwiperBullets(translations, lang), 50);
    });
}


export function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'ru' ? 'en' : 'ru';
  document.documentElement.lang = newLang;
  localStorage.setItem('language', newLang);
  loadTranslations(newLang);
}

export function setInitialLanguage() {
  // const savedLang = localStorage.getItem('language') || 'en';
  document.documentElement.lang = 'en';
  loadTranslations('en');
}

document.addEventListener('DOMContentLoaded', () => {
  setInitialLanguage();

  const langButton = document.querySelector('.language-switcher');
  if (langButton) {
    langButton.addEventListener('click', toggleLanguage);
  }
});
