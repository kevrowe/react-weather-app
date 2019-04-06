import React, { Component } from 'react';
import './App.css';
import Day from './components/Day';
import { getWeather } from './weather/client';
import { getMonthName, getDayWithSuffix } from './utils/date';
import { parseForecast } from './parse/weather';
import DaySummary from './components/DaySummary';
import { getDaySummary } from './utils/weather';

class App extends Component {
  constructor(props) {
    super(props);

    getWeather('London, UK').then(data => {
      this.setState({
        city: data.city,
        weather: parseForecast(data.list),
      });
    });
  }
  render() {
    if (!this.state) return null;
    const { city, weather } = this.state;
    const days = [];

    const average = getDaySummary(weather['2019-04-06']['hours']);

    for (const key of Object.keys(weather)) {
      const day = weather[key];
      const date = new Date(day.date);
      const textDate = `${date.toDateString().split(' ')[0]} ${getDayWithSuffix(date)} ${getMonthName(date)}`;

      days.push(<Day key={day.id} date={textDate} hours={day.hours} />);
    }

    return (
      <div className="App">
        <h1>Summary</h1>
        <DaySummary {...average} date="6th April" />
        <h1>
          {city.name}, {city.country}
        </h1>
        {days}
      </div>
    );
  }
}

export default App;
