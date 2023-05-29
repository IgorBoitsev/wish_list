import { createElement } from "./helper.js"

export const createBurgerMenu = (navSection, navActiveClass, navBtnSelector) => {

  const burger = createElement('button', {
    className: 'header__burger burger',
    innerHTML: '<span class="burger__line"></span>'
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    navSection.classList.toggle(navActiveClass);
  });

  navSection.addEventListener('click', e => {
    if (e.target.closest(navBtnSelector)) {
      burger.classList.toggle('burger-active');
      navSection.classList.toggle(navActiveClass);
    }
  });

  return burger;

}