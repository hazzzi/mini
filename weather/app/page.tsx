const weatherEmojis = {
  Thunderstorm: '⛈️',
  Drizzle: '🌧️',
  Rain: '🌧️',
  Snow: '❄️',
  Atmosphere: '🌫️',
  Clear: '☀️',
  Clouds: '☁️',
};

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

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

export default async function Home() {
  const latitude = 37.1289771;
  const longitude = -84.0832646;

  const searchParams = new URLSearchParams();
  searchParams.set('lat', latitude.toString());
  searchParams.set('lon', longitude.toString());
  searchParams.set('appid', process.env.OPENWEATHERMAP_API_KEY ?? '');

  const weather: Weather = await fetch(
    `${baseUrl}?${searchParams.toString()}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());

  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-3">
      <p className="text-5xl">{weatherEmojis[weather.weather[0].main]}</p>
      <h1 className="flex font-bold">
        <span className="text-8xl">{kelvinToCelsius(weather.main.temp)}</span>
        <span className="text-xl">°C</span>
      </h1>
      <p className="text-xl">{weather.name}</p>
    </main>
  );
}
