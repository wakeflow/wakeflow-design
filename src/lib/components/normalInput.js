
import React from 'react'
import { StyledInput } from './input'

const NormalInput = React.forwardRef((props,ref) => {
  const { handleChange,handleBlur,handleKeyUp,currentValue,type } = props
  return (
    <StyledInput
      type={type}
      className='input'
      ref={ref}
      value={currentValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}/>
  )
})

export default NormalInput
