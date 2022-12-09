import styled from "styled-components"
import { Link } from "gatsby-plugin-react-intl"

export const NavbarLink = styled(Link)`
  justify-content: center;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--PortWhiteMuted);
  margin-right: 10px;
  padding: 5px;

  &::after {
    position: absolute;
    bottom: -5px;
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: rgb(246, 243, 243);
    transition: width 0.5s;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
    margin: 0;
  }
`
