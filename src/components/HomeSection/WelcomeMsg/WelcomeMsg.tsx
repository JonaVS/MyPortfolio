import React from "react"
import { Variants } from "motion/react"
import {
  Message,
  MessageLine,
  MessageWrapper,
  Name,
} from "./welcomeMsg.styles"
import { useIntl } from "gatsby-plugin-react-intl"


const msgWrapper:Variants = {
  hidden: {},
  show: {transition: {delayChildren: 0.5, staggerChildren: 0.5}}
}

const line1:Variants = {
  hidden: {opacity: 0, x: 60},
  show: {opacity: 1, x:0, transition: {duration: 1}}
}

const line2:Variants = {
  ...line1,
  hidden: {opacity: 0, x: -90},
}

const line3:Variants = {
  hidden: {opacity: 0, y: 50},
  show: {opacity: 1, y:0, transition: {duration: 1}},
}

const WelcomeMsg = () => {
  const intl = useIntl()

  return (
    <MessageWrapper variants={msgWrapper} initial="hidden" animate="show">
      <Message>
        <MessageLine variants={line1}>
          {intl.formatMessage({ id: "hero-lnl1" })}
        </MessageLine>
        <MessageLine variants={line2}>
          {intl.formatMessage({ id: "hero-lnl2" })}
          <Name>JONATHAN</Name>
        </MessageLine>
        <MessageLine variants={line3}>
          {intl.formatMessage({ id: "hero-lnl3" })}
        </MessageLine>
      </Message>
    </MessageWrapper>
  )
}

export default WelcomeMsg
