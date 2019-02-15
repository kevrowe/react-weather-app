import React from 'react';
import Hour from './Hour';
import './Day.css';

export default ({ date, temp, data, ...restProps }) => (
  <div className="day">
    <h2>{date}</h2>
    <div className="time-panel">
      {Object.keys(data).map(time => {
        const weather = data[time];
        return <Hour key={time} weather={weather} time={time} />;
      })}
    </div>
  </div>
);
