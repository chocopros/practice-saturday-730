import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'



const Card__Weather = ({coords}) => {
    //console.log(coords.lat)
    //console.log(coords.lon)
    const [weather, setWeather] = useState()
    const [temperture, setTemperture] = useState()
    const [isCelcius, setIsCelcius] = useState(true)

    useEffect (() =>{
        if (coords?.lat){
            const APIkey= '33362d39e5912619c9553d5b0a209cab'            
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIkey}`
            axios.get(URL)
                .then(res => {
                  setWeather(res.data)
                  const temp = {
                    celcius: `${res.data.main.tem - 273.15} °C`,
                    farenheit:`${(res.data.main.tem - 273.15) * 9 / 5 + 32} °F`
                  }
                  setTemperture(temp) 
                })
                .catch(err => console.log(err))
        }},[coords?.lon, coords?.lat])

    console.log(weather)
  return (
    <div className="card">
      <div className="card__body">
        <div className="body__img">
          <div className='card__img'>
            <img src={ weather &&  `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          </div>
          <div className='card__grados'><h2>{isCelcius ? temperture?.celcius : temperture?.farenheit}</h2></div>
        </div>
        <div className="card__info">
          <h2>Today</h2>
          <h1>{weather?.name}, {weather?.sys.country}</h1>
          <ul>
            <li><span>Wind Speed: </span>{weather?.wind.speed} m/s</li>
            <li><span>Clouds: </span>{weather?.clouds.all}%</li>
            <li><span>Preasure: </span>{weather?.main.pressure} hPa</li>
          </ul>
          <button className='card__btn'>Degrees°F/°C</button>
        </div>
      </div>
    </div>
  )
}

export default Card__Weather