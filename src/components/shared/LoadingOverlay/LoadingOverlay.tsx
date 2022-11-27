import React from "react"
import Spinner from "./Spinner/Spinner"
import * as styles from "../LoadingOverlay/loadingOverlay.module.css"

const LoadingOverlay = () => {
  return (
    <div className={styles.overlay}>
      <Spinner />
    </div>
  )
}

export default LoadingOverlay
