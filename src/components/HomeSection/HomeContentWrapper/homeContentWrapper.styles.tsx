import styled from "styled-components"

export const PositionedContainer = styled.div`
  position: absolute;
  top: calc(50% - 80px);
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
