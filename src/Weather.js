import React, {useState} from "react";
import axios from "axios"
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./App.css"

export default function Weather({defaultCity}){
  const [weather, setWeather] = useState({ready: false})
  const [city, setCity]= useState(defaultCity)

  function showWeather(response){
    setWeather({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates
    });
  }

  function search(){
    let apiKey = "ff304a92t9c244dc46fb12f2cefo3e03";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleForm(event){
    event.preventDefault()
    search(city)
  }
  function getInput(event){
    setCity(event.target.value);

  }

  if(weather.ready){
    return (
      <div className="Search">
        <div className="main-container">
          <form className="" onSubmit={handleForm}>
            <input
              type="text"
              placeholder="Enter a city..."
              autoFocus={true}
              onChange={getInput}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
          <WeatherInfo info={weather} />
          <Forecast coordinate={weather.coordinates}/>
        </div>
      </div>
    );
 }else{
  search()
   return "Loading...";
 }
}