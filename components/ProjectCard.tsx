import styles from "../styles/ProjectCard.module.scss";
import Image, { StaticImageData } from "next/image";
import arrow from "../assets/images/arrow.svg";
import github from "../assets/images/github.svg";
import image from "../assets/gifs/handshake.gif";
import Link from "next/link";

type propType = {
  name: String;
  tools: String;
  context: String[];
  time: String;
  githubRepo: string;
  isWebsite: Boolean;
  websiteLink: string;
  image: StaticImageData;
  index: number;
};

function ProjectCard(prop: propType) {
  return (
    <div
      className={styles.project}
      style={prop.index % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}
    >
      <div className={styles.projectContext}>
        <div className={styles.projectName}>
          <span>{prop.name}</span>
        </div>
        <div className={styles.projectTools}>
          <span>tools : </span>
          <span>{prop.tools}</span>
        </div>
        <div className={styles.projectConext}>
          {prop.context.map((element, index) => {
            return (
              <div key={index} className={styles.projectcontextEl}>
                <span className={styles.bullet}> • </span>
                <span>{element}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.projectTime}>
          <span>{prop.time}</span>
          <div className={styles.projectHyperlinks}>
            <a href={prop.githubRepo}>
              <Image className={styles.github} src={github} alt={"github"} />
            </a>
            <a href={prop.websiteLink}>
              <Image className={styles.arrow} src={arrow} alt={"arrow"} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projectImage}>
        <Image src={image} alt=""></Image>
      </div>
    </div>
  );
}

export default ProjectCard;
