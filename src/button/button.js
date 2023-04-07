import templateFunction from './button.hbs';

const button = ({variant, caption, fullWidth, type = 'button', classes = [], href}) => {
  const classNames = ['button', variant, ...classes];

  if (fullWidth) {
    classNames.push('full-width');
  }

  return templateFunction({caption, classes: classNames.join(' '), type, href});
}

export {button};
