
import React from 'react'
import styled from 'styled-components'

const NumberInput = React.forwardRef((props,ref) => {
  const { onChange,onBlur,onKeyUp,currentValue,type,hideIncrements } = props
  const handleChange = change => {
    if(change === ``) change = null
    else change = Number(change)
    onChange(change)
    console.log(change)
  }
  return (
    <StyledInput
      type={type}
      className='input'
      ref={ref}
      value={currentValue ?? ``}
      onChange={e => handleChange(e.target.value)}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      hideIncrements={hideIncrements}
    />
  )
})

export default NumberInput

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

  ${p => p.css}
`

