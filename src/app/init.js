import {render} from './render';

export const init = () => {
  window.addEventListener('hashchange', render);
}
