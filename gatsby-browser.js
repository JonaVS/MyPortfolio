import "react-toastify/dist/ReactToastify.min.css"
import "./src/styles/global.css"
import "./src/styles/typography.css"
import "@fontsource/jura/300.css"
import "@fontsource/anton"
import "@fontsource/abel"
import React from "react"
import { AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)
