import React from "react"
import { graphql } from "gatsby"
import { Project } from "../types/project"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"

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
      <ProjectsSection projects={projects} />
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
