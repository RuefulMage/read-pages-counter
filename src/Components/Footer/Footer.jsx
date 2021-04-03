import PropTypes from 'prop-types';
import { footerStyles } from './Footer.styles';
import { SocialNetworkIcon } from '../SocialNetworkIcon/SocialNetworkIcon';

function Footer({ text, socialNetworkIcons }) {
  const styles = footerStyles();

  const icons = socialNetworkIcons.map((icon) => (
    <li className={styles.icon}><SocialNetworkIcon
      text={icon.text}
      link={icon.link}
    />
    </li>
  ));

  return (
    <footer className={styles.root}>
      <div className={styles.text}>{text}</div>
      <ul className={styles.socialNetworkLinks}>
        {icons}
      </ul>
    </footer>
  );
}

Footer.defaultProps = {
  text: 'Copyright © 2021 Read Pages Counter. All rights reserved',
  socialNetworkIcons: [],
};

Footer.propTypes = {
  text: PropTypes.string,
  socialNetworkIcons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  })),
};

export { Footer };
