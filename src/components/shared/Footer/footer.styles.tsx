import styled from "styled-components"

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  height: 80px;
  background-color: rgba(17, 17, 17, 0.945);
  position: absolute;
  bottom: 0px;

  @media (min-width: 320px) {
    justify-content: center;
  }

  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`
