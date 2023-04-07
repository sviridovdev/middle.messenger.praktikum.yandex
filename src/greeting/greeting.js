import templateFunction from './greeting.hbs';
import './styles.scss';

export const greeting = (name) => {
  return templateFunction({name});
}
