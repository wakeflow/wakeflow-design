import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import styled from 'styled-components'
import { components } from "react-select"

const animatedComponents = makeAnimated()
const Option = props => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{` `}
        <label>{props.label}</label>
      </components.Option>
    </div>
  )
}
const DropdownMultiCheckbox = React.forwardRef((props,ref) => {

  const { handleChange,handleBlur,currentValue,options,css } = props
  
  return (
    <Container ref={ref} css={css} className='topLevel'>
      <Select 
        options={options} 
        components={{ animatedComponents,Option }} 
        onChange={handleChange} 
        onBlur={handleBlur}
        allowSelectAll={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isMulti />
    </Container>
  )
})


export default DropdownMultiCheckbox

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