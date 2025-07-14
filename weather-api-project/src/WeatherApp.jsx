import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherinfo, setWeatherinfo] = useState({
    city: "Amritsar",
    feelsLike: 24.9,
    temp: 25.4,
    MinTemp: 24,
    MaxTemp: 26,
    humidity: 46,
    weather: "cloudy",
  });
  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App </h1>
      <Searchbox search={updateInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}
