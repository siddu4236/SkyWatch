import { useState } from "react";
import clearSky from "./clear-sky.png";
import btn from "./globe.png";
import "./Top.css";

export default function Top() {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", search);
    // Add API call or navigation logic here
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
          value={search}
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
