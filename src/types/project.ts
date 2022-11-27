import { IGatsbyImageData } from "gatsby-plugin-image"

export type Project = {
  title: string
  demoLink: string
  description: string
  descriptionES: string
  gitLink: string
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  techStack: string[]
}
