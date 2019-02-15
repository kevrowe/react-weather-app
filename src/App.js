import React, { Component } from 'react';
import './App.css';
import Day from './components/Day';
import { getWeather, getWeatherByDay } from './weather/client';
import { getMonthName, getDayWithSuffix } from './utils/date';

class App extends Component {
  constructor(props) {
    super(props);

    getWeather('London, UK').then(data => {
      this.setState({
        city: data.city,
        weather: getWeatherByDay(data.list),
      });
    });
  }
  render() {
    if (!this.state) return null;
    const { city, weather } = this.state;
    const days = [];

    for (const key of Object.keys(weather)) {
      const data = weather[key];
      const day = weather[key][Object.keys(weather[key])[0]];
      const date = new Date(day.dt_txt);
      const textDate = `${date.toDateString().split(' ')[0]} ${getDayWithSuffix(date)} ${getMonthName(date)}`;

      days.push(<Day key={day.dt} date={textDate} data={data} />);
    }

    return (
      <div className="App">
        <h1>
          {city.name}, {city.country}
        </h1>
        {days}
      </div>
    );
  }
}

export default App;
