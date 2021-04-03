import { secondaryHeaderStyles } from './SecondaryHeader.styles';
import { LogoWithText } from '../LogoWithText/LogoWithText';

function SecondaryHeader() {
  const styles = secondaryHeaderStyles();

  return (
    <header className={styles.root}>
      <LogoWithText />
    </header>
  );
}

export { SecondaryHeader };
