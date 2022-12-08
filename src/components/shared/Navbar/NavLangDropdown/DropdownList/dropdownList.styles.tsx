import styled from "styled-components"

export const DropdownLangList = styled.ul`
  position: absolute;
  top: 45px;
  right: 0;
  padding: 0px;
  background-color: var(--PortGreen);
  width: 80px;
  border-radius: 15px 0px 15px 0px;
  list-style-type: none;
  text-align: center;
  color: white;

  @media only screen and (max-width: 960px) {
    left: 0;
    right: 0;
    margin: auto;
  }
`
