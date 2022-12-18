export type AboutData = {
  allContentfulAboutMe: { nodes: AboutNode[] }
}

export type KnowledgeData = {
  allContentfulTechnologie: { nodes: TechNode[] }
}

export type ExperienceData = {
  experience: {nodes: ExperienceNode[]}
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

export type ExperienceNode = {
  id: string
  company: string
  country: string
  title: string
  node_locale: string
  description: { data: { html: string } }
}