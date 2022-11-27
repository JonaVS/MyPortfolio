import React from "react"
import { LangOption } from "../../../../../types/langOption"
import { Link } from "gatsby"
import * as styles from "./dropdownItem.module.css"

type Props = {
  option: LangOption
}

const DropDownItem = ({ option }: Props) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={option.url}>
        {option.lang}
      </Link>
    </li>
  )
}

export default DropDownItem
