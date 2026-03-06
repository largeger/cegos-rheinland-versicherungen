## Solution: Weather Data Visualization 🌦️

This solution fetches weather data from the Open-Meteo API and displays it as raw JSON and a simple line graph using `react-chartjs-2`.

### `WeatherGraph.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherGraph: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Request for Berlin (latitude 52.52, longitude 13.41)
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m'
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  // Prepare data for Chart.js
  const chartData = {
    labels: weatherData?.hourly?.time.slice(0, 24).map((t: string) => t.split('T')[1]), // First 24 hours
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherData?.hourly?.temperature_2m.slice(0, 24),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humidity (%)',
        data: weatherData?.hourly?.relative_humidity_2m.slice(0, 24),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Weather Forecast (Berlin)</h1>
      
      <div style={{ marginBottom: '40px', height: '400px' }}>
        <h2>Temperature & Humidity (Next 24h)</h2>
        <Line options={{ responsive: true, maintainAspectRatio: false }} data={chartData} />
      </div>

      <div>
        <h2>Raw Data</h2>
        <textarea 
          style={{ width: '100%', height: '200px' }} 
          readOnly 
          value={JSON.stringify(weatherData, null, 2)} 
        />
      </div>
    </div>
  );
};

export default WeatherGraph;
```

### Setup Instructions

1.  **Install dependencies**:
    ```bash
    npm install axios chart.js react-chartjs-2
    ```
2.  **Usage**:
    Import and use the `WeatherGraph` component in your `App.tsx`.
