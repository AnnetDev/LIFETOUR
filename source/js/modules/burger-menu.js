export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.main-navigation');
    const toggleIcon = document.querySelector('.header__toggle-icon');
    const menuLinks = document.querySelectorAll('.main-navigation__link');
    const main = document.querySelector('.main-container');

    menuToggle.addEventListener('click', () => {
      const isMobile = window.innerWidth <= 767;

      menu.classList.toggle('main-navigation--opened');
      menu.classList.toggle('main-navigation--closed');
      main.classList.toggle('overlay-active');
      menuToggle.classList.toggle('header__toggle--opened');
      toggleIcon.classList.toggle('header__toggle-icon--opened');
      if (isMobile) {
        document.body.classList.toggle('overlay-no-scroll', menu.classList.contains('main-navigation--opened'));
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('main-navigation--opened')) {
          menu.classList.remove('main-navigation--opened');
          menu.classList.add('main-navigation--closed');
          menuToggle.classList.remove('header__toggle--opened');
          toggleIcon.classList.remove('header__toggle-icon--opened');
          document.body.classList.remove('overlay-no-scroll');
          main.classList.toggle('overlay-active');
        }
      }
      );
    });
  });
};
