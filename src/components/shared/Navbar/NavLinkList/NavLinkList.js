import React from "react"
import NavLink from "../NavLink/NavLink"
import * as styles from "./navLinkList.module.css"

const NavLinkList = ({ navLinks }) => {
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
