import { loginFormStyles } from './LoginForm.styles';
import { PasswordField } from '../../PasswordField/PasswordField';
import { TextField } from '../../TextField/TextField';
import { FormButton } from '../../FormButton/FormButton';

function LoginForm() {
  const styles = loginFormStyles();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Log in</h1>
      <div className={styles.fieldWrapper}>
        <TextField iconStyles='fas fa-user' type='text' name='login' placeholder='Login'/>
      </div>
      <div className={styles.fieldWrapper}>
        <PasswordField />
      </div>
      <div className={styles.buttonWrapper}>
        <FormButton text='Войти'/>
      </div>
    </div>
  );
}

export { LoginForm };