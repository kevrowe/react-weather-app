import React from 'react';
import WeatherIcon from './WeatherIcon';
import './Hour.css';

export default ({ data }) => {
  const { temperature, icon, description, time } = data;

  return (
    <div className="hour">
      <p>{time.replace(/:\d+$/, '')}</p>
      <WeatherIcon icon={icon} alt={description} title={description} />
      <p>{parseInt(temperature.main)}&deg;</p>
    </div>
  );
};
