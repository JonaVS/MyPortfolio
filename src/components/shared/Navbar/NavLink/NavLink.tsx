import { Link } from "gatsby-plugin-react-intl"
import React from "react"
import * as styles from "./navLink.module.css"

type Props = {
  linkText: string,
  to: string,
  icon?: JSX.Element
}

const NavLink = ({ linkText, to, icon }: Props) => {
  return (
    <li>
      <Link to={to} className={styles.link}>
        {icon && icon}
        {linkText}
      </Link>
    </li>
  )
}

export default NavLink
