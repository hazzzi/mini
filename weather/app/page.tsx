import { headers } from 'next/headers';
import { fetchWeather } from './fetch';

const weatherEmojis = {
  Thunderstorm: '⛈️',
  Drizzle: '🌧️',
  Rain: '🌧️',
  Snow: '❄️',
  Atmosphere: '🌫️',
  Clear: '☀️',
  Clouds: '☁️',
};

const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

export default async function Home() {
  const header = headers();
  const latitude = header.get('x-latitude') || '37.129';
  const longitude = header.get('x-longitude') || '127.123';

  const searchParams = new URLSearchParams();
  searchParams.set('lat', latitude.toString());
  searchParams.set('lon', longitude.toString());
  searchParams.set('appid', process.env.OPENWEATHERMAP_API_KEY ?? '');

  const weather = await fetchWeather(searchParams.toString());

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
