import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import PropTypes from 'prop-types';
import style from './WeatherList.css';

class WeatherList extends Component {

  render() {
    const { data } = this.props;
    const isFetched = Object.keys(data).length !== 0;
    let list = [];

    // Render when data is fetched, spinner otherwise
    if (!isFetched) {
      return (
        <div className={style.loadSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
    } else {
      const length = data.list.length;

      // Iterate over weather data
      for (let i = 0; i < length; i++) {
        // Compare days
        let day = data.list[i].dt_txt.split(' ')[0].split('-')[2];
        let prevDay = i > 0 ? data.list[i - 1].dt_txt.split(' ')[0].split('-')[2]: day;
        
        // Dislay current weather and next days at 12:00 (i.e., data.list[i + 4])
        if (i === 0 || (data.list[i + 4] && day !== prevDay)) {
          const info = i === 0 ? data.list[i] : data.list[i + 4];
          const tempMax = Math.round(info.main.temp_max);
          const tempMin = Math.round(info.main.temp_min);
          const weather = info.weather[0].main;
          const day = new Date(info.dt_txt).toString().split(' ')[0];
  
          list.push(
            <WeatherCard 
              key={i}
              day={day} 
              tempMax={tempMax} 
              tempMin={tempMin}
              weather={weather} 
            />
          );
        }
      }

      return (
        <div>
          {list}
        </div>
      )
    }
  }
}

WeatherList.propTypes = {
  data: PropTypes.object.isRequired
}

export default WeatherList;