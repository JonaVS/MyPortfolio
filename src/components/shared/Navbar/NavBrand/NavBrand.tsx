import React from "react"
import { BrandLink } from "./navBrand.styles"

type Props = {
  text: string
}

const NavBrand = ({ text }: Props) => {
  return <BrandLink to="/">{text}</BrandLink>
}

export default NavBrand
