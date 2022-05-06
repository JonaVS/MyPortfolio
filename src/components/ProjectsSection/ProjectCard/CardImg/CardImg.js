import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const CardImg = ({ gatsbyImg }) => {
  return <GatsbyImage image={gatsbyImg} alt='Project image' />
}

export default CardImg
