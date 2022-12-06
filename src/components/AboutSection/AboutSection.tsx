import React from "react"
import { AboutSectionWrapper } from "./aboutSection.styles"
import AboutMeInfo from "./AboutMeInfo/AboutMeInfo"
import KnowledgeInfo from "./KnowledgeInfo/KnowledgeInfo"
import Divider from '../shared/Divider/Divider'

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <AboutMeInfo />
      <Divider/>
      <KnowledgeInfo />
    </AboutSectionWrapper>
  )
}

export default AboutSection
