import React from 'react'
import styled from 'styled-components'

const Badge = () => {
  return (
    <Container>
      <Text>5.12+</Text>
    </Container>
  )
}

export default Badge

const Container = styled.div`
  display:flex;
  color:green;
  background-color: lightgreen;
  border-radius:40px;
  padding:4px 8px;
  width:50px;
  text-align:center;
  vertical-align:center;
  align-items:center;
  justify-content:center;
`
const Text = styled.div`
`