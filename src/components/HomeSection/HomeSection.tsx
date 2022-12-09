import React from "react"
import { Section } from "./homeSection.styles"
import AnimatedBackground from "./AnimatedBackgroud/AnimatedBackground"
import HomeContentWrapper from "./HomeContentWrapper/HomeContentWrapper"
import WelcomeMsg from "./WelcomeMsg/WelcomeMsg"
import HomeActions from "./HomeActions/HomeActions"

const HomeSection = () => {
  return (
    <Section>
      <AnimatedBackground />
      <HomeContentWrapper>
        <WelcomeMsg />
        <HomeActions />
      </HomeContentWrapper>
    </Section>
  )
}

export default HomeSection
