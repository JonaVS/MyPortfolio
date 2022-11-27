import React from "react"
import ReactIcon from "../../../shared/DevIcons/ReactIcon"
import * as styles from "./techIcon.module.css"

const TechIcon = ({ icon, text }) => {
  return (
    <li className={styles.listItem}>
      {icon}
      <span className={styles.iconText}>{text}</span>
    </li>
  )
}

TechIcon.defaultProps = {
  text: "React",
  icon: <ReactIcon/>
}

export default TechIcon
