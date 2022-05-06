import React from "react"
import AnimatedBackground from "./AnimatedBackgroud/AnimatedBackground"
import HomeContentWrapper from "./HomeContentWrapper/HomeContentWrapper"
import WelcomeMsg from "../HomeSection/WelcomeMsg/WelcomeMsg"
import HomeActions from "./HomeActions/HomeActions"
import * as styles from "./homeSection.module.css"

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <AnimatedBackground />
      <HomeContentWrapper>
        <WelcomeMsg />
        <HomeActions />
      </HomeContentWrapper>
    </section>
  )
}

export default HomeSection
