import React from 'react'
import styled from 'styled-components'
import colorConvertor,{ addTransparencyToRgba } from '../utils/colourConvertor'
import {
  blue,lightBlue,lightPink,lightPurple,pink,purple,salmon,transparentBlack1, 
} from '../utils/colours'

const Loader = ({ image,color }) => {
  const colorArray = []
  if(color)
    for(let i = 0;i < 7;i++)
      colorArray.push(addTransparencyToRgba(colorConvertor(color),`.${i + 3}`))
  return (
    <Container>
      <Img src={image} />
      <LoaderContainer>
        <LoadingBar 
          color1={colorArray[0]} 
          color2={colorArray[1]} 
          color3={colorArray[2]} 
          color4={colorArray[3]} 
          color5={colorArray[4]} 
          color6={colorArray[5]} 
          color7={colorArray[6]} 
        />
      </LoaderContainer>
    </Container>
  )
}

export default Loader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  max-width: 500px;
  max-height: 200px;
  padding: 10px;
  @media only screen and (max-width: 600px){
    width: 325px; 
  }
`
const LoaderContainer = styled.div`
  width: 100%; 
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid transparent;
  background: ${transparentBlack1};
  position: relative;
  padding: 4px;
  @media only screen and (max-width: 600px){
    width: 325px; 
  }
  &:before {
  content:'';
  border:1px solid transparent; 
  border-radius:10px;
  position:absolute;
  top:-4px; 
  right:-4px; 
  bottom:-4px; 
  left:-4px;
}
`
const LoadingBar = styled.div`
  position:absolute;
  border-radius:10px;
  top:0;
  right:100%;
  bottom:0;
  left:0;
  background: ${p => p.color1 ? p.color1 : lightBlue}; 
  width:0;
  animation:borealisBar 4s linear infinite;
  @keyframes borealisBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
    background: ${p => p.color1 ? p.color1 : lightBlue};
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
    
  }
  16%{
    background: ${p => p.color2 ? p.color2 : blue};
  }
  32%{
    background: ${p => p.color3 ? p.color3 : lightPurple};
  }
  48%{
    background: ${p => p.color4 ? p.color4 : purple};
  }
  62%{
    background: ${p => p.color5 ? p.color5 : lightPink};
  }
  78%{
    background: ${p => p.color6 ? p.color6 : pink};
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
    background: ${p => p.color7 ? p.color7 : salmon};
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
    background: ${p => p.color7 ? p.color7 : salmon};
  }
}
`