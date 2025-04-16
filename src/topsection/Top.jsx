import clearSky from "./clear-sky.png";
import btn from "./globe.png";
import "./Top.css";

import {
  getWeatherInfo,
  getCitySuggestions,
  getLocationFallback,
  getCityFromCoords,
} from "../services"; // adjust path if needed

export default function Top({
  city,
  setCity,
  suggestions,
  setSuggestions,
  handleSubmit,
}) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    if (value.trim()) {
      getCitySuggestions(value).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    getWeatherInfo(suggestion);
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      getLocationFallback().then((fallbackCity) => {
        if (fallbackCity) {
          setCity(fallbackCity);
          getWeatherInfo(fallbackCity);
        }
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude: lat, longitude: lon } }) => {
        const cityName = await getCityFromCoords(lat, lon);
        if (cityName) {
          setCity(cityName);
          getWeatherInfo(cityName);
        } else {
          const fallbackCity = await getLocationFallback();
          if (fallbackCity) {
            setCity(fallbackCity);
            getWeatherInfo(fallbackCity);
          }
        }
      },
      async (error) => {
        alert(`Location Error (${error.code}): ${error.message}`);
        const fallbackCity = await getLocationFallback();
        if (fallbackCity) {
          setCity(fallbackCity);
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
              onChange={handleInputChange}
            />
            <button className="inputerBtn" type="submit">
              <img src={btn} alt="Search" />
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => handleSuggestionClick(item)}>
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
