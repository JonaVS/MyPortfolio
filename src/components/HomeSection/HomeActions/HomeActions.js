import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import ButtonLink from "../../shared/ButtonLink/ButtonLink"
import { BsBriefcase } from "react-icons/bs"
import { AiOutlineArrowDown } from "react-icons/ai"
import resume from "../../../downloads/JonathanVS-resume.pdf"
import resumeES from "../../../downloads/JonathanVS-CV.pdf"
import * as styles from "./homeActions.module.css"

const HomeActions = () => {
  const intl = useIntl()
  const currentLang = intl.locale.toUpperCase()
  const pdfToDownload = currentLang === "EN" ? resume : resumeES
  const pdfName = currentLang === "EN" ? "JonathanVS-Resume" : "JonathanVS-CV"

  return (
    <div className={styles.actionsWrapper}>
      <ButtonLink to="/projects" className={styles.projectsBtn}>
        <BsBriefcase className={styles.icon} />
        {intl.formatMessage({ id: "projects-link" })}
      </ButtonLink>
      <ButtonLink
        href={pdfToDownload}
        download={pdfName}
        className={styles.cvBtn}
      >
        <AiOutlineArrowDown className={styles.icon} />
        {intl.formatMessage({ id: "cv-link" })}
      </ButtonLink>
    </div>
  )
}

export default HomeActions
