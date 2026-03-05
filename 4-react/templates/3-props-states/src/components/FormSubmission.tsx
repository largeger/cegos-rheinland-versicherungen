import {type ChangeEvent, type MouseEvent, useState} from "react";

function FormSubmission(props: { setGreeting: (greeting: string) => void; }) {
    const [inputValue, setInputValue] = useState('Init');

    function handleSubmit(event : MouseEvent<HTMLButtonElement> ) {
        event.preventDefault(); // sagt dem Browser: bitte nix machen, ich kümmer mich selbst um das Event
        props.setGreeting(inputValue);
        setInputValue('');
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h2>Form Submission</h2>
            <h3>{inputValue}</h3>
            <form>
                <input
                    type="text"
                    name="testtext"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter something.."
                    required />
                <button onClick={handleSubmit} type="submit">Weg damit... 🚀</button>
            </form>
        </div>
    );
}

export default FormSubmission;
