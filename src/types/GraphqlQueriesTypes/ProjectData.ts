import { IGatsbyImageData } from "gatsby-plugin-image"

export type ProjectData = {
  allContentfulProject: { nodes: ProjectNode[] }
}

export type ProjectNode = {
  id: string,
  title: string
  description: string
  demoLink: string
  gitLink: string
  techStack: string[]
  image: {gatsbyImageData: IGatsbyImageData }
  node_locale: string
}
