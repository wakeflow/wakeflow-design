import React from 'react'
import styled from 'styled-components'
import {
  blue,lightBlue,lightPink,lightPurple,pink,purple,salmon, 
} from '../utils/colours'

const Loader = () => {
  return (
    <Container>
      <Img src='/wakeflowlogo.png' />
      <LoaderContainer>
        <LoadingBar />
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
  width: 500px;
  @media only screen and (max-width: 600px){
    width: 325px; 
  }
`
const LoaderContainer = styled.div`
  width:500px; 
  margin: 0 auto;
  border-radius: 10px;
  border: 4px solid transparent;
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
  background: ${lightBlue}; 
  width:0;
  animation:borealisBar 4s linear infinite;
  @keyframes borealisBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
    background: ${lightBlue};
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
    
  }
  16%{
    background: ${blue};
  }
  32%{
    background: ${lightPurple};
  }
  48%{
    background: ${purple};
  }
  62%{
    background: ${lightPink};
  }
  78%{
    background: ${pink};
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
    background: ${salmon};
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
    background: ${salmon};
  }
}
`