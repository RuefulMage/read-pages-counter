import { logoStyles } from './Logo.styles';

function Logo() {
  const styles = logoStyles();

  return (<span className={styles.root}></span>);
}

export { Logo };