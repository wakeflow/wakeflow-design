import React from 'react'
import { Mail,Phone } from 'react-feather'
import styled from 'styled-components'

const EmailPhoneCard = ({ email,phone }) => {
  return (
    <Container>
      <EmailContainer><Mail/>{email}</EmailContainer>
      <PhoneContainer><Phone/>{phone}</PhoneContainer>
    </Container>
  )
}

export default EmailPhoneCard
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: solid 4px black;
  height: 15%;
`
const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-right: solid 2px black;
  @media only screen and (max-width: 600px){
    padding: 5px;
    gap: 10px;
  }
`
const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  border-left: solid 2px black;
  @media only screen and (max-width: 600px){
    padding: 5px;
    gap: 10px;
  }
`