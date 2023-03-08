import styles from "../styles/Experience.module.scss";
import ExperienceCard from "../components/ExperienceCard";
import experience from "../content/experience";

function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <div id={styles.experienceTitle}>
        <span>Experience</span>
      </div>
      <div id={styles.experienceCards}>
        {experience.map((ele, index) => {
          return (
            <ExperienceCard
              key={index}
              role={ele.role}
              company={ele.company}
              context={ele.context}
              duration={ele.duration}
              image={ele.image}
              tools={ele.tools}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
