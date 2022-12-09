import React from "react"
import { AboutContainer, AboutSectionWrapper } from "./aboutSection.styles"
import AboutMeInfo from "./AboutMeInfo/AboutMeInfo"
import KnowledgeInfo from "./KnowledgeInfo/KnowledgeInfo"
import Divider from "../shared/Divider/Divider"

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutSectionWrapper>
        <AboutMeInfo />
        <Divider />
        <KnowledgeInfo />
      </AboutSectionWrapper>
    </AboutContainer>
  )
}

export default AboutSection
