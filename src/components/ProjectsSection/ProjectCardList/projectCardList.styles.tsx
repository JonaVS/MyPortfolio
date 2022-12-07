import styled from "styled-components"

export const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 30px;
  list-style: none;
  padding: 0px;

  &::after {
    content: "";
    flex: 0 0;
  }

  @media (min-width: 320px) {
    &::after {
      flex-basis: 90%;
    }
  }

  @media (min-width: 768px) {
    &::after {
      flex-basis: 80%;
    }
  }

  @media (min-width: 992px) {
    &::after {
      flex-basis: 45%;
    }
  }
`
