import React from "react"
import { icons } from "./Icons"
import TechIcon from "../TechIcon/TechIcon"
import * as styles from "./techIconList.module.css"

const TechIconList = () => {
  return (
    <ul className={styles.gridList}>
      {icons.map(item => (
        <TechIcon key={item.id} icon={item.icon} text={item.text} />
      ))}
    </ul>
  )
}

export default TechIconList
