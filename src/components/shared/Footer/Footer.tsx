import React from "react"
import IconLinkGroup from "../IconLink/IconLinkGroup/IconLinkGroup"
import { footerLinks } from "./footerLinksData"
import * as styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <IconLinkGroup links={footerLinks} />
    </footer>
  )
}

export default Footer
