import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import styled from 'styled-components'


const animatedComponents = makeAnimated()
 
const DropdownMultiSelectbox = React.forwardRef((props,ref) => {
  const { handleChange,handleBlur,currentValue,options } = props
  
  return (
    <Container ref={ref} className='topLevel'>
      <Select 
        options={options} 
        defaultValue={currentValue}
        components={animatedComponents} 
        onChange={handleChange} 
        onBlur={handleBlur} 
        isMulti
        menuPortalTarget={document.body} 
        styles={{ menuPortal: base => ({ ...base,zIndex: 9999 }) }} />
    </Container>
  )
})

export default DropdownMultiSelectbox

const Container = styled.div`
  width: 100%;
  & > div {
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
  ${p => p.css ? p.css : ``}
`