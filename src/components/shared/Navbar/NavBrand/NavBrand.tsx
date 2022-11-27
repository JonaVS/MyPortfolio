import { Link } from "gatsby-plugin-react-intl"
import React from "react"
import * as styles from "./navBrand.module.css"

type Props = {
  text: string
}

const NavBrand = ({ text }: Props) => {
  return (
    <Link to="/" className={styles.brand}>
      {text}
    </Link>
  )
}

export default NavBrand
