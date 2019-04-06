import { parseHour, parseForecast } from './weather';

const mockHourInput = {
  dt_txt: '2018-01-12 09:00:00',
  dt: 1234567223,
  main: {
    temp: 12,
    temp_min: 10,
    temp_max: 12,
    humidity: 90,
    pressure: 1000,
  },
  weather: [
    {
      icon: 'potato',
      description: 'Potatoes in the sky',
    },
  ],
  wind: {},
};

const mockForecastInput = [
  mockHourInput,
  {
    ...mockHourInput,
    dt_txt: '2018-01-12 12:00:00',
    main: { temp: 14, temp_min: 12, temp_max: 14, humidity: 80, pressure: 1000 },
  },
];

describe('Weather parser', () => {
  describe('parseHour', () => {
    it('should return an hour in the correct format', () => {
      const result = parseHour(mockHourInput);

      expect(result).toMatchObject({
        time: mockHourInput.dt_txt.split(' ')[1],
        timestamp: mockHourInput.dt,
        temperature: {
          main: mockHourInput.main.temp,
          min: mockHourInput.main.temp_min,
          max: mockHourInput.main.temp_max,
        },
        humidity: mockHourInput.main.humidity,
        pressure: mockHourInput.main.pressure,
        icon: mockHourInput.weather[0].icon,
        description: mockHourInput.weather[0].description,
        wind: mockHourInput.wind,
      });
    });
  });
  describe('parseForecast', () => {
    const result = parseForecast(mockForecastInput);

    expect(result).toMatchObject({
      [mockHourInput.dt_txt.split(' ')[0]]: {
        date: mockHourInput.dt_txt,
        id: mockHourInput.dt,
        hours: [
          {
            time: mockForecastInput[0].dt_txt.split(' ')[1],
            timestamp: mockForecastInput[0].dt,
            temperature: {
              main: mockForecastInput[0].main.temp,
              min: mockForecastInput[0].main.temp_min,
              max: mockForecastInput[0].main.temp_max,
            },
            pressure: mockForecastInput[0].main.pressure,
            humidity: mockForecastInput[0].main.humidity,
            icon: mockForecastInput[0].weather[0].icon,
            description: mockForecastInput[0].weather[0].description,
            wind: mockForecastInput[0].wind,
          },
          {
            time: mockForecastInput[1].dt_txt.split(' ')[1],
            timestamp: mockForecastInput[1].dt,
            temperature: {
              main: mockForecastInput[1].main.temp,
              min: mockForecastInput[1].main.temp_min,
              max: mockForecastInput[1].main.temp_max,
            },
            pressure: mockForecastInput[1].main.pressure,
            humidity: mockForecastInput[1].main.humidity,
            icon: mockForecastInput[1].weather[0].icon,
            description: mockForecastInput[1].weather[0].description,
            wind: mockForecastInput[1].wind,
          },
        ],
      },
    });
  });
});
