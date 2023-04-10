import templateFunction from './chat-dialog.hbs';
import attach from '@svg/attach.svg';
import messageArrow from '@svg/message-arrow.svg';
import moreVertical from '@svg/more-vertical.svg';
import messageDelivered from '@svg/message-delivered.svg';
import {formatTimeForChat, formatDate} from '../../utils';

const placeMessagesByDate = (messages) => {
  const res = {};

  messages.forEach((message) => {
    const formattedDate = formatDate(message.time);

    if (!res[formattedDate]) {
      res[formattedDate] = [];
    }

    res[formattedDate].push(message);
  });

  return res;
}

export const chatDialog = (props) => {
  const messages = props.chat.messages.map((mes) => ({...mes, timeString: formatTimeForChat(mes.time)}));
  const messagesByDates = placeMessagesByDate(messages);
  const messagesByDatesArray = Object.entries(messagesByDates).map(([date, messages]) => ({date, messages}));

  const chat = {
    ...props.chat,
    dates: messagesByDatesArray
  }
  return templateFunction({chat, attach, messageArrow, moreVertical, messageDelivered});
}
