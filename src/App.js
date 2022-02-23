import { useState } from "react"
import { GitHub,Linkedin } from "react-feather"
import styled from "styled-components"
import {
  Badge,Button,DownloadButton,Loader,Map,ContactCard,Input, 
} from "./lib/index.js"
import { toast } from './lib/components/toaster'
function App() {
  const css = `
    color: red;
    background-color: blue;
  `
  const list = [`Java`,`Javascript`,`Python`,`C++`,`Go`]
  return (
    <Container className="App">      
      <Input label="Languages" list={list}/>
      <br/>
      <Input label="Random" type="text"/>
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
  gap: 10px;
`