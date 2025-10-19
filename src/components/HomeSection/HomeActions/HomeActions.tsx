import React from "react"
import { Variants } from "motion/react"
import { ActionsWrapper, ProjectsIcon, ProjectsLink, ResumeLink, ResumeIcon } from "./homeActions.styles"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { ResumeData } from "../../../types/GraphqlQueriesTypes/ResumeData"

const actionsWrapper: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 2.5, duration: 0.5 } },
}

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
    <ActionsWrapper variants={actionsWrapper} initial="hidden" animate="show">
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
