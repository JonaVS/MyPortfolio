import React from "react"
import { ExperienceNode as ExperienceType } from "../../../../types/GraphqlQueriesTypes/AboutData"
import { StyledExperienceList } from "./experienceList.styles"
import ExperienceEntry from "./ExperienceNode/ExperienceEntry"

type Props = {
  experience: ExperienceType[]
}

const ExperienceList = ({ experience }: Props) => {
  return (
    <StyledExperienceList>
      {experience.map(experienceEntry => (
        <ExperienceEntry key={experienceEntry.id} data={experienceEntry} />
      ))}
    </StyledExperienceList>
  )
}

export default ExperienceList
