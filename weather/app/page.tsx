const weatherEmojis = {
  thunderstorm: '⛈️',
  drizzle: '🌧️',
  rain: '🌧️',
  snow: '❄️',
  atmosphere: '🌫️',
  clear: '☀️',
  clouds: '☁️',
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-3">
      <p className="text-5xl">{weatherEmojis['clear']}</p>
      <h1 className="flex font-bold">
        <span className="text-8xl">19</span>
        <span className="text-xl">°C</span>
      </h1>
      <p className="text-xl">리스본</p>
    </main>
  );
}
