import templateFunction from './chat.hbs';
import arrow from '@svg/arrow-right.svg';
import search from '@svg/search.svg';
import {chatListItem} from './chat-list-item';
import {chatDialog} from './chat-dialog';

const now = new Date();
const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const testChatsData = [{
  uuid: '4c46ac84-dbf1-4e7d-9ba4-dc06e94a78c3',
  name: 'Илья',
  messages: [{
    senderIsYou: false,
    time: new Date(now.getTime() - HOUR * 1.5),
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem dolores harum iste modi nemo, odio omnis perferendis sapiente vitae.',
    unread: true
  }]
}, {
  uuid: '10ba62e7-1e1d-478c-bc52-32a32c5bd679',
  name: 'Вадим',
  messages: [
    {
      senderIsYou: false,
      time: new Date(now.getTime() - DAY + MINUTE),
      text: 'Съешь еще этих французских булок'
    },
    {
      senderIsYou: false,
      time: new Date(now.getTime() - DAY),
      text: 'И чаю, кстати, выпей, да'
    },
    {
      senderIsYou: false,
      time: new Date(now.getTime() - HOUR),
      text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        '\n' +
        'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    },
    {
      time: new Date(now.getTime() - HOUR + MINUTE * 8),
      senderIsYou: true,
      text: 'Круто!',
      delivered: true
    }
  ]
}];

export const chat = () => {
  const chats = testChatsData.map((chat) => chatListItem(chat));

  return templateFunction({
    icons: {
      arrow,
      search
    },
    chats
  });
}

const findNearestItem = (el) => {
  let element = el;

  while (true) {
    if (element.classList.contains('chat-list-item')) {
      return element;
    }

    element = element.parentElement;
  }
}

export const chatItemClickHandler = (e) => {
  const target = findNearestItem(e.target);
  document.querySelectorAll('.chat-list-item').forEach((item) => {
    if (item === target) {
      const activeChatUuid = item.dataset.chatUuid;
      const activeChat = testChatsData.find((chat) => chat.uuid === activeChatUuid);

      if (activeChat) {
        document.querySelector('.chat__main-screen').innerHTML = chatDialog({chat: activeChat});
        const dialog = document.querySelector('.chat-dialog__messages');
        dialog.scrollTo(0, dialog.scrollHeight);
      }

      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}
