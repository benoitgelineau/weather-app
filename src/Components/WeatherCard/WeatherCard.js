import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import PropTypes from 'prop-types';
import style from './WeatherCard.css';

const WeatherCard = props => {
  return (
    <div className={style.weatherCard}>
      <p>{props.day}</p>
      <WeatherIcon key={props.day} weather={props.weather}/>
      <p><strong>{props.tempMax}&#8451;</strong> {props.tempMin}&#8451;</p>
    </div>
  );
}

WeatherCard.propTypes = {
  day: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
}

export default WeatherCard;