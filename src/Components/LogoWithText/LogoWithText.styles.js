import { makeStyles } from '@material-ui/styles';

const logoWithTextStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logoWrapper: {
    marginRight: '15px',
  },
  text: {
    margin: '0',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#BC9CFF',
  },
});

export { logoWithTextStyles };
