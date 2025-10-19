import React from "react"
import type { GatsbyBrowser } from "gatsby"
import { AnimatePresence } from "motion/react"
import "@fontsource/jura/300.css"
import "@fontsource/anton"
import "@fontsource/abel"
import "@fontsource/birthstone-bounce"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <AnimatePresence mode="wait">{element}</AnimatePresence>
}
