import { DatePicker } from 'antd'
import React from 'react'
import styled from 'styled-components'
import DateInput from './dateInput'
import TimeInput from './timeInput'

const DateTimeInput = React.forwardRef((props,ref) => {
  const { css,handleChange,handleBlur,value } = props
  return (
    <Container css={css}>
      <DatePicker
        showTime
        ref={ref}
        value={value}
        size='large'
        onChange={handleChange}
        onBlur={handleBlur}/>  
    </Container>
  )
})

export default DateTimeInput

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  & > .ant-picker{
    background-color: rgba(255,255,255,0.7);
    color: black;
    border-radius:6px;
    border-width:2px;
    border-right-width:2px !important;
  }
  & > .ant-picker:hover{
    border-color: black;
    border-right-width:2px !important;
  }
  & > .ant-picker-focused{
    border-color: black;
    box-shadow:none;
    border-right-width:2px !important;
  }
  & > .ant-picker-input{
    border-color: black;
  }
  & > a.ant-picker-now-btn{
    color: black;
  }
  & > li.ant-picker-now{
    color: black;
  }
  ${p => p.css ? p.css : ``}
`