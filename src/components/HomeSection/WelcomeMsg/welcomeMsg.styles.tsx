import styled, { css, keyframes } from "styled-components"

const moveLeft = keyframes`
  0%   {opacity: 1;}
  50%  {opacity: 0.5;}
  100% {transform: translateX(60px); opacity: 0.3;}
`
const moveRight = keyframes`
  0%   {opacity: 1;}
  50%  {opacity: 0.5;}
  100% {transform: translateX(-90px); opacity: 0;}
`
const moveUp = keyframes`
  0%   {opacity: 1;}
  50%  {opacity: 0.5;}
  100% {transform: translateY(50px); opacity: 0;}
`

export const MessageWrapper = styled.div`
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

const lineBaseStyles = css`
  opacity: 0;
  display: block;
  animation-direction: reverse;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`

type MessageLineProps = {
  animationName: "moveUp" | "moveRight" | "moveLeft"
  animationDuration: number
  animationDelay?: number
}

export const MessageLine = styled.span<MessageLineProps>`
  ${lineBaseStyles}
  ${({ animationName }) => {
    switch (animationName) {
      case "moveUp":
        return css`
          animation-name: ${moveUp};
        `
      case "moveLeft":
        return css`
          animation-name: ${moveLeft};
        `
      case "moveRight":
        return css`
          animation-name: ${moveRight};
        `
      default:
        break
    }
  }};
  ${({ animationDuration }) =>
    css`
      animation-duration: ${animationDuration && animationDuration}s;
    `};
  ${({ animationDelay }) =>
    css`
      animation-delay: ${animationDelay && animationDelay}s;
    `};
`
