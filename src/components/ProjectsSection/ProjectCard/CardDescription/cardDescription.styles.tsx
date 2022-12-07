import styled from "styled-components"

export const DescriptionText = styled.p`
  margin: 0px 0px 20px 0px;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: normal;
  color: var(--PortWhiteMuted);

  @media (min-width: 320px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`
