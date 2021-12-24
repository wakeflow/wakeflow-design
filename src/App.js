import { Badge,Button } from "./components/index.js"

function App() {
  return (
    <div className="App">
      {/* <Badge/> */}
      <Button keyPress="Enter" text="test" onClick={() => console.log(`Clicked`)}/>
    </div>
  )
}

export default App
