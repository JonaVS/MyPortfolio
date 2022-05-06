import React from "react"
import Navbar from "../Navbar/Navbar"
import { motion } from "framer-motion"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"
import * as styles from "../Layout/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
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
      <Footer />
      <ToastContainer
        role="alert"
        position="bottom-center"
        theme="dark"
        autoClose="3000"
        draggable
        transition={Zoom}
      />
    </div>
  )
}

export default Layout
