import React from "react"
import { useField } from "formik"
import *as styles from '../contactForm.module.css'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className={styles.inputWrapper}>
        <label htmlFor={props.id || props.name}>{label}</label>
        {props.type === "textarea" ? (
          <textarea {...field} {...props} />
        ) : (
          <input {...field} {...props} />
        )}
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

TextField.defaultProps = {
  label: "Default label",
}

export default TextField
