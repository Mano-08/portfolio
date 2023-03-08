import styles from "../styles/ExperienceCard.module.scss";
import gdsc from "../assets/images/gdsc.svg";
import Image, { StaticImageData } from "next/image";
type propTypes = {
  role: String;
  context: String[];
  duration: String;
  image: StaticImageData;
  tools: String;
  company: String;
};

function ExperienceCard(props: propTypes) {
  const imagePicker = () => {
    return gdsc;
  };

  return (
    <div className={styles.expCard}>
      <div className={styles.expCardImg}>
        <Image src={imagePicker()} alt="" />
        <div className={styles.designerArrow} />
      </div>
      <div className={styles.expCardContent}>
        <div className={styles.expCardWrapper}>
          <div className={styles.role}>{props.role}</div>
          <div className={styles.company}>{props.company}</div>
          <div className={styles.tools}>
            <span>tools : </span>
            <span>{props.tools}</span>
          </div>
          <div className={styles.context}>
            {props.context.map((elem, ind) => {
              return (
                <div key={ind} className={styles.contextElem}>
                  <span> • </span>
                  <p>{elem}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.duration}>{props.duration}</div>
      </div>
    </div>
  );
}

export default ExperienceCard;
