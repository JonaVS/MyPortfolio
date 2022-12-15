import React from "react"
import { FiGithub, FiEye } from "react-icons/fi"
import IconLink from "../../../shared/IconLink/IconLink"

type Props = {
  gitLink?: string
  demoLink?: string
}

const CardNav = ({ gitLink, demoLink='default' }: Props) => {
  return (
    <div>
      {gitLink && (
        <IconLink icon={<FiGithub size={20} />} href={gitLink} basic />
      )}
      {(demoLink !== 'default') && (
        <IconLink icon={<FiEye size={20} />} href={demoLink} basic />
      )}
    </div>
  )
}

export default CardNav
