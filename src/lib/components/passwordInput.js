import React from 'react'
import { useState } from 'react'
import { Eye,EyeOff } from 'react-feather'
import { StyledInput } from './input'

const PasswordInput = React.forwardRef((props,ref) => {
  const {
    placeholder,handleChange,handleBlur,handleKeyUp,currentValue,type,highlightColor,css,
  } = props
  const [passwordToggle,setPasswordToggle] = useState(false)
  const handlePasswordToggle = () => {
    const inputBox = ref.current
    if (inputBox) {
      const type = inputBox.getAttribute(`type`) === `password` ? `text` : `password`
      inputBox.setAttribute(`type`,type)
      setPasswordToggle(!passwordToggle)
    }
  }
  return (
    <>
      <StyledInput
        id='passwordInput'
        type={type}
        className='input'
        css={css}
        ref={ref}
        placeholder={placeholder}
        value={currentValue ?? ``}
        onChange={e => handleChange(e.target.value)}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}/>
      {type === `password` && !passwordToggle && currentValue && <Eye color={highlightColor} cursor="pointer" style={{ marginLeft: `auto`,userSelect: `none` }} onClick={handlePasswordToggle}/>}
      {type === `password` && passwordToggle && currentValue && <EyeOff color={highlightColor} cursor="pointer" style={{ marginLeft: `auto`,userSelect: `none` }} onClick={handlePasswordToggle} />}
    </>
  )
})

export default PasswordInput

