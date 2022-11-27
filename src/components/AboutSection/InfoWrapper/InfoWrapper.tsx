import React from "react"
import * as styles from "./infoWrapper.module.css"

type Props = {
  children?: React.ReactNode | React.ReactNode[]  
}

const InfoWrapper = ({ children }: Props) => {
  return (
    <div className={styles.infoWrapper}>
      {children}
    </div>
  )
}

export default InfoWrapper
