import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import InfoWrapper from "../InfoWrapper/InfoWrapper"
import Title from "../../shared/Title/Title"

const AboutMeInfo = () => {
  const intl = useIntl()

  return (
    <InfoWrapper>
      <Title text={intl.formatMessage({ id: "about-meTitle" })} />
      <p>{intl.formatMessage({ id: "aboutp1" })}</p>
      <p>{intl.formatMessage({ id: "aboutp2" })}</p>
    </InfoWrapper>
  )
}

export default AboutMeInfo
