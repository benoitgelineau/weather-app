import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import PropTypes from 'prop-types';
import style from './WeatherCard.css';

const WeatherCard = ({ data, currentView, prevView, expanded, onClick }) => {
  
  /** Find index of corresponding day in props.data */
  const index = data.findIndex(el => el.dt === currentView);

  const info = data[index];
  const tempMax = Math.round(info.main.temp_max);
  const tempMin = Math.round(info.main.temp_min);
  const weather = info.weather[0].main;
  const dayString = new Date(data[0].dt_txt).toString().split(' ')[0];

  return (
    <div className={style.weatherCard}>
      <div className={style.weatherBox} onClick={() => onClick(currentView)}>
        <p>{dayString}</p>
        <WeatherIcon key={currentView} weather={weather}/>
        <p><strong>{tempMax}&#8451;</strong> <span>{tempMin}&#8451;</span></p>
      </div>

      {currentView === prevView && expanded && <WeatherDetail data={data}/>}
    </div>
  );
}

WeatherCard.propTypes = {
  data: PropTypes.array.isRequired,
  currentView: PropTypes.number.isRequired,
  prevView: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default WeatherCard;
