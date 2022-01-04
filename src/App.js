import { GitHub,Linkedin } from "react-feather"
import styled from "styled-components"
import { Badge,Button,DownloadButton,Loader,Map,ContactCard } from "./components/index.js"
import { lightPurple } from "./utils/colours.js"

function App() {
  const pseudoBio = {
    name: `Joshua Ryland`,
    additionalDetails: `34 Rue du Fer A Moulin, 75005, Paris`,
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
      <ContactCard image="/JoshProfilePhoto_1.jpg" color={{ secondaryColor: `${lightPurple}`,textColor: `black` }} bio={pseudoBio}/>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`