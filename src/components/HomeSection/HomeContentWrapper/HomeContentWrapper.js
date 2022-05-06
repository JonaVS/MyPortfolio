import React from "react"
import * as styles from "./homeContentWrapper.module.css"

const HomeContentWrapper = ({ children }) => {
  return <div className={styles.absolutePos}>{children}</div>
}

export default HomeContentWrapper
