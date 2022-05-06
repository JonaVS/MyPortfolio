import React from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import * as styles from "./navButton.module.css"

const NavButton = ({ showResponsiveMenu, handleShowMenu }) => {
  return (
    <button className={styles.menuBtn} onClick={handleShowMenu}>
      {showResponsiveMenu ? (
        <FaTimes className={styles.menuIcon} />
      ) : (
        <FaBars className={styles.menuIcon} />
      )}
    </button>
  )
}

NavButton.defaultProps = {
  showResponsiveMenu: false,
  handleShowMenu: () => {}
}

export default NavButton
