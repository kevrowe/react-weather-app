import React from 'react';

import './DaySummary.css';

export default ({ date, temperature, humidity, pressure, description }) => (
  <div className="day-summary">
    <h2 className="day-summary__min">{date}</h2>
    <div className="day-summary__min">Low {temperature.min}&deg;</div>
    <div className="day-summary__max">High {temperature.max}&deg;</div>
    <div className="day-summary__humidity">Humidity {humidity}%</div>
    <div className="day-summary__pressure">Pressure {pressure} bar</div>
    <div className="day-summary__description">{description}</div>
  </div>
);
