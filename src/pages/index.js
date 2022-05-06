import React from "react"
import Layout from "../components/shared/Layout/Layout"
import SEOComponent from "../components/shared/SEO/seo"
import HomeSection from "../components/HomeSection/HomeSection"

export default function Home() {
  return (
    <Layout>
      <SEOComponent
        title="Home"
        description="Hi! I'm Jonathan Vargas, software engineer based in Costa Rica."
        slug="/"
      />
      <HomeSection />
    </Layout>
  )
}
