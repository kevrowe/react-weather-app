export const getDaySummary = hours => {
  return {
    temperature: {
      main: hours.reduce((m, c) => m + c.temperature.main, 0) / hours.length,
      min: hours.reduce((m, c) => (c.temperature.min < m ? c.temperature.min : m), hours[0].temperature.min),
      max: hours.reduce((m, c) => (c.temperature.max > m ? c.temperature.max : m), hours[0].temperature.max),
    },
    humidity: hours.reduce((m, c) => m + c.humidity, 0) / hours.length,
    pressure: hours.reduce((m, c) => m + c.pressure, 0) / hours.length,
  };
};
