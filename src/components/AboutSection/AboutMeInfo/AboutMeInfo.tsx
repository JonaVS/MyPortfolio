import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { AboutData } from "../../../types/GraphqlQueriesTypes/AboutData"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"
import parse from "html-react-parser"

const AboutMeInfo = () => {
  const intl = useIntl()
  const queryData = useStaticQuery<AboutData>(graphql`
    query AboutDataQuery {
      aboutInfo: allContentfulAboutMe {
        nodes {
          about {
            data: childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

   
  const {aboutInfo: {nodes}} = queryData
  const {about:{data:{html}}} = intl.locale === "en" ? nodes[0] : nodes[1]
  
  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-meTitle" })} />
      {parse(html)}
    </InfoWrapper>
  )
}

export default AboutMeInfo
