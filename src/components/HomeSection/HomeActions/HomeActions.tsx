import React from "react"
import { ActionsWrapper, ProjectsIcon, ProjectsLink, ResumeLink, ResumeIcon } from "./homeActions.styles"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { ResumeData } from "../../../types/GraphqlQueriesTypes/ResumeData"

const HomeActions = () => {
  const intl = useIntl()
  const {resumes:{nodes}} = useStaticQuery<ResumeData>(graphql`
    query resumesQuery {
      resumes: allContentfulAsset(filter: { description: { eq: "Resume" } }) {
        nodes {
          url
        }
      }
    }
  `)

  const resume = intl.locale === "en" ? nodes[0] : nodes[1]

  return (
    <ActionsWrapper>
      <ProjectsLink to="/projects">
        <ProjectsIcon />
        {intl.formatMessage({ id: "projects-link" })}
      </ProjectsLink>
      <ResumeLink href={resume.url} target="_blank" rel="noopener noreferrer">
        <ResumeIcon />
        {intl.formatMessage({ id: "cv-link" })}
      </ResumeLink>
    </ActionsWrapper>
  )
}

export default HomeActions
