import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import CardNav from "./CardNav/CardNav"
import CardImg from "./CardImg/CardImg"
import CardTitle from "./CardTitle/CardTitle"
import CardBody from "./CardBody/CardBody"
import CardDescription from "./CardDescription/CardDescription"
import CardTechStack from "./CardTechStack/CardTechStack"
import * as styles from "../ProjectCard/projectCard.module.css"


const ProjectCard = ({ project }) => {
  const intl = useIntl()
  if (intl.locale === "es") project.description = project.descriptionES

  return (
    <li className={styles.wrapper}>
        <CardImg gatsbyImg={project.image.childImageSharp.gatsbyImageData} />
        <CardBody>
          <CardTitle title={project.title}>
            <CardNav gitLink={project.gitLink} demoLink={project.demoLink} />
          </CardTitle>
          <CardDescription description={project.description} />
          <CardTechStack techStack={project.techStack}/>
        </CardBody>
    </li>
  )
}

export default ProjectCard
