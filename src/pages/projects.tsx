import React from "react"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"

export default function Projects() {
  return (
    <Layout>
      <SEOComponent
        title="Projects"
        description="JVS Projects"
        slug="/projects"
      />
      <ProjectsSection />
    </Layout>
  )
}
