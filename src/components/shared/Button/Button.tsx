import React from "react"
import * as styles from "./button.module.css"

type Props = React.ComponentPropsWithoutRef<"button"> 

const Button = ({
  type,
  onClick,
  disabled,
  children,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button
