import styled from "styled-components"

export const DropdownContainer = styled.div`
  position: relative;
  margin-left: auto;
  padding: 0px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 960px) {
    margin: 0;
    padding: 16px;
    justify-content: center;
    flex-grow: 0;
  }
`

export const DropdownButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-family: "Jura";
  cursor: pointer;
  transition: all ease 1s;

  svg {
    vertical-align: middle;
    margin-right: 5px;
    font-size: 25px;
    color: var(--PortWhiteMuted);
  }
`
