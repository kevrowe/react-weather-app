import { result, getWeatherByDay } from "./client";

const mockResponse = {
  cod: "200",
  message: 0.0032,
  cnt: 36,
  list: [
    {
      dt: 1487246400,
      main: {
        temp: 286.67,
        temp_min: 281.556,
        temp_max: 286.67,
        pressure: 972.73,
        sea_level: 1046.46,
        grnd_level: 972.73,
        humidity: 75,
        temp_kf: 5.11
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.81, deg: 247.501 },
      sys: { pod: "d" },
      dt_txt: "2017-02-16 12:00:00"
    },
    {
      dt: 1487246400,
      main: {
        temp: 286.67,
        temp_min: 281.556,
        temp_max: 286.67,
        pressure: 972.73,
        sea_level: 1046.46,
        grnd_level: 972.73,
        humidity: 75,
        temp_kf: 5.11
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.81, deg: 247.501 },
      sys: { pod: "d" },
      dt_txt: "2017-02-16 15:00:00"
    }
  ],
  city: {
    id: 6940463,
    name: "Altstadt",
    coord: { lat: 48.137, lon: 11.5752 },
    country: "none"
  }
};

describe("client", () => {
  describe("getWeatherByDay", () => {
    it("returns weather elements mapped to date and time", () => {
      const dataByDay = getWeatherByDay(mockResponse.list);

      expect(dataByDay).toHaveProperty("2017-02-16.15:00:00.dt", 1487246400);
      expect(dataByDay).toHaveProperty("2017-02-16.12:00:00.dt", 1487246400);
    });
  });
  describe("result", () => {
    it("returns a successful result on resolve", async () => {
      const value = await result(
        new Promise((res, rej) => {
          res(4);
        })
      );

      expect(value).toEqual([, 4]);
    });
    it("returns an error in first position on reject", async () => {
      const mockError = new Error("failed request");
      const value = await result(
        new Promise((res, rej) => {
          rej(mockError);
        })
      );

      expect(value).toEqual([mockError]);
    });
  });
});
