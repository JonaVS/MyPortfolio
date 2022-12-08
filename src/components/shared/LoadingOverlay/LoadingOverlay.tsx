import React from "react"
import { Overlay } from "./loadingOverlay.styles"
import Spinner from "./Spinner/Spinner"

const LoadingOverlay = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  )
}

export default LoadingOverlay
