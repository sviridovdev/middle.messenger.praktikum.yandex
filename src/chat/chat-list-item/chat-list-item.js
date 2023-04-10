import templateFunction from './chat-list-item.hbs';
import {formatTimeForChat} from '../../utils';

export const chatListItem = ({messages, ...rest}) => {
  const lastMessage = messages[messages.length - 1];
  const lastMessageIsYours = lastMessage.senderIsYou;
  const timeString = formatTimeForChat(lastMessage.time);
  const unreadCount = messages.filter((message) => message.unread).length;

  return templateFunction({
    time: timeString,
    lastMessageIsYours,
    lastMessage: lastMessage.text,
    unreadCount,
    ...rest
  });
}
