import React from "react"
import { BackgroundWrapper, Circle, CirclesWrapper } from "./animatedBackground.styles"

const AnimatedBackground = () => {
  return (
    <BackgroundWrapper>
      <CirclesWrapper>
        {Array.from({ length: 10 }).map<JSX.Element>((_, idx:number) => (
          <Circle key={idx}/>
        ))}
      </CirclesWrapper>
    </BackgroundWrapper>
  )
}

export default AnimatedBackground
