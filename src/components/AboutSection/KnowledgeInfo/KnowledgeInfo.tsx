import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { KnowledgeData } from "../../../types/GraphqlQueriesTypes/AboutData"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"
import TechIconList from "./TechIconList/TechIconList"

const KnowledgeInfo = () => {
  const intl = useIntl()

  const {allContentfulTechnologie:{nodes}} = useStaticQuery<KnowledgeData>(graphql`
  query knowledgeQuery {
    allContentfulTechnologie(
      filter: {node_locale: {eq: "en-US"}}
      sort: {order: ASC}
    ) {
      nodes {
        id
        name
        order
        svg {
          svg
        }
      }
    }
  }
`)

  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-teTitle" })} />
      <TechIconList icons={nodes} />
    </InfoWrapper>
  )
}

export default KnowledgeInfo
