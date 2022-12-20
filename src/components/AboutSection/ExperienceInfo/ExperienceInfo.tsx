import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { ExperienceData } from "../../../types/GraphqlQueriesTypes/AboutData"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"
import ExperienceList from "./ExperienceList/ExperienceList"

const ExperienceInfo = () => {
  const intl = useIntl()

  const {
    experience: { nodes },
  } = useStaticQuery<ExperienceData>(graphql`
    query experienceQuery {
      experience: allContentfulExperience {
        nodes {
          id
          company
          country
          title
          node_locale
          description {
            data: childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  const experience =
    intl.locale === "en"
      ? nodes.filter(experience => experience.node_locale === "en-US")
      : nodes.filter(experience => experience.node_locale === "es-CR")

  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-exTitle" })} />
      <ExperienceList experience={experience}/>
    </InfoWrapper>
  )
}

export default ExperienceInfo
