import React from "react"
import { FiGithub, FiEye } from "react-icons/fi"
import IconLink from "../../../shared/IconLink/IconLink"

const CardNav = ({ gitLink, demoLink }) => {
  return (
    <div>
      {gitLink && (
        <IconLink icon={<FiGithub size={20} />} href={gitLink} basic />
      )}
      {demoLink && (
        <IconLink icon={<FiEye size={20} />} href={demoLink} basic />
      )}
    </div>
  )
}

CardNav.defaultProps = {
  gitLink: "https://github.com",
  demoLink: "https://github.com",
}

export default CardNav
