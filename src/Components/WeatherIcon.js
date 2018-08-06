import React from 'react';

const WeatherIcon = props => {
  // let style;

  switch (props.weather) {
    case "Clear":
      return <div className="weather-icon"><div className="sun"><div className="rays"></div></div></div>;
    case "Clouds":
      return <div className="weather-icon"><div className="cloud"></div><div className="cloud"></div></div>;
    case "Drizzle":
      return <div className="weather-icon"><div className="cloud"></div><div className="sun"><div className="rays"></div></div><div className="rain"></div></div>;
    case "Rain":
      return <div className="weather-icon"><div className="cloud"></div><div className="rain"></div></div>;
    case "Snow":
      return <div className="weather-icon"><div className="cloud"></div><div className="snow"><div className="flake"></div><div className="flake"></div></div></div>;
    case "Thunderstorm":
      return <div className="weather-icon"><div className="cloud"></div><div className="lightning"><div className="bolt"></div><div className="bolt"></div></div></div>;
  }
}

export default WeatherIcon;