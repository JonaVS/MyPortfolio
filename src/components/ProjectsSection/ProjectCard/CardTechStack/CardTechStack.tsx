import React from "react"
import { TechList } from "./cardTechStack.styles"
import TechStackItem from "./TechStackItem/TechStackItem"

type Props = {
  techStack: string[]
}

const CardTechStack = ({ techStack }: Props) => {
  return (
    <TechList>
      {techStack.map((tech, idx) => (
        <TechStackItem key={idx} text={tech} />
      ))}
    </TechList>
  )
}

export default CardTechStack
