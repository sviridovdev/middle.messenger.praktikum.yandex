import templateFunction from './error-page.hbs';
import {button} from '../button';

export const ERRORS = {
  NOT_FOUND: 'NOT_FOUND',
  SERVER_ERROR: 'SERVER_ERROR'
}

export const errorPage = (type) => {
  const backToChats = button({variant: 'text', caption: 'Назад к чатам', href: '/#/chat'});

  switch (type) {
    case ERRORS.SERVER_ERROR:
      return templateFunction({code: '500', message: 'Мы уже фиксим', backToChats});
    default:
      return templateFunction({code: '404', message: 'Не туда попали', backToChats});
  }
}
