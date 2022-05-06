import React from "react"
import * as styles from "./navMenu.module.css"

const NavMenu = ({ responsiveMenu, children }) => {
  return (
    <ul
      className={`${styles.navMenu} ${
        responsiveMenu ? styles.responsiveActive : null
      }`}
    >
      {children}
    </ul>
  )
}

export default NavMenu
