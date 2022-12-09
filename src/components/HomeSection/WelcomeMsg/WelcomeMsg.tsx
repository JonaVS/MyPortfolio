import React from "react"
import {
  Message,
  MessageLine,
  MessageWrapper,
  Name,
} from "./welcomeMsg.styles"
import { useIntl } from "gatsby-plugin-react-intl"

const WelcomeMsg = () => {
  const intl = useIntl()

  return (
    <MessageWrapper>
      <Message>
        <MessageLine animationName="moveLeft" animationDuration={1}>
          {intl.formatMessage({ id: "hero-lnl1" })}
        </MessageLine>
        <MessageLine
          animationName="moveRight"
          animationDuration={1}
          animationDelay={0.5}
        >
          {intl.formatMessage({ id: "hero-lnl2" })}
          <Name>JONATHAN</Name>
        </MessageLine>
        <MessageLine
          animationName="moveUp"
          animationDuration={1}
          animationDelay={1}
        >
          {intl.formatMessage({ id: "hero-lnl3" })}
        </MessageLine>
      </Message>
    </MessageWrapper>
  )
}

export default WelcomeMsg
