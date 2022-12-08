import styled from "styled-components"

export const StyledButton = styled.button`
  display: block;
  min-width: 200px;
  width: 50%;
  padding: 10px 20px;
  margin: 20px auto 0px auto;
  font-family: "Abel";
  font-size: 20px;
  background-color: var(--PortGreen);
  outline: none;
  border: none;
  border-radius: 10px;
  color: var(--PortWhite);
  transition: background-color ease-in-out 0.5s;
  cursor: pointer;

  &:hover {
    background-color: rgb(60, 133, 42);
  }

  svg {
    vertical-align: middle;
    margin-bottom: 4px;
  }
`
