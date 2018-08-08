import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import PropTypes from 'prop-types';
import style from './WeatherList.css';

class WeatherList extends Component {

  render() {
    const { data, prevView, expanded, onClick } = this.props;
    const { list } = data;
    const isFetched = Object.keys(data).length !== 0;
    let cards = [];

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
      const length = list.length;
      let count = 0;

      // Iterate over weather data
      for (let i = 0; i < length; i++) {
        // Compare days
        let day = list[i].dt_txt.split(' ')[0].split('-')[2];
        let prevDay = i > 0 ? list[i - 1].dt_txt.split(' ')[0].split('-')[2] : day;
        
        // Dislay current weather and next days at 12:00 (i.e., data.list[i + 4])
        if (i === 0 || (list[i + 4] && day !== prevDay)) {
          const info = i === 0 ? list[i] : list[i + 4];
          const tempMax = Math.round(info.main.temp_max);
          const tempMin = Math.round(info.main.temp_min);
          const weather = info.weather[0].main;
          const dayString = new Date(info.dt_txt).toString().split(' ')[0];
          const currentView = info.dt;

          /** GET HOURLY DATA */
          // const hoursLeft = i - count;
          // let hourlyData = [];

          // for (let j = 0; j < hoursLeft; j++) {
          //   if (list[i + j]) {
          //     hourlyData.push(list[i + j])
          //   }
          // }
          // console.log(hourlyData);
          // console.log(`index: ${i}, count: ${count}`);
  
          cards.push(
            <WeatherCard 
              key={i}
              day={dayString} 
              tempMax={tempMax} 
              tempMin={tempMin}
              weather={weather} 
              currentView={currentView}
              prevView={prevView}
              expanded={expanded}
              onClick={onClick}
            />
          );
          count = i;
        }
      }

      return (
        <div>
          <h1>{data.city.name}</h1>
          {cards}
        </div>
      )
    }
  }
}

WeatherList.propTypes = {
  data: PropTypes.object.isRequired,
  prevView: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default WeatherList;