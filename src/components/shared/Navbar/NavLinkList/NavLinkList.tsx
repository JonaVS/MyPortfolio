import React from "react"
import { NavLink as NavLinkType } from "../../../../types/navLink"
import { LinkList } from "./navListLink.styles"
import NavLink from "../NavLink/NavLink"

type Props = {
  navLinks: NavLinkType[]
}

const NavLinkList = ({ navLinks }: Props) => {
  return (
    <LinkList>
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          linkText={link.linkText}
          icon={link.icon}
          to={link.to}
        />
      ))}
    </LinkList>
  )
}

export default NavLinkList
