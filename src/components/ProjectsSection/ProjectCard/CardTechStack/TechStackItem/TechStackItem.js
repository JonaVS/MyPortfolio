import React from "react"
import * as styles from "./techStackItem.module.css"

const TechStackItem = ({ text }) => {
  return <li className={styles.techPills}>{text}</li>
}

TechStackItem.defaultProps = {
  text: "Default",
}

export default TechStackItem
