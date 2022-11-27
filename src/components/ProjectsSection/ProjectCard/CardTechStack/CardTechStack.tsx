import React from "react"
import TechStackItem from "./TechStackItem/TechStackItem"
import * as styles from "./cardTechStack.module.css"

type Props = {
  techStack: string[]
}

const CardTechStack = ({ techStack }: Props) => {
  return (
    <ul className={styles.techList}>
      {techStack.map((tech, idx) => (
        <TechStackItem key={idx} text={tech} />
      ))}
    </ul>
  )
}

export default CardTechStack
