import React from "react"
import { Link } from "gatsby-plugin-react-intl"
import * as styles from "./buttonLink.module.css"

type Props = React.ComponentPropsWithoutRef<"a"> & {
  to?: string
} 

const ButtonLink = ({ children, to, className, ...props }: Props) => {
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

export default ButtonLink
