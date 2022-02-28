import React from 'react'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DateInput = React.forwardRef((props,ref) => {
  const { value,css,onChange,inputFormat = `MM/DD/YYYY`,size = `large` } = props

  return (
    <Container css={css}>
      <DatePicker
        ref={ref}
        value={value}
        format={inputFormat}
        size={size}
        onChange={onChange}/>
    </Container>
  )
})

DateInput.propTypes = { 
  css: PropTypes.string,
  value: PropTypes.string,
  inputFormat: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
}

export default DateInput

const Container = styled.div`
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