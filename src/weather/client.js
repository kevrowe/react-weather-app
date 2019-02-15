import 'isomorphic-fetch';

const apiKey = '87d5e78a8cc77b0abf1fee2b69544b32';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

const urls = {
  fiveDayForecase: query => `${baseUrl}/forecast?appid=${apiKey}&units=metric&q=${query}`,
};

export const result = async promise => {
  try {
    const value = await promise;
    return [, value];
  } catch (e) {
    return [e];
  }
};

export const getWeather = async location => {
  let [err, data] = await result(fetch(urls.fiveDayForecase(location)));

  if (err) {
    return err;
  }

  let [parseError, parsedData] = await result(data.json());

  if (parseError) {
    return parseError;
  }

  return parsedData;
};

export const getWeatherByDay = data => {
  const response = {};

  for (let entry of data) {
    const [dateKey, timeKey] = entry.dt_txt.split(' ');

    response[dateKey] = { ...response[dateKey], [timeKey]: entry };
  }

  return response;
};
