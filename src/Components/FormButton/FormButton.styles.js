import { makeStyles } from '@material-ui/styles';

const formButtonStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '9px 0 9px 46px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '.75rem', // 12px при базовом размере шрифта 16px
    textTransform: 'uppercase',
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    borderRadius: '22px',
    outline: 'none',
    userSelect: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '100%',

    '&:focus, &:hover': {
      background: 'linear-gradient(180deg,rgba(188,156,255,.5),rgba(139,164,249,.5))',
    },
  },
  text: {
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    width: '100%',
    maxWidth: '44px',
    fontWeight: 'normal',
    fontSize: '1.5rem', // 24px при базовом размере шрифта 16px
    fontFamily: 'Material Icons',
    textAlign: 'center',
    textTransform: 'none',
  },
});

export { formButtonStyles };
