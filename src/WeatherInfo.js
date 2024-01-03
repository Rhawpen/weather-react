import React from "react";
import WeatherDate from "./WeatherDate";
import Temperature from "./Temperature";


export default function WeatherInfo({info}){
  return (
    <div>
      <ul>
        <li>{info.city}</li>
        <li>{<WeatherDate datestamp={info.date} />}</li>
        <li className="description">{info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 weather">
          <div className="icon">
            <img src={info.iconUrl} alt={info.description} />
          </div>
          <Temperature celsius={info.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {info.humidity}%</li>
            <li>Wind: {Math.round(info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}