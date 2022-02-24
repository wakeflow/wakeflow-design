import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { TimePicker } from 'antd'

const TimeInput = ({ value,css,onChange,inputFormat = `HH:mm`,size = `large` }) => {
  return (
    <Container css={css}>
      <TimePicker
        value={value}
        format={inputFormat}
        size={size}
        minuteStep={1}
        onChange={onChange}/>
    </Container>
  )
}

export default TimeInput

export const Container = styled.div`
  .ant-picker{
    background-color: white;
    border-radius:6px;
    border-width:2px;
    border-right-width:2px !important;
  }
  .ant-picker:hover{
    border-color: black;
    border-right-width:2px !important;
  }
  .ant-picker-focused{
    border-color: black;
    box-shadow:none;
    border-right-width:2px !important;
  }
  .ant-picker-input{
    border-color: black;
  }
  a.ant-picker-now-btn{
    color: black;
  }
  li.ant-picker-now{
    color: black;
  }
  ${p => p.css ? p.css : ``}
`