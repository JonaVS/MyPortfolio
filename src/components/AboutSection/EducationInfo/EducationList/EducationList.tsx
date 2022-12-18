import React from "react"
import { EducationNode } from "../../../../types/GraphqlQueriesTypes/AboutData"
import { StyledEducationList } from "./educationList.styles"
import EducationEntry from "./EducationEntry/EducationEntry"

type Props = {
  education: EducationNode[]
}

const EducationList = ({ education }: Props) => {
  return (
    <StyledEducationList>
      {education.map(entry => (
        <EducationEntry key={entry.id} data={entry} />
      ))}
    </StyledEducationList>
  )
}

export default EducationList
