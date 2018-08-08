import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import PropTypes from 'prop-types';
import style from './WeatherCard.css';

const WeatherCard = props => {
  return (
    <div className={style.weatherCard}>
      <div onClick={() => props.onClick(props.currentView)}>
        <p>{props.day}</p>
        <WeatherIcon key={props.day} weather={props.weather}/>
        <p><strong>{props.tempMax}&#8451;</strong> {props.tempMin}&#8451;</p>
      </div>

      {props.currentView === props.prevView && props.expanded &&
        <div className={style.detail}>
          <ul>
            <li>Test</li>
          </ul>
        </div>
      }
    </div>
  );
}

WeatherCard.propTypes = {
  day: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  currentView: PropTypes.number.isRequired,
  prevView: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default WeatherCard;