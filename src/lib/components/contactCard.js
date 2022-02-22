import React from 'react'
import styled from 'styled-components'
import colorConvertor,{ addTransparencyToRgba } from './utils/colourConvertor.js'
import BiographyCard from './biographyCard'
import EmailPhoneCard from './emailPhoneCard'
import PropTypes from 'prop-types'

const ContactCard = ({ image = ``,color = { primaryColor: `white`,secondaryColor: `silver`,textColor: `black` },bio = { name: ``,additionalDetails: ``,links: [{ url: ``,icon: {} }],email: ``,phone: `` } },css) => {
  const backgroundColorOneRgba = colorConvertor(color.primaryColor)
  const backgroundColorTwoRgba = colorConvertor(color.secondaryColor)
  let imageBorderColor = colorConvertor(color.secondaryColor)
  imageBorderColor = addTransparencyToRgba(imageBorderColor,`.5`)

  return (
    <Container backgroundColor1={backgroundColorOneRgba} backgroundColor2={backgroundColorTwoRgba} css={css}>
      <FirstRow>
        {image && <Image src={image} borderColor={imageBorderColor}/>}
        <BiographyCard name={bio.name} additionalDetails={bio.additionalDetails} links={bio.links} color={color}/>
      </FirstRow>
      <EmailPhoneCard email={bio.email} phone={bio.phone} color={color} />
    </Container>
  )
}

ContactCard.propTypes = {
  image: PropTypes.string,
  color: PropTypes.shape(
    {
      primaryColor: PropTypes.string,
      secondaryColor: PropTypes.string,
      textColor: PropTypes.string, 
    }),
  css: PropTypes.string,
  bio: PropTypes.shape(
    {
      name: PropTypes.string,
      additionalDetails: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape({ 
        url: PropTypes.string,
        icon: PropTypes.object, 
      })),
      email: PropTypes.string,
      phone: PropTypes.string, 
    }),
}

export default ContactCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${p => p.backgroundColor1 && p.backgroundColor2 ? 
    `linear-gradient(to right, ${p.backgroundColor1}, ${p.backgroundColor2})` 
    : `linear-gradient(to right, rgb(158, 83, 213,0.5), rgb(51, 213, 187,0.5))`};
  width: clamp(20rem,25rem,35rem);
  height: clamp(9rem,12rem,14rem);
  border-radius: 10px;
  box-shadow:
  2.8px 2.8px 15.5px rgba(0, 0, 0, 0.031),
  6.7px 6.7px 31.3px rgba(0, 0, 0, 0.04),
  12.5px 12.5px 46.9px rgba(0, 0, 0, 0.047),
  22.3px 22.3px 61.1px rgba(0, 0, 0, 0.053),
  41.8px 41.8px 72.4px rgba(0, 0, 0, 0.06),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.01);
  }
  margin: 20px;
  ${p => p.css ? p.css : ``}
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
  height: 70%;
  border: solid 4px ${p => p.borderColor ? p.borderColor : `rgb(227,119,195)`};
  margin: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 110px;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.05);
  }
  @media only screen and (max-width: 600px){
    height: 60%;
    margin-left: 10px; 
  }
`