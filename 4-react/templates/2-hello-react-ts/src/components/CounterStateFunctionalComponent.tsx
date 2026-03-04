import {useState} from 'react';

function CounterStateFunctionalComponent() {
    // destructuring syntax
    const [count, setCount] = useState(42);  // 👈 this is state + hook!!!
    const thomasLieblingszahl = 15;

    function magicIncrement() {
        setCount(count + thomasLieblingszahl);
    }

    return (
        <div>
            <p>Counting: {count}</p>
            <button onClick={magicIncrement}>➕</button>
        </div>
    );
}

export default CounterStateFunctionalComponent;
