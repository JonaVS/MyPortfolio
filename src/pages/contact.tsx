import React from "react"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import ContactSection from "../components/ContactSection/ContactSection"

export default function Contact() {
  return (
    <Layout>
      <SEOComponent
        title="Contact"
        description="You need more info or just want to talk with me? Just get in touch via LinkedIn or Email!"
        slug="/contact"
      />
      <ContactSection />
    </Layout>
  )
}
