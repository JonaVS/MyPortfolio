import React, { ClassAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { useField, FieldHookConfig } from "formik"
import * as styles from '../contactForm.module.css'

type Props = FieldHookConfig<string> &
  InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  ClassAttributes<HTMLInputElement & HTMLTextAreaElement > & 
  {
    label: string
  }

const TextField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className={styles.inputWrapper}>
        <label htmlFor={props.id || props.name}>{label}</label>
        {props.type === "textarea" ? (
          <textarea {...field} {...props}  />
        ) : (
          <input {...field} {...props}  />
        )}
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

export default TextField
