import React from "react"
import { Body } from "./cardBody.styles"

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const CardBody = ({ children }: Props) => {
  return <Body>{children}</Body>
}

export default CardBody