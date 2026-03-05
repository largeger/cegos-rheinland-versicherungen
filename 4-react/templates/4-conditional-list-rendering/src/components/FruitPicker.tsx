import {useState} from 'react';

function FruitPicker() {
    const fruits = ['🍎', '🍌', '🍊', '🥭'];
    const [pickedFruit, setPickedFruit] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    function pickRandomFruit() {
        const randomIndex = Math.floor(Math.random() * fruits.length);
        const randomFruit = fruits[randomIndex];
        setPickedFruit(randomFruit);

        const answer = prompt(`Do you like ${randomFruit}? (Yes/No)`);

        if (answer && answer.toLowerCase() === 'yes') {
            setResultMessage('Great! You picked a tasty fruit!');
        } else {
            setResultMessage(`No worries, more ${randomFruit} for me!`);
        }
    }


    return (
        <div>
            <h2>Let's Pick a Fruit!</h2>
            <button onClick={pickRandomFruit}>Pick a Fruit</button>
            {pickedFruit && <p>You picked: {pickedFruit}</p>}
            {resultMessage && <p>{resultMessage}</p>}
        </div>
    );
}

export default FruitPicker;
