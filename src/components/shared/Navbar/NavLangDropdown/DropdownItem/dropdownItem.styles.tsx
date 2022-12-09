import styled from "styled-components"
import { Link } from "gatsby"

export const DropdownListItem = styled.li`
  background-color: var(--PortGreen);
  margin: 0;
  border-radius: 15px 0px 15px 0px;

  &:hover {
    background-color: black;
  }
`

export const DropdownLink = styled(Link)`
  text-decoration: none;
  font-family: "Jura";
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
`
