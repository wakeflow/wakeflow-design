import styled from "styled-components"
import { Badge,Button,DownloadButton,Loader,Map } from "./components/index.js"

function App() {
  return (
    <Container className="App">
      {/* <Badge/> */}
      {/* <Button keyPress="Enter" text="test" onClick={() => console.log(`Clicked`)}/> */}
      {/* <DownloadButton/> */}
      {/* <Loader/> */}
      {/* <Map pin={ { color: `blue`,lat: `51.525261`,lng: `-0.167490` } } apiKey='' /> */}
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`