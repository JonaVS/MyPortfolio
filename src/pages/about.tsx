import React from "react"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import { AboutContainer } from "../styles/about.styles"
import AboutSection from "../components/AboutSection/AboutSection"

export default function About() {
  return (
    <Layout>
      <SEOComponent title="About" description="About JVS" slug="/about" />
      <AboutContainer>
        <AboutSection />
      </AboutContainer>
    </Layout>
  )
}
