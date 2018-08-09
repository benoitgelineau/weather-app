import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import PropTypes from 'prop-types';
import style from './WeatherList.css';

class WeatherList extends Component {

  render() {
    const { data, prevView, expanded, onClick } = this.props;
    const isFetched = Object.keys(data).length !== 0;
    let cards = [];

    /* Render when data is fetched, spinner otherwise */
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
      const { list } = data;
      const length = list.length;
      let hourlyData = [];
      let currentView;

      /** Iterate over weather data */
      for (let i = 0; i < length; i++) {
        const day = list[i].dt_txt.split(' ')[0].split('-')[2];
        const prevDay = i > 0 ? list[i - 1].dt_txt.split(' ')[0].split('-')[2] : day;
        
        /** Initialize current View to current time of today */
        if (i === 0) {
          currentView = list[0].dt;
        }

        if (day === prevDay) {
          hourlyData.push(list[i]);
        } else { 

          cards.push(
            <WeatherCard 
              key={currentView}
              data={hourlyData}
              currentView={currentView}
              prevView={prevView}
              expanded={expanded}
              onClick={onClick}
            />
          );

          hourlyData = [];
          hourlyData.push(list[i]);
          /** Set current View to 12:00 of the next days if exists */
          currentView = list[i + 4] ? list[i + 4].dt : list[i].dt;
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