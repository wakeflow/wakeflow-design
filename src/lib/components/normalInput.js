
import React from 'react'
import styled from 'styled-components'
// import { StyledInput } from './input'

const NormalInput = React.forwardRef((props,ref) => {
  const { handleChange,handleBlur,handleKeyUp,currentValue,type,hideIncrements } = props
  return (
    <StyledInput
      type={type}
      className='input'
      ref={ref}
      value={currentValue}
      onChange={e => handleChange(e.target.value)}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      hideIncrements={hideIncrements}
    />
  )
})

export default NormalInput

const StyledInput = styled.input`
  width: 100%;
  border:none;
  background:transparent;
  flex:1 1;
  padding:0;
  font-size:1rem;
  outline:none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {  
    -webkit-appearance: ${p => p.hideIncrements ? `none` : ``};
    margin: ${p => p.hideIncrements ? 0 : ``};
  }

  /* Firefox */
  &[type=number] {
  -moz-appearance: ${p => p.hideIncrements ? `textfield` : ``};
  }
`

