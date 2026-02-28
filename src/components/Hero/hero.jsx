import { useState } from "react";
import "./hero.css";
import { Container } from "../Container/container";

const API_KEY = "b8a65a4a73ec0d714d7773505232fc8b";

export const Hero = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
  if (!city) return;

  try {
    setError(null);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      setError("City not found");
      setWeatherData(null);
      return;
    }

    const data = await response.json();
    setWeatherData(data);
    setCity("");

  } catch (err) {
    setError("Something went wrong");
    setWeatherData(null);
  }
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <section className="hero">
      
      <div className="hero__background">
        <Container>
        <h1 className="hero__title">Weather dashboard</h1>

        <div className="hero__addons">
          <h2 className="hero__desc1">
            Create your personal list of favorite cities and always be aware of the weather.
          </h2>
          <p className="hero__border"></p>
          <h2 className="hero__desc2">
            {new Date().toDateString()}
          </h2>
        </div>

        <input
          className="hero__search"
          type="text"
          placeholder="Search location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        </Container>
      </div>
    </section>
  );
};