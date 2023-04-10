const monthsInGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
  'сентября', 'октября', 'ноября', 'декабря'];

export const formatDate = (date) => {
  return `${date.getDate()} ${monthsInGenitive[date.getMonth()]}`;
}
