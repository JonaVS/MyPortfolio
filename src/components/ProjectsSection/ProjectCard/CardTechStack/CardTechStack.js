import React from "react"
import TechStackItem from "./TechStackItem/TechStackItem"
import * as styles from "./cardTechStack.module.css"

const CardTechStack = ({ techStack }) => {
  return (
    <ul className={styles.techList }>
      {techStack.map((tech, idx) => (
        <TechStackItem key={idx} text={tech} />
      ))}
    </ul>
  )
}

CardTechStack.defaultProps = {
  techStack: ["HTML", "CSS", "JavaScript"],
}

export default CardTechStack
