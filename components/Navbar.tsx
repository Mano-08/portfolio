import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav id={styles.navbar}>
      <Link href="#home" scroll={false}>
        <span>MANO.</span>
      </Link>
      <div id={styles.menu}>
        <Link href="#experience" scroll={false}>
          <span>EXPERIENCE</span>
        </Link>
        <Link href="#projects" scroll={false}>
          <span>PROJECTS</span>
        </Link>
        <Link href="#contact" scroll={false}>
          <span>CONTACT</span>
        </Link>
      </div>
      <div
        id={styles.navMenu}
        style={
          menu
            ? { transform: "translateY(0)", transition: "1s ease-in-out" }
            : {
                transform: "translateY(-110vh)",
                transition: "0.8s ease-in-out",
              }
        }
      >
        <div
          id={styles.navList}
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="#home" className={menu ? styles.navLink : ""}>
            <span>H</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </Link>
          <Link href="#about" className={menu ? styles.navLink : ""}>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </Link>
          <Link href="#" className={menu ? styles.navLink : ""}>
            <span>E</span>
            <span>X</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>I</span>
            <span>E</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
          </Link>

          <Link href="#" className={menu ? styles.navLink : ""}>
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
          </Link>
          <Link className={menu ? styles.navLink : ""} href="#contact">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </Link>
        </div>
      </div>
      <div
        id={styles.navDesigner}
        style={
          menu
            ? {
                transform: "translateY(0vh)",
                transition: "0.8s ease-in-out",
              }
            : {
                transform: "translateY(-101vh)",
                transition: "0.9s ease-in-out",
              }
        }
      />
    </nav>
  );
}

export default Navbar;
