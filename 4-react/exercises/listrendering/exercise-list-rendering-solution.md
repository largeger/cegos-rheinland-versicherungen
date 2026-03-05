## Excercise: The list rendering Fruit basket 🍓

- Build a functional component that stores an array of fruits and randomly picks a fruit, asking the user if they like that fruit. 
- If they do, display "Great! You picked a tasty fruit!" 
- If they don't, display "No worries, more [the fruit they picked] for me!"
- **Bonus:** Implement this in Typescript!


### Solution (`FruitPicker.js`):
```jsx
import React, { useState } from 'react';

const FruitPicker = () => {
    const fruits = ['🍎', '🍌', '🍊', '🥭'];
    const [pickedFruit, setPickedFruit] = useState(null);
    const [resultMessage, setResultMessage] = useState('');
    
    const pickRandomFruit = () => {
        const randomIndex = Math.floor(Math.random() * fruits.length);
        const randomFruit = fruits[randomIndex];
        setPickedFruit(randomFruit);

        const answer = prompt(`Do you like ${randomFruit}? (Yes/No)`);

        if (answer && answer.toLowerCase() === 'yes') {
            setResultMessage('Great! You picked a tasty fruit!');
        } else {
            setResultMessage(`No worries, more ${randomFruit} for me!`);
        }
    };

    return (
        <div>
            <h2>Let's Pick a Fruit!</h2>
            <button onClick={pickRandomFruit}>Pick a Fruit</button>
            {pickedFruit && <p>You picked: {pickedFruit}</p>}
            {resultMessage && <p>{resultMessage}</p>}
        </div>
    );
};

export default FruitPicker;
```
