import templateFunction from './profile.hbs';
import arrow from '@svg/message-arrow.svg';
import avatar from '@svg/avatar.svg';
import {button} from '../button';

const personalDataCaptions = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  email: 'Почта',
  login: 'Логин',
  chatName: 'Имя в чате',
  phone: 'Телефон'
}


const testData = {
  personalData: {
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    chatName: 'Иван',
    phone: '+7 (909) 967 30 30'
  }
};

export const profile = (props) => {
  let personalFields;
  if (props?.changePassword) {
    personalFields = [{
      caption: 'Старый пароль',
      value: ''
    }, {
      caption: 'Новый пароль',
      value: ''
    }, {
      caption: 'Повторите пароль',
      value: ''
    }]
  } else {
    personalFields = Object.entries((testData.personalData)).map(([key, value]) => ({
      caption: personalDataCaptions[key],
      value
    }));
  }

  const saveButton = button({
    caption: 'Сохранить',
    variant: 'primary',
    classes: ['profile__save-button'],
    href: '/#/profile'
  })

  return templateFunction({...props, ...testData, arrow, avatar, personalFields, saveButton});
}
