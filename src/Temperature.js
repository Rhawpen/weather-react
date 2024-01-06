import React, {useState} from "react";

export default function Temperature({celsius}){
  return (
    <div className="temp">
      <span className="temperature">{Math.round(celsius)}</span>
      <span className="unit">
          °C
      </span>
    </div>
  );
}