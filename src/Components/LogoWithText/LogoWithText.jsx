import {logoWithTextStyles} from "./LogoWithText.styles";
import {Logo} from "../Logo/Logo";

function LogoWithText() {
  const styles = logoWithTextStyles();

  return (<div className={styles.root}>
    <div className={styles.logoWrapper}>
      <Logo />
    </div>
    <p className={styles.text}>Read Page Counter</p>
  </div>);
}

export { LogoWithText };