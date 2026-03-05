import './App.css'
import ConditionalRendering from "./components/ConditionalRendering.tsx";

function App() {


  return (
    <>
        <ConditionalRendering weatherGood={false}></ConditionalRendering>
        <ConditionalRendering weatherGood={true}></ConditionalRendering>
    </>
  )
}

export default App
