import React from 'react'
import styled from 'styled-components'

const BiographyCard = ({ name,additionalDetails,links,color }) => {
  
  return (
    <Container textColor={color.textColor}>
      <Name>{name}</Name>
      <AdditionalDetails>{additionalDetails}</AdditionalDetails>
      <Links>
        {links.map((link,index) => {
          return (<A key={index} href={`${link.url}`} target="_blank"><link.icon color={color.secondaryColor}/></A>)
        })}
      </Links>
    </Container>
  )
}

export default BiographyCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${p => p.textColor ? p.textColor : `black`};
`
const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 5%;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
`
const AdditionalDetails = styled.div``
const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const A = styled.a`
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
`