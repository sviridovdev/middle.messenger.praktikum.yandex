import templateFunction from './profile.hbs';
import arrow from '@svg/message-arrow.svg';
import avatar from '@svg/avatar.svg';
import {button} from '../button';

const personalDataCaptions = {
  first_name: 'Имя',
  second_name: 'Фамилия',
  email: 'Почта',
  login: 'Логин',
  display_name: 'Имя в чате',
  phone: 'Телефон'
}


const testData = {
  personalData: {
    first_name: 'Иван',
    second_name: 'Иванов',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30'
  }
};

export const profile = (props) => {
  let personalFields;
  if (props?.changePassword) {
    personalFields = [{
      caption: 'Старый пароль',
      value: '',
      name: 'oldPassword'
    }, {
      caption: 'Новый пароль',
      value: '',
      name: 'newPassword'
    }, {
      caption: 'Повторите пароль',
      value: '',
      name: 'newPasswordRepeat'
    }]
  } else {
    personalFields = Object.entries((testData.personalData)).map(([key, value]) => ({
      name: key,
      caption: personalDataCaptions[key],
      value
    }));
  }

  const saveButton = button({
    caption: 'Сохранить',
    type: 'submit',
    variant: 'primary',
    classes: ['profile__save-button']
  })

  return templateFunction({...props, ...testData, arrow, avatar, personalFields, saveButton});
}
