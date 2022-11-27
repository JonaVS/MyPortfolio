import React from "react"
import { NavLink as NavLinkType } from "../../../../types/navLink"
import NavLink from "../NavLink/NavLink"
import * as styles from "./navLinkList.module.css"

type Props = {
  navLinks: NavLinkType[]
}

const NavLinkList = ({ navLinks }: Props) => {
  return (
    <ul className={styles.linkList}>
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          linkText={link.linkText}
          icon={link.icon}
          to={link.to}
        />
      ))}
    </ul>
  )
}

export default NavLinkList
