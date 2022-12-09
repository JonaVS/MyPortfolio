import React from "react"
import { ContentWrapper } from "./infoWrapper.styles"

type Props = {
  children?: React.ReactNode | React.ReactNode[]  
}

const InfoWrapper = ({ children }: Props) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default InfoWrapper
