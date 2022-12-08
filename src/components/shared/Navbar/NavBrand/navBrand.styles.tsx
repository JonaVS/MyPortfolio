import styled from "styled-components"
import { Link } from "gatsby-plugin-react-intl"

export const BrandLink = styled(Link)`
  font-family: "Jura";
  margin-right: 10px;
  padding: 10px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  background-color: var(--PortGreen);
  border-radius: 10%;
  transition: all 0.5s ease;

  &:hover {
    background-color: #2aa921b7;
  }
`
