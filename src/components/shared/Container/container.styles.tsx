import styled, { css } from "styled-components"

type MainContainerProps = {
  fluid?: boolean
}

const centeredContainer = css`
  max-width: 1320px;
  margin: 0px auto 0px auto;

  @media (min-width: 320px) {
    max-width: 100%;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

const fluidContainer = css`
  max-width: 1920px;
  width: 100%;
`

export const MainContainer = styled.div<MainContainerProps>`
  position: relative;
  overflow: hidden;
  ${({ fluid }) => fluid ? fluidContainer : centeredContainer }
`
