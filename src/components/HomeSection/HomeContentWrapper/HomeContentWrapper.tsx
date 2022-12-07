import React from "react"
import { PositionedContainer } from "./homeContentWrapper.styles"

type Props = {
  children?: React.ReactNode
}

const HomeContentWrapper = ({ children }: Props) => {
  return (
    <PositionedContainer>
      {children}
    </PositionedContainer>
  )
}

export default HomeContentWrapper
