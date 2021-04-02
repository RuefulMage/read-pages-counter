import { headerNavLinkStyles } from './HeaderNavLink.styles';
import {NavLink} from "react-router-dom";

function HeaderNavLink({path, text}) {
  const styles = headerNavLinkStyles();

  return (
      <NavLink className={styles.root} to={path} activeClassName={styles.active}>
        {text}
      </NavLink>
  )
}

export { HeaderNavLink };