const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';

type Weather = {
  name: string;
  weather: Array<{
    main:
      | 'Thunderstorm'
      | 'Drizzle'
      | 'Rain'
      | 'Snow'
      | 'Atmosphere'
      | 'Clear'
      | 'Clouds';
  }>;
  main: {
    temp: number;
  };
};

export const fetchWeather = async (searchParams: string) => {
  const weather: Weather = await fetch(`${API_WEATHER}?${searchParams}`, {
    cache: 'no-store',
  }).then((res) => res.json());

  return weather;
};
