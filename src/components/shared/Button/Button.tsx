import React from "react"
import { StyledButton } from "./button.styles"

type Props = React.ComponentPropsWithoutRef<"button"> 

const Button = ({
  type,
  onClick,
  disabled,
  children,
}: Props) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button
