import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectData } from "../../types/GraphqlQueriesTypes/ProjectData"
import { ProjectsContainer } from "./projectsSection.styles"
import Title from "../shared/Title/Title"
import ProjectCardList from "./ProjectCardList/ProjectCardList"

const ProjectsSection = () => {
  const intl = useIntl()
  const data = useStaticQuery<ProjectData>(graphql`
  query ProjectsQuery {
    allContentfulProject(sort: {position: ASC}) {
      nodes {
        id
        image {
          gatsbyImageData(placeholder: BLURRED, quality: 80)
        }
        title
        description
        gitLink
        demoLink
        techStack
        node_locale
      }
    }
  }
`)

const {allContentfulProject: {nodes}} = data
const projects =
  intl.locale === "en"
    ? nodes.filter(project => project.node_locale === "en-US")
    : nodes.filter(project => project.node_locale === "es-CR")

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
