import React, {useState} from "react";

export default function Temperature({celsius}){
  const [temperature, setTemperature] = useState(celsius)
  // console.log(celsius)

  function showCelsius(event){
    event.preventDefault();
    setTemperature(celsius)
  }
  function showFahrenheit(event){
    event.preventDefault();
    event.target.className = "units";
    setTemperature((celsius * 9 / 5) + 32);
  }
  return (
    <div className="temp">
      <span className="temperature">{Math.round(temperature)}</span>
      <span className="unit">
        <a href="#" className="units" onClick={showCelsius}>
          °C
        </a>{" "}
        |
        <a href="#" className="active" onClick={showFahrenheit}>
          {" "}
          °F
        </a>
      </span>
    </div>
  );
}