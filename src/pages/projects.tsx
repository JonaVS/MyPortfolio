import React from "react"
import { graphql } from "gatsby"
import { Project } from "../types/project"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import Container from "../components/shared/Container/Container"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import * as styles from "../styles/projects.module.css"

type Props = {
  data: {
    dataJson: {
      projectsData: Project[]
    }
  }
}

export default function Projects({ data }: Props) {
  const projects = data.dataJson.projectsData
  return (
    <Layout>
      <SEOComponent
        title="Projects"
        description="JVS Projects"
        slug="/projects"
      />
      <Container fluid={false} className={styles.mainCont}>
        <ProjectsSection projects={projects} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PROJECTS_QUERY {
    dataJson {
      projectsData {
        title
        description
        descriptionES
        techStack
        gitLink
        demoLink
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 80)
          }
        }
      }
    }
  }
`
