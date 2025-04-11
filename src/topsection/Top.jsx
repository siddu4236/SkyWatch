// Top.jsx
import { useState } from "react";
import clearSky from "./clear-sky.png";
import btn from "./globe.png";
import "./Top.css";

import {
  getWeatherInfo,
  getCitySuggestions,
  getLocationFallback,
  getCityFromCoords,
} from "../services";

export default function Top() {
  const [city, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city.trim()) return;
    console.log("Searching for:", city);
    await getWeatherInfo(city.trim());
    setSuggestions([]);
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      getLocationFallback().then((fallbackCity) => {
        if (fallbackCity) {
          setSearch(fallbackCity);
          getWeatherInfo(fallbackCity);
        }
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const cityName = await getCityFromCoords(lat, lon);
        if (cityName) {
          setSearch(cityName);
          getWeatherInfo(cityName);
        } else {
          alert("City not found for your location.");
          const fallbackCity = await getLocationFallback();
          if (fallbackCity) {
            setSearch(fallbackCity);
            getWeatherInfo(fallbackCity);
          }
        }
      },
      async (error) => {
        alert(`Location Error (${error.code}): ${error.message}`);
        const fallbackCity = await getLocationFallback();
        if (fallbackCity) {
          setSearch(fallbackCity);
          getWeatherInfo(fallbackCity);
        }
      }
    );
  };

  return (
    <div className="toper">
      <a className="logo" href="#">
        <img src={clearSky} height={34} alt="Clear Sky" />
        <h1>SkyWatch</h1>
      </a>

      <form className="searcher" onSubmit={handleSubmit} autoComplete="off">
        <div className="search-wrap">
          <div className="search-inner">
            <input
              className="inputer"
              type="text"
              placeholder="Search city"
              value={city}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                getCitySuggestions(value).then(setSuggestions);
              }}
            />
            <button className="inputerBtn" type="submit">
              <img src={btn} alt="Search" />
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearch(item);
                    setSuggestions([]);
                    getWeatherInfo(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      <button className="currbtn" onClick={handleCurrentLocation}>
        <i className="fa-solid fa-location-crosshairs"></i> Current Location
      </button>
    </div>
  );
}
