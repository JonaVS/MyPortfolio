import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import NavBrand from "./NavBrand/NavBrand"
import { BsBriefcase } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"
import NavButton from "./NavButton/NavButton"
import NavMenu from "./NavMenu/NavMenu"
import NavLangDropdown from "./NavLangDropdown/NavLangDropdown"
import NavLinkList from "./NavLinkList/NavLinkList"
import * as styles from "./navbar.module.css"

const Navbar = () => {
  const intl = useIntl()

  const navLinks = [
    {
      linkText: intl.formatMessage({ id: "nav-about" }),
      icon: <AiOutlineUser className="nav-icon" />,
      to: "/about",
    },
    {
      linkText: intl.formatMessage({ id: "nav-projects" }),
      icon: <BsBriefcase className="nav-icon" />,
      to: "/projects",
    },
    {
      linkText: intl.formatMessage({ id: "nav-contact" }),
      icon: <FiPhone className="nav-icon" />,
      to: "/contact",
    },
  ]

  const [responsiveMenu, setResponsiveMenu] = useState(false)

  const handleResponsiveMenu = () => {
    setResponsiveMenu(!responsiveMenu)
  }

  return (
    <nav className={styles.nav}>
      <NavBrand text="JVS" />
      <NavButton
        showResponsiveMenu={responsiveMenu}
        handleShowMenu={handleResponsiveMenu}
      />
      <NavMenu responsiveMenu={responsiveMenu}>
        <NavLinkList navLinks={navLinks} />
        <NavLangDropdown />
      </NavMenu>
    </nav>
  )
}

export default Navbar
