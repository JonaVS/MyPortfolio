import React from "react"
import * as styles from "./navMenu.module.css"

type Props = {
  responsiveMenu: boolean
  children?: React.ReactElement | React.ReactElement[]
}

const NavMenu = ({ responsiveMenu, children }: Props) => {
  return (
    <ul
      className={`${styles.navMenu} ${
        responsiveMenu ? styles.responsiveActive : ''
      }`}
    >
      {children}
    </ul>
  )
}

export default NavMenu
