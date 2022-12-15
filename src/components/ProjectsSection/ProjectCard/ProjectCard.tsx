import React from "react"
import { ProjectNode } from "../../../types/GraphqlQueriesTypes/ProjectData"
import { ProjectCardWrapper } from "./projectCard.styles"
import CardNav from "./CardNav/CardNav"
import CardImg from "./CardImg/CardImg"
import CardTitle from "./CardTitle/CardTitle"
import CardBody from "./CardBody/CardBody"
import CardDescription from "./CardDescription/CardDescription"
import CardTechStack from "./CardTechStack/CardTechStack"

type Props = {
  project: ProjectNode
}

const ProjectCard = ({ project }: Props) => {
  return (
    <ProjectCardWrapper>
        <CardImg gatsbyImg={project.image.gatsbyImageData} />
        <CardBody>
          <CardTitle title={project.title}>
            <CardNav gitLink={project.gitLink} demoLink={project.demoLink} />
          </CardTitle>
          <CardDescription description={project.description} />
          <CardTechStack techStack={project.techStack}/>
        </CardBody>
    </ProjectCardWrapper>
  )
}

export default ProjectCard
