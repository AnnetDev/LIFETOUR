export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.main-navigation');
    const toggleIcon = document.querySelector('.header__toggle-icon');
    const menuLinks = document.querySelectorAll('.main-navigation__link'); // Ссылки меню
    const body = document.body;

    const toggleScroll = (shouldBlock) => {
      if (shouldBlock) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    };

    menuToggle.addEventListener('click', () => {
      const isMenuOpened = menu.classList.contains('main-navigation--opened');

      menu.classList.toggle('main-navigation--opened');
      menu.classList.toggle('main-navigation--closed');
      body.classList.toggle('overlay-active');
      menuToggle.classList.toggle('header__toggle--opened');
      toggleIcon.classList.toggle('header__toggle-icon--opened');

      toggleScroll(!isMenuOpened);
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('main-navigation--opened')) {
          menu.classList.remove('main-navigation--opened');
          menu.classList.add('main-navigation--closed');
          menuToggle.classList.remove('header__toggle--opened');
          toggleIcon.classList.remove('header__toggle-icon--opened');
          toggleScroll(false);
        }
      }
      );
    });
  });
};
