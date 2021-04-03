import { makeStyles } from '@material-ui/styles';

const linkButtonStyles = makeStyles({
  root: {
    width: 'max-content',
    padding: '2px',
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    borderRadius: '22px',
    outline: 'none',
    cursor: 'pointer',
    userSelect: 'none',

    '&:focus, &:hover': {
      background: 'linear-gradient(180deg,rgba(188,156,255,.5),rgba(139,164,249,.5))',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    padding: '9px 18px',
    color: '#BC9CFF',
    fontWeight: 'bold',
    fontSize: '.75rem', // 12px при базовом размере шрифта 16px
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: 'white',
    borderRadius: 'inherit',
  },
});

export { linkButtonStyles };
