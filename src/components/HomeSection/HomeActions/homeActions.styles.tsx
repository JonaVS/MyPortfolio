import styled, { css } from "styled-components"
import { BsBriefcase } from "react-icons/bs"
import { AiOutlineArrowDown } from "react-icons/ai"
import { StyledGatsbyLink, StyledLink } from "../../shared/ButtonLink/buttonLink.styles"

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`

const baseLinksStyles = css`
  width: 100%;
  margin: 0px 0 0 12px;
  border-radius: 10px;
  border-style: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  :hover {
    position: relative;
    transform: translateY(5px);
  }

  @media (min-width: 320px) {
    max-width: 120px;
    padding: 12px;
  }

  @media (min-width: 576px) {
    max-width: 160px;
    padding: 20px;
  }
`

export const ProjectsLink = styled(StyledGatsbyLink)`
  ${baseLinksStyles}
  background-color: rgb(58, 56, 54);
  color: white;
`

export const ResumeLink = styled(StyledLink)`
  ${baseLinksStyles}
  background-color: rgb(228, 228, 228);
  color: black;
`

const iconBaseStyles = css`
  margin: auto;
  display: block;
`

export const ProjectsIcon = styled(BsBriefcase)`
  ${iconBaseStyles}
`
export const ResumeIcon = styled(AiOutlineArrowDown)`
  ${iconBaseStyles}
`
