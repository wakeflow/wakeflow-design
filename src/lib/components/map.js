import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import LocationPin from './locationPin'


const Map = ({ center = { lat: 51.525261,lng: -0.167490 },zoom = 11,pin = { color: `black`,lat: ``,lng: ``,size: `` },apiKey = `` }) => {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {
          pin?.lat && pin?.lng &&
        <LocationPin
          lat={pin.lat}
          lng={pin.lng}
          color={pin.color}
          size={pin.size}
        />
        }
        
      </GoogleMapReact>
    </Container>
  )
}

export default Map


const Container = styled.div`
  width: 100%;
  height: 100%;
`
