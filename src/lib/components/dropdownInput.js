import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated()

const DropdownInput = React.forwardRef((props,ref) => {
  let { handleChange,handleBlur,options,currentValue } = props
  if(!currentValue) {
    currentValue = options[0] // eslint-disable-line
    handleChange(currentValue)
  }
  return (
    <Container ref={ref} className='topLevel'>
      <Select
        defaultValue={currentValue}
        options={options} 
        components={{ animatedComponents }} 
        onChange={handleChange} 
        onBlur={handleBlur}
        menuPortalTarget={document.body} 
        styles={{ menuPortal: base => ({ ...base,zIndex: 9999 }) }}
      />
    </Container>
  )
})

export default DropdownInput

const Container = styled.div`
  width: 100%;
  cursor: text;
  & > div {
    cursor: text;
    & > div {
    cursor: pointer;
    border-color: transparent;
    box-shadow: 0 0 0 1px transparent;
    &:hover{
      border-color: black;
      box-shadow: 0 0 0 1px black;
      }
    }
  }
`