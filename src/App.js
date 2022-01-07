import { useState } from "react"
import { GitHub,Linkedin } from "react-feather"
import styled from "styled-components"
import {
  Badge,Button,DownloadButton,Loader,Map,ContactCard,Input, 
} from "./components/index.js"
import { lightBlue,lightPink,lightPurple } from "./utils/colours.js"

//TODO Two Loader Color bug
function App() {
  const [value,setValue] = useState(``)
  const pseudoBio = {
    name: `Joshua Ryland`,
    additionalDetails: `Developer\n Wakeflow\n 34 Rue du Fer A Moulin, 75005, Paris`,
    links: [{ url: `https://github.com/JRyGithub`,icon: GitHub },{ url: `https://www.linkedin.com/in/joshua-ryland/`,icon: Linkedin }],
    email: `josh@wakeflow.io`,
    phone: `+33769887928`,
  }
  const imageUrl = `/wakeflowlogo.png`
  // const imageUrl = `/JoshProfilePhoto_1.jpg`
  return (
    <Container className="App">
      {/* <Badge/> */}
      <Input
        placeholder='hello'
        error="this is an error message"
        label="Name"
        required
        schema={{
          type: `string`,
          enum: [`all`,`exclude`,`include`],
          maxLength: 3,
        }}
      />
      <Input
        prefix='£'
        label="Amount"
        type='number'
      />
      <Input
        // placeholder='hello'
        // error="this is an error message"
        value={value}
        onChange={setValue}
        error={value && !value.includes(`@`) ? `Please enter an email address` : ``}
        onEnter={() => console.log(`entered`)}
        label="Email"
        required
      />
      {/* <Button 
        keyPress="Enter" 
        text="test" 
        // disabled
        onClick={() => console.log(`Clicked`)}/> */}
      {/* <DownloadButton/> */}
      <Container2>
        <Loader image={imageUrl}/>
        <Loader image={imageUrl} color='black' />
      </Container2>
      
      {/* <Map pin={ { color: `blue`,lat: `51.525261`,lng: `-0.167490` } } apiKey='' /> */}
      {/* <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `rgb(158, 83, 213)`,secondaryColor: `rgb(51, 213, 187)`,textColor: `white` }} bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `red`,secondaryColor: `blue`,textColor: `yellow` }} bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `#b8c1ec`,secondaryColor: `#eebbc3`,textColor: `#232946` }} bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `#222525`,secondaryColor: `#0f0e17`,textColor: `#ff8906` }} bio={pseudoBio}/>
      <ContactCard />
      <ContactCard image="/JoshProfilePhoto_1.jpg" />
      <ContactCard bio={pseudoBio} />
      <ContactCard color={{ primaryColor: `#004643`,secondaryColor: `#abd1c6`,textColor: `#f9bc60` }}/> */}
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing:border-box;
  background-color:lightblue;
  padding:10px;
  display:flex;
  flex-direction:column;
  gap:10px;
`
const Container2 = styled.div`
  width: 500px;
`