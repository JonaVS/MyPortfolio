import React from "react"
import { TechIcon as TechIconType } from "../../../../types/techIcon"
import * as styles from "./techIcon.module.css"

type Props = TechIconType

const TechIcon = ({ icon, text }: Props) => {
  return (
    <li className={styles.listItem}>
      {icon}
      <span className={styles.iconText}>{text}</span>
    </li>
  )
}

export default TechIcon
