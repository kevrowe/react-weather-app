import React from 'react';
import Hour from './Hour';
import './Day.css';

export default ({ date, hours, ...restProps }) => (
  <div className="day" {...restProps}>
    <h2>{date}</h2>
    <div className="time-panel">
      {hours.map(hourWeather => {
        return <Hour key={hourWeather.timestamp} data={hourWeather} />;
      })}
    </div>
  </div>
);
