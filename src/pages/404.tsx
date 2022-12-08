import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import SEOComponent from "../components/shared/SEO/seo"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineHome } from "react-icons/ai"
import {
  HomeButtonLink,
  NotFoundContainer,
  NotFoundContent,
  StaticImageStyles,
} from "../pageStyles/404.styles"

const NotFoundPage = () => {
  const intl = useIntl()

  return (
    <>
      <SEOComponent title="Error" description="Not Found Page" />
      <NotFoundContainer fluid>
        <NotFoundContent>
          <p>{intl.formatMessage({ id: "404Message" })}</p>
          <StaticImage
            alt="404-creature"
            src="../images/404.png"
            quality={80}
            placeholder="blurred"
            style={StaticImageStyles}
          />
          <HomeButtonLink to="/">
            {intl.formatMessage({ id: "404Btn" })}
            <AiOutlineHome />
          </HomeButtonLink>
        </NotFoundContent>
      </NotFoundContainer>
    </>
  )
}

export default NotFoundPage
