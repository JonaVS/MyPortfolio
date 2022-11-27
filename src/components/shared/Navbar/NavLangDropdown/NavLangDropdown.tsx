import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import useComponentVisible from "../../../../hooks/useComponentVisible"
import { options } from "./options"
import { MdLanguage } from "react-icons/md"
import DropdownList from "./DropdownList/DropdownList"
import { CSSTransition } from "react-transition-group"
import * as styles from "./navLangDropdown.module.css"

const NavLangDropdown = () => {
  const intl = useIntl()

  const currentLang = intl.locale.toUpperCase()

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <div ref={ref} className={styles.container}>
      <button className={styles.dropdownBtn} onClick={handleClick}>
        {<MdLanguage className="nav-icon" />}
        {currentLang}
      </button>
      <CSSTransition
        in={isComponentVisible}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <DropdownList
          options={options}
        />
      </CSSTransition>
    </div>
  )
}

export default NavLangDropdown
