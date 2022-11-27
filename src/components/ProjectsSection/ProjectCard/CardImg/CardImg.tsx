import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  gatsbyImg: IGatsbyImageData
}

const CardImg = ({ gatsbyImg }: Props) => {
  return <GatsbyImage image={gatsbyImg} alt='Project image' />
}

export default CardImg
