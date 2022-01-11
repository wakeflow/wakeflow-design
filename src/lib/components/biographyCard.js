import React from 'react'
import styled from 'styled-components'

const BiographyCard = ({ name,additionalDetails,links,color }) => {
  if(additionalDetails) additionalDetails = additionalDetails?.split(`\n`)
  if(!name && additionalDetails === `` && links[0].url === ``) return null
  return (
    <Container textColor={color.textColor}>
      {name && <Name>{name}</Name>}
      {
        additionalDetails != `` &&
        <AdditionalDetails>       
          {additionalDetails?.map((line,index) => {
            return <React.Fragment key={index}>{line}<br/></React.Fragment>
          })
          }
        </AdditionalDetails>
      }
      {
        links[0].url != `` &&
      <Links>
        {
          links.map((link,index) => {
            return (<A key={index} href={`${link.url}`} target="_blank" hoverColor={color.primaryColor}><link.icon color={color.textColor}/></A>)
          })}
      </Links>
      }
    </Container>
  )
}

export default BiographyCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${p => p.textColor ? p.textColor : `black`};
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
  @media only screen and (max-width: 600px){
    font-size: 1rem;
  }
`
const AdditionalDetails = styled.div`
  font-size: .8rem;
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const A = styled.a`
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.1);
    & > svg {
        stroke: ${p => p.hoverColor ? p.hoverColor : `white`};
    }
  }
`