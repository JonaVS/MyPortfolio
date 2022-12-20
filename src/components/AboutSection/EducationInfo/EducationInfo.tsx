import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { EducationData } from "../../../types/GraphqlQueriesTypes/AboutData"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"
import EducationList from "./EducationList/EducationList"

const EducationInfo = () => {
  const intl = useIntl()

  const {
    education: { nodes },
  } = useStaticQuery<EducationData>(graphql`
    query educationQuery {
      education: allContentfulEducation {
        nodes {
          id
          node_locale
          institution
          description {
            data: description
          }
        }
      }
    }
  `)

  const education =
    intl.locale === "en"
      ? nodes.filter(education => education.node_locale === "en-US")
      : nodes.filter(education => education.node_locale === "es-CR")
  
  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-eduTitle" })} />
      <EducationList education={education}/>
    </InfoWrapper>
  )
}

export default EducationInfo
