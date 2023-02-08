import React from "react"
import { GlobalStyles } from "../../../globalStyles/globalStyles"
import { ContentWrapper } from "./layout.styles"
import Navbar from "../Navbar/Navbar"
import { motion } from "framer-motion"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ContentWrapper>
        <motion.main
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 200,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.main>
        <ToastContainer
          role="alert"
          position="bottom-center"
          theme="dark"
          autoClose={3000}
          draggable
          transition={Zoom}
        />
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Layout
