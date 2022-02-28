import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { TimePicker } from 'antd'

const TimeInput = React.forwardRef((props,ref) => {
  const { value,css,onChange,inputFormat = `HH:mm`,size = `large` } = props
  return (
    <Container css={css}>
      <TimePicker
        ref={ref}
        value={value}
        format={inputFormat}
        size={size}
        minuteStep={1}
        onChange={onChange}
      />
    </Container>
  )
})

export default TimeInput
const Container = styled.div`
  & > .ant-picker{ 
    background-color: rgba(255,255,255,0.7);
    border-radius:6px;
    border-width:2px;
    border-right-width:2px !important;
  }
  & > .ant-picker:hover{
    border-color: transparent;
    border-right-width:2px !important;
  }
  & > .ant-picker-focused{
    border-color: transparent;
    box-shadow:none;
    border-right-width:2px !important;
  }
  & >.ant-picker-input{
    border-color: transparent; 
  }
  }
  & > a.ant-picker-now-btn{
    color: black;
  }
  & > li.ant-picker-now{
    color: black;
  }
  ${p => p.css ? p.css : ``}
`