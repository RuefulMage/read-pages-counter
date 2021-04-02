import { makeStyles } from '@material-ui/styles';

const logoStyles = makeStyles({
  root: {
    fontFamily: 'Font Awesome',
    fontSize: '40px',
    color: '#BC9CFF',
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }
});

export { logoStyles };