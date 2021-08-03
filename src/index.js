import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

const formatTimeUnits = units => units.map(unit => 
  unit < 10 ? `0${unit}` : unit)

const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

const getFormattedTime = () => {
  const [hours, minutes, seconds] = getTime()
  return formatTimeUnits([hours, minutes, seconds])
}

const updateClock = () => {
  const [hours, minutes, seconds] = getFormattedTime()

  const clock = (
    <div className="clock-container">
      <span className="unit">{hours}</span>|
      <span className="unit">{minutes}</span>|
      <span className="unit">{seconds}</span>      
    </div>
  )

  ReactDOM.render(clock, document.querySelector('#root'))
}

setInterval(updateClock, 1000)