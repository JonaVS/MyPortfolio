import React from "react"
import { Link } from "gatsby-plugin-react-intl"
import * as styles from "./buttonLink.module.css"

const ButtonLink = ({ children, to, className, ...props }) => {
  if (!to)
    return (
      <a className={`${styles.btn} ${className}`} {...props}>
        {children}
      </a>
    )
   
  return (
    <Link className={`${styles.btn} ${className}`} to={to}>
      {children}
    </Link>
  )
}

ButtonLink.defaultProps = {
  children: "Default content",
}

export default ButtonLink
