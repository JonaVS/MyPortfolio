import React from "react"
import * as styles from "./title.module.css"

const Title = ({ text }) => {
  return (
    <h1 className={styles.title}>
      {text}
    </h1>
  )
}

Title.defaultProps = {
  text: "default text",
}
export default Title
