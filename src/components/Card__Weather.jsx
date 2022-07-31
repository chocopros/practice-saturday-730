import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'



const Card__Weather = ({coords}) => {
    //console.log(coords.lat)
    //console.log(coords.lon)
    const [weather, setWeather] = useState()

    useEffect (() =>{
        if (coords?.lat){
            const APIkey= '33362d39e5912619c9553d5b0a209cab'            
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIkey}`
            axios.get(URL)
                .then(res => setWeather(res.data) )
                .catch(err => console.log(err))
        }

    },[coords?.lon, coords?.lat])

    console.log(weather)
  return (
    <div className="card">
      <div className="card__body">
        <div className="body__img">
          <div className='card__img'></div>
          <div className='card__grados'><h2>17.97°C</h2></div>
        </div>
        <div className="card__info">
          <h2>Today</h2>
          <h1>Republica of Venezuela</h1>
          <ul>
            <li><span>Wind Speed: </span>5.14 m/s</li>
            <li><span>Clouds: </span>40%</li>
            <li><span>Preasure: </span>40mb</li>
          </ul>
          <button className='card__btn'>Degrees°F/°C</button>
        </div>
      </div>
    </div>
  )
}

export default Card__Weather