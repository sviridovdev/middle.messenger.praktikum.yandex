import {dispatcherPage} from '../dispatcher-page';
import {login} from '../login';
import {register} from '../register';
import {profile} from '../profile';
import {chat} from '../chat';
import {errorPage, ERRORS} from '../error-page';

export const routes = [
  {
    path: '',
    template: dispatcherPage
  },
  {
    path: '/login',
    template: login
  },
  {
    path: '/register',
    template: register,
  },
  {
    path: '/profile',
    template: profile,
  },
  {
    path: '/profile/edit',
    template: () => profile({edit: true}),
  },
  {
    path: '/profile/change-password',
    template: () => profile({edit: true, changePassword: true}),
  },
  {
    path: '/chat',
    template: chat
  },
  {
    path: '/500',
    template: () => errorPage(ERRORS.SERVER_ERROR)
  },
  {
    path: '/404',
    template: () => errorPage(ERRORS.NOT_FOUND)
  }
];
