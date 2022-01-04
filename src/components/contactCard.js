import React from 'react'
import styled from 'styled-components'
import BiographyCard from './biographyCard'
import EmailPhoneCard from './emailPhoneCard'

const ContactCard = ({ image,color = { primaryColor: ``,secondaryColor: ``,textColor: `` },bio = { name: ``,additionalDetails: ``,links: [{ url: ``,icon: {} }],email: ``,phone: `` } }) => {
  
  return (
    <Container backgroundColor={color.primaryColor}>
      <FirstRow>
        <Image src={image} borderColor={color.secondaryColor}/>
        <BiographyCard name={bio.name} additionalDetails={bio.additionalDetails} links={bio.links} color={color}/>
      </FirstRow>
      <EmailPhoneCard email={bio.email} phone={bio.phone}/>
    </Container>
  )
}

export default ContactCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : `#f4f4f4`};
  width: 35rem;
  height: 18rem;
  border-radius: 10px;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.01);
  }
  margin: 20px;
`
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80%;
  gap: 30px;
  flex-grow: 1;
`
const Image = styled.img`
  height: 60%;
  border: solid 4px ${p => p.borderColor ? p.borderColor : `rgb(227,119,195)`};
  aspect-ratio: 1 / 1;
  border-radius: 110px;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.05);
  }
  @media only screen and (max-width: 600px){
    height: 50%;
    margin-left: 10px; 
  }
`