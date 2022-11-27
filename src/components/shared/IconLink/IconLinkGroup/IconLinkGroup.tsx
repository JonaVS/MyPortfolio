import React from "react"
import { IconLink as IconLinkType } from "../../../../types/iconLink"
import IconLink from "../IconLink"
import * as styles from "./iconLinkGroup.module.css"

type Props = {
  links: IconLinkType[]
}

const IconLinkGroup = ({ links = [] }: Props) => {
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

export default IconLinkGroup
