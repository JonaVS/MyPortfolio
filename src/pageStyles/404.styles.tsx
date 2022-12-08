import { CSSProperties } from "react"
import styled, { css } from "styled-components"
import { StyledGatsbyLink } from "../components/shared/ButtonLink/buttonLink.styles"
import { MainContainer } from "../components/shared/Container/container.styles"

const sharedFlexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const sharedFontStyles = css`
  font-size: 1.3rem;
`

export const NotFoundContainer = styled(MainContainer)`
  ${sharedFlexStyles}
  height: 100vh;
  padding: 0px 20px 0px 20px;
`

export const NotFoundContent = styled.div`
  text-align: center;
  color: var(--PortWhiteMuted);
  font-size: 1.5rem;
`

export const HomeButtonLink = styled(StyledGatsbyLink)`
  ${sharedFlexStyles}
  ${sharedFontStyles}
  padding: 10px;
  max-width: 250px;
  font-family: "Abel";
  background-color: black;
  color: var(--PortWhiteMuted);
  border-radius: 10px;
  margin: 30px auto 0px auto;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: rgb(32, 32, 32);
  }

  svg {
    margin: 0px 0px 4px 5px;
    vertical-align: middle;
  }
`
//StaticImage Gatsby component doesnt work with styled components
export const StaticImageStyles: CSSProperties = {
  display: "block",
  margin: "auto",
  maxWidth: "460px",
  minWidth: "250px",
  width: "80%",
}
