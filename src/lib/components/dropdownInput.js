import React from 'react'
import styled from 'styled-components'

const DropdownInput = () => {
  return (
    <StyledInput>
    </StyledInput>
          {list && 
            <datalist id="options">
              {list.map((item,index) => {
                return <option key={index} value={item.value}>{item.label}</option>
              })}
            </datalist>
          }
  )
}

export default DropdownInput

const Container = styled.div`
  display:flex;
`