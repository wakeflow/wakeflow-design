import React from 'react'
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import styled from 'styled-components'

const LocationPin = ({ size,color }) => {
  return (
    <Container className='pin' size={size}>
      <Icon color={color} icon="bx:bxs-map"/>
    </Container>
  )
}

export default LocationPin

const Container = styled.div` 
  display: flex;
  align-items: center;
  width: 180px;
  color: blue;
  font-size: ${p => p.size ? p.size : `2rem`};
  @media screen and (min-width: 799px) {
    width: 15vw;
  }
`