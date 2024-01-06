import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({forecast}){
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  function forecastDate(){
    let day = new Date(forecast.time * 1000).getDay();
    return days[day]
  }
  function minTemperature(){
    return Math.round(forecast.temperature.minimum);
  }
  function maxTemperature(){
    return Math.round(forecast.temperature.maximum);
  }

  return (
    <div>
      <div className="Forecast-day">{forecastDate()}</div>
      <div>
        <WeatherIcon icon={forecast.condition.icon} size={36} />
      </div>
      <span className="Forecast-min">{minTemperature()}°</span>
      <span className="Forecast-max">{maxTemperature()}°</span>
    </div>
  );
}