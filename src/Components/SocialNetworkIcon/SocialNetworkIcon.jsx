import PropTypes from 'prop-types';
import { socialNetworkIconStyles } from './SocialNetworkIcon.styles';

function SocialNetworkIcon({ text, link }) {
  const styles = socialNetworkIconStyles();

  return <a className={styles.root} href={link} target='_blank' rel='noopener noreferrer'>{text}</a>;
}

SocialNetworkIcon.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export { SocialNetworkIcon };
