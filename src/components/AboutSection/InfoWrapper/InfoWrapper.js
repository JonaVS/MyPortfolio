import React from "react"
import * as styles from "./infoWrapper.module.css"

const InfoWrapper = ({ children }) => {
  return (
    <div className={styles.infoWrapper}>
      {children}
    </div>
  )
}

export default InfoWrapper
