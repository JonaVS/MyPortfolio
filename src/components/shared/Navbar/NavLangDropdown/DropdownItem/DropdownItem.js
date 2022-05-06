import React from "react"
import * as styles from "./dropdownItem.module.css"
import { Link } from "gatsby"

const DropDownItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={item.url}>
        {item.lang}
      </Link>
    </li>
  )
}

export default DropDownItem
