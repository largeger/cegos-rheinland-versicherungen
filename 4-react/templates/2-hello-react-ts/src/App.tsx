import './App.css'
import FunctionalGreetComponent from "./components/FunctionalGreetComponent.tsx";
import CounterStateFunctionalComponent from "./components/CounterStateFunctionalComponent.tsx";

function App() {


  return (
    <>
        <FunctionalGreetComponent name="Dad" favemoji="🍺"/>
        <FunctionalGreetComponent name="👻" favemoji="🎉"/>
        <FunctionalGreetComponent name="Granny" favemoji="🍰"/>
        <CounterStateFunctionalComponent></CounterStateFunctionalComponent>
    </>
  )
}

export default App
