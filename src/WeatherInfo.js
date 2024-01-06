import React from "react";
import WeatherDate from "./WeatherDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo({info}){
  return (
    <div className="Weather-info">
      <ul>
        <li>{info.city}</li>
        <li>{<WeatherDate datestamp={info.date} />}</li>
        <li className="description">{info.description}</li>
      </ul>
      <div className="row align-items-center">
        <div className="col-6 weather">
          <div className="icon">
            <WeatherIcon icon={info.icon}/>
          </div>
          <Temperature celsius={info.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {info.humidity}%</li>
            <li>Wind: {Math.round(info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}