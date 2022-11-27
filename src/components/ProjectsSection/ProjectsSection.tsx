import React from "react"
import { Project } from "../../types/project"
import { useIntl } from "gatsby-plugin-react-intl"
import Title from "../shared/Title/Title"
import ProjectCardList from "./ProjectCardList/ProjectCardList"

type Props = {
  projects: Project[]
}

const ProjectsSection = ({ projects }: Props) => {
  const intl = useIntl()
  return (
    <section>
      <Title text={intl.formatMessage({ id: "projects-title" })} />
      <ProjectCardList projects={projects} />
    </section>
  )
}

export default ProjectsSection
