import { mainContainer } from './container.js';

export const launchDOM = () => {
  const body = document.querySelector('body');
  body.appendChild(mainContainer);
};

export default launchDOM;