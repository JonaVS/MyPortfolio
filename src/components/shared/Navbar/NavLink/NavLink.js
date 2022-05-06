import { Link } from "gatsby-plugin-react-intl"
import React from "react"
import * as styles from "./navLink.module.css"

const NavLink = ({ linkText, to, icon = null }) => {
  return (
    <li>
      <Link to={to} className={styles.link}>
        {icon}
        {linkText}
      </Link>
    </li>
  )
}

export default NavLink
