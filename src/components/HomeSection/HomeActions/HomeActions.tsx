import React from "react"
import { ActionsWrapper, ProjectsIcon, ProjectsLink, ResumeLink, ResumeIcon } from "./homeActions.styles"
import { useIntl } from "gatsby-plugin-react-intl"
import resume from "../../../downloads/JonathanVS-resume.pdf"
import resumeES from "../../../downloads/JonathanVS-CV.pdf"

const HomeActions = () => {
  const intl = useIntl()
  const currentLang = intl.locale.toUpperCase()
  const pdfToDownload = currentLang === "EN" ? resume : resumeES
  const pdfName = currentLang === "EN" ? "JonathanVS-Resume" : "JonathanVS-CV"

  return (
    <ActionsWrapper>
      <ProjectsLink to="/projects">
        <ProjectsIcon />
        {intl.formatMessage({ id: "projects-link" })}
      </ProjectsLink>
      <ResumeLink href={pdfToDownload} download={pdfName}>
        <ResumeIcon />
        {intl.formatMessage({ id: "cv-link" })}
      </ResumeLink>
    </ActionsWrapper>
  )
}

export default HomeActions
