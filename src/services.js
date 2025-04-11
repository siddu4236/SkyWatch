// api.js

export async function getWeatherInfo(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Weather Data:", data);
      return data;
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      return null;
    }
  }
  
  export async function getCitySuggestions(input) {
    if (!input.trim()) return [];
  
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${input}&limit=5&sort=-population`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );
  
      const result = await response.json();
      return result.data.map((city) => `${city.city}, ${city.countryCode}`);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  }
  
  export async function getLocationFallback() {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      console.log("IP-based Location:", data);
      return `${data.city}, ${data.country_code}`;
    } catch (error) {
      console.error("Fallback failed:", error);
      return null;
    }
  }
  
  export async function getCityFromCoords(lat, lon) {
    try {
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${import.meta.env.VITE_API_ID}`
      );
      const geoData = await geoRes.json();
      return geoData.length > 0
        ? `${geoData[0].name}, ${geoData[0].country}`
        : null;
    } catch (error) {
      console.error("Error in reverse geolocation:", error);
      return null;
    }
  }
  
  