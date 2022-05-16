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

  const { onChange,onBlur,currentValue,options,css } = props
  
  return (
    <Container ref={ref} className='topLevel' css={css}>
      <Select 
        options={options} 
        defaultValue={currentValue}
        components={{ animatedComponents,Option }} 
        onChange={onChange} 
        onBlur={onBlur}
        allowSelectAll={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isMulti
        menuPortalTarget={document.body} 
        styles={{ menuPortal: base => ({ ...base,zIndex: 9999 }) }} />
    </Container>
  )
})


export default DropdownMultiCheckbox

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
  ${p => p.css}
`