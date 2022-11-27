import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SiteMetadata } from "../../../types/siteMetaData"
import { useIntl } from "gatsby-plugin-react-intl"
import Helmet from "react-helmet"

type Props = {
  title: string
  description?: string
  slug?: string
  imageURL?: string
}

const SEOComponent = ({ title, description, slug, imageURL }: Props) => {
  const data = useStaticQuery<SiteMetadata>(graphql`
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
        name="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta name="og:image" content={imageURL} />
      <meta name="og:type" content="website" />
      <meta
        name="og:url"
        content={`${data.site.siteMetadata.siteURL}/${slug}`}
      />
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
    </Helmet>
  )
}

export default SEOComponent
