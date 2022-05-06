import React from "react"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import Container from "../components/shared/Container/Container"
import AboutSection from "../components/AboutSection/AboutSection"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <SEOComponent title="About" description="About JVS" slug="/about" />
      <Container className={styles.container}>
        <AboutSection />
      </Container>
    </Layout>
  )
}
