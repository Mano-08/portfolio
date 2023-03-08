import React from "react";
import { Reveal, Fade } from "react-awesome-reveal";
import styles from "../styles/About.module.scss";
import { keyframes } from "@emotion/react";
import me from "../assets/images/me.png";
import Image from "next/image";

const customAnimation = keyframes`
  from {
   transform: translateY(5rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

const customAnimation2 = keyframes`
  from {
   transform: translateY(3rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

function About() {
  return (
    <div id="about" className={styles.about}>
      <div id={styles.aboutTitle}>
        <Reveal triggerOnce duration={500} keyframes={customAnimation}>
          <span
            style={{
              transform: "translateY(5rem)",
            }}
          >
            ABOUT
          </span>
        </Reveal>
      </div>
      <div id={styles.aboutContent}>
        <Reveal
          triggerOnce
          delay={100}
          duration={300}
          keyframes={customAnimation2}
        >
          <span>Hello! I am Mano and I am a</span>
          <span>Computer Science student from</span>
          <span>India. I work towards deepening</span>
          <span> my knowledge in technology and</span>
          <span> building scalable solutions.</span>
        </Reveal>
        <Image src={me} alt="" />
      </div>
    </div>
  );
}

export default About;
