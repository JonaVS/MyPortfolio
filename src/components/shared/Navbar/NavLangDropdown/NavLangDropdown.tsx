import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import useComponentVisible from "../../../../hooks/useComponentVisible"
import { DropdownButton, DropdownContainer } from "./navLangDropdown.styles"
import { options } from "./options"
import { MdLanguage } from "react-icons/md"
import DropdownList from "./DropdownList/DropdownList"


const NavLangDropdown = () => {
  const intl = useIntl()

  const currentLang = intl.locale.toUpperCase()

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton onClick={handleClick}>
        {<MdLanguage />}
        {currentLang}
      </DropdownButton>
      {isComponentVisible && <DropdownList options={options} />}
    </DropdownContainer>
  )
}

export default NavLangDropdown
