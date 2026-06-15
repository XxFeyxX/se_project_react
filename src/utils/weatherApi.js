import { coordinates, APIkey } from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

export const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  }

  if (temperature >= 66) {
    return "warm";
  }

  return "cold";
};

export const filterWeatherData = (data) => {
  const temperature = Math.round(data.main.temp);

  return {
    city: data.name,
    temp: {
      F: temperature,
    },
    type: getWeatherType(temperature),
  };
};

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`,
  ).then(checkResponse);
};
