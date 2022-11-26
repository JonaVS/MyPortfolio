import React from "react"
import type { GatsbyBrowser } from "gatsby"
import { AnimatePresence } from "framer-motion"
import "react-toastify/dist/ReactToastify.min.css"
import "./src/styles/global.css"
import "./src/styles/typography.css"
import "@fontsource/jura/300.css"
import "@fontsource/anton"
import "@fontsource/abel"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}
