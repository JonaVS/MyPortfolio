import React from "react"
import { ProjectNode } from "../../../types/GraphqlQueriesTypes/ProjectData"
import { ProjectsList } from "./projectCardList.styles"
import ProjectCard from "../ProjectCard/ProjectCard"

type Props = {
  projects: ProjectNode[]
}

const ProjectCardList = ({ projects }: Props) => {
  return (
    <ProjectsList>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectsList>
  )
}

export default ProjectCardList
