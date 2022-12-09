import React from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import { NavMenuButton } from "./navButton.styles"

type Props = {
  showResponsiveMenu: boolean
  handleShowMenu: () => void
}

const NavButton = ({ showResponsiveMenu, handleShowMenu }: Props) => {
  return (
    <NavMenuButton onClick={handleShowMenu}>
      {showResponsiveMenu ? <FaTimes /> : <FaBars />}
    </NavMenuButton>
  )
}

export default NavButton
