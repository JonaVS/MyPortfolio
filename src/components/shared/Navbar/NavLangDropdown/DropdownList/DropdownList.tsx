import React from "react"
import { LangOption } from "../../../../../types/langOption"
import { DropdownLangList } from "./dropdownList.styles"
import DropdownItem from "../DropdownItem/DropdownItem"

type Props = {
  options: LangOption[]
}

const DropdownList = ({ options }: Props) => {
  return (
    <DropdownLangList>
      {options.map(option => (
        <DropdownItem key={option.id} option={option} />
      ))}
    </DropdownLangList>
  )
}

export default DropdownList
