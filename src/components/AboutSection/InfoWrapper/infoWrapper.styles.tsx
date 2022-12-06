import styled from "styled-components"

export const ContentWrapper = styled.div`
  padding: 40px;
  border: solid rgb(48, 48, 48) 2px;
  border-radius: 10px;

  p {
    text-align: justify;
    color: var(--PortWhiteMuted);
  }

  @media (min-width: 320px) {
    padding: 20px;
  }

  @media (min-width: 576px) {
    padding: 40px;
  }
`
