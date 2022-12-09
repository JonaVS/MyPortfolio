import React from "react"
import { IconLink as IconLinkType } from "../../../../types/iconLink"
import { IconLinksList } from "./iconLinkGroup.styles"
import IconLink from "../IconLink"

type Props = {
  links: IconLinkType[]
}

const IconLinkGroup = ({ links = [] }: Props) => {
  return (
    <IconLinksList>
      {links.map((link, idx) => (
        <li key={idx}>
          <IconLink icon={link.icon} href={link.href} isMail={link.isMail} />
        </li>
      ))}
    </IconLinksList>
  )
}

export default IconLinkGroup
