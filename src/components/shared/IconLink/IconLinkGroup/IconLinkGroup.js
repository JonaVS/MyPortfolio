import React from "react"
import IconLink from "../IconLink"
import * as styles from "./iconLinkGroup.module.css"

const IconLinkGroup = ({ links }) => {
  return (
    <ul className={styles.linksWrapper}>
      {links.map((link, idx) => (
        <li key={idx}>
          <IconLink icon={link.icon} href={link.href} isMail={link.isMail} />
        </li>
      ))}
    </ul>
  )
}

IconLinkGroup.defaultProps = {
  links: [],
}

export default IconLinkGroup
