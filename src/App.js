import React, { Component } from 'react';
import style from './App.css';
import WeatherList from './Components/WeatherList/WeatherList';
import API_KEY from './secrets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: '48.8566',
      lon: '2.3522',
      data: {}
    }
  }

  getCoordinates() {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.setState({
          lat: pos.coords.latitude.toFixed(4),
          lon: pos.coords.longitude.toFixed(4)
        })
      })
    }
  }

  fetchData() {
    let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}&lat=${this.state.lat}&lon=${this.state.lon}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getCoordinates();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lat !== prevState.lat || this.state.lon !== prevState.lon) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className={style.App}>
        <WeatherList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
