import { useState, useEffect } from 'react';

import { getWeather, getMyWeather, weathercodeList } from "./api";

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import "./WeatherCard.sass";

const WeatherCard = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("");
  const [weathercode, setWeathercode] = useState("");

  const switchTempUnit = () => {
    setWeatherInfo({
      ...weatherInfo,
      temperatureUnit: weatherInfo.temperatureUnit === "°C" ? "°F" : "°C"
    });
  }

  useEffect(() => {
    const myWeather = getMyWeather();
    myWeather.then(res => {
      setWeatherInfo({
        city: res.location.city,
        temperature: res.weather.current_weather.temperature,
        temperatureUnit: weatherInfo.temperatureUnit !== "°F" ? "°C" : "°F",
        weathercode: res.weather.current_weather.weathercode.toString()
      });
    });
  }, []);

  return (
    <Container className="text-center">
      <Card className="weather-card" style={{ width: '18rem' }}>
        { weatherInfo && weatherInfo.weathercode ?
          <Card.Body>
            <Card.Title>
              {weatherInfo.city}
            </Card.Title>
            <i className={weathercodeList[weatherInfo.weathercode].icon}></i>

            <Card.Text>
              {weathercodeList[weatherInfo.weathercode].text}
            </Card.Text>
            <Card.Text className="clickable" onClick={switchTempUnit}>
              {weatherInfo.temperatureUnit === "°C" ?
                weatherInfo.temperature :
                (weatherInfo.temperature * 1.8 + 32).toFixed(1)
              }
              {" " + weatherInfo.temperatureUnit}
            </Card.Text>
          </Card.Body>
          :
          <Card.Body>
            <Spinner animation="border" variant="primary role='status'">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
        }
        {/*<Card.Header className="bg-white">
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link eventKey="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#link">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>*/}
      </Card>
    </Container>
  );
};

export default WeatherCard;
