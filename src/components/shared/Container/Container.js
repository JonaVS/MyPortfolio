import React from "react"
import * as containerStyles from "./container.module.css"

const Container = ({ children, fluid, className }) => {
  return (
    <div
      className={`${
        fluid ? containerStyles.fluid : containerStyles.container
      } ${className}`}
    >
      {children}
    </div>
  )
}

Container.defaultProps = {
  fluid: false,
  className: "",
}

export default Container
