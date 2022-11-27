import React from "react"
import * as styles from "./title.module.css"

type Props = {
  text?: string
}

const Title = ({ text = 'default text ' }: Props) => {
  return (
    <h1 className={styles.title}>
      {text}
    </h1>
  )
}

export default Title
