import React from 'react'
import { useState } from 'react'
import { Eye,EyeOff } from 'react-feather'
import styled from 'styled-components'
import { StyledInput } from './input'

const PasswordInput = React.forwardRef((props,ref) => {
  const {
    placeholder,handleChange,handleBlur,handleKeyUp,currentValue,type,labelColor, 
  } = props
  const [passwordToggle,setPasswordToggle] = useState(false)
  const handlePasswordToggle = () => {
    const inputBox = document.querySelector(`#passwordInput`)
    const type = inputBox.getAttribute(`type`) === `password` ? `text` : `password`
    inputBox.setAttribute(`type`,type)
    setPasswordToggle(!passwordToggle)
  }
  return (
    <>
      <StyledInput
        id='passwordInput'
        type={type}
        className='input'
        ref={ref}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}/>
      {type === `password` && !passwordToggle && currentValue && <Eye color={labelColor} cursor="pointer" style={{ marginLeft: `auto` }} onClick={handlePasswordToggle}/>}
      {type === `password` && passwordToggle && currentValue && <EyeOff color={labelColor} cursor="pointer" style={{ marginLeft: `auto` }} onClick={handlePasswordToggle} />}
    </>
  )
})

export default PasswordInput
