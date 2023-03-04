import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import handshake from "../assets/handshake.gif";

function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <div id={styles.handshake}>
        <Image priority={true} src={handshake} alt="handshake" />
      </div>
      <div id={styles.socialsWrapper}>
        <div id={styles.contactPipe} />
        <div id={styles.socials}>
          <p>
            <span>T</span>
            <span>w</span>
            <span>i</span>
            <span>t</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
          </p>
          <p>
            <span>L</span>
            <span>i</span>
            <span>n</span>
            <span>k</span>
            <span>e</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
          </p>
          <p>
            <span>E</span>
            <span>m</span>
            <span>a</span>
            <span>i</span>
            <span>l</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
