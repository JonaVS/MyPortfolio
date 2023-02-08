import React from "react"
import { BrandLink } from "./navBrand.styles"

type Props = {
  text: string
}

const NavBrand = ({ text }: Props) => {
  return <BrandLink to="/"><span>&#60;</span>{text}<span>/&#62;</span></BrandLink>
}

export default NavBrand
