import React from "react"
import * as styles from "./techStackItem.module.css"

type Props = {
  text: string
}

const TechStackItem = ({ text }: Props) => {
  return <li className={styles.techPills}>{text}</li>
}

export default TechStackItem
