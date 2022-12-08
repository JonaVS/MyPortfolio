import styled, { css } from "styled-components"

type NavbarMenuWrapper = {
  responsiveMenu: boolean
}

const responsiveStyles = css`
  background-color: #020202f5;
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1;
`

export const NavbarMenuWrapper = styled.div<NavbarMenuWrapper>`
  display: flex;
  justify-content: start;
  padding: 10px 10px;
  width: 100%;

  @media screen and (max-width: 960px) {
    position: fixed;
    margin: 0px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    width: 100%;
    height: 300px;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ responsiveMenu }) => responsiveMenu && responsiveStyles}
  }
`
