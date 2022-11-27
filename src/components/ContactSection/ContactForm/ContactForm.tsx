import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { ContactMessage } from "../../../types/contactMessage"
import { Formik, Form, FormikHelpers } from "formik"
import LoadingOverlay from "../../shared/LoadingOverlay/LoadingOverlay"
import * as Yup from "yup"
import Button from "../../shared/Button/Button"
import { BiRightArrow } from "react-icons/bi"
import sendMail from "../../../services/formspree"
import TextField from "./TextField/TextField"
import { toast } from "react-toastify"
import * as styles from "../ContactForm/contactForm.module.css"

const ContactForm = () => {
  const intl = useIntl()

  const handleSubmit = async (
    values: ContactMessage,
    actions: FormikHelpers<ContactMessage>
  ): Promise<void> => {
    try {
      const success = await sendMail(values)
      if (success) {
        toast(intl.formatMessage({ id: "contactSuccess" }), {
          type: "success",
        })
        actions.resetForm({})
      }else {
       toast(intl.formatMessage({ id: "contactError" }), { type: "error" }) 
      }
    } catch (error) {
      toast(intl.formatMessage({ id: "contactError" }), { type: "error" })
    }
  }

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(40, intl.formatMessage({ id: "nameLenghtError" }))
            .required(intl.formatMessage({ id: "requiredError" })),
          email: Yup.string()
            .email(intl.formatMessage({ id: "invalidEmailError" }))
            .required(intl.formatMessage({ id: "requiredError" })),
          message: Yup.string()
            .max(300, intl.formatMessage({ id: "messageLenghtError" }))
            .required(intl.formatMessage({ id: "requiredError" })),
        })}
        onSubmit={async (values, actions) => {
          await handleSubmit(values, actions)
        }}
      >
        {formik => (
          <>
            {formik.isSubmitting && <LoadingOverlay />}
            <Form>
              <TextField
                label={intl.formatMessage({ id: "nameLabel" })}
                type="text"
                name="name"
              />
              <TextField
                label={intl.formatMessage({ id: "emailLabel" })}
                type="text"
                name="email"
              />
              <TextField
                label={intl.formatMessage({ id: "messageLabel" })}
                type="textarea"
                name="message"
              />
              <Button type="submit" disabled={formik.isSubmitting}>
                {intl.formatMessage({ id: "contactBtn" })} <BiRightArrow />
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
