import './App.css'
import {useState} from "react";
import FormSubmission from "./components/FormSubmission.tsx";
import ChangingGreet from "./components/ChangingGreet.tsx";

function App() {
    // Dieser state wird an beide Kinder weitergereicht!
    const [greeting, setGreeting] = useState('');

    return (
    <>
        <ChangingGreet greet={greeting} setGreeting={setGreeting}></ChangingGreet>
        <FormSubmission setGreeting={setGreeting}></FormSubmission>
    </>
  )
}

export default App
