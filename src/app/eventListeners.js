import {chatDialog} from '../chat/chat-dialog';
import {chatItemClickHandler} from '../chat';

const NOT_EMPTY_CLASS = 'not-empty';

let unregistrators = [];

const inputChangeHandler = (e) => {
  const value = e.target.value;

  if (value) {
    e.target.classList.add(NOT_EMPTY_CLASS);
  } else if (!value) {
    e.target.classList.remove(NOT_EMPTY_CLASS);
  }
}

export const registerEventListeners = () => {
  document.querySelectorAll('input')
    .forEach((el) => {
      el.addEventListener('change', inputChangeHandler);
      unregistrators.push(() => el.removeEventListener('change', inputChangeHandler));
    });

  document.querySelectorAll('.chat-list-item').forEach((el) => {
    el.addEventListener('click', chatItemClickHandler);
    unregistrators.push(() => el.removeEventListener('click', chatItemClickHandler));
  });
}

export const unregisterEventListeners = () => {
  unregistrators.forEach((fun) => fun());
  unregistrators = [];
}
