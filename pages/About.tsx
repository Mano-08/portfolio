import React from "react";
import { Reveal, Fade } from "react-awesome-reveal";
import styles from "../styles/About.module.scss";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
   transform: translateY(4rem) skewY(1deg);
  }
  to {
    transform: translateY(0rem) skewY(0deg);
  }
`;

function About() {
  return (
    <div id="about" className={styles.about}>
      <div id={styles.aboutTitle}>
        <Reveal triggerOnce duration={500} keyframes={customAnimation}>
          <span>ABOUT</span>
        </Reveal>
      </div>
      <Reveal triggerOnce duration={500} keyframes={customAnimation}>
        <p style={{ color: "white" }}>
          A computer science student from Canada. I aim to deepen my
          understanding in various areas of technology and product development.
        </p>
      </Reveal>
    </div>
  );
}

export default About;
