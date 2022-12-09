import styled from "styled-components"

export const ProjectCardWrapper = styled.li`
  background-color: #191919;
  border-radius: 15px 0px 15px 0px;
  transition: all 0.5s ease;
  box-shadow: rgba(86, 86, 86, 0.35) 0px 5px 15px;
  flex-shrink: 0;

  @media (min-width: 320px) {
    width: 90%;

    &:hover {
      position: static;
      transform: none;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 992px) {
    width: 45%;

    &:hover {
      position: relative;
      transform: translateY(10px);
    }
  }
`
