import { makeStyles } from '@material-ui/styles';

const loginFormStyles = makeStyles({
  root: {
    maxWidth: '400px',
    boxSizing: 'border-box',
    width: '100%',
    padding: '40px 30px 20px',
    border: '1px solid rgba(0, 0, 0, .12)',
    borderRadius: '4px',
    boxShadow: '0 0 25px rgba(0, 0, 0, .2)',
    background: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '25px',
  },
  fieldWrapper: {
    marginBottom: '20px',
  },
  buttonWrapper: {
    marginBottom: '20px',
    width: '100%',
  },
  button: {
    backgroundColor: '#ff79e6',
  },
  signUpWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export { loginFormStyles };
