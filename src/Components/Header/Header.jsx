import { headerStyles } from './Header.styles';
import { HeaderNavigation } from '../Navigation/HeaderNavigation';

function Header() {
  const styles = headerStyles();

  return (
    <div className={styles.root}>
      <HeaderNavigation />
    </div>
  );
}

export { Header };
