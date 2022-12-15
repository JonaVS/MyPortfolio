import React from "react"
import { TechNode } from "../../../../types/GraphqlQueriesTypes/AboutData"
import { TechIconListItem, TechIconText } from "./techIcon.styles"
import parse from 'html-react-parser';

type Props = TechNode

const TechIcon = ({ svg, name }: Props) => {
  return (
    <TechIconListItem>
      {parse(svg.svg)}
      <TechIconText>{name}</TechIconText>
    </TechIconListItem>
  )
}

export default TechIcon
