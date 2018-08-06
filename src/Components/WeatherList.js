import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class WeatherList extends Component {

  render() {
    const { data } = this.props;
    
    let list = [];
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    
    if (Object.keys(data).length !== 0) {
      const tempMax = Math.round(data.list[0].main.temp_max);
      const tempMin = Math.round(data.list[0].main.temp_min);
      const weather = data.list[0].weather[0].main;
      
      for (let i = 0; i < 5; i++) {
        list.push(
          <WeatherCard 
            key={i}
            day={weekDays[i]} 
            tempMax={tempMax} 
            tempMin={tempMin}
            weather = {weather} 
          />
        );
      }
    }

    return (
      <div className="weather-list">
        {list}
      </div>
    )
  }
}

export default WeatherList;