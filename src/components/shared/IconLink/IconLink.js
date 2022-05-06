import React from "react"
import { AiOutlineLinkedin } from "react-icons/ai"
import * as styles from "./iconLink.module.css"

const IconLink = ({ icon, isMail, href, basic }) => {
  return (
    <a
      href={href}
      className={`${basic ? styles.basic : styles.linkIcon}`}
      target={!isMail ? "_blank" : null}
      rel={!isMail ? "noreferrer noopener" : null}
    >
      {icon}
    </a>
  )
}

IconLink.defaultProps = {
  icon: <AiOutlineLinkedin size={30} />,
  isMail: false,
  href: "https://www.linkedin.com/",
  basic: false
}

export default IconLink
