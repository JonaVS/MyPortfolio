import React from "react"
import { TechNode } from "../../../../types/GraphqlQueriesTypes/AboutData";
import { TechIconGridList } from "./techIconList.styles"
import TechIcon from "../TechIcon/TechIcon"

type Props = {
  icons: TechNode[]
}

const TechIconList = ({icons}: Props) => {
  return (
    <TechIconGridList>
      {icons.map(icon => (
        <TechIcon key={icon.id} icon={icon.icon} name={icon.name} />
      ))}
    </TechIconGridList>
  )
}

export default TechIconList
