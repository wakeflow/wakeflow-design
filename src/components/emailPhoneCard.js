import React from 'react'
import { Mail,Phone } from 'react-feather'
import styled from 'styled-components'
import colorConvertor,{ addTransparencyToRgba } from './utils/colourConvertor.js'

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

  let backgroundColor = colorConvertor(color.secondaryColor)
  backgroundColor = addTransparencyToRgba(backgroundColor,`.5`)

  return (
    <Container borderColor={color.textColor} textColor={color.textColor} backgroundColor={backgroundColor}>
      <EmailContainer id='email' borderColor={color.textColor} onClick={() => handleClick(`email`)} hoverColor={color.primaryColor}><Mail color={color.textColor}/>{email}</EmailContainer>
      <PhoneContainer id='phone' borderColor={color.textColor} onClick={() => handleClick(`phone`)} hoverColor={color.primaryColor}><Phone color={color.textColor}/>{phone}</PhoneContainer>
    </Container>
  )
}

export default EmailPhoneCard
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: solid 4px rgba(128, 128, 128, 0.2);
  /* height: 15%; */
  color: ${p => p.textColor ? p.textColor : `black`};
  background-color: ${p => p.backgroundColor ? p.backgroundColor : `white`};
  border-radius: 0px 0px 10px 10px;
  font-weight: 600;
`
const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-right: solid 2px rgba(128, 128, 128, 0.2);
  padding: 5px;
  @media only screen and (max-width: 600px){
    padding: 5px;
    gap: 10px;
  }
  &:hover{
    cursor: pointer;
    color: ${p => p.hoverColor ? p.hoverColor : `white`};
  }
`
const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  border-left: solid 2px rgba(128, 128, 128, 0.2);
  padding: 5px;
  @media only screen and (max-width: 600px){
    padding: 5px;
    gap: 10px;
  }
  &:hover{
    cursor: pointer;
    color: ${p => p.hoverColor ? p.hoverColor : `white`}
  }
`