import styled, { css } from "styled-components"
import { Link } from "gatsby-plugin-react-intl"

const baseLinkStyles = css`
  display: block;
  text-align: center;
  border: solid black 1px;
  cursor: pointer;
  text-decoration: none;
`

export const StyledGatsbyLink = styled(Link)`${baseLinkStyles}`
export const StyledLink = styled.a`${baseLinkStyles}`
