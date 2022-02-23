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
    background-color: rgba(17, 25,  40, 0.5);
    border-radius:6px;
    border-width:2px;
    border-right-width:2px !important;
  }
  .ant-picker:hover{
    border-color: white;
    border-right-width:2px !important;
  }
  .ant-picker-focused{
    border-color: white;
    box-shadow:none;
    border-right-width:2px !important;
  }
  .ant-picker-input{
    border-color:white;
  }
  a.ant-picker-now-btn{
    color:white;
  }
  li.ant-picker-now{
    color:white;
  }
  ${p => p.css ? p.css : ``}
`