import { GatsbyConfig } from "gatsby"

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: false,
        redirectDefaultLanguageToRoot: false,
        ignoredPaths: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xe3i6o13q94f`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  siteMetadata: {
    title: "JVS Portfolio",
    siteURL: "https://www.jonathanvs.com",
    description: "Jonathan Vargas Solano Portfolio",
    author: "Jonathan Vargas Solano",
    keywords: "JVS, JVS Portfolio, JonaVS",
  },
}

export default config