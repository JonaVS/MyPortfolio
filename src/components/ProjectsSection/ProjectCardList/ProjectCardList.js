import React from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import * as styles from "./projectCardList.module.css"

const ProjectCardList = ({ projects }) => {
  return (
    <ul className={styles.projectCardLIst}>
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          project={project}
        />
      ))}
    </ul>
  )
}

export default ProjectCardList
