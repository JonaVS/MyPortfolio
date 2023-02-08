import styled, { css } from "styled-components"
import { Link } from "gatsby-plugin-react-intl"

const sharedStyles = css`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Birthstone Bounce";
  font-weight: bold;
  margin-right: 10px;
  padding: 10px;
  color: var(--PortWhiteMuted);
  text-decoration: none;
  white-space: nowrap;
  border-radius: 10%;
  background: -webkit-linear-gradient(#ececec, rgb(97, 145, 87));
  ${sharedStyles};

  span {
    font-size: 28px;
    color: var(--PortGreen);
    background: -webkit-linear-gradient(var(--PortGreen), var(--PortGreen));
    ${sharedStyles};
  }
`
