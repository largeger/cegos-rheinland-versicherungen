import './App.css'
import ConditionalRendering from "./components/ConditionalRendering.tsx";
import TimedGreetingConditional from "./components/TimedGreetingConditional.tsx";
import ListRendering from "./components/ListRendering.tsx";

function App() {


  return (
    <>
        <TimedGreetingConditional></TimedGreetingConditional>
        <ConditionalRendering weatherGood={false}></ConditionalRendering>
        <ConditionalRendering weatherGood={true}></ConditionalRendering>
        <ListRendering></ListRendering>
    </>
  )
}

export default App
