import React from 'react';
import style from './WeatherDetail.css';
import PropTypes from 'prop-types';

const WeatherDetail = ({ data }) => {

  const detail = data.map(info => {
    const hour = info.dt_txt.split(' ')[1].slice(0, -3);
    const tempMax = Math.round(info.main.temp_max);
    const tempMin = Math.round(info.main.temp_min);
    
    return (
      <li key={hour}>
        <div>
          <p>{hour}</p>
          <p><strong>{tempMax}&#8451;</strong> {tempMin}&#8451;</p>
        </div>
      </li>
    );
  });

  return (
    <div className={style.detail}>
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