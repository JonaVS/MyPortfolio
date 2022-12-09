import styled from "styled-components"

export const NavMenuButton = styled.button`
  display: none;
  padding: 0px;
  background-color: transparent;
  border: none;

  svg {
    color: white;
  }

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-60%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
