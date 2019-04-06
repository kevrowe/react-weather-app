import React from 'react';

export default ({ icon, ...restProps }) => <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather icon" {...restProps} />;
