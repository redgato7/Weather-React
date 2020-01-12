import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import windy from './pics/windy.svg';
import gauge from './pics/gauge.svg';

const api = {
  key: "74e0880921fff7222c9ea2f083dd5421",
  base: "http://api.weatherstack.com/"
};

const dateFunc = data => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = days[data.getDay()];
  const date = data.getDate();
  const month = months[data.getMonth()];
  const year = data.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}current?access_key=${api.key}&query=${query}`)
        .then(data => data.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <Container>
      <main>
        <Row>
          <Col>
            <div className="search-box">
              <input
              onChange={event => setQuery(event.target.value)} 
              value={query}
              onKeyPress={search}
              type="text"
              className="search-bar"
              placeholder="Search..."
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          {(typeof weather.location != "undefined") ? (
            <div className="weather-section">
            <div className="location-box">
              <div className="location">
                {weather.location.name},
                <p>{weather.location.country}</p>
              </div>
              <hr/>
              <div className="date">
                {dateFunc(new Date())}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {weather.current.temperature}°C
              </div>
              <div>
                <img width="22px" height="22px" alt="pressure" src={gauge}/> {weather.current.pressure}hpa
              </div>
              <div>
                <img width="22px" height="22px" alt="wind" src={windy}/> {weather.current.wind_speed}km/h {weather.current.wind_dir}
              </div>
              <div className="weather">
                {weather.current.weather_descriptions[0]}
              </div>
            </div>
          </div>
          ) : (
          <div className="weather-section">
            <div className="info">
            If you are searching too much API sends false requests. Sorry for that!
            </div>
          </div>)} 
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default App;
