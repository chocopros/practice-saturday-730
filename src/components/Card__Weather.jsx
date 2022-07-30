import React from 'react'
import { useEffect, useState } from 'react'

const Card__Weather = ({coords}) => {
    console.log(coords.lat)
    console.log(coords.lon)
    const lat =coords.lat
    const lon =coords.lon
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat${lat}&lon${lon}&appid=${APIkey}`
    const APIkey= '33362d39e5912619c9553d5b0a209cab'
  

  return (
    <div>Card__Weather</div>
  )
}

export default Card__Weather