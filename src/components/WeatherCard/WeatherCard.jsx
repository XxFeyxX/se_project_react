function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temperature}°F</p>
    </section>
  );
}

export default WeatherCard;
