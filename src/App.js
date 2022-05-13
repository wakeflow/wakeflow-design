import { Input } from "./lib/index.js"
import React from 'react'
import styled from 'styled-components'

function App() {
  const options = [
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
      <Input required value={0} label="Number" type="number" hideIncrements={true}/>
      <br/>
      <Input label="Password" type="password"/>
      <br/>
      <Input required label="Normal" type="text"/>
      <br/>
      <Input label="Time" type='time'/>
      <br/>
      <Input label="Date" type='date'/>
      <br/>
      <Input label= "DateTime" type='dateTime'/>
      <br/>
      <Input label="Single Select" type='dropdown' options={options} value={options[0]}/>
      <br/>
      <Input label="MultiSelect" type='dropdownMultiSelectBox' options={options}/>
      <br/>
      <Input label="MultiSelect" type='dropdownMultiCheckbox' options={options}/>
      <br />
      <Input label="Calendar" type="calendar" showWeekNumbers={false}/>
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 4em
`