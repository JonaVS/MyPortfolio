import React from "react"
import type { GatsbyBrowser } from "gatsby"
import { AnimatePresence } from "framer-motion"
import "react-toastify/dist/ReactToastify.min.css"
import "@fontsource/jura/300.css"
import "@fontsource/anton"
import "@fontsource/abel"
import "@fontsource/birthstone-bounce"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <AnimatePresence mode="wait">{element}</AnimatePresence>
}
