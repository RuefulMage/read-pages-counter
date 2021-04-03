import { socialNetworkIconStyles } from './SocialNetworkIcon.styles';

function SocialNetworkIcon({ text, link }) {
  const styles = socialNetworkIconStyles();

  return <a className={styles.root} href={link} target='_blank' rel='noopener noreferrer'>{text}</a>;
}

export { SocialNetworkIcon };
