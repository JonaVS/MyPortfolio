import React from "react"
import * as styles from "./cardBody.module.css"

const CardBody = ({ children }) => {
  return <div className={styles.cardBody}>{children}</div>
}

export default CardBody