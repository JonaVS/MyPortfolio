import React from "react"
import { Project } from "../../../types/project"
import { ProjectsList } from "./projectCardList.styles"
import ProjectCard from "../ProjectCard/ProjectCard"

type Props = {
  projects: Project[]
}

const ProjectCardList = ({ projects }: Props) => {
  return (
    <ProjectsList>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </ProjectsList>
  )
}

export default ProjectCardList
