import styles from "../styles/Footer.module.scss";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id={styles.footer}>
      <span></span>
      <span id={styles.copyright}>© {year} Mano W</span>
    </footer>
  );
}

export default Footer;
