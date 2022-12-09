import React from "react"
import { IconLink as IconLinkType } from "../../../types/iconLink"
import { AiOutlineLinkedin } from "react-icons/ai"
import { IconAnchor } from "./iconLink.styles"

type Props = IconLinkType & {
  basic?: boolean
}

const IconLink = ({
  icon = <AiOutlineLinkedin size={30} />,
  isMail= false,
  href = "about:blank",
  basic = false,
}: Props) => {
  return (
    <IconAnchor
      basic={basic}
      href={href}
      target={!isMail ? "_blank" : undefined}
      rel={!isMail ? "noreferrer noopener" : undefined}
    >
      {icon}
    </IconAnchor>
  )
}

export default IconLink
