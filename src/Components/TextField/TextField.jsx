import { textFieldStyles } from './TextField.styles';

function TextField({ icon, type, name, placeholder }) {
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
      <span className={`${styles.icon} ${iconClass}`}>{icon}</span>
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

export { TextField };
