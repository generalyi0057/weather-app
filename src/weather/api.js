import axios from "axios";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";
const USER_LOCATION_URL = "https://geolocation-db.com/json/";

export const getWeather = async (params) => {
  const fetchWeather = axios.get(WEATHER_URL, {params: params})
  const res = await fetchWeather.then();
  return res.data;
};

export const getMyWeather = async () => {
  const fetchLocation = axios.get(USER_LOCATION_URL);
  const res = await fetchLocation.then();
  const weather = await getWeather({
    current_weather: true,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    latitude: res.data.latitude,
    longitude: res.data.longitude
  });
  return {
    location: res.data,
    weather: weather
  };
}

export const weathercodeList = {
  "0": "Clear sky",
  "1": "Mainly clear",
  "2": "Partly cloudy",
  "3": "Overcast",
  "45": "Fog",
  "48": "Depositing rime fog",
  "51": "Light drizzle",
  "53": "Drizzle",
  "55": "Dense drizzle",
  "56": "Light freezing drizzle",
  "57": "Dense freezing drizzle",
  "61": "Slight rain",
  "63": "Rain",
  "65": "Heavy rain",
  "66": "Freezing light rain",
  "67": "Freezing heavy rain",
  "71": "Slight snow fall",
  "73": "Snow fall",
  "75": "Heavy snow fall",
  "77": "Snow grains",
  "80": "Slight rain showers",
  "81": "Rain showers",
  "82": "Violent rain showers",
  "85": "Slight snow showers",
  "86": "Heavy snow showers",
  "95": "Thunderstorm",
  "96": "Thunderstorm with slight hail",
  "99": "Thunderstorm with heavy hail"
}
