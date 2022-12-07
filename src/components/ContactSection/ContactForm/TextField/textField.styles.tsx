import styled, { css } from "styled-components"

export const InputLabel = styled.label`
  color: var(--PortWhiteMuted);
  margin-top: 5px;
  font-family: "Abel";
  font-weight: 600;
`
export const InputWrapper = styled.div`
  margin-bottom: 10px;
`
export const InputError = styled.div`
  color: rgb(173, 51, 51);
  display: block;
  font-family: "Jura";
  font-weight: bold;
`
const baseTextFieldStyles = css`
  display: block;
  width: 100%;
  outline: none;
  padding: 10px;
  font-family: "Abel";
  font-size: 1.1rem;
  color: var(--PortWhiteMuted);
  border: solid #5a59593b 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: transparent;
  transition: border-radius 1.5s;

  &:invalid {
    box-shadow: none !important;
  }

  &:hover {
    border-color: var(--PortGreen);
    transition: border-color 0.9s;
  }

  &:focus {
    border-color: var(--PortGreen);
    border-style: solid;
    transition: border-color, border-style, border-radius 1.1s;
  }
`

export const TextFieldInput = styled.input`
  ${baseTextFieldStyles}

  &:focus {
    border-radius: 20px 0px 20px 0px;
  }
`
export const TextAreaFieldInput = styled.textarea`
  ${baseTextFieldStyles}
  height: 20vh;

  &:focus {
    border-radius: 0px 20px 0px 20px;
  }
`
