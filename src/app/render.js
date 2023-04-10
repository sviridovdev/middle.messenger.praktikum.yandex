import {registerEventListeners, unregisterEventListeners} from './eventListeners';
import {routes} from './routes';

const parseLocation = () => location.hash.slice(1).toLowerCase();

export const render = () => {
  const path = parseLocation();
  const template = routes.find((route) => route.path === path)?.template;

  if (!template) {
    location.hash = '#/404';
    return;
  }

  const root = document.querySelector('#root');
  unregisterEventListeners();
  root.innerHTML = template();
  registerEventListeners();
}
