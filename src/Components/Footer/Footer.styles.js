import { makeStyles } from '@material-ui/styles';

const footerStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '15px 40px',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    textAlign: 'left'
  },
  socialNetworkLinks: {
    display: 'flex',
    margin: '0'
  },
  icon: {
    listStyle: 'none',
    marginRight: '10px',
    '&:last-child': {
      marginRight: '0'
    }
  }
});

export { footerStyles };