import gsap from 'gsap';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css';
import { passwordFieldStyles } from './PasswordField.styles';

function PasswordField({ placeholder, name }) {
  const togglePassVisibility = ({ input, icon }, action, type, fontAwesome) => {
    icon.setAttribute('data-action', action);
    icon.setAttribute('class', `${fontAwesome} ${styles.icon} ${iconClass}`);
    input.setAttribute('type', type);
  };

  const paintIcon = ({ icon }, color) => {
    gsap.to(icon, {
      duration: 0,
      ease: 'power3.inOut',
      color,
    });
  };

  const addActiveClassToField = (data) => {
    data.field.classList.add(styles.field_active);
  };

  const removeActiveClassFromField = (data) => {
    data.field.classList.remove(styles.field_active);
  };

  const toggleIcon = ({ icon }, rotate, fontAwesome, pointerEvents) => {
    gsap.to(icon, {
      duration: 0.6,
      ease: 'power3.inOut',
      rotate,
      transformOrigin: '70% 50%',
    });

    setTimeout(() => {
      icon.setAttribute('class', `${fontAwesome} ${styles.icon} ${iconClass}`);
      icon.style.pointerEvents = pointerEvents;
    }, 300);
  };

  const filter = (data) => {
    if (data.event === 'focus') {
      paintIcon(data, '#ff79e6');
      addActiveClassToField(data);
    } else if (data.event === 'blur' && data.value.length === 0) {
      paintIcon(data, '#bdbdbd');
    } else if (data.event === 'keydown' && data.key.length === 1 && data.value.length === 0) {
      if (data.action === 'hide') {
        toggleIcon(data, 360, 'fas fa-eye', 'all');
      } else if (data.action === 'show') {
        toggleIcon(data, 360, 'fas fa-eye-slash', 'all');
      }
    } else if (data.event === 'keyup' && data.value.length === 0) {
      toggleIcon(data, 0, 'fas fa-key', 'none');
    } else if (data.event === 'click') {
      if (data.action === 'show') {
        togglePassVisibility(data, 'hide', 'text', 'fas fa-eye');
      } else if (data.action === 'hide') {
        togglePassVisibility(data, 'show', 'password', 'fas fa-eye-slash');
      }
    }

    if (data.event === 'blur') {
      removeActiveClassFromField(data);
    }
  };

  const inputClass = 'js-password-field__input';
  const iconClass = 'js-password-field__icon';
  const handler = (e) => {
    const data = {
      event: e.type,
      key: e.key,
      target: e.currentTarget,
      field: e.currentTarget.parentElement,
      input: e.currentTarget.parentElement.querySelector(`.${inputClass}`),
      value: e.currentTarget.value,
      icon: e.currentTarget.parentElement.querySelector(`.${iconClass}`),
      action: e.currentTarget.parentElement.querySelector(`.${iconClass}`).getAttribute('data-action'),
    };

    filter(data);
  };

  const styles = passwordFieldStyles();
  return (
    <div className={styles.root}>
      <span
        aria-labelledby='password field icon'
        className={`fas fa-key ${styles.icon} ${iconClass}`}
        data-action='show'
        onClick={handler}
        onKeyDown={handler}
        tabIndex='-1'
        role='button'
      />
      <input
        placeholder={placeholder}
        type='password'
        name={name}
        id='password'
        className={`${styles.input} ${inputClass}`}
        onFocus={handler}
        onBlur={handler}
        onKeyUp={handler}
        onKeyDown={handler}
      />
    </div>
  );
}

PasswordField.defaultProps = {
  placeholder: 'Password',
  name: 'password',
};

PasswordField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export { PasswordField };
