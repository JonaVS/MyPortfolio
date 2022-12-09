import React from "react"
import { Project } from "../../../types/project"
import { useIntl } from "gatsby-plugin-react-intl"
import { ProjectCardWrapper } from "./projectCard.styles"
import CardNav from "./CardNav/CardNav"
import CardImg from "./CardImg/CardImg"
import CardTitle from "./CardTitle/CardTitle"
import CardBody from "./CardBody/CardBody"
import CardDescription from "./CardDescription/CardDescription"
import CardTechStack from "./CardTechStack/CardTechStack"

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const intl = useIntl()
  if (intl.locale === "es") project.description = project.descriptionES

  return (
    <ProjectCardWrapper>
        <CardImg gatsbyImg={project.image.childImageSharp.gatsbyImageData} />
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
