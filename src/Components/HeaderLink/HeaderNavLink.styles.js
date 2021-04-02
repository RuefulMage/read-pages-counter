import { makeStyles } from '@material-ui/styles';

const headerNavLinkStyles = makeStyles({
  root: {
    display: 'inline-block',
    padding: '20px 10px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#BC9CFF',
  },
  active: {
    fontWeight: 'bold',
    backgroundColor: '#BC9CFF',
    color: '#FFFFFF',
  }
});

export { headerNavLinkStyles };