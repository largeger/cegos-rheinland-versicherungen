## Joke Generator Exercise

### Description

This exercise is a simple React application that introduces fundamental concepts such as components, props, and state (utilizing the `useState` hook).
The goal is to create a "Joke Generator" that displays predefined jokes and allows users to fetch a new joke upon clicking a button.

### Components Used

#### Joke Component

- **Props**:
    - `joke`: Accepts a single joke string to display.

This component displays a single joke passed via props.

#### JokeGenerator Component

- **State**:
    - `currentJokeIndex`: Tracks the index of the currently displayed joke.

This component manages the state of the displayed joke and renders the current joke along with a button to fetch the next joke.

### Implementation Details

1. An array (`jokes`) stores a collection of predefined jokes.
2. The `Joke` component is responsible for displaying a single joke using props.
3. The `JokeGenerator` component utilizes the `useState` hook to manage the currently displayed joke's index and renders it along with a button to fetch the next joke.
4. The `App` component serves as the entry point, rendering the `JokeGenerator` component.

### Learning Objectives

- Understanding the basics of React components, props, and state management (`useState` hook).
- Practice creating and using components to display content dynamically without handling events or conditionally rendering elements.

Feel free to modify and enhance this exercise by adding more jokes or tweaking the components as needed.

```jsx
import React, { useState } from 'react';

// Array of predefined jokes
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did the ocean say to the shore? Nothing, it just waved.",
  "Why don't skeletons fight each other? They don't have the guts.",
  // Add more jokes as needed
];

// Joke component
const Joke = ({ joke }) => {
  return (
    <div>
      <p>{joke}</p>
    </div>
  );
};

// JokeGenerator component
const JokeGenerator = () => {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const nextJoke = () => {
    // Generate the next joke index or loop back to the start
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
  };

  return (
    <div>
      <h1>Joke Generator</h1>
      <Joke joke={jokes[currentJokeIndex]} />
      <button onClick={nextJoke}>Get a new joke</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div className="App">
      <JokeGenerator />
    </div>
  );
};

export default App;
```
