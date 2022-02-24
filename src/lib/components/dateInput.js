import React from 'react'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DateInput = ({ value,onChange,css,inputFormat = `MM/DD/YYYY`,size = `large` }) => {
  return (
    <Container css={css}>
      <DatePicker
        value={value}
        format={inputFormat}
        size={size}
        onChange={change => {onChange(change)}}/>
    </Container>
  )
}

DateInput.propTypes = { 
  css: PropTypes.string,
  value: PropTypes.string,
  inputFormat: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
}

export default DateInput

export const Container = styled.div`
  .ant-picker{
    background-color: white;
    color: black;
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