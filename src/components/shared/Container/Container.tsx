import React from "react"
import * as styles from "./container.module.css"

type Props = {
  fluid?: boolean
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, fluid = false, className = "" }: Props) => {
  return (
    <div className={`${fluid ? styles.fluid : styles.container} ${className}`}>
      {children}
    </div>
  )
}

export default Container
