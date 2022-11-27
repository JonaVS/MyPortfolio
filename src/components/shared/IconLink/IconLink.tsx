import React from "react"
import { IconLink as IconLinkType } from "../../../types/iconLink"
import { AiOutlineLinkedin } from "react-icons/ai"
import * as styles from "./iconLink.module.css"

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
    <a
      href={href}
      className={`${basic ? styles.basic : styles.linkIcon}`}
      target={!isMail ? "_blank" : undefined}
      rel={!isMail ? "noreferrer noopener" : undefined}
    >
      {icon}
    </a>
  )
}

export default IconLink
