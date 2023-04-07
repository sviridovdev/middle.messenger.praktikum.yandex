import {authForm} from '../auth-form';
import {input} from '../input';
import {button} from '../button';

export const register = () => {
  const emailInput = input({
    name: 'email',
    placeholder: 'Почта',
    type: 'email',
    fullWidth: true
  });

  const loginInput = input({
    name: 'login',
    placeholder: 'Логин',
    type: 'text',
    fullWidth: true
  });

  const firstNameInput = input({
    name: 'firstName',
    placeholder: 'Имя',
    type: 'text',
    fullWidth: true
  });

  const lastNameInput = input({
    name: 'lastName',
    placeholder: 'Фамилия',
    type: 'text',
    fullWidth: true
  });

  const phoneInput = input({
    name: 'phone',
    placeholder: 'Телефон',
    type: 'tel',
    fullWidth: true
  });

  const passwordInput = input({
    name: 'password',
    placeholder: 'Пароль',
    type: 'password',
    fullWidth: true
  });

  const passwordRepeatInput = input({
    name: 'passwordRepeat',
    placeholder: 'Пароль (ещё раз)',
    type: 'password',
    fullWidth: true
  });

  const submitButton = button({
    variant: 'primary',
    caption: 'Зарегистрироваться',
    fullWidth: true
  });

  const toLoginButton = button({
    variant: 'text',
    caption: 'Войти',
    fullWidth: true,
    href: '/#/login'
  });

  return authForm({
    title: 'Регистрация',
    inputs: [emailInput, loginInput, firstNameInput, lastNameInput, phoneInput, passwordInput, passwordRepeatInput],
    buttons: [submitButton, toLoginButton]
  });
}
