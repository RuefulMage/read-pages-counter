import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { headerNavLinkStyles } from './HeaderNavLink.styles';

function HeaderNavLink({ path, text }) {
  const styles = headerNavLinkStyles();

  return (
    <NavLink className={styles.root} to={path} activeClassName={styles.active}>
      {text}
    </NavLink>
  );
}

HeaderNavLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { HeaderNavLink };
