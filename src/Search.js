import React from "react";

import "./App.css";


export default function Search(){
    let form = (
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
        />
        <input type="submit" value="Search" />
      </form>
    );
    return (
      <div>
        {form}
        <ul>
          <li className="time">4:44 PM</li>
          <li className="city">Lagos</li>
          <li id="city" class="city"></li>
          <li>Temperature: 32°C</li>
          <li>Description: Few clouds</li>
          <li>Humidity: 44%</li>
          <li>Wind: 4km/h</li>
          <li>⛅</li>
        </ul>
      </div>
    );
    
}