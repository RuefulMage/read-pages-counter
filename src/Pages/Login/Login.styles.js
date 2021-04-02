import {makeStyles} from "@material-ui/styles";
import background from './static/login-page-background.jpg';

const loginPageStyles = makeStyles({
  root: {
    // padding: '252px 0',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `padding-box no-repeat center/cover url(".${background}")`,
  },
});

export { loginPageStyles };