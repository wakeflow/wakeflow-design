import { GitHub,Linkedin } from "react-feather"
import styled from "styled-components"
import { Badge,Button,DownloadButton,Loader,Map,ContactCard } from "./components/index.js"
import { lightBlue,lightPink,lightPurple } from "./utils/colours.js"

function App() {
  const pseudoBio = {
    name: `Joshua Ryland`,
    additionalDetails: `Developer\n Wakeflow\n 34 Rue du Fer A Moulin, 75005, Paris`,
    links: [{ url: `https://github.com/JRyGithub`,icon: GitHub },{ url: `https://www.linkedin.com/in/joshua-ryland/`,icon: Linkedin }],
    email: `josh@wakeflow.io`,
    phone: `+33769887928`,
  }
  return (
    <Container className="App">
      {/* <Badge/> */}
      {/* <Button keyPress="Enter" text="test" onClick={() => console.log(`Clicked`)}/> */}
      {/* <DownloadButton/> */}
      {/* <Loader/> */}
      {/* <Map pin={ { color: `blue`,lat: `51.525261`,lng: `-0.167490` } } apiKey='' /> */}
      <ContactCard image="/JoshProfilePhoto_1.jpg" bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `rgb(158, 83, 213)`,secondaryColor: `rgb(51, 213, 187)`,textColor: `white` }} bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `red`,secondaryColor: `blue`,textColor: `yellow` }} bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `#b8c1ec`,secondaryColor: `#eebbc3`,textColor: `#232946` }} bio={pseudoBio}/>
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ primaryColor: `#222525`,secondaryColor: `#0f0e17`,textColor: `#ff8906` }} bio={pseudoBio}/>
      <ContactCard />
      <ContactCard image="/JoshProfilePhoto_1.jpg" />
      <ContactCard bio={pseudoBio} />
      <ContactCard color={{ primaryColor: `#004643`,secondaryColor: `#abd1c6`,textColor: `#f9bc60` }}/>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap:  wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`