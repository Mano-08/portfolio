import styles from "../styles/Experience.module.scss";
import ExperienceCard from "../components/ExperienceCard";

function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <div id={styles.experienceTitle}>
        <span>Experience</span>
      </div>
      <div id={styles.experienceCards}>
        <ExperienceCard
          role={"Web Developer"}
          company={"@ Google Developer Student Club NIT Andhra Chapter"}
          context={[
            `Designed and built the FAQ page and contact page with ReactJS, SCSS and Figma. Collaborated with
          cross-functional teams, performed user research and designed the website’s user interface.
          `,
            `Accelerated the load time of the website by 30% by replacing previous styling with SASS. Implemented
          nested syntax and flow control for iterating through elements in stylesheet.
          `,
          ]}
          duration={"Sept 2022 - Apr 2023"}
          image={"GDSC"}
          tools={"ReactJS, NextJS, JavaScript, SCSS, Figma"}
        />
      </div>
    </div>
  );
}

export default Experience;
