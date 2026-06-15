import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}°F</p>
      <div className="weather-card__sun"></div>
    </section>
  );
}

export default WeatherCard;
