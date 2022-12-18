export type AboutData = {
  aboutInfo: { nodes: AboutNode[] }
}

export type KnowledgeData = {
  allContentfulTechnologie: { nodes: TechNode[] }
}

export type ExperienceData = {
  experience: { nodes: ExperienceNode[] }
}

export type EducationData = {
  education: { nodes: EducationNode[] }
}

type AboutNode = {
  about: { data: { html: string } }
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

export type EducationNode = {
  id: string
  node_locale: string
  institution: string
  description: { data: string }
}
