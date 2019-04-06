import { getDaySummary } from './weather';

const mockData = {
  time: '09:00:00',
  timestamp: 1234567223,
  temperature: {
    main: 15,
    min: 13,
    max: 15,
  },
  humidity: 60,
  icon: 'potato',
  description: 'Potatoes in the sky',
  wind: {},
};

const mockHours = [
  {
    time: '09:00:00',
    timestamp: 1234567223,
    temperature: {
      main: 15,
      min: 13,
      max: 15,
    },
    humidity: 74,
    icon: 'potato',
    description: 'Potatoes in the sky',
    pressure: 700.1,
    wind: {},
  },
  {
    time: '12:00:00',
    timestamp: 1234567225,
    temperature: {
      main: 25,
      min: 19,
      max: 25,
    },
    humidity: 60,
    icon: 'something else',
    description: 'UFO in the sky',
    pressure: 1004.6,
    wind: {},
  },
];

describe('Weather helper', () => {
  describe('getDaySummary', () => {
    it('should return the max temperature for a day', () => {
      const result = getDaySummary(mockHours);

      expect(result.temperature.main).toBe(20);
      expect(result.temperature.max).toBe(25);
      expect(result.temperature.min).toBe(13);
      expect(result.humidity).toBe(67);
      expect(result.pressure).toBe(852.35);
    });
  });
});
