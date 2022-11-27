import React from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import * as styles from "./navButton.module.css"

type Props = {
  showResponsiveMenu: boolean,
  handleShowMenu: () => void
}

const NavButton = ({ showResponsiveMenu, handleShowMenu  }: Props) => {
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

export default NavButton
