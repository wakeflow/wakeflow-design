import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import styled from 'styled-components'


const animatedComponents = makeAnimated()
 
const DropdownMultiSelectbox = React.forwardRef((props,ref) => {
  const { handleChange,handleBlur,currentValue,options,css } = props
  
  return (
    <Container ref={ref} css={css} className='topLevel'>
      <Select options={options} components={animatedComponents} onChange={handleChange} onBlur={handleBlur} isMulti />
    </Container>
  )
})

export default DropdownMultiSelectbox

const Container = styled.div`
  width: 100%;
  & > div {
    & > div {
    border-color: black;
    box-shadow: 0 0 0 1px black;
    &:hover{
      border-color: white;
      box-shadow: 0 0 0 1px white;
      }
    }
  }
  ${p => p.css ? p.css : ``}
`