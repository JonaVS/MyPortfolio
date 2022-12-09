import React from "react"
import { GeneralTitle } from "./title.styles"

type Props = {
  text?: string
}

const Title = ({ text = 'default text ' }: Props) => {
  return (
    <GeneralTitle>
      {text}
    </GeneralTitle>
  )
}

export default Title
