import styled, { css } from "styled-components"

const sharedStyles = css`
  margin: 0;
  font-size: 1rem;
`
export const ExperienceNode = styled.li`
  margin-top: 20px;
`
export const ExperienceName = styled.h2`
  margin: 0;
  color: var(--PortGreen);
  font-size: 1.2rem;
`
export const ExperienceJobTitle = styled.p`
  ${sharedStyles}
`
export const ExperienceCountry = styled.p`
  ${sharedStyles};
`
export const ExperienceDescription = styled.div`
  margin-top: 15px;
`
