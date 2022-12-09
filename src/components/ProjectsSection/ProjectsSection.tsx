import React from "react"
import { Project } from "../../types/project"
import { useIntl } from "gatsby-plugin-react-intl"
import { ProjectsContainer } from "./projectsSection.styles"
import Title from "../shared/Title/Title"
import ProjectCardList from "./ProjectCardList/ProjectCardList"

type Props = {
  projects: Project[]
}

const ProjectsSection = ({ projects }: Props) => {
  const intl = useIntl()
  return (
    <ProjectsContainer fluid={false}>
      <section>
        <Title text={intl.formatMessage({ id: "projects-title" })} />
        <ProjectCardList projects={projects} />
      </section>
    </ProjectsContainer>
  )
}

export default ProjectsSection
