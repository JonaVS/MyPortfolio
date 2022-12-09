import styled, { css } from "styled-components"

const roundedStyles = css`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  color: var(--PortGreen);
  border: solid rgb(62, 62, 62) 2px;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: border-color ease 0.6s;

  svg {
    vertical-align: middle;
  }

  &:hover {
    border-color: var(--PortGreen);
    color: rgb(167, 167, 167);
  }
`
const basicStyles = css`
  text-decoration: none;
  padding: 5px;
  color: rgb(169, 169, 169);
  transition: color ease 0.6s;

  &:hover {
    color: white;
  }
`

type IconAnchorProps = {
  basic?: boolean
}

export const IconAnchor = styled.a<IconAnchorProps>`
  ${({ basic }) => (basic ? basicStyles : roundedStyles)}
`
