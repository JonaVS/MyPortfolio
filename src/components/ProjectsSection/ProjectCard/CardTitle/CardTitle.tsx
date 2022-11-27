import React from "react"
import * as styles from "./cardTitle.module.css"

type Props = {
  title: string
  children: React.ReactNode | React.ReactNode[]
}

const CardTitle = ({ title, children }: Props) => {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.cardTitle}>{title}</h2>
      {children}
    </div>
  )
}

export default CardTitle
