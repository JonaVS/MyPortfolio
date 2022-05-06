import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import SEOComponent from "../components/shared/SEO/seo"
import Container from "../components/shared/Container/Container"
import { StaticImage } from "gatsby-plugin-image"
import ButtonLink from "../components/shared/ButtonLink/ButtonLink"
import { AiOutlineHome } from "react-icons/ai"
import * as styles from "../styles/404Styles.module.css"

const NotFoundPage = () => {
  const intl = useIntl()

  return (
    <>
      <SEOComponent
        title="Error"
        description="Not Found Page"
      />
      <Container fluid className={styles.mainCont}>
        <div className={styles.notFoundContent}>
          <p>{intl.formatMessage({ id: "404Message" })}</p>
          <StaticImage
            alt="404-creature"
            src="../images/404.png"
            className={styles.image}
            quality={80}
            placeholder="blurred"
          />
          <ButtonLink className={styles.homeBtn} to="/">
            {intl.formatMessage({ id: "404Btn" })}
            <AiOutlineHome className={styles.icon} />
          </ButtonLink>
        </div>
      </Container>
    </>
  )
}

export default NotFoundPage
