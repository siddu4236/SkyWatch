import { useState } from "react";
import clearSky from "./clear-sky.png";
import btn from "./globe.png";
import "./Top.css";

export default function Top() {
  const [city, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", city);
    // Add API call or navigation logic here
    getWeatherInfo(city);
  };

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2d9366fb3d321821ca32cab89c69fe42"; // Replace with your actual API key, ideally from an environment variable

  let getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  };

  return (
    <div className="toper">
      <a className="logo" href="#">
        <img src={clearSky} height={34} alt="Clear Sky" />
        <h1>SkyWatch</h1>
      </a>
      <form className="searcher" onSubmit={handleSubmit}>
        <input
          className="inputer"
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="inputerBtn" type="submit">
          <img src={btn} alt="Search" />
        </button>
      </form>

      <button className="currbtn">
        <i className="fa-solid fa-location-crosshairs"></i> Current Location
      </button>
    </div>
  );
}
