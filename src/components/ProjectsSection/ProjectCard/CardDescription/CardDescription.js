import React from "react"
import * as styles from "./cardDescription.module.css"

const CardDescription = ({ description }) => {
  return <p className={styles.cardDesc}>{description}</p>
}

CardDescription.defaultProps = {
  description: 'Default Description'
}

export default CardDescription
