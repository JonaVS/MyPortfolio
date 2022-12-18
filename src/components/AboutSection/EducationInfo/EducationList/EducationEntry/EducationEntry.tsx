import React from "react"
import { EducationNode as EducationNodeType } from "../../../../../types/GraphqlQueriesTypes/AboutData"
import {
  EducationEntryDesc,
  EducationInstitution,
  EducationNode,
} from "./educationEntry.styles"

type Props = {
  data: EducationNodeType
}

const EducationEntry = ({ data: { institution, description } }: Props) => {
  return (
    <EducationNode>
      <EducationInstitution>{institution}</EducationInstitution>
      <EducationEntryDesc>{description.data}</EducationEntryDesc>
    </EducationNode>
  )
}

export default EducationEntry
