import { Input } from "./lib/index.js"
import React,{ useEffect,useState } from 'react'
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

  const [state,setState] = useState(options[0])

  useEffect(() => {
    const main = async() => {
      const delay = ms => new Promise(res => setTimeout(res,ms))
      await delay(1000)
      setState(options[1])
    }
    main()
  },[])
  return (
    <Container className="App">      
      <Input label="Number" type="number" hideIncrements={true}/>
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
      <Input label="Single Select" type='dropdown' options={options} value={state}/>
      <br/>
      <Input label="MultiSelect" type='dropdownMultiSelectBox' options={options}/>
      <br/>
      <Input label="MultiSelect" type='dropdownMultiCheckbox' options={options}/>
      <br />
      {/* <Input label="Calendar" type="calendar" showWeekNumbers={false}/> */}
    </Container>
  )
}

export default App

