import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-react-intl"
import Helmet from "react-helmet"

const SEOComponent = ({ title, description, slug, imageURL }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteURL
        }
      }
    }
  `)

  const intl = useIntl()

  const currentLang = intl.locale

  return (
    <Helmet
      htmlAttributes={{ lang: currentLang }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <link rel="canonical" href={`${data.site.siteMetadata.siteURL}${slug}`} />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <meta name="og:title" content={data.site.siteMetadata.title} />
      <meta
        name='og:description'
        content={description || data.site.siteMetadata.description}
      />
      <meta name='og:image' content={imageURL} />
      <meta name='og:type' content='website' />
      <meta
        name='og:url'
        content={`${data.site.siteMetadata.siteURL}/${slug}`}
      />
      <meta name='og:site_name' content={data.site.siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={data.site.siteMetadata.description} />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />

    </Helmet>
  )
}

export default SEOComponent
