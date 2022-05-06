import React from "react"
import DropdownItem from "../DropdownItem/DropdownItem"
import * as styles from "./dropdownList.module.css"

const DropdownList = ({ items }) => {
  return (
    <ul className={styles.dropdownList}>
      {items.map(item => (
        <DropdownItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default DropdownList
