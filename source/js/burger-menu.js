export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.main-navigation');
    const toggleIcon = document.querySelector('.header__toggle-icon');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('main-navigation--opened');
      menu.classList.toggle('main-navigation--closed');
      menuToggle.classList.toggle('header__toggle--opened');
      toggleIcon.classList.toggle('header__toggle-icon--opened');

    });
  });
};
