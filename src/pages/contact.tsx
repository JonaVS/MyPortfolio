import React from "react"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import Container from "../components/shared/Container/Container"
import ContactSection from "../components/ContactSection/ContactSection"
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <SEOComponent
        title="Contact"
        description="You need more info or just want to talk with me? Just get in touch via LinkedIn or email!"
        slug="/contact"
      />
      <Container className={styles.mainCont}>
        <ContactSection />
      </Container>
    </Layout>
  )
}
