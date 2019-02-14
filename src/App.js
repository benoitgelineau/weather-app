import React, { Component } from 'react';
import WeatherList from './Components/WeatherList/WeatherList';
import style from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coord: {
        lat: '',
        lon: '',
      },
      data: {},
      prevView: 0,
      expanded: false,
      error: false,
      errMessage: '',
    };

    this.getCoordinates = this.getCoordinates.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCoordinates();
  }

  getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          coord: {
            lat: pos.coords.latitude.toFixed(4),
            lon: pos.coords.longitude.toFixed(4),
          },
        }, this.fetchData());
      }, (error) => {
        console.warn(error);
        this.setState({
          error: true,
          errMessage: 'Could not access geolocation',
        });
      }, { timeout: 10000 });
    }
  }

  fetchData() {
    const { coord: { lat, lon } } = this.state;
    const url = `http://api.openweathermap.org/data/2.5/forecast?APPID=${process.env.API_KEY}&lat=${lat}&lon=${lon}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(error => console.warn(error));
  }

  handleClick(el) {
    this.setState(({ prevView, expanded }) => ({
      prevView: el,
      // expanded: el !== prevState.prevView ? (prevState.expanded ? prevState.expanded : !prevState.expanded) : !prevState.expanded,
      expanded: el !== prevView ? (expanded ? expanded : !expanded) : !expanded,
    }));
  }

  render() {
    const { error, errMessage, data, prevView, expanded } = this.state;
    let display;

    if (error) {
      display = <h1>{errMessage}</h1>;
    } else {
      display = (
        <WeatherList
          data={data}
          prevView={prevView}
          expanded={expanded}
          onClick={this.handleClick}
        />
      );
    }

    return (
      <div className={style.App}>
        {display}
      </div>
    );
  }
}

export default App;
