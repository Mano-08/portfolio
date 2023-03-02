import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <nav id={styles.navbar}>
      <div>
        <span>MANO.</span>
      </div>
      <div id={styles.menu}>
        <span>MENU</span>
      </div>
    </nav>
  );
}

export default Navbar;
