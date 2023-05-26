import { createElement } from "./helper.js";

const nav = document.querySelector('.nav');

// const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  nav.textContent = '';

  const buttonSign = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  buttonSign.addEventListener('click', () => {

  });

  const buttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  });

  buttonLogin.addEventListener('click', () => {
    
  });

  nav.append(buttonSign, buttonLogin);

}

