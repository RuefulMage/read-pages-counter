import { linkButtonStyles } from './LinkButton.styles';

function LinkButton({ text, link }) {
  const styles = linkButtonStyles();

  return (
    <div className={styles.root}>
      <a className={styles.content} href={link}>{text}</a>
    </div>
  );
}

export { LinkButton };
