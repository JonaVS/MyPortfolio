import React from "react"
import { MainContainer } from "./container.styles"

type Props = {
  fluid?: boolean
  children?: React.ReactNode
}

const Container = ({ children, fluid = false }: Props) => {
  return (
    <MainContainer fluid={fluid}>
      {children}
    </MainContainer>
  )
}

export default Container
