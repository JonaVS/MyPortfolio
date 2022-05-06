import React from "react"
import * as styles from "./cardTitle.module.css"

const CardTitle = ({ title, children }) => {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.cardTitle}>{title}</h2>
      {children}
    </div>
  )
}

export default CardTitle
