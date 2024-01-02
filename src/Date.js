import React from "react"

export default function Date({datestamp}){
  // console.log(props.datestamp)
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
  // let day = daysOfWeek[datestamp.getDay()]
  // console.log(day)

  return(
    <div>{datestamp}</div>
  )
}