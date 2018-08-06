import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherCard = props => {
  return (
    <div className="weather-card">
      <p>{props.day}</p>
      <WeatherIcon key={props.day} weather={props.weather}/>
      <p><strong>{props.tempMax}&#8451;</strong> {props.tempMin}&#8451;</p>
    </div>
  );
}

export default WeatherCard;