import styled from "styled-components"

export const FormWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 60%;
  padding: 0px 15px 0px 15px;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1200px) {
    width: 55%;
  }
`