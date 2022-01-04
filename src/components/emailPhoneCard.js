import React from 'react'
import { Mail,Phone } from 'react-feather'
import styled from 'styled-components'

const EmailPhoneCard = ({ email,phone,color }) => {
  const handleClick = clicked => {
    const copyTextarea = document.querySelector(`#${clicked}`)
    const range = document.createRange()
    range.selectNode(copyTextarea)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand(`copy`)
    window.getSelection().removeAllRanges()
  }

  return (
    <Container borderColor={color.secondaryColor} textColor={color.textColor}>
      <EmailContainer id='email' borderColor={color.secondaryColor} onClick={() => handleClick(`email`)}><Mail color={color.secondaryColor}/>{email}</EmailContainer>
      <PhoneContainer id='phone' borderColor={color.secondaryColor} onClick={() => handleClick(`phone`)}><Phone color={color.secondaryColor}/>{phone}</PhoneContainer>
    </Container>
  )
}

export default EmailPhoneCard
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: solid 4px ${p => p.borderColor ? p.borderColor : `black`};
  height: 15%;
  color: ${p => p.textColor ? p.textColor : `black`};
`
const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-right: solid 2px ${p => p.borderColor ? p.borderColor : `black`};
  @media only screen and (max-width: 600px){
    padding: 5px;
    gap: 10px;
  }
  &:hover{
    cursor: pointer;
  }
`
const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  border-left: solid 2px ${p => p.borderColor ? p.borderColor : `black`};
  @media only screen and (max-width: 600px){
    padding: 5px;
    gap: 10px;
  }
  &:hover{
    cursor: pointer;
  }
`