import React from 'react';
import style from './WeatherDetail.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import PropTypes from 'prop-types';

const WeatherDetail = ({ data }) => {

  const detail = data.map(info => {
    const hour = info.dt_txt.split(' ')[1].slice(0, -3);
    const tempMax = Math.round(info.main.temp_max);
    const tempMin = Math.round(info.main.temp_min);
    const weather = info.weather[0].main;

    return (
      <li key={hour} className={style.detail}>
        <p className={style.hour}>{hour}</p>
        <div className={style.info}>
          <WeatherIcon weather={weather}/>
          <p><strong>{tempMax}&#8451;</strong> <span>{tempMin}&#8451;</span></p>
        </div>
      </li>
    );
  });

  return (
    <div className={style.list}>
      <ul>
        {detail}
      </ul>
    </div>
  )
}

WeatherDetail.propTypes = {
  data: PropTypes.array.isRequired
}

export default WeatherDetail;