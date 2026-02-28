import { Container } from "../Container/container";
import "./weather.css";

export const Weather = ({ weatherData }) => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  if (!weatherData) {
    return null;
  }

  return (
    <section>
      <Container>
        <div className="weather">
          <div className="weather__cards">
            <div className="weather__card">
              <div className="weather__names">
                <p className="weather__name">
                  {weatherData.name}
                </p>
                <p className="weather__name">
                  {weatherData.sys.country}
                </p>
              </div>

              <h3 className="weather__hour">
                {date.getHours()}:00
              </h3>

              <button className="weather__button">
                Hourly forecast
              </button>

              <div className="weather__dates">
                <p className="weather__date">
                  {date.toLocaleDateString()}
                </p>
                <p className="weather__date">{day}</p>
              </div>

              <img
                className="weather__sun"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />

              <h2 className="weather__temp">
                {Math.round(weatherData.main.temp)}°C
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};