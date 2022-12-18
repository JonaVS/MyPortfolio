import React from "react"
import { ExperienceNode as ExperienceType } from "../../../../../types/GraphqlQueriesTypes/AboutData"
import {
  ExperienceDescription,
  ExperienceNode,
  ExperienceCountry,
  ExperienceJobTitle,
  ExperienceName,
} from "./experienceEntry.styles"
import parse from "html-react-parser"

type Props = {
  data: ExperienceType
}

const ExperienceEntry = ({ data }: Props) => {
  return (
    <ExperienceNode>
      <ExperienceName>{data.company}</ExperienceName>
      <ExperienceJobTitle>{data.title}</ExperienceJobTitle>
      <ExperienceCountry>{data.country}</ExperienceCountry>
      <ExperienceDescription>
        {parse(data.description.data.html)}
      </ExperienceDescription>
    </ExperienceNode>
  )
}

export default ExperienceEntry
