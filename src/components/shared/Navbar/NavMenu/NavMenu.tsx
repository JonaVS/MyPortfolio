import React from "react"
import { NavbarMenuWrapper } from "./navMenu.styles"

type Props = {
  responsiveMenu: boolean
  children?: React.ReactElement | React.ReactElement[]
}

const NavMenu = ({ responsiveMenu, children }: Props) => {
  return (
    <NavbarMenuWrapper responsiveMenu={responsiveMenu}>
      {children}
    </NavbarMenuWrapper>
  )
}

export default NavMenu
