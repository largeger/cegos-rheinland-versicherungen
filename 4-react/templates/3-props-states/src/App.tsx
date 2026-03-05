import './App.css'
import {useState} from "react";
import FormSubmission from "./components/FormSubmission.tsx";

function ChangingGreet(props) {

    const bayrisch = "Servus";
    const nordisch = "Moin";



    function toggleGreeting() {
        if (props.greet == bayrisch) {
            props.setGreeting(nordisch);
        } else {
            props.setGreeting(bayrisch);
        }

    }

    return (
        <>
            <h1>{props.greet}</h1>
            <button onClick={toggleGreeting}>Von München nach Hamburg und zurück....</button>
        </>
    );
}


function App() {
    const [greeting, setGreeting] = useState('');

    return (
    <>
      <ChangingGreet greet={greeting} setGreeting={setGreeting}></ChangingGreet>
        <FormSubmission setGreeting={setGreeting}></FormSubmission>
    </>
  )
}

export default App
