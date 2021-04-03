import { loginFormStyles } from './LoginForm.styles';
import { PasswordField } from '../../PasswordField/PasswordField';
import { TextField } from '../../TextField/TextField';
import { FormButton } from '../../FormButton/FormButton';
import { LinkButton } from '../../LinkButton/LinkButton';

function LoginForm() {
  const styles = loginFormStyles();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Log in</h1>
      <div className={styles.fieldWrapper}>
        <TextField icon='' type='text' name='login' placeholder='Login' />
      </div>
      <div className={styles.fieldWrapper}>
        <PasswordField placeholder='Password' name='password' />
      </div>
      <div className={styles.buttonWrapper}>
        <FormButton text='Log in' link='#' />
      </div>
      <div className={styles.signUpWrapper}>
        <span>Don't have an account?</span>
        <LinkButton text='Sign Up' link='/registration' />
      </div>
    </div>
  );
}

export { LoginForm };
