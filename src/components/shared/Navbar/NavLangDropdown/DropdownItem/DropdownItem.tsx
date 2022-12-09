import React from "react"
import { LangOption } from "../../../../../types/langOption"
import { DropdownLink, DropdownListItem } from "./dropdownItem.styles"

type Props = {
  option: LangOption
}

const DropDownItem = ({ option }: Props) => {
  return (
    <DropdownListItem>
      <DropdownLink to={option.url}>
        {option.lang}
      </DropdownLink>
    </DropdownListItem>
  )
}

export default DropDownItem
