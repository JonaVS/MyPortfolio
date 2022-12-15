import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { AboutData } from "../../../types/GraphqlQueriesTypes/AboutData"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const AboutMeInfo = () => {
  const intl = useIntl()
  const data = useStaticQuery<AboutData>(graphql`
    query AboutDataQuery {
      allContentfulAboutMe {
        nodes {
          about {
            about
          }
        }
      }
    }
  `)
   
  const {allContentfulAboutMe: {nodes}} = data
  const {about:{about}} = intl.locale === "en" ? nodes[0] : nodes[1]

  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-meTitle" })} />
      <ReactMarkdown>{about}</ReactMarkdown>
    </InfoWrapper>
  )
}

export default AboutMeInfo
