export type AboutData = {
  allContentfulAboutMe: { nodes: AboutNode[] }
}

export type KnowledgeData = {
  allContentfulTechnologie: { nodes: TechNode[] }
}

type AboutNode = {
  node_locale: string
  about: { about: string }
}

export type TechNode = {
  id?: string
  name: string
  svg: { svg: string }
}