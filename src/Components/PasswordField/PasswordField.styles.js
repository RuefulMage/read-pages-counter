import { makeStyles } from '@material-ui/styles';

const passwordFieldStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: '1px solid #bdbdbd',
    padding: '13px',
    borderRadius: '30px',
    boxSizing: 'border-box',
  },
  field_active: {
    borderColor: '#ff79e6',
  },
  icon: {
    marginRight: '10px',
    color: '#bdbdbd'
  },
  input: {
    border: 'none',
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  }
});

export { passwordFieldStyles };