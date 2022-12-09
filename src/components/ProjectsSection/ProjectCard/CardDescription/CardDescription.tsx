import React from "react"
import { DescriptionText } from "./cardDescription.styles"

type Props = {
  description: string
}

const CardDescription = ({ description }: Props) => {
  return <DescriptionText>{description}</DescriptionText>
}

export default CardDescription
