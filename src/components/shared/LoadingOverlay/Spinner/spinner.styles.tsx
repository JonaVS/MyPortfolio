import styled, { keyframes } from "styled-components"

const spin = keyframes`
0% { transform: rotate(0deg);}
100% {transform: rotate(359deg);}
`

export const SpinnerSvg = styled.svg`
  color: rgb(184, 183, 183);
  height: 50px;
  width: 50px;
  fill: var(--PortGreen);
  animation: ${spin} 2s infinite linear;
`
