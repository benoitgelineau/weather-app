import React, { Component } from 'react';
import style from './App.css';
import WeatherList from './Components/WeatherList/WeatherList';
import API_KEY from './secrets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coord: {
        lat: '',
        lon: ''
      },
      data: {},
      prevView: 0,
      expanded: false,
      error: false,
      errMessage: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  getCoordinates() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(pos => {
        this.setState({
          coord: {
            lat: pos.coords.latitude.toFixed(4),
            lon: pos.coords.longitude.toFixed(4)
          }
        });
        this.fetchData();
      }, error => {
        console.warn(error);
        this.setState({
          error: true,
          errMessage: 'Could not access geolocation'
        })
      })
    }
  }

  fetchData() {
    const { lat, lon } = this.state.coord;
    const url = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(error => console.warn(error))
  }
  
  handleClick(el) {
    this.setState(prevState => ({
      prevView: el,
      expanded: el !== prevState.prevView ? (prevState.expanded ? prevState.expanded : !prevState.expanded) : !prevState.expanded
    }))
  }

  componentDidMount() {
    this.getCoordinates();
  }

  render() {
    const { error, errMessage, data, prevView, expanded } = this.state;
    let display;

    if (error) {
      display = <h1>{errMessage}</h1>;
    } else {
      display = 
        <WeatherList 
          data={data} 
          prevView={prevView}
          expanded={expanded}
          onClick={this.handleClick}
        />
    }

    return (
      <div className={style.App}>
        {display}
      </div>
    );
  }
}

export default App;
