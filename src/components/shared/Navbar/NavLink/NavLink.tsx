import React from "react"
import { NavbarLink } from "./navLink.styles"

type Props = {
  linkText: string,
  to: string,
  icon?: JSX.Element
}

const NavLink = ({ linkText, to, icon }: Props) => {
  return (
    <li>
      <NavbarLink to={to}>
        {icon && icon}
        {linkText}
      </NavbarLink>
    </li>
  )
}

export default NavLink
