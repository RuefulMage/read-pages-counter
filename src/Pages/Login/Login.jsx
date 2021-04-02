import { LoginForm } from '../../Components/Forms/LoginForm/LoginForm';
import {loginPageStyles} from "./Login.styles";
import {MainLayout} from "../../Components/MainLayout/MainLayout";

function Login() {
  const styles = loginPageStyles();

  return(
    <MainLayout isHeaderPrimary={false}>
      <div className={styles.root}>
        <LoginForm />
      </div>
    </MainLayout>
  )
}

export { Login };