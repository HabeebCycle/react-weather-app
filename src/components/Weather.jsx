import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="weather-box">
      <div className="details">
        <div className="temp">{Math.round(weather.main.temp)}&deg;C</div>
        <p className="feels">
          Feels Like {Math.round(weather.main.feels_like)}&deg;C
        </p>
        <div className="maxmin">
          <p>&#8593; &nbsp;{Math.round(weather.main.temp_max)}&deg;C</p>
          <p>&#8595; &nbsp;{Math.round(weather.main.temp_min)}&deg;C</p>
        </div>
      </div>
      <div className="desc">
        <div className="weather">{weather.weather[0].main}</div>
        <div>{weather.weather[0].description}</div>
      </div>
    </div>
  );
};

export default Weather;
