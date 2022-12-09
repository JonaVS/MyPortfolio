import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { NavLink } from "../../../types/navLink"
import { Nav } from "./navbar.styles"
import NavBrand from "./NavBrand/NavBrand"
import { BsBriefcase } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"
import NavButton from "./NavButton/NavButton"
import NavMenu from "./NavMenu/NavMenu"
import NavLangDropdown from "./NavLangDropdown/NavLangDropdown"
import NavLinkList from "./NavLinkList/NavLinkList"

const Navbar = () => {
  const intl = useIntl()

  const navLinks: NavLink[] = [
    {
      linkText: intl.formatMessage({ id: "nav-about" }),
      icon: <AiOutlineUser />,
      to: "/about",
    },
    {
      linkText: intl.formatMessage({ id: "nav-projects" }),
      icon: <BsBriefcase />,
      to: "/projects",
    },
    {
      linkText: intl.formatMessage({ id: "nav-contact" }),
      icon: <FiPhone />,
      to: "/contact",
    },
  ]

  const [responsiveMenu, setResponsiveMenu] = useState(false)

  const handleResponsiveMenu = () => {
    setResponsiveMenu(!responsiveMenu)
  }

  return (
    <Nav>
      <NavBrand text="JVS" />
      <NavButton
        showResponsiveMenu={responsiveMenu}
        handleShowMenu={handleResponsiveMenu}
      />
      <NavMenu responsiveMenu={responsiveMenu}>
        <NavLinkList navLinks={navLinks} />
        <NavLangDropdown />
      </NavMenu>
    </Nav>
  )
}

export default Navbar
