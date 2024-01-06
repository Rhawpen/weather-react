import axios from "axios";
import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Forecast.css"

export default function Forecast({coordinate}){
  const [loaded, setLoaded] = useState(false)
  const [forecastData, setForecastData] = useState(null)

  function showForecast (response){
    setLoaded(true)
    setForecastData(response.data.daily);
  }
  useEffect(()=>{
    setLoaded(false)
  },[coordinate])
  
  if(loaded){
    return (
      <div className="Forecast">
       <div className="row">
         {forecastData.map(function (dailyForecast, index) {
          if(index < 5){
             return (
               <div className="col" key={index}>
                 <WeatherForecastDay forecast={dailyForecast} size={32}/>
               </div>
             );
          }
         })}
       </div>
     </div>
   );
}

  else{
    const apiKey = "ff304a92t9c244dc46fb12f2cefo3e03";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinate.longitude}&lat=${coordinate.latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast)
    return null
  }
}