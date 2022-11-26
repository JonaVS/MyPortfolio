import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import * as styles from "../WelcomeMsg/welcomeMsg.module.css"

const WelcomeMsg = () => {
  const intl = useIntl()

  return (
    <div className={styles.textWrapper}>
      <p>
        <span className={`${styles.messageln1} ${styles.animateLn1}`}>
          {intl.formatMessage({ id: "hero-lnl1" })}
        </span>
        <span className={`${styles.messageln2} ${styles.animateLn2}`}>
          {intl.formatMessage({ id: "hero-lnl2" })}
          <span className={styles.name}>JONATHAN</span>
        </span>
        <span className={`${styles.messageln3} ${styles.animateLn3}`}>
          {intl.formatMessage({ id: "hero-lnl3" })}
        </span>
      </p>
    </div>
  )
}

export default WelcomeMsg
