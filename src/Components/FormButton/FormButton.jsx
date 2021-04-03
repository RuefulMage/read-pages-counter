import PropTypes from 'prop-types';
import { formButtonStyles } from './FormButton.styles';

function FormButton({ text }) {
  const styles = formButtonStyles();

  return (
    <button type='submit' className={styles.root}>
      <span className={styles.text}>{text}</span>
      <span className={styles.icon}>arrow_forward</span>
    </button>
  );
}

FormButton.defaultProps = {
  text: 'Submit',
};

FormButton.propTypes = {
  text: PropTypes.string,
};

export { FormButton };
