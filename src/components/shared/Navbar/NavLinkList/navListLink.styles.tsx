import styled from "styled-components"

export const LinkList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;

  svg {
    vertical-align: middle;
    margin-right: 5px;
    font-size: 25px;
    color: var(--PortWhiteMuted);
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`
