import { useState } from "react"
import { GitHub,Linkedin } from "react-feather"
import styled from "styled-components"
import {
  Badge,Button,DownloadButton,Loader,Map,ContactCard,Input, 
} from "./lib/index.js"

function App() {
  const css = `
    color: red;
    background-color: blue;
  `
  return (
    <Container className="App">
      <ContactCard/>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing:border-box;
  background: url(/pinkFlowers.jpg) no-repeat center;
  background-size: cover;
`