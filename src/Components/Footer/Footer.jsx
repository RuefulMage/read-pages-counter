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

export { Footer };
