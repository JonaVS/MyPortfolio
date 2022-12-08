import styled from "styled-components"

export const StyledDivider = styled.div`
  position: relative;
  margin: 80px 0px 80px 0px;
  height: 1px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(100, 102, 105),
      transparent
    );
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: var(--PortGreen);
    border: 1px solid rgb(81, 81, 81);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.437),
      0 0 0 4px rgba(255, 255, 255, 0.081);
  }
`
