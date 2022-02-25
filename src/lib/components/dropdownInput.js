import React from 'react'
import styled from 'styled-components'
import { StyledInput } from './input'

const DropdownInput = React.forwardRef((props,ref) => {
  const { handleChange,handleBlur,handleKeyUp,currentValue,type,list } = props
  return (
    <>
      <StyledInput
        type={type}
        className='input'
        ref={ref}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        list='options'/>
      <datalist id="options">
        {list.map((item,index) => {
          return <option key={index} value={item.value}>{item.label}</option>
        })}
      </datalist>
    </>

  )
})

export default DropdownInput

const Container = styled.div`
  display:flex;
`