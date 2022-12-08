import React from "react"
import { IconLink } from "../../types/iconLink"
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

const ICON_SIZE = 25
export const contactLinks: IconLink[] = [
  {
    icon: <AiOutlineLinkedin size={ICON_SIZE} />,
    href: "https://www.linkedin.com/in/jonathan-vargas-5798181a7/",
    isMail: false,
  },
  {
    icon: <AiOutlineMail size={ICON_SIZE} />,
    href: "mailto:info@jonathanvs.com",
    isMail: true,
  },
]
