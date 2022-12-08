import React from "react"
import { StyledFooter } from "./footer.styles"
import IconLinkGroup from "../IconLink/IconLinkGroup/IconLinkGroup"
import { footerLinks } from "./footerLinksData"

const Footer = () => {
  return (
    <StyledFooter>
      <IconLinkGroup links={footerLinks} />
    </StyledFooter>
  )
}

export default Footer
