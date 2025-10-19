import styled from "styled-components"
import { motion } from "motion/react"

export const StyledScrollToTop = styled(motion.button)`
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 100%;
  padding: 5px;
  border: solid var(--PortGreen) 3px;
  color: rgb(219, 219, 219);
  font-size: 20px;
  background-color: rgb(15, 15, 15);

  @media (min-width: 320px) {
    top: 90px;
    right: 33px;
  }

  @media (min-width: 960px) {
    right: 50px;
  }
`