import React from "react"
import { CardTitleText, TitleWrapper } from "./cardTitle.styles"

type Props = {
  title: string
  children: React.ReactNode | React.ReactNode[]
}

const CardTitle = ({ title, children }: Props) => {
  return (
    <TitleWrapper>
      <CardTitleText>{title}</CardTitleText>
      {children}
    </TitleWrapper>
  )
}

export default CardTitle
