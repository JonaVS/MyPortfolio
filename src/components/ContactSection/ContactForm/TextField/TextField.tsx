import React, {
  ClassAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react"
import { useField, FieldHookConfig } from "formik"
import {
  InputError,
  InputLabel,
  InputWrapper,
  TextAreaFieldInput,
  TextFieldInput,
} from "./textField.styles"

type Props = FieldHookConfig<string> &
  InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  ClassAttributes<HTMLInputElement & HTMLTextAreaElement> & {
    label: string
  }

const TextField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)

  return (
    <InputWrapper>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      {props.type === "textarea" ? (
        <TextAreaFieldInput {...field} {...props} />
      ) : (
        <TextFieldInput {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </InputWrapper>
  )
}

export default TextField
