import React from "react"
import { TechIcon as TechIconType } from "../../../../types/techIcon"
import { TechIconListItem, TechIconText } from "./techIcon.styles"

type Props = TechIconType

const TechIcon = ({ icon, text }: Props) => {
  return (
    <TechIconListItem>
      {icon}
      <TechIconText>{text}</TechIconText>
    </TechIconListItem>
  )
}

export default TechIcon
