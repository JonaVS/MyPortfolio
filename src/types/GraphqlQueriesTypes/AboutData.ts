export type AboutData = {
  allContentfulAboutMe: { nodes: AboutNode[] }
}

type AboutNode = {
  node_locale: string
  about: { about: string }
}