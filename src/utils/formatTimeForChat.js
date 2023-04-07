const padNumberWithZeros = (number) => {
  if (number > 9) {
    return number.toString();
  }

  return `0${number}`;
}

export const formatTimeForChat = (time) => {
  const now = new Date();
  const isToday = time.getFullYear() === now.getFullYear()
    && time.getMonth() === now.getMonth()
    && time.getDate() === now.getDate();

  return isToday
    ? `${padNumberWithZeros(time.getHours())}:${padNumberWithZeros(time.getMinutes())}`
    : `${padNumberWithZeros(time.getDate())}.${padNumberWithZeros(time.getMonth())}.${time.getFullYear()}`;
}
