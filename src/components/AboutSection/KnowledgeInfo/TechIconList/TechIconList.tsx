import React from "react"
import { TechIconGridList } from "./techIconList.styles"
import { icons } from "./Icons"
import TechIcon from "../TechIcon/TechIcon"

const TechIconList = () => {
  return (
    <TechIconGridList>
      {icons.map(item => (
        <TechIcon key={item.id} icon={item.icon} text={item.text} />
      ))}
    </TechIconGridList>
  )
}

export default TechIconList
