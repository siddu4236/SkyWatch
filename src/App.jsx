import { useState } from 'react';
import './App.css';
import Bg from './Background/Bg';
import Container from './Container';
import Top from './topsection/Top';
import { getWeatherInfo } from './services'; // adjust path if needed

function App() {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city.trim()) return;
    console.log("Searching for:", city);
    const data = await getWeatherInfo(city.trim());
    setWeatherData(data); 
    setSuggestions([]);
  };

  return (
    <div className="core">
      <Top
        city={city}
        setCity={setCity}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        handleSubmit={handleSubmit}
      />
      <Bg />
      {weatherData && <Container weatherData={weatherData.main} />}
    </div>
  );
}

export default App;
