import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import Title from "../shared/Title/Title"
import ProjectCardList from "./ProjectCardList/ProjectCardList"

const ProjectsSection = ({ projects }) => {
  const intl = useIntl()
  return (
    <section>
      <Title text={intl.formatMessage({ id: "projects-title" })} />
      <ProjectCardList projects={projects} />
    </section>
  )
}

ProjectsSection.defaultProps = {
  projects: [],
}

export default ProjectsSection
