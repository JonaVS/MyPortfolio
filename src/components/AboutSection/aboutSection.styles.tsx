import styled from "styled-components"
import { MainContainer } from "../../components/shared/Container/container.styles"

export const AboutContainer = styled(MainContainer)`
  margin: 50px auto 50px auto;
  padding: 0px 0px 20px 0px;
`

export const AboutSectionWrapper = styled.section`
  @media (min-width: 320px) {
    width: 100%;
    margin-top: 8px;
    padding: 0 20px 0 20px;
  }

  @media (min-width: 1200px) {
    width: 60%;
    margin: 0px auto 0px auto;
    padding: 40px 0px 40px 0px;
  }
`
