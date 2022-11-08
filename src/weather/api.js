import axios from "axios";

// TODO:: hourly weather & daily weather
// const URL = "https://api.open-meteo.com/v1/forecast?latitude=29.76&longitude=-95.36&hourly=weathercode&hourly=temperature_2m&current_weather=true&timeformat=unixtime&timezone=CST";

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
  "0": {icon: "bi bi-brightness-high", text: "Clear sky"},
  "1": {icon: "bi bi-brightness-low", text: "Mainly clear"},
  "2": {icon: "bi bi-cloud-sun", text: "Partly cloudy"},
  "3": {icon: "bi bi-clouds", text: "Overcast"},
  "45": {icon: "bi bi-cloud-fog2", text: "Fog"},
  "48": {icon: "bi bi-cloud-snow", text: "Depositing rime fog"},
  "51": {icon: "bi bi-cloud-drizzle", text: "Light drizzle"},
  "53": {icon: "bi bi-cloud-drizzle", text: "Drizzle"},
  "55": {icon: "bi bi-cloud-drizzle", text: "Dense drizzle"},
  "56": {icon: "bi bi-cloud-sleet", text: "Light freezing drizzle"},
  "57": {icon: "bi bi-cloud-sleet", text: "Dense freezing drizzle"},
  "61": {icon: "bi bi-cloud-drizzle", text: "Slight rain"},
  "63": {icon: "bi bi-cloud-rain", text: "Rain"},
  "65": {icon: "bi bi-cloud-rain-heavy", text: "Heavy rain"},
  "66": {icon: "bi bi-cloud-sleet", text: "Freezing light rain"},
  "67": {icon: "bi bi-cloud-sleet", text: "Freezing heavy rain"},
  "71": {icon: "bi bi-cloud-snow", text: "Slight snow fall"},
  "73": {icon: "bi bi-cloud-snow", text: "Snow fall"},
  "75": {icon: "bi bi-snow", text: "Heavy snow fall"},
  "77": {icon: "bi bi-snow2", text: "Snow grains"},
  "80": {icon: "bi bi-cloud-drizzle", text: "Slight rain showers"},
  "81": {icon: "bi bi-cloud-rain", text: "Rain showers"},
  "82": {icon: "bi bi-cloud-rain-heavy", text: "Violent rain showers"},
  "85": {icon: "bi bi-snow", text: "Slight snow showers"},
  "86": {icon: "bi bi-snow2", text: "Heavy snow showers"},
  "95": {icon: "bi bi-cloud-lightning-rain", text: "Thunderstorm"},
  "96": {icon: "bi bi-cloud-lightning-rain", text: "Thunderstorm with slight hail"},
  "99": {icon: "bi bi-cloud-lightning-rain", text: "Thunderstorm with heavy hail"}
}
