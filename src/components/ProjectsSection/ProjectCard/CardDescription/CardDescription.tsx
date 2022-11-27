import React from "react"
import * as styles from "./cardDescription.module.css"

type Props = {
  description: string
}

const CardDescription = ({ description }: Props) => {
  return <p className={styles.cardDesc}>{description}</p>
}

export default CardDescription
