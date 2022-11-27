import React from "react"
import { LangOption } from "../../../../../types/langOption"
import DropdownItem from "../DropdownItem/DropdownItem"
import * as styles from "./dropdownList.module.css"

type Props = {
  options: LangOption[]
}

const DropdownList = ({ options }: Props) => {
  return (
    <ul className={styles.dropdownList}>
      {options.map(option => (
        <DropdownItem key={option.id} option={option} />
      ))}
    </ul>
  )
}

export default DropdownList
