import ProjectCard from "@/components/ProjectCard";
import styles from "../styles/Projects.module.scss";
import projects from "../content/projects";

function Projects() {
  return (
    <div id="projects" className={styles.projectsPage}>
      <div id={styles.projectTitle}>
        <span>Projects</span>
      </div>
      <div id={styles.projects}>
        {projects.map((ele, index) => {
          return (
            <ProjectCard
              key={index}
              name={ele.name}
              tools={ele.tools}
              context={ele.content}
              time={ele.time}
              githubRepo={ele.githubRepo}
              isWebsite={ele.isWebsite}
              websiteLink={ele.websiteLink}
              image={ele.image}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
