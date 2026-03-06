## Exercise: Weather Data Visualization with React

### Objective
The objective of this exercise is to create a React component that retrieves weather data from the Open-Meteo API and displays it in both raw form and as a line graph (bonus!).

### ⭐⭐ Task: Requesting weather data
Create a React component named `WeatherGraph` that accomplishes the following:

- Fetches weather data from the Open-Meteo API endpoint https://api.open-meteo.com/v1/forecast.
- Uses axios for making the API request and stores the fetched data in the component's state.
- Displays the raw weather data in a textarea.

### ⭐⭐⭐ Bonus Task: Graph!
- Render a line graph using Chart.js and react-chartjs-2 (or any other graph component that you can find) 
  to showcase the temperature and humidity data from the fetched weather data.

### Requirements
- Use the `useState` and `useEffect` hooks for managing state and handling side effects in the component.
- Utilize the axios library to make the API request to https://api.open-meteo.com/v1/forecast.
- a request to the API should be `async` 

### Additional bonus tasks
- Feel free to style the components and the overall UI as per your preferences.
- Ensure error handling for failed API requests or invalid data.
- Experiment with Chart.js configurations to enhance the appearance of the line graph.
