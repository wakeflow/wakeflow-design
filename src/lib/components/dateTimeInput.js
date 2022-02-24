import React from 'react'
import styled from 'styled-components'
import DateInput from './dateInput'
import TimeInput from './timeInput'

const DateTimeInput = ({ css,onChange,value }) => {

  return (
    <Container css={css}>
      <DateInput onChange={onChange} value={value}/>
      <TimeInput onChange={onChange} value={value}/>
    </Container>
  )
}

export default DateTimeInput

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  ${p => p.css ? p.css : ``}
`