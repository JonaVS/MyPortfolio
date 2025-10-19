import { motion } from "motion/react"
import styled from "styled-components"

export const MessageWrapper = styled(motion.div)`
  position: relative;
  text-align: center;
`

export const Message = styled.p`
  display: inline-block;
  overflow: hidden;
  text-align: left;
  color: rgba(255, 249, 249, 0.8);
  line-height: 0.9;
  font-family: "Anton";
  margin: 0px;

  @media (min-width: 320px) {
    span:nth-child(1),
    span:nth-child(2) {
      font-size: 50px;
    }
    span:nth-child(3) {
      font-size: 18px;
    }
  }

  @media (min-width: 576px) {
    span:nth-child(1),
    span:nth-child(2) {
      font-size: 80px;
    }
    span:nth-child(3) {
      font-size: 30px;
    }
  }

  @media (min-width: 1200px) {
    span:nth-child(1),
    span:nth-child(2) {
      font-size: 95px;
    }
  }
`

export const Name = styled.span`
  color: var(--PortGreen);
`

export const MessageLine = styled(motion.span)`
  display: block;
`
