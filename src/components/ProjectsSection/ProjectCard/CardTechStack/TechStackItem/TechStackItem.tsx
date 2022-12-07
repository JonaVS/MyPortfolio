import React from "react"
import { TechStackListItem } from "./techStackItem.styles"

type Props = {
  text: string
}

const TechStackItem = ({ text }: Props) => {
  return <TechStackListItem>{text}</TechStackListItem>
}

export default TechStackItem
