import React from "react"

export default function CurrentDate({datestamp}){
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysOfWeek[datestamp.getDay()];
  let hour = datestamp.getHours()
  let minute = datestamp.getMinutes();
  let dayTime = "AM"
  
  if (hour > 12 && hour <= 23) {
    hour = `${hour - 12}`;
    dayTime = "PM";
  }
  if (hour === 24) {
    hour = `00`;
  }
  if (hour === 12) {
    hour = hour;
    dayTime = "PM";
  }
  if(minute < 10){
  minute = `0${minute}`
  }

  return (
    <div>
      {day} {hour}:{minute} {dayTime}
    </div>
  );
}