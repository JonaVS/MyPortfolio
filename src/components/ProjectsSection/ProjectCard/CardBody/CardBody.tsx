import React from "react"
import * as styles from "./cardBody.module.css"

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const CardBody = ({ children }: Props) => {
  return <div className={styles.cardBody}>{children}</div>
}

export default CardBody