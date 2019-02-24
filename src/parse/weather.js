export const parseHour = hour => ({
  time: hour.dt_txt.split(' ')[1],
  timestamp: hour.dt,
  temperature: hour.main.temp,
  humidity: hour.main.humidity,
  icon: hour.weather[0].icon,
  description: hour.weather[0].description,
  wind: hour.wind,
});

export const parseForecast = data => {
  const response = {};

  for (let entry of data) {
    const dateKey = entry.dt_txt.split(' ')[0];

    response[dateKey] = response[dateKey] || { hours: [] };
    response[dateKey].hours.push(parseHour(entry));
    response[dateKey].date = response[dateKey].date || entry.dt_txt;
    response[dateKey].id = response[dateKey].id || entry.dt;
  }

  return response;
};
