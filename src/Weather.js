import React, {useState} from "react";
import Date from "./Date";
import axios from "axios"

import "./App.css"

export default function Weather({city}){
  const [weather, setWeather]=useState({ready: false})

  function showWeather(response){
    // console.log(new Date(response.data.time * 1000))
    let data = new Date(response.data.time * 1000);
    console.log(data);
    console.log('hello')
    setWeather({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      date: "10:55 AM",
      // date: new Date(response.data.time * 1000)
    });
  }
    
  if(weather.ready){
    return (
      <div className="Search">
        <div className="main-container">
          <form>
            <input type="text" placeholder="Enter a city..." autoFocus={true} />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
          <ul>
            <li>{city}</li>
            <li><Date datestamp={weather.date} /></li>
            <li className="description">{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 weather">
              <div className="icon">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sunny-weather icon"
                  className=""
                />
              </div>
              <div className="temp">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C|°F</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
 }else{
   let apiKey = "ff304a92t9c244dc46fb12f2cefo3e03";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   console.log(apiUrl)
   axios.get(apiUrl).then(showWeather);

   return "Loading...";
 }
}