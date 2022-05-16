import React from 'react'
import { useState } from 'react'
import { Eye,EyeOff } from 'react-feather'
import { StyledInput } from './input'

const PasswordInput = React.forwardRef((props,ref) => {
  const {
    placeholder,onChange,onBlur,onKeyUp,currentValue,type,highlightColor,css,
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

  const EyeIcon = passwordToggle ? Eye : EyeOff

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
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyUp={onKeyUp}/>
      {type === `password` && currentValue && 
      <EyeIcon 
        color={highlightColor} 
        cursor="pointer" 
        style={{ marginLeft: `auto`,userSelect: `none` }} 
        onClick={handlePasswordToggle}/>}
    </>
  )
})

export default PasswordInput

