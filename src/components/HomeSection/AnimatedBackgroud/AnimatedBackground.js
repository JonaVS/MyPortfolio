import React from "react"
import * as styles from "../AnimatedBackgroud/animatedBackground.module.css"

const AnimatedBackground = () => {
  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <li key={idx}></li>
        ))}
      </ul>
    </div>
  )
}

export default AnimatedBackground
