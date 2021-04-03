import PropTypes from 'prop-types';
import { textFieldStyles } from './TextField.styles';

function TextField({ iconSymbol, type, name, placeholder }) {
  const styles = textFieldStyles();
  const inputClass = 'js-text-field__input';
  const iconClass = 'js-text-field__icon';

  const handler = (event) => {
    const fieldRoot = event.currentTarget.parentElement;
    const icon = fieldRoot.querySelector(`.${iconClass}`);
    if (event.type === 'focus') {
      icon.classList.add(styles.icon_active);
      fieldRoot.classList.add(styles.field_active);
    } else {
      icon.classList.remove(styles.icon_active);
      fieldRoot.classList.remove(styles.field_active);
    }
  };

  return (
    <div className={styles.root}>
      <span className={`${styles.icon} ${iconClass}`}>{iconSymbol}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${styles.input} ${inputClass}`}
        onFocus={handler}
        onBlur={handler}
      />
    </div>
  );
}

TextField.defaultProps = {
  iconSymbol: '',
  type: 'text',
  name: 'text',
  placeholder: 'Enter text here',
};

TextField.propTypes = {
  iconSymbol: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export { TextField };
