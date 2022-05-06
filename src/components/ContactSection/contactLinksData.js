import React from "react"
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

const ICON_SIZE = 25
export const contactLinks = [
  {
    icon: <AiOutlineLinkedin size={ICON_SIZE} />,
    href: "https://cr.linkedin.com/in/jonathan-vargas-solano-5798181a7",
    isMail: false,
  },
  {
    icon: <AiOutlineMail size={ICON_SIZE} />,
    href: "mailto:info@jonathanvs.com",
    isMail: true,
  },
]
