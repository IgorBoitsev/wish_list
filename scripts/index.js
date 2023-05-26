import { renderNavigation } from "./renderNavigation.js";
import { createHero } from "./createHero.js";

const app = document.querySelector('.app');

const handleHomePage = () => {
  app.textContent = '';

  renderNavigation();

  app.append(createHero());
}

const init = () => {
  handleHomePage();
}

init();