import React from "react"
import { Project } from "../../../types/project"
import ProjectCard from "../ProjectCard/ProjectCard"
import * as styles from "./projectCardList.module.css"

type Props = {
  projects: Project[]
}

const ProjectCardList = ({ projects }: Props) => {
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
