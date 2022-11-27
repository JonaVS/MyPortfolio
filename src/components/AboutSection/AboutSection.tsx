import React from "react"
import AboutMeInfo from "./AboutMeInfo/AboutMeInfo"
import KnowledgeInfo from "./KnowledgeInfo/KnowledgeInfo"
import Divider from '../shared/Divider/Divider'
import * as styles from "./aboutSection.module.css"

const AboutSection = () => {
  return (
    <section className={styles.contentWrapper}>
      <AboutMeInfo />
      <Divider/>
      <KnowledgeInfo />
    </section>
  )
}

export default AboutSection
