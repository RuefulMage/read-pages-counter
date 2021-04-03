import { NavLink } from 'react-router-dom';
import { headerNavLinkStyles } from './HeaderNavLink.styles';

function HeaderNavLink({ path, text }) {
  const styles = headerNavLinkStyles();

  return (
    <NavLink className={styles.root} to={path} activeClassName={styles.active}>
      {text}
    </NavLink>
  );
}

export { HeaderNavLink };
