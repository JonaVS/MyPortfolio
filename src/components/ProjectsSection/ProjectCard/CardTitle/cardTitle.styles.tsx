import styled from "styled-components"

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0px 20px 0px;
`
export const CardTitleText = styled.h2`
  color: var(--PortGreen);
  font-weight: bold;
  margin: 0px;

  @media (min-width: 320px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`
