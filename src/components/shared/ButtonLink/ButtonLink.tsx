import React from "react"
import { StyledGatsbyLink, StyledLink } from "./buttonLink.styles"

type Props = React.ComponentPropsWithoutRef<"a"> & {
  to?: string
}

const ButtonLink = ({ children, to, className, ...props }: Props) => {
  if (!to) return <StyledLink {...props}>{children}</StyledLink>

  return <StyledGatsbyLink to={to}>{children}</StyledGatsbyLink>
}

export default ButtonLink
