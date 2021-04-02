import {headerNavigationStyles} from "./HeaderNavigation.styles";
import {HeaderNavLink} from "../HeaderLink/HeaderNavLink";

function HeaderNavigation() {
  const styles = headerNavigationStyles();

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>
          <HeaderNavLink path="/login" text='login' />
        </li>
        <li>
          <HeaderNavLink path="/main" text='main' />
        </li>
        <li>
          <HeaderNavLink path="/home" text='home' />
        </li>
      </ul>
    </nav>
  );
}

export { HeaderNavigation };