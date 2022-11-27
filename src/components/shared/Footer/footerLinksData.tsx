import React from "react"
import { IconLink } from "../../../types/iconLink"
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"

const ICON_SIZE = 25
export const footerLinks: IconLink[] =  [
  {
    icon: <FiGithub size={ICON_SIZE} />,
    href: "https://github.com/JonaVS",
    isMail: false,
  },
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
