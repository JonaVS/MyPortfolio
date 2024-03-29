import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { ContactContainer } from "./contactSection.styles"
import Title from "../shared/Title/Title"
import ContactForm from "./ContactForm/ContactForm"
import IconLinkGroup from "../shared/IconLink/IconLinkGroup/IconLinkGroup"
import { contactLinks } from "./contactLinksData"
import Divider from "../shared/Divider/Divider"

const ContactSection = () => {
  const intl = useIntl()
  
  return (
    <ContactContainer>
      <section>
        <Title text={intl.formatMessage({ id: "contact-title" })} />
        <IconLinkGroup links={contactLinks} />
        <Divider />
        <ContactForm />
      </section>
    </ContactContainer>
  )
}

export default ContactSection
