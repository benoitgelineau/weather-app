import React from 'react';
import PropTypes from 'prop-types';
import style from './WeatherIcon.css';

const WeatherIcon = props => {

  switch (props.weather) {
    case "Clear":
      return <div className={style.weatherIcon}><div className={style.sun}><div className={style.rays}></div></div></div>;
    case "Clouds":
      return <div className={style.weatherIcon}><div className={style.cloud}></div><div className={style.cloud}></div></div>;
    case "Drizzle":
      return <div className={style.weatherIcon}><div className={style.cloud}></div><div className={style.sun}><div className={style.rays}></div></div><div className={style.rain}></div></div>;
    case "Rain":
      return <div className={style.weatherIcon}><div className={style.cloud}></div><div className={style.rain}></div></div>;
    case "Snow":
      return <div className={style.weatherIcon}><div className={style.cloud}></div><div className={style.snow}><div className={style.flake}></div><div className={style.flake}></div></div></div>;
    case "Thunderstorm":
      return <div className={style.weatherIcon}><div className={style.cloud}></div><div className={style.lightning}><div className={style.bolt}></div><div className={style.bolt}></div></div></div>;
    default:
      return <div className={style.weatherIcon}><div className={style.cloud}></div><div className={style.cloud}></div></div>;
  }
}

WeatherIcon.propTypes = {
  weather: PropTypes.string.isRequired
}

export default WeatherIcon;