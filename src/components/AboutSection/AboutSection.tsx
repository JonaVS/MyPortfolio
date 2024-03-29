import React from "react"
import { AboutContainer, AboutSectionWrapper } from "./aboutSection.styles"
import AboutMeInfo from "./AboutMeInfo/AboutMeInfo"
import KnowledgeInfo from "./KnowledgeInfo/KnowledgeInfo"
import Divider from "../shared/Divider/Divider"
import ExperienceInfo from "./ExperienceInfo/ExperienceInfo"
import EducationInfo from "./EducationInfo/EducationInfo"

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutSectionWrapper>
        <AboutMeInfo />
        <Divider />
        <KnowledgeInfo />
        <Divider />
        <ExperienceInfo />
        <Divider />
        <EducationInfo />
      </AboutSectionWrapper>
    </AboutContainer>
  )
}

export default AboutSection
