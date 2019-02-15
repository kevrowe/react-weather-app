import React from 'react';
import WeatherIcon from './WeatherIcon';
import './Hour.css';

export default ({ time, weather }) => {
  const { main } = weather;
  const system = weather.weather[0];

  return (
    <div className="hour">
      <p>{time.replace(/:\d+$/, '')}</p>
      <WeatherIcon icon={system.icon} alt={system.description} title={system.description} />
      <p>{parseInt(main.temp)}&deg;</p>
    </div>
  );
};
