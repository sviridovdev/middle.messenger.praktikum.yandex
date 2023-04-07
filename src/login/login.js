import {authForm} from '../auth-form';
import {input} from '../input';
import {button} from '../button';

export const login = () => {
  const loginInput = input({
    name: 'login',
    placeholder: 'Логин',
    type: 'text',
    fullWidth: true,
    error: 'Просто тестовая ошибка'
  });

  const passwordInput = input({
    name: 'password',
    placeholder: 'Пароль',
    type: 'password',
    fullWidth: true
  });

  const submitButton = button({
    variant: 'primary',
    caption: 'Авторизоваться',
    fullWidth: true
  });

  const toRegistrationButton = button({
    variant: 'text',
    caption: 'Нет аккаунта?',
    fullWidth: true,
    href: '/#/register'
  });

  return authForm({
    title: 'Вход',
    inputs: [loginInput, passwordInput],
    buttons: [submitButton, toRegistrationButton]
  });
}
