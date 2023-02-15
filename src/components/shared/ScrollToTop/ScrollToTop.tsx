import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { StyledScrollToTop } from "./scrollToTop.styles"
import { AiOutlineArrowUp } from "react-icons/ai"

//START--Framer motion variants--START
const toTopBtn = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    translateX: "50%",
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
  exit: { scale: 0 },
}
//END--Framer motion variants--END

const ScrollToTop = () => {
  const [visible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    if (!window) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (!window) return

    const handleBtnVisibility = () => {
      window.scrollY > 800 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener("scroll", handleBtnVisibility)

    return () => {
      window.removeEventListener("scroll", handleBtnVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <StyledScrollToTop
          variants={toTopBtn}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={scrollToTop}
          title="Go to top"
          type="button"
        >
          <AiOutlineArrowUp />
        </StyledScrollToTop>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
