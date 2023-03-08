import Image from "next/image";
import styles from "../styles/Home.module.scss";
import image from "../assets/gifs/handshake.gif";

function Home() {
  return (
    <div className={styles.home} id="home">
      <div id={styles.homeWrapper}>
        <div id={styles.homeIntro}>
          <div id={styles.homeMano}>
            <span id={styles.textMANO}>
              <span>M</span>ANO
            </span>
          </div>
          <div className={styles.role}>
            <div id={styles.domainTitle}>
              <span>SOFTWARE</span>
              <span>WEB</span>
              <span>TECH</span>
            </div>
          </div>
          <div className={styles.role}>
            <div id={styles.domainRole}>
              <span>DEVELOPER</span>
              <span>DESIGNER</span>
              <span>ENTHUSIAST</span>
            </div>
          </div>
        </div>
        <div id={styles.homeImage}>
          <div />
          <Image src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
