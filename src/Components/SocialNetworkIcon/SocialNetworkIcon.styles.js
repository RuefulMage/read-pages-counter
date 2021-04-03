import { makeStyles } from '@material-ui/styles';

const socialNetworkIconStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: '24px',
    fontSize: '1.5rem',
    fontFamily: 'Font Awesome Brands',
    textDecoration: 'none',
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
});

export { socialNetworkIconStyles };
