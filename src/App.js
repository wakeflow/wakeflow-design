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
  const objList = [
    {
      value: `Java123`,
      label: `Java`,
    },
    {
      value: `Javascript5`,
      label: `Javascript`,
    },{
      value: `python1`,
      label: `Python`,
    },
    {
      value: `3214`,
      label: `Go`,
    },
  ]
  return (
    <Container className="App">      
      {/* <Input label="Number" type="number" hideIncrements={true}/>
      <br/>
      <Input label="Password" type="password"/>
      <br/>
      <Input label="Normal" type="text"/>
      <br/>
      <Input label="Time" type='time'/>
      <br/>
      <Input label="Date" type='date'/>
      <br/>
      <Input label= "DateTime" type='dateTime'/>
      <br/>
      <Input label="Single Select" type='dropdown' options={objList}/>
      <br/>
      <Input label="MultiSelect" type='dropdownMultiSelectBox' options={objList}/>
      <br/>
      <Input label="MultiSelect" type='dropdownMultiCheckbox' options={objList}/>
      <br /> */}
      <Input label="Calendar" type="calendar"/>
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