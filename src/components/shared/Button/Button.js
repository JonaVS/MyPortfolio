import React from "react"
import * as styles from "./button.module.css"

const Button = ({
  onClick,
  type,
  disabled,
  children,
}) => {
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

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {},
  children: 'Default'
}

export default Button
