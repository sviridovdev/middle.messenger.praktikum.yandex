import templateFunction from './input.hbs';

const input = ({fullWidth, ...rest}) => {
  const classes = [];

  if (fullWidth) {
    classes.push('full-width');
  }

  return templateFunction({classes: classes.join(' '), ...rest});
}

export {input};
