import React from "react"
import * as styles from "./homeContentWrapper.module.css"

type Props = {
  children?: React.ReactNode
}

const HomeContentWrapper = ({ children }: Props) => {
  return <div className={styles.absolutePos}>{children}</div>
}

export default HomeContentWrapper
