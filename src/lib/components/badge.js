import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Badge = ({ text = `5.12+`,css }) => {
  return (
    <Container css={css}>
      <Text>{text}</Text>
    </Container>
  )
}
export default Badge

Badge.propTypes = { text: PropTypes.string,css: PropTypes.string }

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
  ${p => p.css ? p.css : ``}
`
const Text = styled.div`
`