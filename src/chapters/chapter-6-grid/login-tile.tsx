import React, { SFC } from "react"
import "./login-tile.scss"

export const LoginTile: SFC<{ className?: string }> = ({ className = ""}) => (
  <form className={`login-form tile ${className}`}>
    <h3>Login</h3>
    <FormInput name="username" label="Username" type="text" />
    <FormInput name="password" label="Password" type="password" />
    <button type="submit">Login</button>
  </form>
)

const FormInput: SFC<{
  name: string
  label: string
  type: HTMLInputElement["type"]
}> = ({ name, label, type }) => (
  <p>
    <label htmlFor={name}>{label}</label>
    <input id={name} type={type} name={name} />
  </p>
)
