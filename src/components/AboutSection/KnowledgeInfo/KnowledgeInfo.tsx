import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"
import TechIconList from "./TechIconList/TechIconList"

const KnowledgeInfo = () => {
  const intl = useIntl()

  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-teTitle" })} />
      <TechIconList />
    </InfoWrapper>
  )
}

export default KnowledgeInfo
