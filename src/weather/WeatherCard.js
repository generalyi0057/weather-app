import { useState, useEffect } from 'react';

import { getWeather, getMyWeather, weathercodeList } from "./api";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import "./WeatherCard.sass";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("");
  const [weathercode, setWeathercode] = useState("");

  useEffect(() => {
    const myWeather = getMyWeather();
    myWeather.then(res => {
      console.log(res);
      setCity(res.location.city);
      setTemperature(res.weather.current_weather.temperature);
      setTemperatureUnit("C");
      setWeathercode(res.weather.current_weather.weathercode)
    });

  });

  return (
    <Container>
      <Card className="weather-card">
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>
            {temperature}°{temperatureUnit}
          </Card.Text>
          <Card.Text>
            {weathercodeList[weathercode]}
          </Card.Text>
        </Card.Body>
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
