import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated()

const DropdownInput = React.forwardRef((props,ref) => {
  let { onChange,onBlur,options,currentValue,css } = props
  return (
    <Container ref={ref} className='topLevel' css={css}>
      <Select
        value={currentValue}
        options={options} 
        components={{ animatedComponents }} 
        onChange={onChange} 
        onBlur={onBlur}
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
  ${p => p.css}
`